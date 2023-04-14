import React from 'react';
import { Genre, Video } from '@/typings';
import { useRecoilValue } from 'recoil';
import { modalState, videoState } from '@/atoms/modalAtom';
import Row from './Row';
import Modal from './Modal';

type Props = {
  videos: Video[];
  genres: Genre[];
}

function Portfolio({  videos, genres }: Props) {
   const showModal = useRecoilValue(modalState)
   const video = useRecoilValue(videoState)
   
  return (
    <div
      className={`h-screen pl-4 relative flex flex-col text-left md:flex-row max-w-full mx-auto z-0 lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}>

    <main className="relative md:pb-24 lg:space-y-24 lg:pl-16 ">
      <section className="space-y-16 md:space-y-24">
      {genres.map((genre) => (
        <Row key={genre._id} 
             title={genre.title} 
             videos={genre.videos} />
      ))}
        </section>
      </main>

      {showModal && <Modal />}

    </div>
  )
}

export default Portfolio