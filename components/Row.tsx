import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useRef, useState } from 'react'
import { Video } from '../typings'
import Thumbnail from './Thumbnail';

interface Props {
  title: string
  videos: Video[] 
}

function Row({ title, videos, }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-24 w-screen space-y-0.5 md:pt-16 md:space-y-2">
      <h2 className="w-56 h-5 cursor-pointer text-sm font-semibold text-[#85caff] hover:text-[#51b4ff] transition duration-200 md:text-xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <BsChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {videos.map((video) => (
            <Thumbnail key={video._id} video={video}/>
          ))}
        </div>
        <BsChevronRight
          className="absolute top-0 bottom-0 right-12 md:right-24 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[#51b4ff]"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row