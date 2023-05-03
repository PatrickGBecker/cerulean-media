import React from 'react';
import { Genre, Video } from '@/typings';
import { useRecoilValue } from 'recoil';
import { modalState, videoState } from '@/atoms/modalAtom';
import Row from './Row';
import Modal from './Modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { urlFor } from '@/sanity';
import Link from 'next/link';


type Props = {
  videos: Video[];
  genres: Genre[];
  featuredGenres: Genre[];
}

function Portfolio({ videos, genres, featuredGenres }: Props) {
   const showModal = useRecoilValue(modalState)
   const video = useRecoilValue(videoState)
 
   console.log('featuredGenre ', featuredGenres)
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center justify-evenly mx-auto items-center'>
      <h3 className='hidden md:inline-flex absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl'> 
            Videography
        </h3> 
      <div
        className={`pl-4 relative flex flex-col text-left md:flex-row max-w-full mx-auto z-0 lg:h-[140vh] ${
          showModal && '!h-screen overflow-hidden'
        }`}>

      <main className="relative md:pb-24 lg:space-y-24 lg:pl-16 ">
        <section className="space-y-16 md:space-y-24 overscroll-hidden">
        {genres.map((genre) => (
          <Row key={genre._id} 
              title={genre.title} 
              videos={genre.videos} />
        ))}
          </section>
        </main>

        {showModal && <Modal />}

      </div>
    
    </div>
  )
}

export default Portfolio