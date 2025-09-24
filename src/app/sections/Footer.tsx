// ./src/app/sections/Footer.tsx
'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

function Footer() {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
    hover: {
      color: "#ffffff",
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const, delay: i * 0.1 },
    }),
    hover: {
      opacity: 0.8,
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeInOut" as const },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const bottomBarVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.8 },
    },
  };

  return (
    <motion.footer
      className="bg-black/95 text-gray-100 font-roboto px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      role="contentinfo"
      aria-label="Footer with business information, links, and social media"
    >
      {/* SEO: Structured Data (JSON-LD) - Invisible, enhances business and contact visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Shreya Vision Care",
            description: "Optometry-led eye clinic and optical retail center in Aligarh",
            url: "https://www.shreyavisioncare.com", // Replace with actual URL
            logo: "https://via.placeholder.com/150x50?text=Shreya+Vision+Care", // Replace with actual logo URL
            address: {
              "@type": "PostalAddress",
              streetAddress: "Marris Road, Civil Lines",
              addressLocality: "Aligarh",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-12345-67890", // Customize phone number
              contactType: "customer service",
              email: "info@shreyavisioncare.com" // Customize email
            },
            sameAs: [
              "https://www.facebook.com/shreyavisioncare", // Replace with actual profiles
              "https://www.instagram.com/shreyavisioncare",
              "https://twitter.com/shreyavisioncare",
              "https://www.linkedin.com/company/shreyavisioncare"
            ]
          }),
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10"
        variants={gridVariants}
      >
        {/* Logo & About */}
        <motion.div className="flex flex-col" variants={columnVariants} custom={0}>
          <motion.div variants={logoVariants}>
            <Image // Used Next.js Image component
              src="/logo/logo.png" // Replace with actual logo URL
              alt="Shreya Vision Care Logo - Optometry clinic in Aligarh"
              width={128} // Equivalent to w-32 (32 * 4 = 128px)
              height={40} // Adjust height as needed
              className="w-32 mb-4"
              loading="lazy" // SEO: Lazy loading for performance
            />
          </motion.div>
          <motion.p className="text-gray-300 text-sm" variants={textVariants}>
            Shreya Vision Care is an optometry-led eye clinic and optical retail center in Aligarh, providing advanced eye care with modern technology and expert clinical knowledge.
          </motion.p>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="flex flex-col" variants={columnVariants} custom={1}>
          <motion.h3 className="font-semibold mb-4" variants={textVariants}>
            Quick Links
          </motion.h3>
          <motion.a
            href="#about"
            className="text-gray-300 mb-2 hover:text-white transition-colors"
            variants={linkVariants}
            whileHover="hover"
            aria-label="Navigate to About Us section"
          >
            About Us
          </motion.a>
          <motion.a
            href="#services"
            className="text-gray-300 mb-2 hover:text-white transition-colors"
            variants={linkVariants}
            whileHover="hover"
            aria-label="Navigate to Services section"
          >
            Services
          </motion.a>
          <motion.a
            href="#visit"
            className="text-gray-300 mb-2 hover:text-white transition-colors"
            variants={linkVariants}
            whileHover="hover"
            aria-label="Navigate to Visit Us section"
          >
            Visit Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-300 mb-2 hover:text-white transition-colors"
            variants={linkVariants}
            whileHover="hover"
            aria-label="Navigate to Contact section"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="flex flex-col" variants={columnVariants} custom={2}>
          <motion.h3 className="font-semibold mb-4" variants={textVariants}>
            Contact
          </motion.h3>
          <motion.p className="text-gray-300 mb-2" variants={textVariants}>
            Marris Road, Civil Lines, Aligarh
          </motion.p>
          <motion.p className="text-gray-300 mb-2" variants={textVariants}>
            +91 12345 67890
          </motion.p>
          <motion.p className="text-gray-300 mb-2" variants={textVariants}>
            ✉ info@shreyavisioncare.com
          </motion.p>
        </motion.div>

        {/* Social Media Images */}
        <motion.div className="flex flex-col" variants={columnVariants} custom={3}>
          <motion.h3 className="font-semibold mb-4" variants={textVariants}>
            Follow Us
          </motion.h3>
          <div className="flex gap-4">
            <motion.a
              key="facebook"
              href="#"
              className="hover:opacity-80 transition-opacity"
              variants={socialVariants}
              custom={0}
              whileHover="hover"
              rel="nofollow noopener"
              aria-label="Follow Shreya Vision Care on Facebook"
              target="_blank"
            >
              <Image // Used Next.js Image component
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo - Follow Shreya Vision Care on Facebook"
                width={24} // Equivalent to w-6
                height={24} // Equivalent to h-6
                className="w-6 h-6"
                loading="lazy"
              />
            </motion.a>
            <motion.a
              key="instagram"
              href="#"
              className="hover:opacity-80 transition-opacity"
              variants={socialVariants}
              custom={1}
              whileHover="hover"
              rel="nofollow noopener"
              aria-label="Follow Shreya Vision Care on Instagram"
              target="_blank"
            >
              <Image // Used Next.js Image component
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram logo - Follow Shreya Vision Care on Instagram"
                width={24} // Equivalent to w-6
                height={24} // Equivalent to h-6
                className="w-6 h-6"
                loading="lazy"
              />
            </motion.a>
            <motion.a
              key="twitter"
              href="#"
              className="hover:opacity-80 transition-opacity"
              variants={socialVariants}
              custom={2}
              whileHover="hover"
              rel="nofollow noopener"
              aria-label="Follow Shreya Vision Care on Twitter"
              target="_blank"
            >
              <Image // Used Next.js Image component
                src="/footer/twitter.png"
                alt="Twitter logo - Follow Shreya Vision Care on Twitter"
                width={24} // Equivalent to w-6
                height={24} // Equivalent to h-6
                className="w-6 h-6"
                loading="lazy"
              />
            </motion.a>
            <motion.a
              key="linkedin"
              href="#"
              className="hover:opacity-80 transition-opacity"
              variants={socialVariants}
              custom={3}
              whileHover="hover"
              rel="nofollow noopener"
              aria-label="Follow Shreya Vision Care on LinkedIn"
              target="_blank"
            >
              <Image // Used Next.js Image component
                src="/footer/linkedin.png"
                alt="LinkedIn logo - Follow Shreya Vision Care on LinkedIn"
                width={24} // Equivalent to w-6
                height={24} // Equivalent to h-6
                className="w-6 h-6"
                loading="lazy"
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
        variants={bottomBarVariants}
      >
        © {new Date().getFullYear()} Shreya Vision Care. All rights reserved.
      </motion.div>

      {/* Respect reduced motion for accessibility */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.footer>
  );
}

export default Footer;