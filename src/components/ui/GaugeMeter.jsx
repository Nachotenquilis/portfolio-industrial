import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const GaugeMeter = ({ label, value }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setCurrentValue(value);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value]);

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentValue / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-5 bg-white dark:bg-[#071626] rounded-2xl border border-slate-200 dark:border-slate-800/80 group hover:border-enagas-cyan/40 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(0,169,224,0.05)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-20 h-20 flex justify-center items-center">
        {/* Background track */}
        <svg className="absolute top-0 left-0 w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="5"
            className="text-slate-100 dark:text-slate-800"
          />
          {/* Active progress */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-enagas-blue dark:text-enagas-cyan"
          />
        </svg>
        
        {/* Value text */}
        <div className="absolute font-mono text-sm font-bold text-slate-800 dark:text-slate-200 drop-shadow-sm">
           {currentValue}%
        </div>
      </div>
      
      <div className="mt-5 text-center">
        <h4 className="font-semibold text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:text-enagas-blue dark:group-hover:text-enagas-cyan transition-colors">{label}</h4>
      </div>
    </div>
  );
};

export default GaugeMeter;
