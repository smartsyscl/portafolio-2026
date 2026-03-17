"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';
import { trackEvent } from '@/utils/analytics';

const trimText = (text: string, maxChars: number) =>
  text.length > maxChars ? `${text.slice(0, maxChars).trim()}...` : text;

const normalizeTech = (value: string) => value.trim().toLowerCase();

interface FilterOption {
  id: string;
  label: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = useMemo<FilterOption[]>(() => {
    const uniqueTech = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((tech) => uniqueTech.add(tech));
    });

    return [
      { id: 'all', label: 'Todos' },
      ...Array.from(uniqueTech)
        .slice(0, 8)
        .map((tech) => ({ id: normalizeTech(tech), label: tech })),
    ];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) =>
      project.techStack.some((tech) => normalizeTech(tech) === activeFilter)
    );
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  };

  return (
    <SectionWrapper id="projects" className="section-surface rounded-3xl my-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">
          Proyectos
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Una seleccion de casos reales con foco en producto, experiencia de usuario y resultado.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full border px-3.5 py-1.5 text-xs md:text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? 'border-blue-400/70 bg-blue-500/20 text-blue-200'
                : 'border-slate-600/70 bg-slate-900/65 text-slate-300 hover:border-slate-500 hover:text-slate-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {visibleProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_18px_45px_-24px_rgba(37,99,235,0.55)]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={450}
              className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="p-5 space-y-4 flex min-h-[260px] flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-100 leading-tight">
                  {project.title}
                </h3>
                <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  Caso real
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {trimText(project.description, 150)}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Impacto:</span> {trimText(project.impact[0], 95)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-600/70 bg-slate-800/85 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('project_demo_click', {
                        projectId: project.id,
                        projectTitle: project.title,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Ver demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('project_code_click', {
                        projectId: project.id,
                        projectTitle: project.title,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-slate-200 transition-colors"
                  >
                    <Github size={15} />
                    Codigo
                  </a>
                )}

                <Link
                  href={`/proyectos/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  Ver caso completo
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {visibleProjects.length === 0 && (
        <p className="mt-6 text-center text-sm text-slate-300">
          No hay proyectos para este filtro por ahora.
        </p>
      )}

      <div className="mt-10 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 md:p-7 text-center">
        <p className="text-lg font-semibold text-slate-100">
          Estoy disponible para nuevos desafios frontend y full stack.
        </p>
        <p className="text-slate-300 mt-2">
          Si quieres una colaboracion profesional, revisa mis proyectos y escribeme desde la seccion de contacto.
        </p>
        <a
          href="#contact"
          className="inline-flex mt-5 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition-colors"
        >
          Hablemos de tu proyecto
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
