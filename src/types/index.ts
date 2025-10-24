export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string; // Lucide icon name
  level: number; // 1-100
}

export interface About {
  bio: string;
  photo: string;
}
