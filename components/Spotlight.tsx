import { useEffect, useState } from 'react'
import { Genre } from '@/typings';
import { Video } from '@/typings';
import { urlFor } from '@/sanity';
import { useRecoilState } from 'recoil';
import { videoState } from '@/atoms/modalAtom';
import { modalState } from '@/atoms/modalAtom';
import Image from 'next/image';
import Carousel from 'better-react-carousel';



type Props = {
  genres: Genre[];
  videos: Video[];
}

function Spotlight({ videos, genres }: Props) {

  return (
    <div className='pt-80 w-[88vw]'>
      {genres.reduce((spotlight: JSX.Element[], item) => {
                if (item.featured) {
                  spotlight.push(
                   
                    <Carousel key={item._id} cols={genres.length} rows={1}  loop>
                      {item.videos.map((video) => (
                        <Carousel.Item className='w-[50vw]' key={video._id}>
                          <img src={urlFor(video?.image).width(500).url()}/>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    
                  )
                }
                return spotlight
              }, [])}
    </div>
  )
}


export default Spotlight