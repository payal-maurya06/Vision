'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CategoryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

function Category2() {
  // Category data with unique IDs
  const categories: CategoryItem[] = [
    {
      id: 'sunglasses',
      src: "https://media.glamour.com/photos/66632fd8a10b3df87c4fcd39/2:3/w_2307,h_3460,c_limit/1980402531",
      alt: "Sunglasses",
      title: "Sunglasses",
      subtitle: "UV Protection & Style",
      description: "Discover iconic designs from Ray-Ban, Gucci, and more"
    },
    {
      id: 'prescription',
      src: "https://assets2.glassesdirect.com/cdn-record-files/dressedon/ad4d8938-1bba-4569-9395-b28700c1e0c1/0RX6541__2501__SHOOT__om4.png?impolicy=GD_Resize_New&q=85&im=Resize%2Cwidth%3D500%2Cheight%3D600%2Caspect%3Dfill%3BUnsharpMask%2Csigma%3D1.0%2Cgain%3D1.0",
      alt: "Prescription Glasses",
      title: "Prescription Glasses",
      subtitle: "Vision & Fashion",
      description: "Premium frames with precision lenses"
    },
    {
      id: 'contacts',
      src: "https://media.opsm.com/s7/contact-lenses_tips-750x600.jpg",
      alt: "Contact Lenses",
      title: "Contact Lenses",
      subtitle: "Comfort & Clarity",
      description: "Daily, monthly & colored options"
    }
  ];

  // State for rotation (current starting index for cycling)
  const [displayOrder, setDisplayOrder] = useState<CategoryItem[]>(categories);
  // const totalCategories = categories.length;

  // Auto-rotation: Cycle order every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayOrder((prev) => {
        // Rotate left: move first to end
        return [...prev.slice(1), prev[0]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Helper to check if this is the center position
  const isCenter = (index: number) => index === 1; // Middle in displayOrder (0-left, 1-center, 2-right)

  // Framer Motion Variants (original preserved)
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

          {/* Grid Layout - Unchanged, but center card content sized larger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayOrder.map((category, index) => {
              const centerStyles = isCenter(index) 
                ? {
                    imgClass: "w-64 h-64 rounded-full object-cover shadow-lg mx-auto", // Bigger image + shadow
                    titleClass: "text-2xl font-semibold mt-6", // Larger title, more margin
                    subtitleClass: "text-base text-gray-600 mt-2", // Slightly larger
                    descClass: "text-base text-gray-500 mt-2", // Adjusted for balance
                    buttonClass: "mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition", // Wider button
                    extraClass: "py-4" // Extra padding for taller card feel
                  }
                : {
                    imgClass: "w-48 h-48 rounded-full object-cover shadow-md mx-auto", // Original side size
                    titleClass: "text-xl font-semibold mt-4",
                    subtitleClass: "text-gray-600 mt-1",
                    descClass: "text-sm text-gray-500 mt-1",
                    buttonClass: "mt-4 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition",
                    extraClass: ""
                  };

              return (
                <motion.div
                  key={category.id}
                  layoutId={category.id}
                  className={`flex flex-col items-center text-center ${centerStyles.extraClass}`} // Original + extra padding if center
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                  transition={{
                    layout: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1] as const
                    }
                  }}
                >
                  <Image
                    src={category.src}
                    alt={category.alt}
                    className={centerStyles.imgClass} // Conditional size
                    loading="lazy"
                  />
                  <motion.h3 className={centerStyles.titleClass} variants={itemVariants}>
                    {category.title}
                  </motion.h3>
                  <motion.p className={centerStyles.subtitleClass} variants={itemVariants}>
                    {category.subtitle}
                  </motion.p>
                  <motion.p className={centerStyles.descClass} variants={itemVariants}>
                    {category.description}
                  </motion.p>
                  <motion.button
                    className={centerStyles.buttonClass} // Conditional size
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Optional Navigation Dots - Below grid, unchanged positioning (commented) */}
          {/* 
          <div className="flex justify-center mt-8 space-x-2 col-span-full">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  // Rotate to make this the center (index 1)
                  const targetIndex = categories.findIndex(c => c.id === category.id);
                  let newOrder = [...categories];
                  const rotationsNeeded = (targetIndex - 1 + totalCategories) % totalCategories;
                  for (let i = 0; i < rotationsNeeded; i++) {
                    newOrder = [...newOrder.slice(1), newOrder[0]];
                  }
                  setDisplayOrder(newOrder);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  displayOrder[1]?.id === category.id ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          */}
        </motion.div>
      </div>
    </div>
  );
}

export default Category2;