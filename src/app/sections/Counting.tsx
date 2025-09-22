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
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
          <img src="/icons/i_truck.png" alt="Truck icon" />
        </div>
      ),
    },
    {
      value: 100000,
      label: "Satisfied Customers",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
          <img src="/icons/i_smile.png" alt="Smile icon" />
        </div>
      ),
    },
    {
      value: 20,
      label: "Excellence Awards",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
          <img src="/icons/i_trophy.png" alt="Trophy icon" />
        </div>
      ),
    },
    {
      value: 1000000,
      label: "Perfect Pairs Crafted",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
          <img src="/icons/i_glass.png" alt="Glasses icon" />
        </div>
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

  return (
    <motion.div
      className="py-20 bg-gradient-to-r from-gray-50 to-white font-['Roboto']"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <CounterCard
            key={i}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            variants={cardVariants}
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
}

function CounterCard({ value, label, icon, variants }: CounterCardProps) {
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
      className="flex flex-col items-center"
      variants={variants}
    >
      {icon}
      <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
        {formatValue(count)}
      </h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </motion.div>
  );
}

export default Counting;