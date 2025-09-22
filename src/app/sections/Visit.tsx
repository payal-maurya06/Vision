'use client'
import React from "react";
import { motion, easeOut } from "framer-motion";

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
      className="relative w-full h-screen font-roboto text-gray-800 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      role="banner"
      aria-labelledby="visit-heading"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" variants={imageVariants}>
        <img
          src="https://seeeyewear.com/cdn/shop/files/Web_Loyalty_Desktop_1800x800_85c32007-2c36-4fef-b6e5-d9500d8bc700_1000x.webp?v=1664526952"
          alt="See Eyewear optical store interior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <motion.div className="max-w-4xl text-center text-white">
          <motion.h2 id="visit-heading" className="text-4xl font-bold mb-4" variants={textVariants}>
            Experience Excellence
          </motion.h2>

          <motion.p className="text-lg mb-10 leading-relaxed" variants={textVariants}>
            Step into our world of optical perfection where cutting-edge
            technology meets timeless craftsmanship.
          </motion.p>

          <div className="flex justify-center gap-6">
            <motion.button
              className="px-6 py-3 bg-[#775647] text-white font-medium shadow-md hover:bg-[#5a3e33] transition-colors"
              variants={buttonLeftVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              aria-label="Visit our physical store for eyewear consultation"
            >
              Visit Our Store
            </motion.button>

            <motion.button
              className="px-6 py-3 border border-white text-white font-medium hover:bg-white hover:text-[#775647] transition-colors"
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