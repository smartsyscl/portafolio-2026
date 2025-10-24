'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useState, useEffect } from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const greetings = ['Hola', 'Hello', 'Salut', 'Hallo', 'Ciao', 'Olá'];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => {
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2000); // cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="hero" className="min-h-[100vh] flex items-center justify-center pt-10 md:pt-0">
      <div className="text-center">
        <motion.h1
          key={currentGreeting} // 🔹 importante para animar cuando cambia
          className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {currentGreeting}, soy{' '}
          <span className="text-blue-700 dark:text-blue-400">Jean Pérez</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-neutral-800 dark:text-gray-300 mb-8 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desarrollador Web Front End
        </motion.p>

        <motion.button
          onClick={scrollToAbout}
          className="relative overflow-hidden text-black font-semibold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-medium rounded-lg text-lg px-6 py-3 text-center me-2 mb-2 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 transition-all duration-300 ease-out"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 4px 20px rgba(255, 150, 150, 0.4)',
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="relative z-10">Conoce Más</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
            initial={{ x: '-100%' }}
            whileHover={{
              opacity: 1,
              x: '100%',
              transition: { duration: 0.8, ease: 'easeOut' },
            }}
          />
        </motion.button>

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
