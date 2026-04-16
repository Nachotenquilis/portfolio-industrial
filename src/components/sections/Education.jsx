import React from 'react';

const EducationCard = ({ title, institution, period, bullets, extra }) => (
  <div className="group relative clean-card p-6 flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:border-enagas-cyan/40">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-sm md:text-base pr-4 text-slate-800 dark:text-slate-200 group-hover:text-enagas-blue dark:group-hover:text-enagas-cyan transition-colors">{title}</h3>
      </div>
      <p className="text-xs font-mono text-slate-500 mb-4">{institution} <span className="opacity-50">|</span> {period}</p>
      
      {bullets && bullets.length > 0 && (
         <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-4 list-none">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                 <span className="text-enagas-cyan/50">•</span>
                 <span>{b}</span>
              </li>
            ))}
         </ul>
      )}

      {extra && (
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50">
          <span className="font-mono text-[10px] uppercase tracking-wider text-enagas-blue dark:text-enagas-cyan font-bold bg-enagas-blue/10 dark:bg-enagas-cyan/10 px-2 py-1 rounded">
            {extra}
          </span>
        </div>
      )}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Educación & Idiomas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <EducationCard 
          title="Máster Universitario en Ingeniería Industrial"
          institution="Universitat Politècnica de València"
          period="2024 – Actual"
          extra="Nivel 7 EQF-MEC"
        />
        <EducationCard 
          title="Máster en IA e Innovación"
          institution="Founderz"
          period="02/2024 – 05/2024"
          bullets={[
            "Elaboración de ChatBots internos en Sharepoint basados en Copilot.",
            "Utilización de IA no generativa perteneciente al ecosistema Microsoft 365."
          ]}
        />
        <EducationCard 
          title="Grado en Ingeniería en Tecnologías Industriales"
          institution="Universitat Politècnica de València"
          period="2020 – 2024"
          extra="Nivel 6 EQF-MEC"
        />
      </div>

      {/* Languages Section */}
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100 mb-4 mt-8">Idiomas</h3>
      <div className="flex flex-wrap gap-3 text-sm">
         <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
            Español <span className="opacity-50 font-normal text-xs ml-1">(Nativo)</span>
         </div>
         <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
            Catalán <span className="opacity-50 font-normal text-xs ml-1">(Nativo)</span>
         </div>
         <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium border border-enagas-cyan/20">
            Inglés <span className="text-enagas-blue dark:text-enagas-cyan font-bold text-xs ml-1">C1/B2</span>
         </div>
      </div>
    </section>
  );
};

export default Education;
