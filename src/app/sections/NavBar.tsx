'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Shop", "Brands", "Sunglasses", "Opticals", "About Us", "Contact"];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="font-roboto bg-[#fdfdfd] w-full z-50 shadow-md">
      <div className="h-[100px] flex items-center justify-between px-4 md:px-8 lg:px-16">
        
        {/* Logo */}
        <div className="w-30 flex items-center">
          <img src="/logo/logo_no_bg.png" alt="Logo" className="max-w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 md:gap-8 font-normal">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer py-2 px-3 transition-all duration-300 hover:bg-[#e1d9d7]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex scale-[80%]">
          <ul className="flex gap-4 md:gap-6">
            {/* Search */}
            <li className="cursor-pointer p-2 rounded-full hover:bg-[#e1d9d7] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 22L20 20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </li>
            {/* User */}
            <li className="cursor-pointer p-2 rounded-full hover:bg-[#e1d9d7] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g clipPath="url(#clip0_3111_32739)">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_3111_32739">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </li>
            {/* Cart */}
            <li className="cursor-pointer p-2 rounded-full hover:bg-[#e1d9d7] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g clipPath="url(#clip0_4418_9667)">
                  <path d="M7.5 7.66952V6.69952C7.5 4.44952 9.31 2.23952 11.56 2.02952C14.24 1.76952 16.5 3.87952 16.5 6.50952V7.88952" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.99995 22H14.9999C19.0199 22 19.7399 20.39 19.9499 18.43L20.6999 12.43C20.9699 9.99 20.2699 8 15.9999 8H7.99995C3.72995 8 3.02995 9.99 3.29995 12.43L4.04995 18.43C4.25995 20.39 4.97995 22 8.99995 22Z" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.4955 12H15.5045" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.49451 12H8.50349" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_4418_9667">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' }} />
          <div className="w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300" style={{ opacity: isOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-gray-800 transition-all duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' }} />
        </div>
      </div>

      {/* Mobile Side Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#fdfdfd] shadow-lg z-40 p-8 flex flex-col"
      >
        <ul className="flex flex-col gap-6 mt-16 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#775647]" onClick={() => setIsOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default NavBar;