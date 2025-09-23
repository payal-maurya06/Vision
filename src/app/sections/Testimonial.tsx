'use client'
import React from "react";
import { motion } from "framer-motion"; // Import motion

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Advani Opticals has been my go-to for luxury eyewear for over 5 years. Their collection is unmatched and the service is exceptional.",
      name: "Priya Sharma",
      role: "Fashion Designer",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      stars: 5,
    },
    {
      quote:
        "The eye examination was thorough and professional. They helped me find the perfect frames that suit both my style and vision needs.",
      name: "Rajesh Kumar",
      role: "Business Executive",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
    },
    {
      quote:
        "Outstanding quality and service! The Visioffice technology ensured my progressive lenses were perfectly customized. Highly recommend!",
      name: "Anita Desai",
      role: "Architect",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
    },
    {
      quote:
        "Exceptional eyewear and personalized service. They truly care about their clients and their vision.",
      name: "Sneha Kapoor",
      role: "Stylist",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      stars: 5,
    },
    {
      quote:
        "Highly professional and reliable. Found the perfect lenses that fit my lifestyle and fashion sense.",
      name: "Vikram Singh",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      stars: 5,
    },
    {
      quote:
        "A fantastic experience! The team guided me to choose frames that complement my face and personality.",
      name: "Neha Gupta",
      role: "Marketing Specialist",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      stars: 5,
    },
  ];

  const renderStars = (count: number) =>
    Array.from({ length: count }, (_, i) => (
      <span
        key={i}
        className="text-yellow-400 text-lg transition-transform duration-300 hover:scale-110"
      >
        ★
      </span>
    ));

  // Framer Motion Variants (adapted from Category.tsx)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children for a nice effect
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
        ease: [0.22, 1, 0.36, 1] as const // Using cubic-bezier for easeOut
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
        ease: [0.22, 1, 0.36, 1] as const // Using cubic-bezier for easeOut
      }
    },
  };

  return (
    <div className="font-roboto px-4 py-12 md:px-6 md:py-16 bg-gray-100 text-gray-800 relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
        variants={containerVariants} // Apply container variants to the header group
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2 md:mb-4"
          variants={headingVariants} // Apply heading variants
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-600"
          variants={headingVariants} // Apply heading variants to subheading
        >
          Join thousands of satisfied customers who trust us with their vision
        </motion.p>
      </motion.div>

      {/* Left & Right fade overlays */}
      {/* These overlays might be too wide on very small screens, consider adjusting their width or making them conditional */}
      <div className="absolute top-0 z-1 left-0 h-full w-10 md:w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 z-1 right-0 h-full w-10 md:w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="overflow-hidden">
        {/* Left to Right Marquee */}
        <div className="flex animate-marquee gap-4 md:gap-8">
          {testimonials.concat(testimonials).map((t, index) => (
            <motion.div // Use motion.div for animation
              key={index}
              className="flex-shrink-0 w-72 md:w-80 p-4 md:p-6 bg-white border border-gray-100 rounded-md"
              variants={itemVariants} // Apply item variants
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Animate when 50% in view
            >
              {/* Avatar + Name */}
              <div className="flex items-center mb-3 md:mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-3 object-cover border-2 border-gray-500"
                />
                <div>
                  <p className="font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-1 md:mb-2">{renderStars(t.stars)}</div>

              {/* Quote */}
              <p className="text-gray-700 text-sm md:text-base break-words">&quot;{t.quote}&quot;</p>
            </motion.div>
          ))}
        </div>

        {/* Right to Left Marquee */}
        <div className="flex animate-marquee-reverse gap-4 md:gap-8 mt-6 md:mt-8">
          {testimonials.concat(testimonials).map((t, index) => (
            <motion.div // Use motion.div for animation
              key={index + testimonials.length}
              className="flex-shrink-0 mb-[15px] md:mb-[20px] w-72 md:w-80 p-4 md:p-6 bg-white border border-gray-100 rounded-md"
              variants={itemVariants} // Apply item variants
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Animate when 50% in view
            >
              {/* Avatar + Name */}
              <div className="flex items-center mb-3 md:mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-3 object-cover border-2 border-gray-500"
                />
                <div>
                  <p className="font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-1 md:mb-2">{renderStars(t.stars)}</div>

              {/* Quote */}
              <p className="text-gray-700 text-sm md:text-base break-words">&quot;{t.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite; /* Consider adjusting duration for mobile */
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite; /* Consider adjusting duration for mobile */
        }

        /* Optional: Adjust animation speed for smaller screens */
        @media (max-width: 768px) { /* Tailwind's 'md' breakpoint */
          .animate-marquee {
            animation-duration: 35s; /* Slower for mobile to make it readable */
          }
          .animate-marquee-reverse {
            animation-duration: 35s; /* Slower for mobile to make it readable */
          }
        }
      `}</style>
    </div>
  );
}

export default Testimonial;