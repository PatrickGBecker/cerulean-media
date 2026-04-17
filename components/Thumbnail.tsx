import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { BsPlayCircle, BsXLg } from 'react-icons/bs';
import { Video } from '../typings';
import { urlFor } from '@/sanity';

interface Props {
  video: Video;
  isActive?: boolean;
}

function Thumbnail({ video, isActive = false }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Active center item: playing video
  if (isActive && isPlaying) {
    return (
      <div
        className="rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/80"
        style={{ width: '55vw', maxWidth: '900px' }}
      >
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={video?.url}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            playing
            controls
          />
        </div>
        <div className="flex items-center justify-between px-5 py-3 bg-[#0d1b2a]">
          <p className="text-sm md:text-base text-[#85caff] truncate flex-1 mr-3">
            {video?.description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
            className="p-2 rounded-full hover:bg-[#34597e] transition"
            aria-label="Close video"
          >
            <BsXLg className="h-4 w-4 text-[#85caff]" />
          </button>
        </div>
      </div>
    );
  }

  // Thumbnail card
  return (
    <div
      className="rounded-2xl overflow-hidden select-none"
      style={{ width: '55vw', maxWidth: '900px' }}
      onClick={(e) => {
        if (isActive) {
          e.stopPropagation();
          setIsPlaying(true);
        }
      }}
    >
      {/* Image container — fixed 16:9, fully filled */}
      <div
        className="relative overflow-hidden bg-[#0d1b2a]"
        style={{ paddingTop: '56.25%' }}
      >
        <img
          src={urlFor(video?.image).width(900).height(506).fit('crop').url()}
          alt={video?.description || 'Video thumbnail'}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Play overlay on active center item */}
        {isActive && (
          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer group/play">
            <BsPlayCircle className="h-14 w-14 md:h-20 md:w-20 text-white opacity-0 group-hover/play:opacity-90 transition-opacity duration-300 drop-shadow-xl" />
          </div>
        )}
      </div>

      {/* Title bar */}
      <div className="bg-[#0d1b2a] px-5 py-3">
        <p className="text-sm md:text-base text-[#85caff]/80 truncate">
          {video?.description}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
