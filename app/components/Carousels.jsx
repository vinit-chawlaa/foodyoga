'use client'


import React from 'react'
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import Green from '../products/Green';
import Brown from '../products/Brown';
import Orange from '../products/Orange';
import Darkgreen from '../products/Darkgreen';
import Pink from '../products/Pink';

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Carousels = () => {
  return (
    <section id='products'>
      <div className='w-full min-h-screen sm:px-20 pt-20 px-5'>


        <Carousel responsive={responsive} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true} arrows={true}>


          <Pink />
          <Green />

          <Brown />

          <Orange />



          <Darkgreen />




        </Carousel>
      </div>
    </section>
  )
}

export default Carousels;
