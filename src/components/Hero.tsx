'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';

const GREETINGS = ['Hola', 'Hello', 'Salut', 'Hallo', 'Ciao', 'Olá'];

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [currentGreeting, setCurrentGreeting] = useState(GREETINGS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        const currentIndex = GREETINGS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % GREETINGS.length;
        return GREETINGS[nextIndex];
      });
    }, 2000); // cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="hero" className="min-h-[100vh] flex items-center justify-center pt-10 md:pt-0">
      <div className="text-center">
        <motion.div
          className="inline-flex items-center gap-2 mb-6 rounded-full border border-sky-300/60 bg-white/70 dark:bg-slate-900/60 dark:border-sky-800/60 px-4 py-1.5 text-sm text-slate-700 dark:text-slate-200 backdrop-blur"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          key={currentGreeting} // 🔹 importante para animar cuando cambia
          className="ui-h1 text-slate-100 mb-4 transition-colors"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {currentGreeting}, soy{' '}
          <span className="text-blue-400">Jean Pérez</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desarrollador Web Front End
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 8px 24px rgba(37, 99, 235, 0.28)',
          }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <Button
            onClick={scrollToAbout}
            size="lg"
            aria-label="Ir a la seccion Acerca de mi"
            aria-controls="about"
          >
            Conoce mas
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 cursor-pointer"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
