            'use client'

            import Image from 'next/image'

            import React from 'react'

            const Pink = () => {
              return (
                <div>
                      <div className='flex lg:flex-row justify-center items-center flex-col md:gap-10 w-full mt-5 px-2'>
          

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold absolute top-5 z-3 mt-5 sm:mt-0">
              <span className='font-bold'>Lotus Puffs</span> Pink Salt & Pepper Flavour 
       </h1>


      
              
              <div className='flex-1 relative -mt-20'>
                <Image src='/pink.png' width={1000} height={1000} alt='' className='w-full min-h-200 object-cover' loading="lazy" />
                <div className='flex gap-5 flex-col absolute bottom-10 px-20 justify-center w-full'>
                  <div className='text-xl text-gray-800 flex justify-center items-center gap-5 '>
                    <div className='flex'>
                      <Image src='/leaf.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2 className='border-r border-r-gray-600 px-3'>Vegan</h2>
                    </div>
                    <div className='flex'>
                      <Image src='/maida.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2 className='border-r border-r-gray-600 px-3'>Gluten Free</h2>
                    </div>
                    <div className='flex'>
                      <Image src='/oil.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2>No Trans Fat</h2>
                    </div>
                  </div>

                  <div className='text-xl text-gray-800 flex justify-center items-center gap-5'>
                    <div className='flex'>
                      <Image src='/heart.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2 className='border-r border-r-gray-600 px-3'>Cholesterol Free</h2>
                    </div>
                    <div className='flex'>
                      <Image src='/d.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2 className='border-r border-r-gray-600 px-3'>Non-GMO</h2>
                    </div>
                    <div className='flex'>
                      <Image src='/anit.png' width={35} height={30} alt='' className='object-contain' loading="lazy" />
                      <h2>Contains Antioxidants</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-1 lg:min-w-[400px] mt-10 px-2 sm:w-full w-[400px] 2xl:mr-25'>
                <div className='bg-gray-100 h-[500px] flex flex-col border border-gray-100 rounded-3xl'>
                  <div className='flex h-[25%] w-full'>
                    <div className='flex-1 border border-gray-300 rounded-tl-3xl flex justify-center items-center flex-col gap-5'>
                      <Image src='/t.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>10g (0.35 OZ)</strong>
                    </div>
                    <div className='flex-1 border border-gray-300 rounded-tr-3xl flex justify-center items-center flex-col gap-5'>
                      <Image src='/p.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>Foil / Laminate</strong>
                    </div>
                  </div>

                  <div className='flex h-[25%] w-full'>
                    <div className='flex-1 border border-gray-300 border-t-0 flex justify-center items-center flex-col gap-5'>
                      <Image src='/s.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>15 months</strong>
                    </div>
                    <div className='flex-1 border border-gray-300 border-t-0 flex justify-center items-center flex-col gap-5'>
                      <Image src='/dt.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>22 pcs</strong>
                    </div>
                  </div>

                  <div className='flex h-[25%] w-full'>
                    <div className='flex-1 border border-gray-300 border-t-0 flex justify-center items-center flex-col gap-5'>
                      <Image src='/l.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>International</strong>
                    </div>
                    <div className='flex-1 border border-gray-300 border-t-0 flex justify-center items-center flex-col gap-5'>
                      <Image src='/c.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>Economy & Above</strong>
                    </div>
                  </div>

                  <div className='flex h-[25%] w-full'>
                    <div className='flex-1 border border-gray-300 border-t-0 rounded-bl-3xl flex justify-center items-center flex-col gap-5'>
                      <Image src='/th.png' alt='' width={20} height={100} loading="lazy" />
                      <strong className='text-lg'>Ambient</strong>
                    </div>
                    <div className='flex-1 border border-gray-300 border-t-0 rounded-br-3xl flex justify-center items-center flex-col gap-5'>
                      <Image src='/l.png' alt='' width={30} height={100} loading="lazy" />
                      <strong className='text-lg'>Lounge Fit</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>
              )
            }

            export default Pink