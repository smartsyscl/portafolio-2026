import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github } from "lucide-react";
import { getProjectById, getProjectIds } from "@/data/portfolio";
import ProjectDetailTracker from "./ProjectDetailTracker";

interface Params {
  id: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portafolio-2026.vercel.app";

export function generateStaticParams(): Params[] {
  return getProjectIds().map((id) => ({
    id: String(id),
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number(id);
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl = `${siteUrl}/proyectos/${project.id}`;

  return {
    title: `${project.title} | Caso de estudio`,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url: projectUrl,
      title: `${project.title} | Caso de estudio`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Caso de estudio`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const projectId = Number(id);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteUrl}/proyectos/${project.id}`,
    image: `${siteUrl}${project.image}`,
    keywords: project.techStack.join(", "),
    creator: {
      "@type": "Person",
      name: "Jean Perez",
    },
  };

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <ProjectDetailTracker projectId={project.id} projectTitle={project.title} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <article className="max-w-5xl mx-auto section-surface rounded-3xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={800}
          className="w-full h-72 md:h-96 object-cover"
          priority
        />

        <div className="p-6 md:p-10 space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-blue-700 dark:text-blue-300">Caso de estudio</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">{project.title}</h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="md:col-span-1 rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-900/40">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">Mi rol</h2>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{project.role}</p>
            </section>

            <section className="md:col-span-2 rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-900/40">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">Stack tecnico</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Problema</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Solucion</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Impacto</h2>
            <ul className="space-y-2">
              {project.impact.map((point) => (
                <li key={point} className="flex gap-2 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                Ver demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-5 py-3 text-slate-800 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github size={18} />
                Ver codigo
              </a>
            )}

            <Link
              href="/#projects"
              className="inline-flex items-center rounded-lg px-5 py-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Volver a proyectos
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
