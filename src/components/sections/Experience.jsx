import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, company, period, location, tasks, isLast }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-[-24px] w-1 md:hidden bg-industrial-300 dark:bg-industrial-700">
           <motion.div 
             className="w-full bg-safety-orange dark:bg-safety-blue origin-top"
             initial={{ scaleY: 0 }}
             whileInView={{ scaleY: 1 }}
             viewport={{ once: false, margin: "-100px" }}
             transition={{ duration: 1, ease: "easeInOut" }}
           />
        </div>
      )}

      {/* Node styling */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-industrial-100 dark:border-industrial-900 bg-industrial-400 dark:bg-industrial-600 z-10 md:hidden shadow-[0_0_10px_rgba(255,87,34,0.5)] dark:shadow-[0_0_10px_rgba(0,229,255,0.5)]" />

      <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative group">
        
        {/* Desktop Pipeline visual */}
        <div className="hidden md:flex flex-col items-center col-span-1 pt-1 h-full relative">
           <div className="w-8 h-8 rounded-full z-10 metallic-panel border-2 border-safety-orange dark:border-safety-blue flex items-center justify-center">
             <div className="w-3 h-3 rounded-full bg-safety-orange dark:bg-safety-blue"></div>
           </div>
           
           {!isLast && (
             <div className="w-2 absolute top-8 bottom-[-40px] bg-industrial-300 dark:bg-industrial-700 rounded-full overflow-hidden">
               <motion.div 
                 className="w-full h-full bg-gradient-to-b from-safety-orange to-industrial-500 dark:from-safety-blue dark:to-industrial-600 origin-top"
                 initial={{ scaleY: 0 }}
                 whileInView={{ scaleY: 1 }}
                 viewport={{ once: true, margin: "-20%" }}
                 transition={{ duration: 1.5, ease: "anticipate" }}
               />
             </div>
           )}
        </div>

        {/* Content */}
        <motion.div 
          className="md:col-span-4 metallic-panel p-6 rounded-lg mb-8 md:mb-0 transform transition-transform duration-300 hover:-translate-y-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 border-b border-industrial-300 dark:border-industrial-700 pb-2">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-industrial-900 dark:text-industrial-100">{title}</h3>
              <p className="text-industrial-600 dark:text-industrial-400 font-mono text-sm">{company} <span className="opacity-50">|</span> {location}</p>
            </div>
            <div className="mt-2 sm:mt-0 px-3 py-1 bg-industrial-200 dark:bg-industrial-800 rounded font-mono text-xs w-max border border-industrial-300 dark:border-industrial-600">
              {period}
            </div>
          </div>
          
          <ul className="space-y-2 font-mono text-sm opacity-80 list-none">
            {tasks.map((task, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-safety-orange dark:text-safety-blue">❯</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black uppercase tracking-widest">Registro de Operaciones <span className="opacity-50 font-mono text-sm">/ Experiencia</span></h2>
        <div className="flex-1 h-px bg-gradient-to-r from-industrial-400 dark:from-industrial-600 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <ExperienceItem 
          title="Junior Product Engineer"
          company="Sika"
          location="Madrid, España"
          period="01/02/2024 – 01/07/2024"
          tasks={[
            "Automatización de tareas mediante herramientas pertenecientes al entorno de Microsoft (PowerApps, PowerAutomate).",
            "Cálculo de estructuras resistentes como pilares y vigas, centrado en la aplicación de tejidos de refuerzos."
          ]}
          isLast={true}
        />
      </div>
    </section>
  );
};

export default Experience;
