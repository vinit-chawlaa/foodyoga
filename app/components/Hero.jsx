import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (

    <div className='relative w-full min-h-screen overflow-hidden pt-[80px]'>
        <div className='absolute z-1 top-20 left-10'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-6 sm:px-10 md:px-14'>
  Balance in Every Bite!
</h1>

        </div>
       
        
        <div className='w-full h-full'>
            <h1 className='absolute z-1 bottom-10 left-22 underline text-lg decoration-red-500 decoration-2' style={{textUnderlineOffset : '6px'}}>www.foodyoga.shop</h1>
            <Image src='/hero.jpg' alt='' fill className='object-cover' loading='lazy'/>
        </div>

        <div className='relative z-54 top-30 left-10 w-100'>
          
        </div>
    </div>
    
  )
}

export default Hero