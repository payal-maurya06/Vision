// ./src/app/sections/Visit.tsx
'use client'
import React from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image"; // Import Image component

function Visit() {
  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const buttonLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)", transition: { duration: 0.2 } },
  };

  const buttonRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)", transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="relative w-full h-[60vh] md:h-screen font-roboto text-gray-800 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      role="banner"
      aria-labelledby="visit-heading"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" variants={imageVariants}>
        <Image // Used Next.js Image component
          src="/hero/visit.png"
          alt="See Eyewear optical store interior"
          layout="fill" // Use fill to cover the parent div
          objectFit="cover" // Maintain aspect ratio and cover area
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-6">
        <motion.div className="max-w-4xl text-center text-white">
          <motion.h2 id="visit-heading" className="text-2xl md:text-4xl font-bold mb-3 md:mb-4" variants={textVariants}>
            Experience Excellence
          </motion.h2>

          <motion.p className="text-sm md:text-lg mb-6 md:mb-10 leading-relaxed max-w-md md:max-w-none mx-auto" variants={textVariants}>
            Step into our world of optical perfection where cutting-edge
            technology meets timeless craftsmanship.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 w-full max-w-xs md:max-w-none mx-auto">
            <motion.button
              className="px-4 md:px-6 py-2 md:py-3 bg-[#775647] text-white font-medium text-sm md:text-base shadow-md hover:bg-[#5a3e33] transition-colors w-full"
              variants={buttonLeftVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              aria-label="Visit our physical store for eyewear consultation"
            >
              Visit Our Store
            </motion.button>

            <motion.button
              className="px-4 md:px-6 py-2 md:py-3 border border-white text-white font-medium text-sm md:text-base hover:bg-white hover:text-[#775647] transition-colors w-full"
              variants={buttonRightVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              aria-label="Book an appointment for eye exam or fitting"
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Reduced motion accessibility */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Visit;