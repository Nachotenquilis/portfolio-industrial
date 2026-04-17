import React, { useState } from 'react';
import GaugeMeter from '../ui/GaugeMeter';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  
  const [automationValue, setAutomationValue] = useState(85);
  const [clickCount, setClickCount] = useState(0);
  const controls = useAnimation();

  const handleAutomationClick = async () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 10) {
      setAutomationValue(86);
      await controls.start({
        scale: [1, 1.3, 0.9, 1.1, 1],
        rotate: [0, 10, -10, 5, -5, 0],
        transition: { duration: 0.6 }
      });
    } else {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.2 }
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="scroll-mt-24 mb-10">
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
          className="mb-10"
        >
           <p className="text-sm text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed text-justify">
             {t.description}
           </p>
        </motion.div>
      </AnimatePresence>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
      >
        <motion.div 
          variants={item}
          animate={controls}
          onClick={handleAutomationClick}
          className="cursor-pointer select-none"
        >
          <GaugeMeter label={t.gauges.automation} value={automationValue} />
        </motion.div>
        <motion.div variants={item}><GaugeMeter label={t.gauges.powerplatform} value={90} /></motion.div>
        <motion.div variants={item}><GaugeMeter label={t.gauges.gas} value={75} /></motion.div>
        <motion.div variants={item}><GaugeMeter label={t.gauges.problem_solving} value={95} /></motion.div>
      </motion.div>

      {/* Tech tags */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap gap-2.5"
      >
         {[
           { name: 'Sharepoint', img: './sharepoint.png' },
           { name: 'PowerBI', img: './powerbi.png' },
           { name: 'PowerAutomate', img: './powerautomate.png' },
           { name: 'Copilot', img: './copilot.png' },
           { name: 'PowerApps', img: './powerapps.png' },
           { name: 'Excel (VBA)', img: './excel.png' },
           ...t.tags.map(tag => ({ name: tag }))
         ].map(skill => (
            <div 
              key={skill.name} 
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-enagas-cyan/30 transition-all cursor-default group"
            >
               {skill.img && (
                 <img src={skill.img} alt={skill.name} className="w-4 h-4 object-contain group-hover:scale-110 transition-transform" />
               )}
               <span className="group-hover:text-enagas-blue dark:group-hover:text-enagas-cyan transition-colors">{skill.name}</span>
            </div>
         ))}
      </motion.div>
    </section>
  );
};

export default Skills;
