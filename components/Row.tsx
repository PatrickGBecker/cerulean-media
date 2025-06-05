import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useRef, useState } from 'react'
import { Video } from '../typings'
import Thumbnail from './Thumbnail';

interface Props {
  title: string
  videos: Video[] 
}

function Row({ title, videos }: Props) {
  

  return (
    <div className="h-24 w-screen space-y-0.5 md:pt-10">
      <h2 className="w-56 h-5 cursor-pointer text-sm font-semibold text-[#85caff] hover:text-[#51b4ff] transition duration-200 md:text-xl py-4 ml-2 md:ml-4">
        {title}
      </h2>
      
        <div
          className="flex items-center space-x-0.5 space-y-1 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-thin scrollbar-thumb-[#4a7eb3]/80 scrollbar-track-transparent"
        >
          {videos.map((video) => ( 
            <div key={video._id}>
            <Thumbnail key={video._id} video={video}/>
            </div>
          ))}
        </div>
        
      </div>
  )
}

export default Row