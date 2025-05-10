"use client"
import Image from 'next/image';
import React from 'react';
import  logo from "@/assets/images/devDiaryLogo.png"
import { NavLink } from './NavLink';
import { usePathname } from 'next/navigation';
import NavSearchBar from './NavSearchBar';
import BookmarkContainer from './BookmarkContainer';
const Navbar = () => {
    const pathname = usePathname()

   
    return (
        <div className=' flex items-center justify-between bg-color-primary text-white border-b-4 border-primary-border px-5   '>
           
            <div className=" flex items-center gap-4 ">
            <Image
                src={logo}
                alt="Logo"
                width={100}
                height={70}
                className="cursor-pointer h-12 w-auto"
            >
            </Image>
                {NavLink(pathname)}
            </div>
            <div className='flex items-center gap-4'>
                <NavSearchBar></NavSearchBar>
                <BookmarkContainer></BookmarkContainer>

            </div>
        </div>
    );
};

export default Navbar;