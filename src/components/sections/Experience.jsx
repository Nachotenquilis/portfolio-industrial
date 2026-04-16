import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, tasks, url, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative grid pb-12 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      
      {/* Background Hover Effect in Desktop (Glassy glow) */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition duration-500 motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-enagas-cyan/5 lg:group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:lg:group-hover:shadow-[0_4px_30px_rgba(0,169,224,0.05)] border border-transparent lg:group-hover:border-slate-200/50 dark:lg:group-hover:border-enagas-cyan/10 backdrop-blur-sm"></div>
      
      {/* Date Header */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 sm:col-span-2">
        {period}
      </header>
      
      {/* Content */}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-3">
          <a href={url || "#"} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-bold leading-tight text-slate-900 dark:text-slate-200 hover:text-enagas-blue dark:hover:text-enagas-cyan focus-visible:text-enagas-cyan group/link text-base">
            <span>
              {role} <span className="inline-block px-1 text-slate-300 dark:text-slate-600">·</span> 
              <span className="inline-block">{company}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
              </span>
            </span>
          </a>
        </h3>
        
        <ul className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 space-y-3 list-none">
          {tasks.map((task, index) => (
            <li key={index} className="flex gap-3 items-start group/item">
              <span className="text-enagas-blue/50 dark:text-enagas-cyan/40 mt-1.5 transition-colors group-hover/item:text-enagas-cyan">
                 <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
              </span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="group/list scroll-mt-24 mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Experiencia
        </h2>
      </div>

      <div>
        <ExperienceItem 
          role="Técnico Desarrollo GTS"
          company="Enagás GTS"
          period="Jun 2025 – Actual"
          url="https://www.enagas.es"
          delay={0.1}
          tasks={[
            "Coordinación y ejecución del proceso anual de asignación de capacidad de inyección de hidrógeno en la red gasista, conforme a la normativa vigente.",
            "Desarrollo de escenarios de previsión de demanda a largo plazo.",
            "Elaboración de informes ejecutivos y dashboards interactivos para la Dirección.",
            "Análisis y tratamiento de datos relacionados con el sistema gasista.",
            "Diseño e implementación de soluciones low-code orientadas a la automatización eficiente de procesos internos.",
            "Aplicación de inteligencia artificial en los procesos de la Gerencia de Desarrollo GTS impulsando la innovación y la mejora continua."
          ]}
        />
        <ExperienceItem 
          role="Junior Product Engineer"
          company="Sika"
          period="Feb 2024 – Jul 2024"
          url="https://esp.sika.com/"
          delay={0.2}
          tasks={[
            "Automatización de tareas mediante herramientas pertenecientes al entorno de Microsoft como PowerApps y PowerAutomate.",
            "Implementación y gobernanza conjunta de todo el ecosistema Microsoft 365 en las automatizaciones (Sharepoint, Teams).",
            "Creación de informes interactivos mediante PowerBI para control productivo.",
            "Creación de Excels automáticos mediante VBA orientados al cálculo de estructuras resistentes."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
