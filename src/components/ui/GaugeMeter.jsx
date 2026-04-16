import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GaugeMeter = ({ label, value, color = "var(--color-safety-orange)" }) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    // Simple animation effect on load
    const timeout = setTimeout(() => {
      setCurrentValue(value);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  // Calculations for SVG arc (half circle)
  const radius = 40;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (currentValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4 metallic-panel rounded-lg w-full max-w-[150px] mx-auto group">
      <div className="relative w-24 h-16 flex justify-center overflow-hidden">
        {/* Background track */}
        <svg className="absolute top-0 w-24 h-24" viewBox="0 0 100 100">
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            className="text-industrial-300 dark:text-industrial-700 opacity-50"
          />
          {/* Active arc */}
          <motion.path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </svg>
        
        {/* Needle */}
        <motion.div 
          className="absolute bottom-0 w-1 h-12 bg-industrial-900 dark:bg-industrial-100 rounded-full origin-bottom z-10"
          initial={{ rotate: -90 }}
          animate={{ rotate: -90 + (currentValue / 100) * 180 }}
          transition={{ duration: 1.5, ease: "easeOut", type: "spring", damping: 15 }}
        >
           {/* Center dot */}
           <div className="absolute -bottom-1 -left-1.5 w-4 h-4 bg-industrial-800 dark:bg-industrial-200 rounded-full border-2 border-industrial-400"></div>
        </motion.div>
        
        {/* Value text */}
        <div className="absolute bottom-1 w-full text-center font-mono text-xs font-bold z-0">
           {currentValue}%
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <h4 className="font-bold text-xs uppercase tracking-wide no-wrap">{label}</h4>
      </div>
    </div>
  );
};

export default GaugeMeter;
