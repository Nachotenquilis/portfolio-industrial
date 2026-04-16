import React from 'react';
import GaugeMeter from '../ui/GaugeMeter';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Habilidades
        </h2>
      </div>

      <div className="mb-4">
         <p className="text-sm text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed mb-6">
           Experiencia combinando fundamentos de ingeniería industrial con herramientas modernas de análisis de datos y tecnologías low-code. Especial foco en Microsoft 365, Power Platform y metodologías ágiles o de innovación.
         </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <GaugeMeter label="Automatización" value={85} />
        <GaugeMeter label="Power Platform" value={90} />
        <GaugeMeter label="Sistemas de Gas / H2" value={75} />
        <GaugeMeter label="Resol. Problemas" value={95} />
      </div>

      {/* Tech tags */}
      <div className="mt-8 flex flex-wrap gap-2">
         {['PowerApps', 'PowerAutomate', 'Sharepoint', 'PowerBI', 'IA / Copilot', 'Gestión de Proyectos', 'Excel (VBA)'].map(skill => (
            <div key={skill} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-enagas-blue/10 dark:bg-enagas-cyan/10 text-enagas-blue dark:text-enagas-cyan">
               {skill}
            </div>
         ))}
      </div>
    </section>
  );
};

export default Skills;
