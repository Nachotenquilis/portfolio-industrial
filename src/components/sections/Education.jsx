import React from 'react';
import { BookOpen } from 'lucide-react';

const EducationCard = ({ title, institution, period, level }) => (
  <div className="metallic-panel p-5 rounded-lg border-l-4 border-l-safety-orange dark:border-l-safety-blue relative overflow-hidden group">
    {/* Background accent */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-industrial-300 dark:bg-industrial-800 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold uppercase text-sm md:text-base pr-4 leading-tight">{title}</h3>
        <BookOpen className="w-5 h-5 text-industrial-500 flex-shrink-0" />
      </div>
      <p className="text-xs font-mono text-industrial-600 dark:text-industrial-400 mb-3">{institution}</p>
      
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-industrial-300 dark:border-industrial-700">
        <span className="font-mono text-xs bg-industrial-200 dark:bg-industrial-800 px-2 py-1 rounded">
          {period}
        </span>
        {level && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-safety-orange dark:text-safety-blue font-bold">
            {level}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black uppercase tracking-widest">Base de Datos de Formación <span className="opacity-50 font-mono text-sm">/ Educación</span></h2>
        <div className="flex-1 h-px bg-gradient-to-r from-industrial-400 dark:from-industrial-600 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EducationCard 
          title="Máster Universitario en Ingeniería Industrial"
          institution="Universitat Politècnica de València"
          period="2024 – Actual"
          level="Nivel 7 EQF-MEC"
        />
        <EducationCard 
          title="Máster en IA e Innovación"
          institution="Founderz"
          period="02/2024 – 05/2024"
          level=""
        />
        <EducationCard 
          title="Grado en Ingeniería en Tecnologías Industriales"
          institution="Universitat Politècnica de València"
          period="2020 – 2024"
          level="Nivel 6 EQF-MEC"
        />
      </div>
    </section>
  );
};

export default Education;
