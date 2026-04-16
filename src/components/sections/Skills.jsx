import React from 'react';
import GaugeMeter from '../ui/GaugeMeter';
import GravityContainer from '../ui/GravityContainer';

const Skills = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black uppercase tracking-widest">Diagnóstico de Sistemas <span className="opacity-50 font-mono text-sm">/ Skills</span></h2>
        <div className="flex-1 h-px bg-gradient-to-r from-industrial-400 dark:from-industrial-600 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Gauges */}
        <div className="metallic-panel p-6 rounded-lg flex flex-col justify-center">
            <h3 className="font-mono text-sm uppercase mb-6 text-industrial-500 font-bold border-b border-industrial-300 dark:border-industrial-700 pb-2">Parámetros de Rendimiento</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <GaugeMeter label="Automatización" value={85} color="#00E5FF" />
              <GaugeMeter label="Power Platform" value={90} color="#FF5722" />
              <GaugeMeter label="Ing. Estructural" value={70} color="#FFC107" />
              <GaugeMeter label="Resol. Problemas" value={95} color="#39FF14" />
            </div>
            
            <div className="mt-8 p-4 bg-industrial-200 dark:bg-industrial-800 rounded font-mono text-xs border-l-4 border-l-safety-blue">
               <p className="opacity-80">
                 {">"} LECTURA DEL SENSOR: Alta capacidad de adaptación en entornos tecnológicos. Nivel óptimo para proyectos de transición energética y automatización industrial.
               </p>
            </div>
        </div>
        
        {/* Right Side: Gravity Container */}
        <div className="flex flex-col">
            <h3 className="font-mono text-sm uppercase mb-2 text-industrial-500 font-bold ml-1">Simulador Físico 2D (Puedes arrastrarlos)</h3>
            <GravityContainer />
            <div className="text-xs font-mono text-center mt-2 opacity-50">Tecnologías y Experiencia en Caída Libre</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
