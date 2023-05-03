import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
    experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='h-screen flex relative overflow-hidden flex-col md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    > 
        <h3 className='hidden md:inline-flex absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl scroll-smooth'>
        Experience
        </h3>

        <div 
            className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'>

            {experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience