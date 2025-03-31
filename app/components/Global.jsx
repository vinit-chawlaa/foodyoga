import Image from 'next/image'
import React from 'react'

const Global = () => {
    return (
        <div className='w-full min-h-screen py-5 xl:py-10  px-10'>
            <h1 className='text-5xl font-semibold xl:px-20 pb-20 px-10'>Global Presence</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:flex xl:flex-row justify-center items-center xl:px-13 xl:gap-5 mt-10'>
                <div className='w-full xl:w-1/3 mb-3 xl:mb-0'>
                    <div className='rounded-3xl h-80 mb-2'>
                        <Image src='/1.jpeg' alt='' className='w-full h-full rounded-3xl object-cover' width={1000} height={100} loading='lazy' />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Image src='/arrow.png' alt='' className='' width={50} height={100} loading='lazy' />
                        <p className='text-sm xl:text-lg mt-10'>Dieticians at retail stores for demo of Foodyoga products</p>
                    </div>
                </div>

                <div className='w-full xl:w-1/2 mb-3 xl:mb-0'>
                    <div className='rounded-3xl h-70 relative mb-2'>
                        <div className='hidden xl:block w-80 h-70 absolute z-10 right-0 left-110 translate-x-1/4 -top-30'>
                            <Image
                                src='/3.jpeg'
                                alt=''
                                className='object-cover border-4 border-white rounded-3xl w-full h-full'
                                width={300}
                                height={100}
                                loading='lazy'
                            />
                        </div>

                        <Image src='/2.jpeg' alt='' className='w-full h-full rounded-3xl object-cover' width={1000} height={100} loading='lazy' />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Image src='/arrow.png' alt='' className='' width={50} height={100} loading='lazy' />
                        <p className='text-sm xl:text-lg mt-10'>With the heads of ShopRite stores</p>
                    </div>
                </div>

                <div className='hidden xl:block xl:w-1/9 mb-3 xl:mb-0'>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Image src='/arrow.png' alt='' className='' width={50} height={100} loading='lazy' />
                        <p className='text-sm xl:text-lg xl:pt-30'>Happy kids with Foodyoga products</p>
                    </div>
                </div>
            </div>

            <div className='block xl:hidden w-full mb-3'>
                <div className='rounded-3xl max-w-140 xl:h-40 mb-2'>
                    <Image
                        src='/3.jpeg'
                        alt=''
                        className='object-cover rounded-3xl w-full h-full'
                        width={300}
                        height={100}
                        loading='lazy'
                    />
                </div>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <Image src='/arrow.png' alt='' className='' width={50} height={100} loading='lazy' />
                    <p className='text-sm'>Happy kids with Foodyoga products</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row items-center px-4 xl:px-13 py-5 xl:py-10 gap-5 xl:gap-20'>
                <div className='xl:min-w-[500px] mb-4 xl:mb-0'>
                    <div className='h-100 rounded-3xl mt-4'>
                        <Image src='/4.jpeg' alt='' className='w-full h-full rounded-3xl object-cover' width={300} height={100} loading='lazy' />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <Image src='/arrow.png' alt='' className='' width={50} height={100} loading='lazy' />
                        <p className='text-sm xl:text-lg mt-10'>Ambassadors from yoga studios volunteered to demonstrate our products</p>
                    </div>
                </div>

                <div className='w-full xl:w-1/4'>
                    <div className='h-107 rounded-3xl mb-10'>
                        <Image src='/5.jpeg' alt='' className='w-full h-full rounded-3xl object-cover' width={1000} height={100} loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Global;