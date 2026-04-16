import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, tasks }) => {
  return (
    <div className="group relative grid pb-10 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      
      {/* Background Hover Effect in Desktop */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[0.5rem] transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-50 dark:lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_rgba(255,255,255,0.5)] dark:lg:group-hover:shadow-[inset_0_1px_rgba(255,255,255,0.05)]"></div>
      
      {/* Date Header */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {period}
      </header>
      
      {/* Content */}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
          <div>
            <span className="text-base group-hover:text-enagas-blue dark:group-hover:text-enagas-cyan transition-colors">{role}</span>
            <span className="inline-block px-2 text-slate-400 dark:text-slate-500">·</span>
            <span className="text-base">{company}</span>
          </div>
        </h3>
        
        <ul className="mt-4 text-sm leading-normal text-slate-600 dark:text-slate-400 space-y-2 list-none">
          {tasks.map((task, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-enagas-cyan/60 hidden sm:inline-block">▹</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="group/list scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Experiencia
        </h2>
      </div>

      <div>
        <ExperienceItem 
          role="Técnico Desarrollo GTS"
          company="Enagás GTS"
          period="Jun 2025 – Actual"
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
          tasks={[
            "Automatización de tareas mediante herramientas pertenecientes al entorno de Microsoft como PowerApps y PowerAutomate.",
            "Creación de informes mediante PowerBI.",
            "Implementación conjunta de todo el ecosistema Microsoft 365 en las automatizaciones (Sharepoint, Teams, PowerBI, PowerAutomate).",
            "Creación de Excels automáticos mediante VBA."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
