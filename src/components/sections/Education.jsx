import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const EducationCard = ({ title, institution, period, bullets, extra, logoUrl, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="group relative clean-card p-6 flex flex-col h-full bg-white dark:bg-[#071626] border border-slate-200 dark:border-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(0,169,224,0.05)] hover:border-enagas-cyan/40"
  >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-sm md:text-base pr-2 text-slate-800 dark:text-slate-200 group-hover:text-enagas-blue dark:group-hover:text-enagas-cyan transition-colors leading-tight">
          {title}
        </h3>
        {logoUrl && (
          <div className="w-10 h-10 rounded-md flex-shrink-0 flex items-center justify-center bg-white p-1 shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden ml-2 group-hover:scale-105 transition-transform duration-300">
             <img src={logoUrl} alt={`${institution} logo`} className="w-full h-full object-contain" />
          </div>
        )}
      </div>
      <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mb-5">{institution} <span className="opacity-40 px-1">/</span> {period}</p>
      
      {bullets && bullets.length > 0 && (
         <ul className="text-[13px] text-slate-600 dark:text-slate-400 space-y-2 mb-6 list-none flex-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                 <span className="text-enagas-cyan/50 mt-1">▹</span>
                 <span className="leading-relaxed">{b}</span>
              </li>
            ))}
         </ul>
      )}

      {extra && (
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <span className="font-mono text-[10px] uppercase tracking-wider text-enagas-blue dark:text-enagas-cyan font-bold bg-enagas-blue/10 dark:bg-enagas-cyan/10 px-2.5 py-1.5 rounded-sm">
            {extra}
          </span>
        </div>
      )}
  </motion.div>
);

const Education = () => {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language].education;

  return (
    <section id="education" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden backdrop-blur-md">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          {t.title}
        </h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
        >
          {t.items.map((item, index) => (
            <EducationCard 
              key={index}
              title={item.title}
              institution={item.institution}
              period={item.period}
              extra={item.extra}
              bullets={item.bullets}
              logoUrl={translations.es.education.items[index].logoUrl} // Logos stay the same
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Languages Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">{t.langs_title}</h3>
        <div className="flex flex-wrap gap-4 text-sm font-mono">
           {t.languages.map((lang) => (
             <motion.div 
               key={lang.id}
               onClick={() => switchLanguage(lang.id)}
               whileHover={{ 
                 y: -2,
                 boxShadow: "0 0 20px rgba(0, 169, 224, 0.2)",
                 borderColor: "rgba(0, 169, 224, 0.4)",
                 backgroundColor: "rgba(0, 169, 224, 0.05)"
               }}
               className={`px-5 py-2.5 rounded-lg font-medium border transition-all cursor-pointer select-none ${
                 language === lang.id 
                 ? 'bg-enagas-blue/10 dark:bg-enagas-cyan/20 text-enagas-blue dark:text-enagas-cyan border-enagas-cyan/40 shadow-sm' 
                 : 'bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
               }`}
             >
                {lang.name} <span className={`font-normal text-xs ml-1 ${language === lang.id ? 'opacity-100' : 'opacity-40'}`}>({lang.level})</span>
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
