'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "@/app/globals.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero/hero_2.jpg",
      title: "ELEVATE YOUR STYLE",
      subtitle: "Premium Sunglasses Collection",
      description: "Discover our exclusive range of designer sunglasses that combine style with UV protection.",
    },
    {
      image: "/hero/hero_1.jpg",
      title: "SUMMER ESSENTIALS",
      subtitle: "New Arrivals Just Landed",
      description: "Be the first to explore our latest summer collection with limited-time introductory offers.",
    },
    {
      image: "https://luxreaders.co.uk/cdn/shop/files/Transpar_1024x1024.png?v=1648571558",
      title: "LIMITED EDITION",
      subtitle: "Stand Out From The Crowd",
      description: "Express your unique personality with our exclusive limited edition designer frames.",
    },
  ];

  // Framer Motion Variants with proper easing types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] as const 
      } 
    },
  };

  // Button variants
  const leftButtonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 2, 
        ease: [0.22, 1, 0.36, 1] as const 
      } 
    },
  };

  const rightButtonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 2, 
        ease: [0.22, 1, 0.36, 1] as const 
      } 
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen h-screen w-full bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      {/* Slide Image */}
      <motion.img
        key={currentSlide}
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl px-4 sm:px-6 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.h2 
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-6"
        >
          {slides[currentSlide].subtitle}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="mb-8 text-base sm:text-lg max-w-3xl mx-auto"
        >
          {slides[currentSlide].description}
        </motion.p>

        {/* Buttons with left-right animation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            variants={leftButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#775647] hover:bg-[#4b2a1b] font-semibold transition-colors"
          >
            SHOP NOW
          </motion.button>

          <motion.button 
            variants={rightButtonVariants}
            initial="hidden"
            animate="visible"
            
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-[#775647] font-semibold transition-colors"
          >
            VIEW COLLECTION
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;