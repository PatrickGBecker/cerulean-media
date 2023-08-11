import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, videoState } from '../atoms/modalAtom'
import ReactPlayer from 'react-player/lazy'
import {
  BsVolumeMute,
  BsVolumeUp,
  BsXLg,
} from 'react-icons/bs'
import MuiModal from '@mui/material/Modal'


function Modal() {
  const [video, setVideo] = useRecoilState(videoState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [muted, setMuted] = useState(false)

  const handleClose = () => {
    setShowModal(false)
    setVideo(null)
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none"
          onClick={handleClose}
        >
          <BsXLg className="h-8 w-8" />
        </button>

        <div className="relative pt-[60%]">
          <ReactPlayer
            url={video?.url}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-2 flex w-full items-center justify-between px-5">
            
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <BsVolumeMute className="h-8 w-8" />
              ) : (
                <BsVolumeUp className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#1e3348] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-light text-[#85caff]">
                {video?.description}
              </p>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal