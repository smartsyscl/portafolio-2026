import { Project, Skill, About } from '../types';


export const about: About = {
  bio: "Hola, soy un desarrollador web Front End apasionado por crear aplicaciones modernas y escalables. Tengo experiencia en tecnologías como React, Next.js, Node.js y bases de datos NoSQL. Me apasiona aprender cosas nuevas y enfrentar desafíos técnicos.  ",
  photo: "/me.svg" // Quitamos 'public' y cambiamos 'image' por 'photo'
};

export const skills: Skill[] = [
  { name: "React", icon: "React", level: 90 },
  { name: "Next.js", icon: "Zap", level: 85 },
  { name: "TypeScript", icon: "Code", level: 80 },
  { name: "Tailwind CSS", icon: "Palette", level: 75 },
  { name: "Node.js", icon: "Server", level: 60 },
  { name: "MongoDB", icon: "Database", level: 60 },
  { name: "Git", icon: "GitBranch", level: 100 },
  { name: "Figma", icon: "Figma", level: 60 }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Cotizador de Proyectos",
    description: "La plataforma digitaliza y automatiza el proceso de generación de cotizaciones, ofreciendo una experiencia de usuario fluida y guiada, e integrando inteligencia artificial para asistir en la estimación de costos.",
    problem: "El proceso de cotización era manual, lento y dependía de validaciones por correo, lo que retrasaba cierres comerciales.",
    solution: "Diseñé un flujo guiado con formularios validados, cálculo asistido por IA y entrega inmediata de resultados para acelerar la toma de decisión del cliente.",
    role: "Frontend Developer (arquitectura UI, formularios complejos, integración IA y experiencia responsive)",
    impact: [
      "Reducción de fricción en el flujo comercial con un proceso 100% digital.",
      "Mejor claridad en la estimación para cliente final y equipo interno.",
      "Interfaz preparada para escalar nuevas reglas de negocio.",
    ],
    techStack: ["Next.js", "React Hook Form & Zod" ,"Firebase Genkit", "Tailwind"],
    liveUrl: "https://ayv-alturas-demo.vercel.app/",
    githubUrl: "https://github.com/smartsyscl/ayv_alturas",
    image: "/proyectos/ayv.png"  
  },
  {
    id: 2,
    title: "Temporizador Personalizado Academia JiuJitsu",
    description: "Un temporizador web personalizable diseñado para entrenamientos de JiuJitsu, que permite a los usuarios ajustar intervalos de tiempo y repeticiones según sus necesidades específicas.",
    problem: "Los entrenamientos requerían cambiar tiempos manualmente entre rounds, generando interrupciones y pérdida de ritmo en clase.",
    solution: "Construí un temporizador configurable por rondas e intervalos con feedback visual claro para facilitar sesiones continuas.",
    role: "Frontend Developer (UX funcional, lógica de tiempo, interfaz de configuración y despliegue)",
    impact: [
      "Ahorro de tiempo operativo durante cada sesión.",
      "Mayor consistencia en entrenamientos con rutinas repetibles.",
      "Herramienta reutilizable por instructores con distintos formatos de clase.",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Bootstrap"],
    liveUrl: "https://kdwr-timer.web.app/",
    
    image: "/proyectos/timer.png"  
  },
  {
    id: 3,
    title: "Landing Page Cafetería Viena & Co",
    description: "Desarrollé una landing page moderna en Next.js para Viena & Co, enfocada en branding, presentación del negocio y captación de potenciales clientes. El sitio está en etapa previa a lanzamiento y a la espera de ajustes finales del cliente.",
    problem: "El cliente ya no necesitaba ecommerce en esta etapa, sino una presencia digital clara para presentar su propuesta y validar interés.",
    solution: "Diseñé e implementé una landing optimizada en Next.js con foco en velocidad, jerarquía visual y una narrativa comercial más directa.",
    role: "Frontend Developer (arquitectura de landing, UI responsive y optimización de rendimiento)",
    impact: [
      "Nueva presencia digital alineada al estado actual del negocio.",
      "Base escalable para futuras secciones y funcionalidades.",
      "Entrega enfocada en performance y experiencia mobile-first.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://viena-landing-page.vercel.app/",
    image: "/proyectos/viena.png"  
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectIds(): number[] {
  return projects.map((project) => project.id);
}
