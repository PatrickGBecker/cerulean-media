import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo[];
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, my name is ${pageInfo[0]?.name}`,
          'Welcome to Cerulean Media, LLC.', 
    ],
    loop: 1,
    delaySpeed: 1000,
    });

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-40 w-40 object-cover'
            src={urlFor(pageInfo[0]?.heroImage).url()}
            alt='Photo of Michael'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#4a7eb3] pb-2 tracking-[15px]'>{pageInfo[0]?.title}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#4a7eb3' />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                  <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                  <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                  <Link href='#portfolio'>
                    <button className='heroButton'>Portfolio</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero