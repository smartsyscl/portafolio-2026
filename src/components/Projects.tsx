"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';
import { trackEvent } from '@/utils/analytics';
import { Body, ButtonLink, H2 } from '@/components/ui';

const trimText = (text: string, maxChars: number) =>
  text.length > maxChars ? `${text.slice(0, maxChars).trim()}...` : text;

const Projects = () => {
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
        <H2 className="mb-3">
          Proyectos
        </H2>
        <Body className="text-base md:text-lg max-w-2xl mx-auto">
          Una seleccion de casos reales con foco en producto, experiencia de usuario y resultado.
        </Body>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
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

      <div className="mt-10 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 md:p-7 text-center">
        <p className="text-lg font-semibold text-slate-100">
          Buscas un frontend solido, rapido y orientado a conversion.
        </p>
        <p className="text-slate-300 mt-2">
          Colaboro con equipos y clientes para construir productos web escalables, con foco en experiencia de usuario y resultados de negocio.
        </p>
        <ButtonLink
          href="#contact"
          variant="primary"
          size="md"
          className="mt-5"
        >
          Agenda una conversacion
        </ButtonLink>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
