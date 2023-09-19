import { Audio } from '@/typings'

type Props = {
  audio: Audio[];
}

function Audio({ audio }: Props) {
  return (
    <div
      className='h-screen flex relative flex-col xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

       <h3 className='hidden sm:inline-flex absolute top-20 uppercase tracking-[20px] text-[#85caff] text-2xl'>
        Audio Engineering
       </h3>
    
      <div 
        className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'> 
        {audio.sort((a, b) => a.order - b.order).map((album) => (
                <iframe key={album._id}
                  src={`${album.url}?utm_source=generator&theme=0`} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-1 md:flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center p-10 bg-[#34597e] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' width="50%" height="452" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
            ))}
            
      </div>



    </div>
  )
}

export default Audio