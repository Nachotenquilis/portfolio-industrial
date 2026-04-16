import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="education" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden backdrop-blur-md">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Educación & Idiomas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <EducationCard 
          title="Máster Universitario en Ingeniería Industrial"
          institution="Universitat Politècnica de València"
          period="2024 – Actual"
          extra="Nivel 7 EQF-MEC"
          logoUrl="./upv.png"
          delay={0.1}
        />
        <EducationCard 
          title="Máster en IA e Innovación"
          institution="Founderz"
          period="02/2024 – 05/2024"
          logoUrl="./founderz.png"
          delay={0.2}
          bullets={[
            "Elaboración de ChatBots internos en Sharepoint basados en Copilot.",
            "Utilización de IA no generativa perteneciente al ecosistema Microsoft 365 para la automatización de procesos de negocio."
          ]}
        />
        <EducationCard 
          title="Grado en Ingeniería en Tecnologías Industriales"
          institution="Universitat Politècnica de València"
          period="2020 – 2024"
          extra="Nivel 6 EQF-MEC"
          logoUrl="./upv.png"
          delay={0.3}
        />
      </div>

      {/* Languages Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">Idiomas</h3>
        <div className="flex flex-wrap gap-4 text-sm font-mono">
           <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              Español <span className="text-slate-400 dark:text-slate-500 font-normal text-xs ml-1">(Nativo)</span>
           </div>
           <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              Catalán <span className="text-slate-400 dark:text-slate-500 font-normal text-xs ml-1">(Nativo)</span>
           </div>
           <div className="px-5 py-2.5 bg-slate-50 dark:bg-enagas-primary/20 rounded-lg text-slate-800 dark:text-white font-semibold border border-enagas-cyan/30 shadow-[0_0_15px_rgba(0,169,224,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,169,224,0.2)]">
              Inglés <span className="text-enagas-blue dark:text-enagas-cyan font-black text-xs ml-2 tracking-widest">C1/B2</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
