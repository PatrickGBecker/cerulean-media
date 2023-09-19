import { Genre, Video } from '@/typings';
import { useRecoilValue } from 'recoil';
import { modalState, videoState } from '@/atoms/modalAtom';
import Row from './Row';
import Modal from './Modal';


type Props = {
  videos: Video[];
  genres: Genre[];
}

function Portfolio({ videos, genres }: Props) {
   const showModal = useRecoilValue(modalState)
   const video = useRecoilValue(videoState)
   const genreOrder = genres.map((genre) => genre.order)
 

  return (
    <div className='h-screen relative flex flex-col text-center justify-evenly mx-auto items-center pb-2'>
      <h3 className='hidden md:inline-flex absolute top-6 uppercase tracking-[20px] text-[#85caff] text-2xl'> 
            Videography
        </h3> 
      <div
        className={`relative flex flex-col text-left md:flex-row max-w-full mx-auto z-0 lg:h-[140vh] ${
          showModal && '!h-screen overflow-hidden'
        }`}>

      <main className="relative space-y-10 lg:space-y-20 lg:pl-16 ">
        <section className="space-y-12 md:space-y-20">
        {genres.sort((a, b) => a.order - b.order).map((genre) => (
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