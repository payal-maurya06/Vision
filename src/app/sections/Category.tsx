'use client'
import React from 'react';
import { motion } from 'framer-motion';

function Category() {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
  };

  const buttonVariants = {
    ...itemVariants,
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="font-['Roboto'] relative overflow-x-hidden">
      <div className="min-h-screen w-full py-12 px-4 sm:px-6 bg-white relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.div
            className="text-center mb-10"
            variants={headingVariants}
          >
            <motion.h2 className="text-3xl font-bold text-gray-800">
              Shop by Category
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mt-2">
              Our Collections
            </motion.p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Sunglasses */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <img
                src="https://media.glamour.com/photos/66632fd8a10b3df87c4fcd39/2:3/w_2307,h_3460,c_limit/1980402531"
                alt="Sunglasses"
                className="w-48 h-48 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <motion.h3 className="text-xl font-semibold mt-4" variants={itemVariants}>
                Sunglasses
              </motion.h3>
              <motion.p className="text-gray-600 mt-1" variants={itemVariants}>
                UV Protection & Style
              </motion.p>
              <motion.p className="text-sm text-gray-500 mt-1" variants={itemVariants}>
                Discover iconic designs from Ray-Ban, Gucci, and more
              </motion.p>
              <motion.button
                className="mt-4 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Shop Now
              </motion.button>
            </motion.div>

            {/* Prescription Glasses */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <img
                src="https://assets2.glassesdirect.com/cdn-record-files/dressedon/ad4d8938-1bba-4569-9395-b28700c1e0c1/0RX6541__2501__SHOOT__om4.png?impolicy=GD_Resize_New&q=85&im=Resize%2Cwidth%3D500%2Cheight%3D600%2Caspect%3Dfill%3BUnsharpMask%2Csigma%3D1.0%2Cgain%3D1.0"
                alt="Prescription Glasses"
                className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <motion.h3 className="text-xl font-semibold mt-4" variants={itemVariants}>
                Prescription Glasses
              </motion.h3>
              <motion.p className="text-gray-600 mt-1" variants={itemVariants}>
                Vision & Fashion
              </motion.p>
              <motion.p className="text-sm text-gray-500 mt-1" variants={itemVariants}>
                Premium frames with precision lenses
              </motion.p>
              <motion.button
                className="mt-4 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Shop Now
              </motion.button>
            </motion.div>

            {/* Contact Lenses */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <img
                src="https://media.opsm.com/s7/contact-lenses_tips-750x600.jpg"
                alt="Contact Lenses"
                className="w-48 h-48 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <motion.h3 className="text-xl font-semibold mt-4" variants={itemVariants}>
                Contact Lenses
              </motion.h3>
              <motion.p className="text-gray-600 mt-1" variants={itemVariants}>
                Comfort & Clarity
              </motion.p>
              <motion.p className="text-sm text-gray-500 mt-1" variants={itemVariants}>
                Daily, monthly & colored options
              </motion.p>
              <motion.button
                className="mt-4 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Category;