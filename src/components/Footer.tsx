import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-surface rounded-2xl flex flex-col md:flex-row justify-between items-center px-5 py-4">
          <div className="mb-4 md:mb-0">
            <p className="ui-caption">&copy; 2026 - Jean</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/smartsyscl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-300 transition-colors"
              aria-label="Abrir perfil de GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jean-perez-37a7b1168/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-300 transition-colors"
              aria-label="Abrir perfil de LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jeandsgperez@gmail.com"
              className="text-slate-400 hover:text-blue-300 transition-colors"
              aria-label="Enviar correo a Jean Perez"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
