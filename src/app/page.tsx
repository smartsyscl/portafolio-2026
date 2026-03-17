import Hero from '../components/Hero';
import Skills from '../components/Skills';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portafolio-2026.vercel.app';

function SectionSkeleton({ height = 'min-h-[40vh]' }: { height?: string }) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 py-16 ${height}`} aria-hidden="true">
      <div className="max-w-7xl mx-auto animate-pulse space-y-6">
        <div className="h-8 w-48 rounded bg-gray-200/80 dark:bg-gray-700/60" />
        <div className="h-4 w-full rounded bg-gray-200/70 dark:bg-gray-700/50" />
        <div className="h-4 w-5/6 rounded bg-gray-200/70 dark:bg-gray-700/50" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="h-36 rounded-xl bg-gray-200/70 dark:bg-gray-700/50" />
          <div className="h-36 rounded-xl bg-gray-200/70 dark:bg-gray-700/50" />
        </div>
      </div>
    </section>
  );
}

// Lazy Load
const About = dynamic(() => import('@/components/About'), {
  loading: () => <SectionSkeleton height="min-h-[35vh]" />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <SectionSkeleton height="min-h-[50vh]" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <SectionSkeleton height="min-h-[45vh]" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <SectionSkeleton height="min-h-[20vh]" />,
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
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "Jean Pérez | Desarrollador Web Front-End",
    description: "Portafolio profesional de Jean Pérez. Desarrollador Front-End con experiencia en React, Next.js y tecnologías web modernas.",
    siteName: "Jean Pérez - Portafolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
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
    images: [`${siteUrl}/og-image.png`],
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
      <Suspense fallback={<SectionSkeleton height="min-h-[35vh]" />}>
        <About />
      </Suspense>

      <Skills />

      <Suspense fallback={<SectionSkeleton height="min-h-[50vh]" />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="min-h-[45vh]" />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="min-h-[20vh]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
