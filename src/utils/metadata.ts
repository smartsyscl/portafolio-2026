import { Metadata } from 'next';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

/**
 * Genera metadatos personalizados para cada página
 * @param params - Parámetros para generar los metadatos
 * @returns Objeto Metadata de Next.js
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  keywords = [],
}: GenerateMetadataParams): Metadata {
  const baseUrl = 'https://portafolio-2026-delta.vercel.app/'; 
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url,
      title,
      description,
      siteName: 'Jean Pérez - Portafolio',
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${image}`],
    },
  };
}

/**
 * Genera metadatos para páginas de proyectos individuales
 * @param projectTitle 
 * @param projectDescription 
 * @param projectId 
 * @param techStack 
 * @returns 
 */
export function generateProjectMetadata(
  projectTitle: string,
  projectDescription: string,
  projectId?: number,
  techStack?: string[]
): Metadata {
  const keywords = [
    'proyecto web',
    'desarrollo front-end',
    'portafolio',
    ...(techStack || []),
  ];

  return generatePageMetadata({
    title: `${projectTitle} - Proyecto de Jean Pérez`,
    description: projectDescription,
    path: projectId ? `/proyectos/${projectId}` : '/proyectos',
    image: projectId ? `/proyectos/proyecto-${projectId}-og.png` : '/og-image.png',
    keywords,
  });
}
