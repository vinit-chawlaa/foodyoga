'use client'

import React from 'react'
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Slider = () => {
  return (
    <div className='w-full h-auto py-8 md:py-12 lg:py-16 xl:py-20 mb-15'>
         <Carousel 
            responsive={responsive} 
            ssr={true} 
            infinite={true} 
            autoPlay={true} 
            autoPlaySpeed={5000} 
            keyBoardControl={true} 
            arrows={true}
            containerClass="w-full"
            arrowClass="absolute bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
            leftArrowClass="left-4"
            rightArrowClass="right-4"
         > 
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-20 sm:px-12 md:px-16 lg:px-24 gap-4 md:gap-6 lg:gap-8 mx-auto max-w-7xl">
                  {["akasa.png", "indigo.png", "compass.png", "spicejet.jpg", "itc.png"].map((img, index) => (
                      <div key={index} className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px] h-20 sm:h-24 md:h-28 flex justify-center items-center p-2">
                          <Image 
                            src={`/${img}`} 
                            alt={img.split('.')[0]} 
                            className="w-full h-full object-contain" 
                            width={200} 
                            height={100} 
                            loading="lazy" 
                          />
                      </div>
                  ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-20 sm:px-12 md:px-16 lg:px-24 gap-4 md:gap-6 lg:gap-8 mx-auto max-w-7xl">
                  {["tata.png", "taj.jpg", "google.webp", "shop.png", "unfi.png"].map((img, index) => (
                      <div key={index} className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px] h-20 sm:h-24 md:h-28 flex justify-center items-center p-2">
                          <Image 
                            src={`/${img}`} 
                            alt={img.split('.')[0]} 
                            className="w-full h-full object-contain" 
                            width={200} 
                            height={100} 
                            loading="lazy" 
                          />
                      </div>
                  ))}
              </div>

              <div className="flex justify-center items-center w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-20 sm:px-12 md:px-16 lg:px-24 gap-4 md:gap-8 lg:gap-12 mx-auto max-w-4xl">
                      {["luthansa.png", "oberio.png", 'skychefs.png'].map((img, index) => (
                          <div key={index} className="mt-5 md:mt-0 md:h-24 flex justify-center items-center p-2">
                              <Image 
                                src={`/${img}`} 
                                alt={img.split('.')[0]} 
                                className="w-full h-full object-contain" 
                                width={100} 
                                height={100} 
                                loading="lazy" 
                              />
                          </div>
                      ))}
                  </div>
              </div>
         </Carousel>
    </div>
  )
}

export default Slider;