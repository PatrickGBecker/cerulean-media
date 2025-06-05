import { motion } from 'framer-motion';
import { SkillType } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer items-center'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-full object-contain md:h-28 md:w-28 xl:w-36 xl:h-36 filter group-hover:grayscale transition-duration: 300ms ease-in-out'
            color='#7aa0c7' 
        />
        <div className='fixed !top-60 !right-4 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#1e3348] z-50 h-30 w-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg md:text-2xl font-bold text-[#85caff] opacity-100'>
                    {skill.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill