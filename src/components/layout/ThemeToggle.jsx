import React from 'react';
import { motion } from 'framer-motion';
import { Power, Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <div className="flex items-center gap-3">
      <Sun className={`w-4 h-4 ${!isDark ? 'text-safety-orange' : 'text-industrial-500'}`} />
      <button 
        onClick={toggle}
        className="w-16 h-8 rounded-full bg-industrial-800 dark:bg-industrial-200 relative shadow-inner p-1 cursor-pointer outline-none focus:ring-2 focus:ring-safety-blue transition-colors"
        aria-label="Toggle Theme"
      >
        <motion.div 
          className="w-6 h-6 rounded-full bg-industrial-200 dark:bg-industrial-800 shadow flex items-center justify-center pointer-events-none"
          animate={{ x: isDark ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <Power className="w-4 h-4 text-industrial-800 dark:text-safety-blue" />
        </motion.div>
      </button>
      <Moon className={`w-4 h-4 ${isDark ? 'text-safety-blue neon-text-blue' : 'text-industrial-500'}`} />
    </div>
  );
};

export default ThemeToggle;
