import { Audio } from '@/typings'

type Props = {
  audio: Audio[];
}

function Audio({ audio }: Props) {
  return (
    <div
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

       <h3 className='hidden sm:inline-flex absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl'>
        Audio Engineering
       </h3>
    
      <div 
        className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'> 
        {audio.map((album) => (
                <iframe key={album._id}
                  src={`${album.url}?utm_source=generator&theme=0`} width="50%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
            ))}
            
      </div>



    </div>
  )
}

export default Audio