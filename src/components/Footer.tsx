"use client"
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import logo from "@/assets/images/devDiaryLogo.png";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="devDiary Logo" width={50} height={50} />
          <span className="text-xl font-semibold">devDiary</span>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Links</h2>
          <nav className="space-y-1 flex flex-col">
            {NavLink(pathname)}
          </nav>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-500">🐦</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-white">💻</a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500">📺</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} devDiary — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
