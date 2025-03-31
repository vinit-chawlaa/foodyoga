import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
     <section id='about' className='pt-10'>
           <div className='w-full min-h-screen px-10 md:px-20 mt-30 grid grid-cols-1 gap-15 md:grid-cols-[35%_auto] overflow-x-hidden relative z-50'>
            <div>
                <h1 className='text-5xl'>About us</h1>
                <span className="line1"></span>
               
                <p className='py-4 pt-10 font-semibold'>
                    FoodYoga is a leading health-focused food company dedicated to crafting innovative and
                    delicious snacks and meals that nourish both the body and soul.
                </p>
                <p className='text-gray-700'>
                    Our products are non-GMO, vegan, gluten-free, and minimally processed, catering to
                    health-conscious individuals who seek balanced nutrition without compromising on taste.
                </p>
                <div className='max-w-[800px] rounded-lg overflow-hidden relative py-5'>
                    <Image src='/man.png' alt='Person practicing yoga' width={800} height={400} className='rounded-lg object-cover' loading="lazy" />
                </div>
            </div>

            <div className='flex md:flex-col flex-col-reverse gap-5'>

                <div className='max-w-[900px] rounded-lg overflow-hidden relative'>
                    <Image src='/yoga.png' alt='Yoga practice' width={900} height={500} className='rounded-lg' loading="lazy" />
                </div>

                <div>
                    <h1 className='py-5 text-5xl'>Our Story</h1>
                    <span className="line2"></span>
                    <p className='py-4 font-semibold'>
                        While the science of Yoga is widely understood and accepted by millions across the globe,
                        the importance of Yogic nutrition remains relatively unknown.
                    </p>
                    <p className='text-gray-700'>
                        Recognising this gap, Prasoon Gupta and Dhawal Phadke founded FoodYoga, reinventing
                        ancient and authentic Yogic food principles into delicious, convenient, and nutrient-rich
                        products for modern-day Yoga practitioners and health-conscious consumers.
                    </p>
                </div>

            </div>
        </div>
     </section>
    )
}

export default About
