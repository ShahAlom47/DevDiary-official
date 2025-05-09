"use client"
import Image from 'next/image';
import React from 'react';
import  logo from "@/assets/images/devdiaryLogo_1.png"
import { NavLink } from './NavLink';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const pathname = usePathname()

   
    return (
        <div className=' flex items-center justify-between bg-color-primary '>
           <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer"
            >
            </Image>
            <div className="">
                {NavLink(pathname)}
            </div>
        </div>
    );
};

export default Navbar;