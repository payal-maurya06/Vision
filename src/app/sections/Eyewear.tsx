'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

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

  // Framer Motion Variants (unchanged)
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
        ease: [0.22, 1, 0.36, 1] // Professional ease-in-out
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
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  const textVariants = {
    ...itemVariants,
    transition: { duration: 0.6 },
  };

  const buttonVariants = {
    ...itemVariants,
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Scroll Trigger Refs and Controls
  const headingRef = useRef(null);
  const headingControls = useAnimation();
  const headingInView = useInView(headingRef, { threshold: 0.3, margin: "-100px 0px" });

  const gridRef = useRef(null);
  const gridControls = useAnimation();
  const gridInView = useInView(gridRef, { threshold: 0.3, margin: "-100px 0px" });

  const exploreRef = useRef(null);
  const exploreControls = useAnimation();
  const exploreInView = useInView(exploreRef, { threshold: 0.3, margin: "-100px 0px" });

  // Effects to Trigger Animations on Scroll
  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    } else {
      headingControls.set("hidden");
    }
  }, [headingInView, headingControls]);

  useEffect(() => {
    if (gridInView) {
      gridControls.start("visible");
    } else {
      gridControls.set("hidden");
    }
  }, [gridInView, gridControls]);

  useEffect(() => {
    if (exploreInView) {
      exploreControls.start("visible");
    } else {
      exploreControls.set("hidden");
    }
  }, [exploreInView, exploreControls]);

  return (
    <div className="font-['Roboto'] py-16 px-4 sm:px-6 bg-white">
      {/* Heading */}
      <motion.div 
        ref={headingRef}
        className="text-center mb-14 max-w-2xl mx-auto"
        variants={headingVariants}
        initial="hidden"
        animate={headingControls}
      >
        <motion.h3 
          className="text-sm uppercase tracking-widest text-gray-500"
          variants={textVariants}
        >
          PREMIUM COLLECTIONS
        </motion.h3>
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
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={gridControls}
      >
        {eyewearItems.map((item, index) => (
          <motion.div
            key={index}
            className="group text-center flex flex-col items-center"
            variants={itemVariants}
            whileHover="hover"
          >
            {/* Image */}
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.name}
                className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </div>

            {/* Info */}
            <motion.div 
              className="mt-6"
              // Removed variants={textVariants} from here
            >
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
              <motion.div 
                className="mt-2"
                variants={textVariants}
              >
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
              </motion.div>

              {/* Button */}
              <motion.button 
                className="mt-4 px-6 py-2 border border-gray-300 text-black font-medium hover:bg-[#f1f4f7] transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Shop {item.name.split(" ")[0]}
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.div 
        ref={exploreRef}
        className="text-center mt-16"
        variants={textVariants}
        initial="hidden"
        animate={exploreControls}
        transition={{ delay: 0.5 }}
      >
        <motion.button 
          className="px-8 py-3 bg-[#775647] text-white text-base font-medium hover:bg-[#4b2a1b] transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Explore Full Collection →
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Eyewear;