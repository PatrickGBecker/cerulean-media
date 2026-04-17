import { useState, useCallback, useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const total = experiences.length;

  const goTo = useCallback(
    (direction: 'prev' | 'next') => {
      if (isTransitioning || total === 0) return;
      setIsTransitioning(true);
      setActiveIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % total
          : (prev - 1 + total) % total
      );
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, total]
  );

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => goTo('next'), 6000);
  }, [goTo]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const getOffset = (index: number): number => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const visibleRange = Math.min(2, Math.floor(total / 2));

  if (total === 0) return null;

  return (
    <div
      className="h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-xl md:text-3xl font-semibold text-[#85caff] mb-8 md:mb-12 uppercase tracking-[20px]">
        Experience
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full flex-1 max-h-[65vh] flex items-center justify-center">

        {/* Left Arrow */}
        <button
          onClick={() => goTo('prev')}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-40
                     w-11 h-11 md:w-14 md:h-14 rounded-full
                     bg-[#0d1b2a]/70 hover:bg-[#34597e] backdrop-blur-sm
                     flex items-center justify-center
                     transition-all duration-200 hover:scale-110
                     border border-[#85caff]/30"
          aria-label="Previous"
        >
          <BsChevronLeft className="h-5 w-5 md:h-7 md:w-7 text-[#85caff]" />
        </button>

        {/* Carousel Track */}
        <div className="w-full h-full relative" style={{ perspective: '1200px' }}>
          {experiences.map((experience, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);

            if (absOffset > visibleRange) return null;

            const isCenter = offset === 0;
            const scale = isCenter ? 1.0 : 0.7;
            const translateX = isCenter ? 0 : offset * 38;
            const translateZ = isCenter ? 0 : -150;
            const zIndex = isCenter ? 20 : 10 - absOffset;
            const opacity = isCenter ? 1 : 0.4;

            return (
              <div
                key={experience._id}
                className="absolute top-1/2 left-1/2 transition-all duration-[600ms] ease-in-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}vw) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
              >
                <ExperienceCard experience={experience} isActive={isCenter} />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => goTo('next')}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-40
                     w-11 h-11 md:w-14 md:h-14 rounded-full
                     bg-[#0d1b2a]/70 hover:bg-[#34597e] backdrop-blur-sm
                     flex items-center justify-center
                     transition-all duration-200 hover:scale-110
                     border border-[#85caff]/30"
          aria-label="Next"
        >
          <BsChevronRight className="h-5 w-5 md:h-7 md:w-7 text-[#85caff]" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-6 md:mt-8 mb-4">
        {experiences.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 h-2.5 bg-[#85caff]'
                : 'w-2.5 h-2.5 bg-[#85caff]/25 hover:bg-[#85caff]/50'
            }`}
            aria-label={`Go to experience ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
