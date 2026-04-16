import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Battery, Zap, Activity } from 'lucide-react';

const Hero = ({ isDark }) => {
  return (
    <section className="relative pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Display */}
        <div className="md:col-span-2 metallic-panel rounded-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-safety-blue opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="relative overflow-hidden rounded-md border-2 border-industrial-400 dark:border-industrial-600 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
               <img src="/foto-cv.jpg" alt="Ignacio Ten Quilis" className="w-32 h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500" onError={(e) => { e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=IQ'; }} />
            </div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="px-2 py-1 bg-industrial-800 text-industrial-100 text-xs font-mono rounded dark:bg-safety-blue dark:text-industrial-900 font-bold uppercase tracking-widest">Estado: Operativo</div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-1 h-3 ${i===3 ? 'bg-industrial-500' : 'bg-safety-orange'}`}></div>
                  ))}
                </div>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 uppercase">Ignacio <span className="text-safety-orange dark:text-safety-blue dark:neon-text-blue">Ten Quilis</span></h1>
              <h2 className="text-xl font-mono text-industrial-600 dark:text-industrial-400 mb-4">Ingeniero en Tecnologías Industriales</h2>
              
              <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-lg font-mono">
                Ingeniero Industrial cursando el Máster Habilitante. Apasionado por el desarrollo de soluciones sostenibles,
                la automatización de procesos, las energías renovables y la transición energética.
              </p>
            </div>
          </div>
        </div>

        {/* Side Metrics Panel */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 font-mono">
           <div className="metallic-panel rounded-lg p-4 flex flex-col items-center justify-center text-center group">
              <Zap className="w-6 h-6 mb-2 text-safety-orange dark:text-safety-blue group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase opacity-70">Focus</span>
              <span className="font-bold text-sm">Automatización</span>
           </div>
           <div className="metallic-panel rounded-lg p-4 flex flex-col items-center justify-center text-center group">
              <Battery className="w-6 h-6 mb-2 text-safety-orange dark:text-safety-blue group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase opacity-70">Sostenibilidad</span>
              <span className="font-bold text-sm">Transición Energ.</span>
           </div>
           <div className="metallic-panel rounded-lg p-4 flex flex-col items-center justify-center text-center group col-span-2 md:col-span-1">
              <Activity className="w-6 h-6 mb-2 text-safety-orange dark:text-safety-blue group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase opacity-70">Tech</span>
              <span className="font-bold text-sm">PowerApps / AI</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
