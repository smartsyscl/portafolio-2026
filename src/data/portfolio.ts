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
    techStack: ["Next.js", "React Hook Form & Zod" ,"Firebase Genkit", "Tailwind"],
    liveUrl: "https://ayv-alturas-demo.vercel.app/",
    githubUrl: "https://github.com/smartsyscl/ayv_alturas",
    image: "/proyectos/ayv.png"  
  },
  {
    id: 2,
    title: "Temporizador Personalizado Academia JiuJitsu",
    description: "Un temporizador web personalizable diseñado para entrenamientos de JiuJitsu, que permite a los usuarios ajustar intervalos de tiempo y repeticiones según sus necesidades específicas.",
    techStack: ["Flutter", "Dart", "Firebase", "Bootstrap"],
    liveUrl: "https://kdwr-timer.web.app/",
    
    image: "/proyectos/timer.png"  
  },
  {
    id: 3,
    title: "Ecommerce Cafetería Viena & Co",
    description: "Realicé modificaciones avanzadas dentro de la estructura de Jumpseller, integrando funcionalidades en Liquid y JS, optimizando la carga de imágenes, interactividad en el menú y una navegación más fluida.",
    techStack: ["Liquid", "Javascript", "CSS", "Jumpseller"],
    liveUrl: "https://www.viena-co.cl/",
    image: "/proyectos/viena.png"  
  }
];
