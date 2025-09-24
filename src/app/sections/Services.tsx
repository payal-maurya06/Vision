'use client'
import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Prescription Eyewear",
      description:
        "Premium prescription eyewear with unmatched expertise. Choose from top global brands like Gucci, Prada, Burberry, paired with best-in-class lenses.",
      buttonText: "Explore More",
      image:
        "https://gmsunglasses.com/wp-content/uploads/2021/05/Hero_Article_EnUK_FAQ-Reading-Glasses-Power.jpg",
    },
    {
      title: "Comprehensive Eye Exam",
      description:
        "State-of-the-art Visioffice® technology ensures perfect vision. Advanced system crafts lenses tailored to your unique needs.",
      buttonText: "Book Now",
      image:
        "https://cdn.prod.website-files.com/5ff8126e9f80b718dc63f907/651ade6e0c9e1fd2266cd229_do-s-and-don-ts-before-eye-exam-how-to-prepare-for-an-eye-exam.webp",
    },
    {
      title: "Contact Lenses",
      description:
        "Personalized consultations for perfect fit. Choose from Acuvue, Bausch + Lomb, Alcon, CooperVision, and more top brands.",
      buttonText: "Shop Now",
      image:
        "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/10737-contacts",
    },
  ];

  // Framer Motion variants for animations with proper easing types
  const headerVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] as const // easeOutQuad
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // easeOutQuad
        delay: i * 0.2, // Staggered entrance
      },
    }),
  };


  return (
    <div className="relative min-h-auto w-full font-roboto px-4 py-16 text-gray-800 overflow-hidden md:px-6">
      {/* SEO: Structured Data (JSON-LD) - Invisible to users, helps search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vision Care Services",
            provider: {
              "@type": "Organization",
              name: "Your Eyewear Store", // Replace with actual business name
            },
            serviceType: "Eye Care",
            areaServed: "Local Area", // Customize as needed
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Eyewear and Exam Services",
              itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
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
      <div className="relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={headerVariants}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            variants={headerVariants}
          >
            Experience world-class vision care with cutting-edge technology and
            personalized service
          </motion.p>
        </motion.div>

        {/* Services Grid - Horizontal scroll for mobile, grid for desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 gap-6 max-w-6xl mx-auto md:grid md:grid-cols-3 md:gap-10 md:overflow-x-hidden md:pb-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[80vw] max-w-sm snap-center overflow-hidden flex flex-col justify-between transition-shadow duration-500 group cursor-pointer bg-white md:w-auto md:max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              custom={index}
              
              transition={{ duration: 0.3 }}
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Image with gradient overlay and title */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Professional eye care service`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <motion.h3
                  id={`service-title-${index}`}
                  className="absolute bottom-4 left-4 text-white text-2xl font-light"
                  initial={{ opacity: 0, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <motion.p
                  className="mb-6 flex-grow text-gray-700"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {service.description}
                </motion.p>
                <motion.button
                  className="mt-auto px-4 py-2 border border-gray-700 text-gray-700 font-medium hover:bg-[#775647] hover:text-white transition-colors flex items-center gap-2 w-max"
                  
                  
                  aria-label={`Learn more about ${service.title}`}
                >
                  {service.buttonText} <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Respect reduced motion for accessibility */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* Custom scrollbar hide for webkit browsers */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default Services;