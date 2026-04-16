import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen glass-panel px-6 py-5 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
          Sobre Mí
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="clean-card p-8 lg:p-10 relative overflow-hidden group"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-enagas-cyan/10 blur-3xl rounded-full pointer-events-none group-hover:bg-enagas-cyan/20 transition-all duration-700"></div>

        <h3 className="hidden lg:block text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Conóceme un poco más</h3>
        
        <div className="prose prose-slate dark:prose-invert prose-sm sm:prose-base leading-relaxed text-justify max-w-none text-slate-600 dark:text-slate-400">
          <p>
            Soy un Ingeniero en Tecnologías Industriales que actualmente cursa el Máster Habilitante, con el propósito
            de fortalecer mis conocimientos técnicos y ampliar mi perspectiva en los distintos sectores productivos
            que mueven el mundo.
          </p>
          <p className="mt-4">
            A lo largo de mi formación y trayectoria, me he especializado en la automatización y mejora de procesos. 
            Me mueve el objetivo constante de aumentar la eficiencia operativa, reducir costes y optimizar recursos 
            a través del diseño e implementación de soluciones en la nube y tecnologías low-code.
          </p>
          <p className="mt-4">
            Mi interés genuino por la optimización productiva nace en la búsqueda constante de la eficiencia estructural. A este perfil puramente técnico se le suma una vocación que considero casi un legado familiar: una profunda conexión profesional y personal con el <strong>sistema gasista y la gestión de infraestructuras energéticas.</strong>
          </p>
          <p className="mt-4">
            Entiendo la ingeniería como una disciplina de alto rendimiento, algo que también aplico a mi vida personal. Más allá de las pantallas o el diseño de soluciones tecnológicas, mi gasolina es el <strong>Snowboard</strong> y la práctica deportiva constante. Como antiguo <strong>deportista de élite internacional en Karate</strong>, la disciplina, la constancia y el trabajo bajo presión se han convertido en mi estándar innegociable a la hora de afrontar cualquier proyecto.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
