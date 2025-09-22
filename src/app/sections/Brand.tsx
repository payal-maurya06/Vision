'use client'
import React from "react";
import { motion } from 'framer-motion';

function Brand() {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ray-Ban_logo.svg/1920px-Ray-Ban_logo.svg.png",
      alt: "Ray-Ban logo"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1920px-Prada-Logo.svg.png",
      alt: "Prada logo"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Logo_Burberry_01.svg/1920px-Logo_Burberry_01.svg.png",
      alt: "Burberry logo"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Gucci_logo.png",
      alt: "Gucci logo"
    },
    {
      src: "https://www.cleareye.com/wp-content/uploads/2021/06/lindberg-logo-800.png",
      alt: "Lindberg logo"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tom_Ford_Logo.svg/1920px-Tom_Ford_Logo.svg.png",
      alt: "Tom Ford logo"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Versace_old_logo.svg/1920px-Versace_old_logo.svg.png",
      alt: "Versace logo"
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const // Use const assertion
      },
    },
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as const // Use const assertion
      } 
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      filter: 'blur(5px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] as const // Use const assertion
      } 
    },
  };

  const duplicatedLogos = [...logos, ...logos]; // For infinite marquee

  return (
    <motion.div 
      className="py-16 bg-gray-100 font-['Roboto'] min-h-[200px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.h2 
        className="text-center text-2xl font-bold text-gray-800 mb-10"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Trusted by World-Class Brands
      </motion.h2>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="flex animate-marquee whitespace-nowrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 px-6 sm:px-12 flex items-center justify-center"
              variants={logoVariants}
              
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Brand;