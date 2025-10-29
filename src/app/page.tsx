import Hero from '../components/Hero';
import Skills from '../components/Skills';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';

// Lazy Load
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div>Cargando...</div>,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div>Cargando proyectos...</div>,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div>Cargando formulario...</div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div>Cargando footer...</div>,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Cargando...</div>}>
        <About />
      </Suspense>

      <Skills />

      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Cargando formulario...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Cargando footer...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
}
