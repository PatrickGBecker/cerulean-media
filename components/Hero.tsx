import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo[];
}

function Hero({ pageInfo }: Props) {
    {/*const [text, count] = useTypewriter({
        words: [
          'Welcome to Cerulean Media, LLC.', 
    ],
    loop: 1,
    delaySpeed: 1000,
    }); */}

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <motion.img
            initial={{
                x: 0,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 2.5,
                ease: [0.17, 0.37, 0.63, 0.87],
            }}
            viewport={{
                once: true
            }}
            className='relative rounded-full h-40 w-40 object-cover'
            src={urlFor(pageInfo[0]?.heroImage).url()}
            alt='Photo of Michael'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#51b4ff] pb-2 tracking-[15px]'>{pageInfo[0]?.title}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10 tracking-[2px]'>
                <span className='mr-3'>Welcome to Cerulean Media</span>
                
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                  <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                  <Link href='#skills'>
                    <button className='heroButton'>Services</button>
                </Link>
                  <Link href='#portfolio'>
                    <button className='heroButton'>Videography</button>
                </Link>
                <Link href='#audio'>
                    <button className='heroButton'>Audio Engineering</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero