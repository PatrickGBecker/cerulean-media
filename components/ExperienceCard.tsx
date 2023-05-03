import { useId } from 'react'
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  const id = useId();
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#34597e] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-center'
            src={urlFor(experience?.companyImage).url()}
            alt='Company Logo'
        />

         <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
    

        <p className="lowercase py-2 text-gray-[#51b4ff]">
          {experience.email}
        </p>

      </div>
    </article>
  );
}

export default ExperienceCard