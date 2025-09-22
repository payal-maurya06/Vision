'use client'
import React from "react";
import { motion, easeOut } from 'framer-motion';

function Eyewear() {
  const eyewearItems = [
    {
      tag: "Bestseller",
      discount: "17% OFF",
      rating: 4.8,
      name: "Aviator Classic",
      brand: "RAY-BAN",
      price: "₹12,500",
      oldPrice: "₹15,000",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1206149411279307&version=1758238895&transcode_extension=webp",
    },
    {
      tag: "New Arrival",
      rating: 4.9,
      name: "Cat Eye Elegance",
      brand: "PRADA",
      price: "₹28,900",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1691830558175904&version=1758048257&transcode_extension=webp",
    },
    {
      discount: "14% OFF",
      rating: 4.7,
      name: "Heritage Tortoise",
      brand: "BURBERRY",
      price: "₹18,990",
      oldPrice: "₹22,000",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=746610428231288&version=1758323487&transcode_extension=webp",
    },
    {
      tag: "Bestseller",
      rating: 4.9,
      name: "Round Vintage",
      brand: "GUCCI",
      price: "₹32,500",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1407987313620116&version=1757105388&transcode_extension=webp",
    },
    {
      tag: "New Arrival",
      rating: 5,
      name: "Titanium Minimal",
      brand: "LINDBERG",
      price: "₹45,000",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1168024178486427&version=1757105304&transcode_extension=webp",
    },
    {
      tag: "Bestseller",
      discount: "15% OFF",
      rating: 4.8,
      name: "Wayfarer Original",
      brand: "RAY-BAN",
      price: "₹11,500",
      oldPrice: "₹13,500",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1461704044882230&version=1757104978&transcode_extension=webp",
    },
    {
      rating: 4.7,
      name: "Square Modern",
      brand: "TOM FORD",
      price: "₹26,800",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1603252753983949&version=1757104880&transcode_extension=webp",
    },
    {
      tag: "New Arrival",
      rating: 4.9,
      name: "Butterfly Dreams",
      brand: "VERSACE",
      price: "₹29,900",
      image: "https://lookaside.fbsbx.com/elementpath/media/?media_id=756993743884005&version=1757106047&transcode_extension=webp",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: easeOut
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
        ease: easeOut
      } 
    },
  };

  const textVariants = {
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
        duration: 0.6, 
        ease: easeOut
      } 
    },
  };

  const buttonVariants = {
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
        ease: easeOut
      } 
    },
    
    tap: { scale: 0.95 },
  };

  return (
    <div className="font-['Roboto'] py-16 px-4 sm:px-6 bg-white">
      {/* Heading */}
      <motion.div 
        className="text-center mb-14 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p 
          className="text-sm uppercase tracking-widest text-gray-500"
          variants={textVariants}
        >
          PREMIUM COLLECTIONS
        </motion.p>
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mt-2"
          variants={textVariants}
        >
          Featured Eyewear
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-4 text-lg"
          variants={textVariants}
        >
          Handpicked selections from the world's most prestigious brands,
          curated for the discerning eye
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {eyewearItems.map((item, index) => (
          <motion.div
            key={index}
            className="group text-center flex flex-col items-center"
            variants={itemVariants}
            
          >
            {/* Image */}
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.name}
                className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="mt-6">
              <motion.p 
                className="text-sm text-gray-500"
                variants={textVariants}
              >
                {item.brand}
              </motion.p>
              <motion.h3 
                className="text-lg font-bold text-gray-900 mt-1"
                variants={textVariants}
              >
                {item.name}
              </motion.h3>

              {/* Price */}
              <div className="mt-2">
                <motion.span 
                  className="text-xl font-semibold text-gray-900"
                  variants={textVariants}
                >
                  {item.price}
                </motion.span>
                {item.oldPrice && (
                  <motion.span 
                    className="text-sm text-gray-400 line-through ml-2"
                    variants={textVariants}
                  >
                    {item.oldPrice}
                  </motion.span>
                )}
              </div>

              {/* Button */}
              <motion.button 
                className="mt-4 px-6 py-2 border border-gray-300 text-black font-medium hover:bg-[#f1f4f7] transition"
                variants={buttonVariants}
                
                whileTap="tap"
              >
                Shop {item.name.split(" ")[0]}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.div 
        className="text-center mt-16"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button 
          className="px-8 py-3 bg-[#775647] text-white text-base font-medium hover:bg-[#4b2a1b] transition"
          variants={buttonVariants}
          
          whileTap="tap"
        >
          Explore Full Collection →
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Eyewear;