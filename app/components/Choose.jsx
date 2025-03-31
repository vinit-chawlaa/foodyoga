import Image from 'next/image'
import React from 'react'

const Choose = () => {
  return (
   <section id='choose'>
     <div className='md:px-20 px-5 w-full min-h-screen pt-30'>
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold  sm:text-left">
  Why choose FoodYoga?
</h1>

      <h2 className='text-lg py-5'>Our competitive edge lies in:</h2>

      <div className='grid md:grid-cols-2 gap-5 w-full'>
        <div>
          <div className='h-[400px] rounded-md overflow-hidden relative'>
            <div className='absolute max-w-[90%] px-10 py-5 border-r rounded-tr-3xl bottom-0 bg-gray-100 opacity-90 flex justify-center items-center font-semibold text-lg text-center break-words'>
              <p>Authentic, yogic-inspired recipes.</p>
            </div>
            <Image src='/bowl.jpg' alt='Bowl of food' width={1000} height={100} className='object-cover w-full h-full' loading="lazy" />
          </div>
          <div className='h-[400px] rounded-md overflow-hidden my-5 relative'>
            <div className='absolute border-r py-5 rounded-tr-3xl bottom-0 bg-gray-100 opacity-90 flex justify-center items-center font-semibold text-lg max-w-[90%] px-10 break-words'>
              <p>Commitment to sustainability through regenerative farming practices.</p>
            </div>
            <Image src='/vegetable.jpg' alt='Vegetables' width={1000} height={100} className='object-cover h-full' loading="lazy" />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='h-[400px] rounded-md overflow-hidden relative'>
            <div className='absolute max-w-[90%] py-5 border-r rounded-tr-3xl bottom-0 bg-gray-100 opacity-90 px-10 flex justify-center items-center font-semibold text-lg break-words'>
              <p>Nutrient-rich ingredients like Ashwagandha and probiotics.</p>
            </div>
            <Image src='/aswa.jpg' alt='Ashwagandha' width={1000} height={100} className='object-cover h-full' loading="lazy" />
          </div>
          <div className='h-[400px] rounded-md overflow-hidden relative'>
            <div className='absolute max-w-[90%] py-5 border-r rounded-tr-3xl bottom-0 bg-gray-100 opacity-90 px-10 flex items-center font-semibold text-lg break-words'>
              <p>Consistent quality ensured through our state-of-the-art manufacturing facility.</p>
            </div>
            <Image src='/food.jpg' alt='Manufacturing facility' width={1000} height={100} className='object-cover h-full' loading="lazy" />
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Choose
