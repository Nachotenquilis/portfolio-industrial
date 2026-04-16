import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/layout/ThemeToggle';
import Hero from './components/sections/Hero';
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
    <div className="min-h-screen grid-bg relative overflow-x-hidden">
      {/* Top Navigation Bar / Diagnostics Panel */}
      <nav className="fixed top-0 w-full z-50 metallic-panel border-b-0 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-safety-orange animate-pulse"></div>
            <span className="font-mono font-bold tracking-wider text-sm dark:text-safety-blue">SYS.CTRL // TEN_QUILIS</span>
          </div>
          <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 pb-12 max-w-5xl mx-auto px-4 space-y-24">
        <Hero isDark={isDark} />
        <Experience />
        <Skills />
        <Education />
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center border-t border-industrial-300 dark:border-industrial-700 font-mono text-sm opacity-60">
        <p>SYSTEM INITIATED // {new Date().getFullYear()} © IGNACIO TEN QUILIS</p>
      </footer>
    </div>
  );
}

export default App;
