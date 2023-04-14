import { useRecoilState } from 'recoil'
import { modalState, videoState } from '../atoms/modalAtom'
import { Video } from '../typings'
import { urlFor } from '@/sanity'

interface Props {
    video: Video;
}

function Thumbnail({ video }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(videoState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`flex flex-col pl-2 m-0.5 relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(video)
        setShowModal(true)
      }}
    >
      <img
        src={urlFor(video?.image).width(200).url()}
        className="overflow-hidden rounded-sm object-cover md:rounded"
      />
    </div>
  )
}

export default Thumbnail