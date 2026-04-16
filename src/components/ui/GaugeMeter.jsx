import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GaugeMeter = ({ label, value }) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    // Simple animation effect on load
    const timeout = setTimeout(() => {
      setCurrentValue(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [value]);

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 group hover:border-enagas-cyan/30 transition-colors">
      <div className="relative w-20 h-20 flex justify-center items-center">
        {/* Background track */}
        <svg className="absolute top-0 left-0 w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            className="text-slate-200 dark:text-slate-700"
          />
          {/* Active progress */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-enagas-blue dark:text-enagas-cyan"
          />
        </svg>
        
        {/* Value text */}
        <div className="absolute font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
           {currentValue}%
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h4 className="font-semibold text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400">{label}</h4>
      </div>
    </div>
  );
};

export default GaugeMeter;
