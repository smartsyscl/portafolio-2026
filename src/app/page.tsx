import Hero from '../components/Hero';
import Skills from '../components/Skills';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

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

// Metadatos SEO
export const metadata: Metadata = {
  title: "Jean Pérez | Desarrollador Web Front-End - Portafolio",
  description: "Portafolio profesional de Jean Pérez, desarrollador web Front-End especializado en React, Next.js y TypeScript. Descubre mis proyectos y experiencia en desarrollo web moderno.",
  keywords: [
    "Jean Pérez",
    "Desarrollador Front-End",
    "Portafolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Proyectos Web",
  ],
  authors: [{ name: "Jean Pérez" }],
  alternates: {
    canonical: "https://portafolio-2026-delta.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portafolio-2026-delta.vercel.app/",
    title: "Jean Pérez | Desarrollador Web Front-End",
    description: "Portafolio profesional de Jean Pérez. Desarrollador Front-End con experiencia en React, Next.js y tecnologías web modernas.",
    siteName: "Jean Pérez - Portafolio",
    images: [
      {
        url: "https://portafolio-2026-delta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jean Pérez - Desarrollador Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Pérez | Desarrollador Web Front-End",
    description: "Portafolio profesional de Jean Pérez. Desarrollador Front-End especializado en React y Next.js.",
    images: ["https://portafolio-2026-delta.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
