'use client'
import React from "react";
import { motion } from "framer-motion";

function About() {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10, filter: "blur(3px)" },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full font-roboto text-gray-800 px-4 md:px-6 py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants as any}
      role="main"
      aria-labelledby="about-heading"
    >
      {/* SEO: Structured Data (JSON-LD) - Invisible, enhances local business visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Shreya Vision Care",
            description: "Optometry-led clinic and optical retail center in Aligarh providing advanced eye care.",
            url: "https://www.shreyavisioncare.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Aligarh",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            },
            founder: {
              "@type": "Person",
              name: "Optometrist Ashish Bhatnagar"
            },
            knowsAbout: ["Eye Exams", "Myopia Management", "Eyewear Lenses", "International Eyewear"],
            openingHours: "Mo-Su 09:00-20:00",
            priceRange: "$$"
          }),
        }}
      />

      {/* Diagonal Stripes Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">

        {/* Image Section - Order changed for mobile */}
        <motion.div
          className="relative w-full h-auto overflow-hidden order-1 md:order-1"
          variants={imageVariants as any}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/mockups/m_1.png"
            alt="Shreya Vision Care Eye Clinic in Aligarh - Advanced optometry and eyewear services"
            className="w-full h-auto max-h-80 md:max-h-none object-cover transform transition-transform duration-500 hover:scale-105 rounded-lg md:rounded-none"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section - Order changed for mobile */}
        <motion.div
          className="flex flex-col justify-center bg-gray-50 p-6 md:p-10 h-full order-2 md:order-2"
          variants={staggerContainer as any}
          aria-labelledby="about-heading"
        >
          {/* Badge */}
          <motion.span
            className="inline-block bg-[#775647]/10 text-[#775647] px-3 md:px-4 py-1 text-xs md:text-sm font-medium tracking-wide mb-3 md:mb-4 w-max"
            variants={badgeVariants as any}
            lang="en"
          >
            Trusted Eye Care in Aligarh
          </motion.span>

          <motion.h2
            id="about-heading"
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900"
            variants={textVariants as any}
          >
            About Shreya Vision Care
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed"
            variants={textVariants as any}
          >
            <span className="font-semibold">Shreya Vision Care</span> is an
            optometry-led clinic and optical retail center in{" "}
            <span className="font-semibold">Aligarh</span>, founded by{" "}
            <span className="font-semibold">Optometrist Ashish Bhatnagar</span>.
            We provide advanced eye care with modern technology and expert
            clinical knowledge.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-gray-700 space-y-1 mb-3 md:mb-4 text-sm md:text-base"
            variants={staggerContainer as any}
          >
            {[
              "Eye exams for all age groups",
              "Myopia management for children",
              "Progressive, occupational & single-vision lenses",
              "International eyewear collections"
            ].map((item, i) => (
              <motion.li
                key={i}
                className="leading-relaxed"
                variants={listItemVariants as any}
                custom={i}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6"
            variants={textVariants as any}
          >
            Our focus is on accurate prescriptions, advanced protection, and
            clear, comfortable vision for every patient.
          </motion.p>

          <motion.h3
            className="text-base md:text-lg font-semibold text-[#775647] mb-4 md:mb-6"
            variants={textVariants as any}
          >
            Shreya Vision Care – Where Optometry Meets Excellence.
          </motion.h3>

          {/* Read More Button */}
          <motion.button
            className="px-4 md:px-6 py-2 border border-gray-700 text-gray-700 font-medium text-sm md:text-base hover:bg-[#775647] hover:text-white transition-colors w-full md:w-max"
            variants={buttonVariants as any}
            whileHover="hover"
            aria-label="Read more about Shreya Vision Care"
          >
            Read More →
          </motion.button>
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

export default About;