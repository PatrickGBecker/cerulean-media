import { motion } from "framer-motion";
import { Social } from '@/typings';
import { FaFacebook, FaInstagram, FaLinkedin, FaRegEnvelope, FaSpotify, FaYoutube } from 'react-icons/fa';

type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
      <header className='sticky top-0 p-1  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'>
                <a href={`${socials[0].url}`} target='_blank'>
                <FaYoutube className='text-[#7aa0c7] text-3xl mx-2' />
                </a>

                <a href={`${socials[1].url}`} target='_blank'>
                <FaInstagram className='text-[#7aa0c7] text-3xl mx-2' />
                </a>

                <a href={`${socials[2].url}`} target='_blank'>
                <FaSpotify className='text-[#7aa0c7] text-3xl mx-2' />
                </a>

                <a href={`${socials[3].url}`} target='_blank'>
                <FaLinkedin className='text-[#7aa0c7] text-3xl mx-2' />
                </a>

                <a href={`${socials[4].url}`} target='_blank'>
                <FaFacebook className='text-[#7aa0c7] text-3xl mx-2' />
                </a>
        </motion.div>
        
        <motion.div 
                initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-[#7aa0c7] cursor-pointer'>
                <a href='#contact'>
                    <FaRegEnvelope className='text-[#7aa0c7] text-3xl mx-2' />
                </a>
                    <p className='uppercase hidden md:inline-flex text-sm text-[#7aa0c7]'>
                        Get In Touch
                    </p>
        </motion.div>
         
    </header>
  )
}
