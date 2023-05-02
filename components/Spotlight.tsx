import React from 'react'
import { Carousel } from 'flowbite'
import { Genre } from '@/typings';
import { Video } from '@/typings';
import { urlFor } from '@/sanity';
import type { CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite';


type Props = {
  genres: Genre[];
  videos: Video[];
}

function Spotlight({ videos, genres }: Props) {
    
      const items: CarouselItem[] = [
          {
              position: 0,
              el: 
          },
      ];
      
      
      const options: CarouselOptions = {
          defaultPosition: 1,
          interval: 3000,
      
          indicators: {
              activeClasses: 'bg-white dark:bg-gray-800',
              inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
              items: [
                  {
                      position: 0,
                      el: document.getElementById('carousel-indicator-1')!
                  },
                  {
                      position: 1,
                      el: document.getElementById('carousel-indicator-2')!
                  },
                  {
                      position: 2,
                      el: document.getElementById('carousel-indicator-3')!
                  },
                  {
                      position: 3,
                      el: document.getElementById('carousel-indicator-4')!
                  },
                  {
                      position: 4,
                      el: document.getElementById('carousel-indicator-5')!
                  },
                  {
                      position: 5,
                      el: document.getElementById('carousel-indicator-6')!
                  },
                  {
                      position: 6,
                      el: document.getElementById('carousel-indicator-7')!
                  },
                  {
                      position: 7,
                      el: document.getElementById('carousel-indicator-8')!
                  },
              ]
          },
      
          onNext: () => {
              console.log('Next slide');
          },
          onPrev: () => {
              console.log('Previous slide');
          },
          onChange: () => {
              console.log('Slide changed');
          }
      };
      
      const carousel: CarouselInterface = new Carousel(items, options);
      
      carousel.cycle();
      
      const $prevButton = document.getElementById('data-carousel-prev')!;
      const $nextButton = document.getElementById('data-carousel-next')!;
      
      $prevButton.addEventListener('click', () => {
          carousel.prev();
      });
      
      $nextButton.addEventListener('click', () => {
          carousel.next();
      });
    
  
    return (
   <div className="h-screen relative w-full">
 
    <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
       
        <div id="carousel-item-1" className="duration-700 ease-in-out">
            <img src={urlFor(videos[0].image).width(200).url()} alt="..."/>
        </div>
     
        <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
            <img src={urlFor(videos[1].image).width(200).url()} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div id="carousel-item-3" className="hidden duration-700 ease-in-out">
            <img src={urlFor(videos[2].image).width(200).url()} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div id="carousel-item-4" className="hidden duration-700 ease-in-out">
            <img src={urlFor(videos[3].image).width(200).url()} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
        <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
        <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
    </div>
    
    <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
</div>
  )
}

export default Spotlight