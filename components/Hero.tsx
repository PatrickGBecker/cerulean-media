import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ceruleanLogo from '@/public/assets/ceruleanLogo.png';

type Props = {
  pageInfo: PageInfo[];
}

function Hero({ pageInfo }: Props) {

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <Image
            src={ceruleanLogo}
            alt="Logo of a camera wearing headphones"
            width={600}
            height={600}
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#51b4ff] pb-2 tracking-[5px] md:tracking-[15px]'>{pageInfo[0]?.role}</h2>
            <h1 className='hidden md:text-5xl lg:text-6xl font-semibold px-10 md:tracking-[2px]'>
                <span className='mr-3'>Welcome to Cerulean Media</span>
                
            </h1>

            <div className='pt-5'>
                <Link href='#portfolio'>
                    <button className='heroButton'>Videography</button>
                </Link>
                <Link href='#audio'>
                    <button className='heroButton'>Audio Engineering</button>
                </Link>
                  <Link href='#skills'>
                    <button className='heroButton'>Services</button>
                </Link>
                  <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero