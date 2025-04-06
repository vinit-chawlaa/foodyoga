import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
       <div className='px-5 md:px-10 py-10 bg-gray-50'>
         <div className='w-full min-h-[40vh] md:min-h-[60vh] flex flex-col text-center'>
            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-0 w-full'>

                <div className='flex flex-col gap-3 w-full md:w-1/4 px-2'>
                    <strong className='text-2xl md:text-4xl'>सेवा परमो धर्म</strong>
                    <p className='font-semibold text-md md:text-lg'>Seva Parmo Dharma</p>
                    <p className='text-gray-700 text-sm md:text-md'>Service to humanity is the highest religion.</p>
                </div>

                <div className='hidden md:flex w-[50px] justify-center items-center'>
                    <span className='h-[100px] w-[1px] bg-gray-300'></span>
                </div>

                <div className='flex flex-col gap-3 w-full md:w-1/4 px-2'>
                    <strong className='text-2xl md:text-4xl'>सर्वे भवंतु सुखिनः</strong>
                    <p className='font-semibold text-md md:text-lg'>Om Sarve Bhavantu Sukhina</p>
                    <p className='text-gray-700 text-sm md:text-md'>May all experience happiness.</p>
                </div>

                <div className='hidden md:flex w-[50px] justify-center items-center'>
                    <span className='h-[100px] w-[1px] bg-gray-300'></span>
                </div>

                <div className='flex flex-col gap-3 w-full md:w-1/4 px-2'>
                    <strong className='text-2xl md:text-4xl'>सर्वे सन्तु निरामयाः</strong>
                    <p className='font-semibold text-md md:text-lg'>Sarve Santu Nir-Aamayaah</p>
                    <p className='text-gray-700 text-sm md:text-md'>May all be free from illness.</p>
                </div>

                <div className='w-full md:w-auto flex justify-center mt-5 md:mt-0'>
                    <Image 
                        src='/logo.png' 
                        alt='Logo' 
                        width={150} 
                        height={75} 
                        className='rounded-3xl w-[150px] h-auto' 
                        loading='eager'
                    />
                </div>

            </div>
        </div>

        <div className='w-full md:px-12 px-5 mt-10'>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl md:text-5xl font-bold'>Partner with <span className='text-red-500'>FoodYoga</span></h1>
                <p className='pt-3 md:pt-10 font-semibold text-lg md:text-2xl'>POC- Dhawal Phadke</p>
            </div>

            <div className='flex flex-col md:flex-row py-5 md:py-10 gap-5 text-md md:text-2xl'>
                <p className='flex justify-center md:justify-start items-center gap-2'>
                    <Image 
                        src='/phone.png' 
                        width={30} 
                        height={30} 
                        alt='Phone icon' 
                        className='w-6 h-6 md:w-8 md:h-8'
                        loading='eager'
                    />
                    <a href="tel:+14699314116" className='text-sm md:text-lg'>+1 469 931 4116</a>
                </p>
                <p className='flex justify-center md:justify-start items-center gap-2'>
                    <Image 
                        src='/email.png' 
                        width={30} 
                        height={30} 
                        alt='Email icon' 
                        className='w-6 h-6 md:w-8 md:h-8'
                        loading='eager'
                    />
                    <a href="mailto:dhawal@foodyoga.shop" className='text-sm md:text-lg'>dhawal@foodyoga.shop</a>
                </p>
                <p className='flex justify-center md:justify-start items-center gap-2'>
                    <Image 
                        src='/web.png' 
                        width={30} 
                        height={30} 
                        alt='Website icon' 
                        className='w-6 h-6 md:w-8 md:h-8'
                        loading='eager'
                    />
                    <a href="https://foodyoga.shop/" target="_blank" rel="noopener noreferrer" className='text-sm md:text-lg'>www.foodyoga.shop</a>
                </p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 w-full items-center'>
                <div className='w-full text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-4 items-center'>
                    <Image 
                        src='/location.png' 
                        width={30} 
                        height={30} 
                        alt='Location icon' 
                        className='w-6 h-6 md:w-8 md:h-8'
                        loading='eager'
                    />
                    <address className='not-italic text-sm md:text-lg lg:text-xl'>
                        Foodyoga INC., 1025 36th Ave NE, Minneapolis, MN 55418
                    </address>
                </div>
                <div className='hidden md:block flex-1'>
                    <span className='h-[1px] w-full bg-gray-300'></span>
                </div>
                <div className='w-full text-center md:text-right flex justify-center'>
                    <p className='text-sm md:text-lg lg:text-xl max-w-[250px]'>
                        We Look Forward To <span className='font-bold'>Getting You On-Board</span>
                    </p>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Footer;
