import Image from 'next/image'
import React from 'react'

const Manufacture = () => {
    return (
        <div className='w-full min-h-screen px-5 md:px-20 pt-20'>
            <h1 className='font-semibold text-5xl'>State-of-the-art Manufacturing Facility</h1>
            <div className='relative min-h-[500px]'>
                <div className='bg-gray-200 opacity-90 xl:max-w-[50%] rounded-tr-3xl md:rounded-tr-none md:rounded-br-3xl md:rounded-tl-3xl xl:h-35 py-5 px-5 top-0 left-0 absolute flex justify-center items-center gap-5 flex-wrap'>
                    <div>
                        <Image src='/star.png' alt='' width={40} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <p className='font-semibold text-center max-w-[100px]'>Excellent Location</p>

                    <div>
                        <Image src='/aud.png' alt='' width={50} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <p className='font-semibold max-w-[100px]'>Dedicated R&D Team</p>

                    <div>
                        <Image src='/gate.png' alt='' width={40} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <p className='font-semibold max-w-[100px]'>World Class Lab & Infra</p>
                </div>

                <div className='bg-white xl:max-w-[50%] rounded-bl-3xl rounded-tr-3xl xl:h-35 py-5 px-5 absolute -bottom-0.5 flex justify-center items-center gap-5 flex-wrap'>
                    <div>
                        <Image src='/brc.jpg' alt='' width={100} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <div>
                        <Image src='/rspcb.png' alt='' width={60} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <div>
                        <Image src='/fssc.png' alt='' width={150} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <div>
                        <Image src='/fssai.png' alt='' width={80} height={30} className='object-contain' loading='lazy' />
                    </div>
                    <div>
                        <Image src='/unfi.png' alt='' width={80} height={30} className='object-contain' loading='lazy' />
                    </div>
                </div>

                <Image src='/factory.webp' alt='' width={1500} height={100} className='min-h-[800px] mt-20 rounded-3xl object-cover' loading='lazy' />
            </div>

            <div className="py-10 flex flex-col md:flex-row gap-8 md:gap-5 items-center md:items-start">

                <div className="md:border-r-2 md:border-gray-400 max-w-[350px] px-5 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl">
                        Production Capacity of <br />
                        <span className="font-bold">2,000 tons per year.</span>
                    </h1>
                </div>


                <div className="max-w-[540px] px-5 text-center md:text-left pt-5">
                    <p className="font-semibold text-lg sm:text-xl">
                        Renowned for its quality and innovation, Sattviko, the
                        sister brand of FoodYoga, stands among India's largest and most trusted Makhana brands.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Manufacture;
