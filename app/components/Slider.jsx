'use client'
import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Slider = () => {
  const images = ["new.png", "indigo.png", "compass.png", "spicejet.jpg", "itc.png", "tata.png", "taj.jpg", "google.webp", "shop.png", "luthansa.png", "oberio.png", "skychefs.png" , "unfi.png"];

  return (
    <div className='w-full h-auto pt-8 md:py-12 lg:py-16 xl:py-20 mb-15'>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        arrows={false}
        containerClass="w-full"
        itemClass="px-4"
        slidesToSlide={1}
      >    
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center h-32 md:h-40">
            <div className="w-full h-full px-2 md:px-4 flex justify-center items-center">
              <Image
                src={`/${img}`}
                alt={img.split('.')[0]}
                className="w-full h-full object-contain"
                width={200}
                height={100}
                loading="eager"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider;