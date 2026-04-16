import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 300)) {
          current = section;
        }
      }
      
      if (current !== activeSection && current !== '') {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { id: 'about', label: 'Sobre Mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Educación & Idiomas' },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-10 h-full mt-2 lg:mt-0">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image - Clean rounded */}
        <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-2 border-enagas-cyan/30 shadow-lg relative group bg-white">
           <img src="./foto-cv.jpg" alt="Ignacio Ten Quilis" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=IQ'; }} />
        </div>

        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          Ignacio <span className="text-transparent bg-clip-text bg-gradient-to-r from-enagas-blue to-enagas-cyan">Ten Quilis</span>
        </h1>
        <h2 className="text-lg lg:text-xl font-medium text-slate-700 dark:text-slate-300">
          Ingeniero Industrial & Automatización
        </h2>
        
        <p className="mt-8 text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-sm hidden lg:block text-justify">
          Me especializo en la automatización y mejora de procesos
          con el objetivo de aumentar la eficiencia operativa. Apasionado por soluciones analíticas, transición energética 
          y tecnologías low-code.
        </p>
      </motion.div>

      {/* Navigation - Hidden on Mobile */}
      <nav className="hidden lg:flex flex-col gap-5 mt-10 uppercase text-xs font-bold tracking-widest text-slate-500">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`flex items-center gap-4 w-max group transition-colors focus:outline-none ${
              activeSection === link.id ? 'text-enagas-blue dark:text-enagas-cyan' : 'hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <span className={`h-[2px] transition-all duration-500 ease-out bg-current ${activeSection === link.id ? 'w-16' : 'w-6 group-hover:w-16'}`}></span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Contact Info Footer on Sidebar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-auto pt-8 flex flex-col gap-4 font-mono text-xs text-slate-500 dark:text-slate-400"
      >
        <a href="mailto:nachotenquilis@gmail.com" className="flex items-center gap-3 hover:text-enagas-blue dark:hover:text-enagas-cyan transition-colors w-max group">
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>nachotenquilis@gmail.com</span>
        </a>
        <div className="flex items-center gap-3 group">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>Arriaga 55, 6ºD, Madrid</span>
        </div>
        
        <div className="flex gap-5 mt-6">
           <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-enagas-blue dark:hover:text-enagas-cyan hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
           </a>
           <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-slate-800 dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Github className="w-6 h-6" />
           </a>
           <a href="#" aria-label="Resume" className="text-slate-400 hover:text-enagas-cyan hover:-translate-y-1 transition-all duration-300">
              <FileText className="w-6 h-6" />
           </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Sidebar;
