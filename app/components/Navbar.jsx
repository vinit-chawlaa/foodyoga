'use client'

import React, { useEffect, useState } from 'react'
import { Navlinks } from '../links/Navlinks'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState(1);

    const handletoggle = () => {
        setToggle((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 636) {
                setToggle(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleclose = (e) => {
            if (toggle) {
                setToggle(false);
            }
        };

        document.addEventListener('click', handleclose);
        return () => document.removeEventListener('click', handleclose);
    }, [toggle]);

    return (
        <div className='flex justify-between items-center shadow-sm py-4 z-[1000] sticky top-0 left-0 w-full bg-white lg:px-24 px-10'>
            <div>
                <Image src='/logo.png' width={100} height={100} alt='' className='rounded-3xl' loading='eager' />
            </div>

            <ul className={`${toggle ? 'flex absolute bg-white  top-[60px] text-center flex-col w-full left-0 right-0 shadow-lg z-[999]' : 'hidden'} list-none md:flex`}>
                {Navlinks.map((item) => (
                    <Link href={item.url} className='animated-underline block px-4 py-2' key={item.id}>
                    <li 
                        className={`cursor-pointer ${toggle && activeLink === item.id ? 'bg-gray-200' : ''} py-3 md:py-0`}
                        onClick={() => setActiveLink(item.id)}
                    >
                        
                            {item.name}
                   
                    </li>
                    </Link>
                ))}
            </ul>

            <button className='block md:hidden cursor-pointer' onClick={handletoggle}>
                {toggle ? <X /> : <Menu />}
            </button>
        </div>
    );
};

export default Navbar;
