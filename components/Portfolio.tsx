import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
}

function Portfolio({ projects }: Props) {
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
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='hidden md:inline-flex absolute top-24 uppercase tracking-[20px] text-[#85caff] text-2xl'> 
            Portfolio
        </h3> 

        <h3 className='hidden md:inline-flex absolute top-36 uppercase tracking-[3px] text-sm'>
        Scroll right to view more projects
    </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'>
          {projects.map((project, i) => (
            <motion.div 
              key={project._id}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

              <Link key={project._id} href={project.url}>
              <motion.img 
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{
                  once: true,
                }}
                src={urlFor(project?.image).url()} alt='project image' 
              />
              </Link>

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#85caff]/90'>{project?.title}</span>
                </h4>

                <p className='text-lg text-center md:text-left'>
                  {project?.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#34597e]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
    
  )
}

export default Portfolio