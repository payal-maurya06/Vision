'use client'
import { motion } from 'framer-motion';

function Header() {
  return (
    <div 
      className="h-[40px] w-full bg-black flex items-center overflow-hidden relative"
      aria-label="Promotional banner: Trending Rayban Meta Glasses and sitewide discount"
    >
      <motion.div 
        className="whitespace-nowrap animate-marquee"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          NOW TRENDING! RAYBAN META GLASSES - BOOK YOUR PAIR NOW!
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          |
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          15% OFF SITEWIDE! USE CODE - 'FLAT15'
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          |
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          NOW TRENDING! RAYBAN META GLASSES - BOOK YOUR PAIR NOW!
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          |
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          15% OFF SITEWIDE! USE CODE - 'FLAT15'
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          |
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          NOW TRENDING! RAYBAN META GLASSES - BOOK YOUR PAIR NOW!
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          |
        </h1>
        <h1 className="text-white text-xs sm:text-[14px] font-medium px-4 sm:px-8 inline-block">
          15% OFF SITEWIDE! USE CODE - 'FLAT15'
        </h1>
      </motion.div>
    </div>
  );
}

export default Header;