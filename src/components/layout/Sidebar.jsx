import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'skills', 'education'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 300)) {
          current = section;
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Educación & Idiomas' },
  ];

  return (
    <div className="flex flex-col gap-6 lg:gap-10 h-full mt-10 lg:mt-0">
      
      <div>
        {/* Profile Image - Clean rounded */}
        <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-2 border-enagas-cyan/30 shadow-md">
           <img src="/foto-cv.jpg" alt="Ignacio Ten Quilis" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=IQ'; }} />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Ignacio <span className="text-enagas-blue dark:text-enagas-cyan">Ten Quilis</span>
        </h1>
        <h2 className="mt-3 text-lg lg:text-xl font-medium text-slate-700 dark:text-slate-300">
          Ingeniero Industrial & Automatización
        </h2>
        
        <p className="mt-6 text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-sm hidden lg:block">
          Ingeniero Industrial cursando el Máster Habilitante. Me especializo en la automatización y mejora de procesos
          con el objetivo de aumentar la eficiencia operativa. Apasionado por soluciones analíticas, transición energética 
          y tecnologías low-code.
        </p>
      </div>

      {/* Navigation - Hidden on Mobile */}
      <nav className="hidden lg:flex flex-col gap-4 mt-8 uppercase text-xs font-bold tracking-widest text-slate-500">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`flex items-center gap-3 w-max group transition-colors focus:outline-none ${
              activeSection === link.id ? 'text-enagas-blue dark:text-enagas-cyan' : 'hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <span className={`h-px transition-all duration-300 bg-current ${activeSection === link.id ? 'w-12' : 'w-6 group-hover:w-12'}`}></span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Contact Info Footer on Sidebar */}
      <div className="mt-auto pt-8 flex flex-col gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2 hover:text-enagas-blue transition-colors">
          <Mail className="w-4 h-4" />
          <a href="mailto:nachotenquilis@gmail.com">nachotenquilis@gmail.com</a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Arriaga 55, 6ºD, Madrid (España)</span>
        </div>
        
        <div className="flex gap-4 mt-4">
           {/* If you have linkedin/github pass actual links here */}
           <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-enagas-blue/10 dark:hover:bg-enagas-cyan/10 hover:text-enagas-blue dark:hover:text-enagas-cyan transition-colors">
              <Linkedin className="w-4 h-4" />
           </a>
           <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-enagas-blue/10 dark:hover:bg-enagas-cyan/10 hover:text-enagas-blue dark:hover:text-enagas-cyan transition-colors">
              <Github className="w-4 h-4" />
           </a>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
