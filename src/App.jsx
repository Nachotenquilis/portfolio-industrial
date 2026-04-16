import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/layout/ThemeToggle';
import Sidebar from './components/layout/Sidebar';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
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
    <div className="min-h-screen grid-bg relative selection:bg-enagas-cyan selection:text-white">
      {/* Mobile Top Nav for Theme Toggle */}
      <div className="lg:hidden fixed top-0 w-full z-50 glass-panel border-b-0 px-6 py-4 flex justify-between items-center text-sm font-mono tracking-widest text-enagas-blue dark:text-enagas-cyan font-semibold">
         <span>Ignacio.</span>
         <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      </div>

      <div className="max-w-7xl mx-auto min-h-screen lg:flex">
        
        {/* Left Column: Fixed Sidebar */}
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-5/12 lg:flex lg:flex-col lg:justify-between py-12 lg:py-24 px-6 lg:pl-12 xl:pl-20">
          <div className="hidden lg:absolute lg:top-10 lg:right-6 lg:block">
             <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
          </div>
          <Sidebar />
        </header>

        {/* Right Column: Scrollable Content */}
        <main className="lg:w-7/12 py-12 lg:py-24 px-6 lg:pr-12 xl:pr-20 space-y-24">
          <section id="about" className="lg:hidden text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-16">
            Ingeniero Industrial cursando el Máster Habilitante. Me especializo en la automatización y mejora de procesos
            con el objetivo de aumentar la eficiencia operativa. Apasionado por soluciones analíticas, transición energética 
            y tecnologías low-code.
          </section>

          <Experience />
          <Skills />
          <Education />
          
          {/* Footer */}
          <footer className="pt-20 pb-8 text-center sm:text-left text-sm opacity-50">
            <p>© {new Date().getFullYear()} Ignacio Ten Quilis. Desarrollado con React y Tailwind.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
