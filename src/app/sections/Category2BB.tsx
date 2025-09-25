'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const totalCategories = categories.length;

  // Auto-rotation: Cycle order every 3 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setDisplayOrder((prev) => {
        // Rotate left: move first to end
        return [...prev.slice(1), prev[0]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Helper to check if this is the center position
  const isCenter = (index: number) => index === 1; // Middle in displayOrder (0-left, 1-center, 2-right)

  // Manual navigation function
  const navigateToCategory = (categoryId: string) => {
    setIsAutoRotating(false);
    
    // Find current index and rotate to make this category center
    const currentIndex = categories.findIndex(c => c.id === categoryId);
    const rotationsNeeded = (currentIndex - 1 + totalCategories) % totalCategories;
    let newOrder = [...categories];
    for (let i = 0; i < rotationsNeeded; i++) {
      newOrder = [...newOrder.slice(1), newOrder[0]];
    }
    setDisplayOrder(newOrder);
    
    // Resume auto-rotation after 5 seconds
    setTimeout(() => setIsAutoRotating(true), 5000);
  };

  // Framer Motion Variants (from Category3DD.tsx)
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

  // Mobile specific variants (from category_updated.tsx)
  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
  };

  const mobileButtonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="font-['Roboto'] relative overflow-x-hidden">
      <div className="min-h-auto w-full py-8 md:py-12 px-4 md:px-6 bg-white relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0"
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
            className="text-center mb-6 md:mb-10"
            variants={headingVariants}
          >
            <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Shop by Category
            </motion.h2>
            <motion.p className="text-base md:text-lg text-gray-600 mt-2">
              Our Collections
            </motion.p>
          </motion.div>

          {/* Desktop Layout - Using animations from Category3DD.tsx */}
          <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayOrder.map((category, index) => {
              const centerStyles = isCenter(index) 
                ? {
                    imgClass: "w-64 h-64 rounded-full object-cover shadow-lg mx-auto",
                    titleClass: "text-2xl font-semibold mt-6",
                    subtitleClass: "text-base text-gray-600 mt-2",
                    descClass: "text-base text-gray-500 mt-2",
                    buttonClass: "mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition",
                    extraClass: "py-4"
                  }
                : {
                    imgClass: "w-48 h-48 rounded-full object-cover shadow-md mx-auto",
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
                  className={`flex flex-col items-center text-center ${centerStyles.extraClass}`}
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
                  onClick={() => navigateToCategory(category.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={category.src}
                    alt={category.alt}
                    className={centerStyles.imgClass}
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
                    className={centerStyles.buttonClass}
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

          {/* Mobile Layout - Using animations from category_updated.tsx */}
          <div className="md:hidden">
            <div className="relative h-[420px] mb-8">
              {/* Carousel Container */}
              <div className="relative h-full">
                {displayOrder.map((category, index) => (
                  <motion.div
                    key={`mobile-${category.id}-${index}`}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                      isCenter(index) 
                        ? 'z-20 opacity-100 scale-100' 
                        : 'z-10 opacity-0 scale-90 pointer-events-none'
                    }`}
                    initial="hidden"
                    animate="visible"
                    variants={mobileItemVariants}
                  >
                    {/* Card Container */}
                    <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      {/* Image Container */}
                      <div className="flex justify-center mb-4">
                        <img
                          src={category.src}
                          alt={category.alt}
                          className="w-32 h-32 object-cover rounded-full shadow-md"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{category.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 font-medium">{category.subtitle}</p>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4 px-2">
                          {category.description}
                        </p>
                        
                        <motion.button
                          className="w-full py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md"
                          variants={mobileButtonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          Shop Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Navigation Dots */}
              {/* <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={`dot-${category.id}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      displayOrder[1]?.id === category.id 
                        ? 'bg-black scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateToCategory(category.id)}
                  />
                ))}
              </div> */}

              {/* Progress Bar */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black"
                  key={displayOrder[1]?.id}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>

            {/* Quick Category Tabs for Mobile */}
            <div className="flex justify-center space-x-3 mt-10 px-4">
              {categories.map((category) => (
                <motion.button
                  key={`tab-${category.id}`}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                    displayOrder[1]?.id === category.id
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateToCategory(category.id)}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Category2;