import { useState, useRef, useCallback, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { BsChevronLeft, BsChevronRight, BsPlayCircle, BsXLg } from 'react-icons/bs';
import { Video } from '../typings';
import { urlFor } from '@/sanity';

interface Props {
  title: string;
  videos: Video[];
}

function TileGrid({ title, videos }: Props) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [activeVideo]);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === 'left' ? -el.clientWidth * 0.7 : el.clientWidth * 0.7,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 400);
  };

  if (videos.length === 0) return null;

  return (
    <div>
      <h2 className="text-base md:text-lg font-semibold text-[#85caff] mb-2 md:mb-3 text-center tracking-wide uppercase">
        {title}
      </h2>

      <div className="relative group/row">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 md:w-10 md:h-10 rounded-full
                       bg-[#0d1b2a]/80 hover:bg-[#34597e] backdrop-blur-sm
                       flex items-center justify-center
                       opacity-0 group-hover/row:opacity-100 transition-opacity duration-300
                       border border-[#85caff]/30"
            aria-label="Scroll left"
          >
            <BsChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-[#85caff]" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 md:gap-4 px-2 md:px-4 overflow-x-auto scroll-smooth
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <div
              key={video._id}
              className="flex-shrink-0 w-[200px] md:w-[230px] lg:w-[260px] rounded-xl overflow-hidden bg-[#0d1b2a] shadow-lg shadow-black/40 cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <img
                  src={urlFor(video?.image).width(400).height(225).fit('crop').url()}
                  alt={video?.description || 'Video thumbnail'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center group/tile">
                  <BsPlayCircle className="h-8 w-8 md:h-10 md:w-10 text-white opacity-0 group-hover/tile:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>
              {video?.description && (
                <div className="hidden md:block px-3 py-2">
                  <p className="text-xs text-[#85caff]/80 truncate">{video.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10
                       w-8 h-8 md:w-10 md:h-10 rounded-full
                       bg-[#0d1b2a]/80 hover:bg-[#34597e] backdrop-blur-sm
                       flex items-center justify-center
                       opacity-0 group-hover/row:opacity-100 transition-opacity duration-300
                       border border-[#85caff]/30"
            aria-label="Scroll right"
          >
            <BsChevronRight className="h-4 w-4 md:h-5 md:w-5 text-[#85caff]" />
          </button>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl rounded-2xl overflow-hidden bg-[#0d1b2a] shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full
                         bg-black/50 hover:bg-black/70 transition"
              aria-label="Close video"
            >
              <BsXLg className="h-5 w-5 text-white" />
            </button>

            {/* Video Player */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <ReactPlayer
                url={activeVideo?.url}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                playing
                controls
              />
            </div>

            {/* Description */}
            {activeVideo?.description && (
              <div className="px-5 py-4">
                <p className="text-sm md:text-base text-[#85caff]">
                  {activeVideo.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TileGrid;
