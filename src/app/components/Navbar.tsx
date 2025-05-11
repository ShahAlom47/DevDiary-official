"use client"
import Image from 'next/image';
import React from 'react';
import  logo from "@/assets/images/devDiaryLogo.png"
import { NavLink } from './NavLink';
import { usePathname } from 'next/navigation';
import NavSearchBar from './NavSearchBar';
import BookmarkContainer from './BookmarkContainer';
import { RiLoginBoxLine } from 'react-icons/ri';
import Link from 'next/link';
import MobileNavBar from './MobileNavBar';
const Navbar = () => {
    const pathname = usePathname()

   
    return (
    <nav className={` bg-color-primary text-white border-b-4 border-primary-border lg:px-5 md:px-3.5 px-2 `}>
            <div className=' lg:flex md:flex hidden items-center justify-between  '>
           
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
            <div className='flex items-center gap-4 '>
                <NavSearchBar></NavSearchBar>
                <BookmarkContainer></BookmarkContainer>
                <Link href={"/login"} className='text-gray-300 hover:text-gray-100 cursor-pointer'>
                <RiLoginBoxLine size={20} />
                </Link>
            </div>
        </div>
        <div className={`lg:hidden md:hidden flex items-center justify-between `}>
            <MobileNavBar></MobileNavBar>
        </div>
    </nav>
    );
};

export default Navbar;