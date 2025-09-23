'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  label: string;
  icon: React.ReactNode;
}

function Counting() {
  const stats: StatItem[] = [
    {
      value: 100000,
      label: "Worldwide Delivery",
      icon: (
        <img src="/icons/i_truck.png" alt="Truck icon" />
      ),
    },
    {
      value: 100000,
      label: "Satisfied Customers",
      icon: (
        <img src="/icons/i_smile.png" alt="Smile icon" />
      ),
    },
    {
      value: 20,
      label: "Excellence Awards",
      icon: (
        <img src="/icons/i_trophy.png" alt="Trophy icon" />
      ),
    },
    {
      value: 1000000,
      label: "Perfect Pairs Crafted",
      icon: (
        <img src="/icons/i_glass.png" alt="Glasses icon" />
      ),
    },
  ];

  // Framer Motion variants for container and cards
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.6 
      },
    },
  };

  return (
    <motion.div
      className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white font-['Roboto']"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
        {stats.map((stat, i) => (
          <CounterCard
            key={i}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            variants={cardVariants}
            iconVariants={iconVariants}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface CounterCardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  variants: any;
  iconVariants: any;
}

function CounterCard({ value, label, icon, variants, iconVariants }: CounterCardProps) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (val: number) => {
    if (value >= 1000000) return `${(val / 1000000).toFixed(1)}M+`;
    if (value >= 1000) return `${(val / 1000).toFixed(1)}K+`;
    return val.toString();
  };

  return (
    <motion.div
      className="flex flex-col items-center p-2 md:p-0"
      variants={variants}
    >
      <motion.div 
        className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 flex items-center justify-center bg-gray-200 rounded-full"
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 md:mb-2">
        {formatValue(count)}
      </h3>
      <p className="text-gray-600 text-base md:text-lg">{label}</p>
    </motion.div>
  );
}

export default Counting;