'use client'
import React, { useEffect, useRef, useState } from "react";

function Counting() {
  const stats = [
    { 
      value: 100000, 
      label: "Worldwide Delivery",
      icon: (<div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
            <img src="/icons/i_truck.png" alt="" />
      </div>
        
      )
    },
    { 
      value: 100000, 
      label: "Satisfied Customers",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
            <img src="/icons/i_smile.png" alt="" />
      </div>
      )
    },
    { 
      value: 20, 
      label: "Excellence Awards",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
            <img src="/icons/i_trophy.png" alt="" />
      </div>
      )
    },
    { 
      value: 1000000, 
      label: "Perfect Pairs Crafted",
      icon: (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
            <img src="/icons/i_glass.png" alt="" />
      </div>
      )
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-50 to-white font-['Roboto']"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <CounterCard
            key={i}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

function CounterCard({ value, label, icon, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
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
  }, [visible, value]);

  const formatValue = (val) => {
    if (value >= 1000000) return `${(val / 1000000).toFixed(1)}M+`;
    if (value >= 1000) return `${(val / 1000).toFixed(1)}K+`;
    return val;
  };

  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="text-4xl font-extrabold text-gray-900 mb-2">{formatValue(count)}</h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
}

export default Counting;
