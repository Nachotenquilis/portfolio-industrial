import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          {t.title}
        </h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="clean-card p-8 lg:p-10 relative overflow-hidden group"
        >
          {/* Glow accent */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-enagas-cyan/10 blur-3xl rounded-full pointer-events-none group-hover:bg-enagas-cyan/20 transition-all duration-700"></div>

          <h3 className="hidden lg:block text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">{t.subtitle}</h3>
          
          <div className="prose prose-slate dark:prose-invert prose-sm sm:prose-base leading-relaxed text-justify max-w-none text-slate-600 dark:text-slate-400">
            {t.paragraphs.map((p, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default About;
