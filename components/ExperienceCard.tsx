import React, { useId } from 'react'
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
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt='Company Logo'
        />

         <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        {/* <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div> */}

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg pr-5 max-h-86 w-4/5 overflow-scroll scrollbar-thin scrollbar-track-[#51b4ff] scrollbar-thumb-[#85caff]">
          {experience.points.map((point, i) => (
            <li key={`${id}-${i}`}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard