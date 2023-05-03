import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (

   <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [20, 1,],
            opacity: [0.2, 0.4, 0.6, 0.8, 1.0], 
            borderRadius: ['20%', '30%', '50%', '70%', '90%'],
        }}
        transition={{
            duration: 1.5,
        }}
        viewport={{
            once: true,
        }}
        className='relative flex justify-center items-center pt-10'
    >
        <div className='absolute border border-[#51b4ff] rounded-full h-[164px] w-[164px] mt-52 animate-pulse' />
        <div className='absolute border border-[#51b4ff]/90 rounded-full h-[165px] w-[165px] mt-52 animate-pulse' />
        <div className='rounded-full border border-[#51b4ff]/90  h-[170px] w-[170px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#51b4ff]/80 h-[175px] w-[175px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#51b4ff]/80  h-[180px] w-[180px] absolute mt-52 animate-pulse' />
         <div className='rounded-full border border-[#51b4ff]/70  h-[185px] w-[185px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/70  h-[190px] w-[190px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/60  h-[195px] w-[195px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/60  h-[200px] w-[200px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/60  h-[205px] w-[205px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/50  h-[210px] w-[210px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/50  h-[215px] w-[215px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/50 h-[222px] w-[222px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/40  h-[230px] w-[230px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#51b4ff]/40  h-[239px] w-[239px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#51b4ff]/40  h-[249px] w-[249px] absolute mt-52 animate-pulse' />
         <div className='rounded-full border border-[#51b4ff]/30  h-[260px] w-[260px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/30  h-[271px] w-[271px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/30  h-[283px] w-[283px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/20  h-[296px] w-[296px] absolute mt-52 animate-pulse'/>
         <div className='rounded-full border border-[#51b4ff]/20  h-[310px] w-[310px] absolute mt-52 animate-pulse'/>

    </motion.div>
    
  );
}

export default BackgroundCircles