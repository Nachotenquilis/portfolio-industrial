import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/layout/ThemeToggle';
import Sidebar from './components/layout/Sidebar';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import About from './components/sections/About';
import MouseGlow from './components/layout/MouseGlow';
import ParticleBackground from './components/layout/ParticleBackground';
import { motion } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

function App() {
  const [isDark, setIsDark] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].footer;

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen grid-bg relative selection:bg-enagas-cyan selection:text-white transition-colors duration-700">
      <ParticleBackground />
      <MouseGlow />
      
      {/* Mobile Top Nav */}
      <div className="lg:hidden fixed top-0 w-full z-50 glass-panel border-b-0 px-6 py-4 flex justify-between items-center text-sm font-mono tracking-widest text-enagas-blue dark:text-enagas-cyan font-bold backdrop-blur-xl">
         <span>Ignacio.</span>
         <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      </div>

      <div className="max-w-7xl mx-auto min-h-screen lg:flex relative z-10">
        
        {/* Left Column: Fixed Sidebar */}
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-5/12 lg:flex lg:flex-col lg:justify-between py-12 lg:py-24 px-6 lg:pl-12 xl:pl-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          <Sidebar />
        </header>

        {/* Right Column: Scrollable Content */}
        <main className="lg:w-7/12 pt-24 lg:pt-24 pb-12 px-6 lg:pr-12 xl:pr-20 space-y-20">
          
          <Experience />
          <Skills />
          <Education />
          <About />
          
          {/* Footer */}
          <footer className="pt-10 pb-8 text-center sm:text-left text-sm opacity-60 font-mono">
            <p className="flex items-center justify-center sm:justify-start gap-2">
               <span className="w-2 h-2 rounded-full bg-enagas-cyan animate-pulse"></span>
               © {new Date().getFullYear()} Ignacio Ten Quilis. {t.developedWith}
            </p>
          </footer>
        </main>
      </div>

      <div className="hidden lg:block fixed top-8 right-8 z-50">
        <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      </div>

    </div>
  );
}

export default App;
