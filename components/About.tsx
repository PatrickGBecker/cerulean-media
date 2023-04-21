import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo[];
}

export default function About({ pageInfo }: Props) {
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
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-10 uppercase tracking-[20px] text-[#85caff] text-2xl'>
          About
        </h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{
                once: true
            }}
            className='-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
             src={urlFor(pageInfo[0].profilePic).url()}
             alt='Michael'
        />
        


        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is <span className='underline decoration-[#85caff]/40'>some</span>{" "}
            backstory
            </h4>
            <p className='text-base'>{pageInfo[0].backgroundInformation}</p>
        </div>
    </motion.div>
  )
}