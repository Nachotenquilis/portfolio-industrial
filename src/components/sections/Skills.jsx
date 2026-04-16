import React from 'react';
import GaugeMeter from '../ui/GaugeMeter';
import { motion } from 'framer-motion';

const Skills = () => {
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
    <section id="skills" className="scroll-mt-24 mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Habilidades
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
         <p className="text-sm text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed text-justify">
           Cuento con experiencia demostrable combinando mis fundamentos de ingeniería industrial con herramientas modernas orientadas al análisis de datos y tecnologías low-code. Mantengo un especial foco en el ecosistema <strong>Microsoft 365, Power Platform</strong> y en la aplicación de metodologías de innovación y automatización para el sector energético.
         </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
      >
        <motion.div variants={item}><GaugeMeter label="Automatización" value={85} /></motion.div>
        <motion.div variants={item}><GaugeMeter label="Power Platform" value={90} /></motion.div>
        <motion.div variants={item}><GaugeMeter label="Sistemas de Gas" value={75} /></motion.div>
        <motion.div variants={item}><GaugeMeter label="Resol. Problemas" value={95} /></motion.div>
      </motion.div>

      {/* Tech tags */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap gap-3"
      >
         {[
           { name: 'Sharepoint', img: './sharepoint.png' },
           { name: 'PowerBI', img: './powerbi.png' },
           { name: 'PowerAutomate', img: './powerautomate.png' },
           { name: 'Copilot', img: './copilot.png' },
           { name: 'PowerApps' },
           { name: 'Excel (VBA)' },
           { name: 'Innovación (IA)' },
           { name: 'Gestión de Proyectos' }
         ].map(skill => (
            <div 
              key={skill.name} 
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-enagas-cyan/30 transition-all cursor-default group"
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
