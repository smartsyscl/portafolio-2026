'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('#hero');
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollVisual = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScrollVisual);

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

  
    const computeActiveByScroll = () => {
      if (!sections.length) return;
      const viewportCenter = window.innerHeight / 2;
      let closestId = sections[0].id;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = sec.id;
        }
      });

      setActive(`#${closestId}`);
    };

   
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window && sections.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              
              setActive(`#${entry.target.id}`);
            }
          });
        },
        {
          root: null,
          
          rootMargin: '-20% 0px -40% 0px',
          threshold: [0.4, 0.6], 
        }
      );

      sections.forEach((section) => observer!.observe(section));
    } else {
      
      window.addEventListener('scroll', computeActiveByScroll, { passive: true });
     
      computeActiveByScroll();
    }

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollVisual);
      if (observer) {
        sections.forEach((s) => observer!.unobserve(s));
        observer.disconnect();
      } else {
        window.removeEventListener('scroll', computeActiveByScroll);
      }
    };
  }, []);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, href: '#hero', label: 'Inicio' },
    { icon: <User className="w-5 h-5" />, href: '#about', label: 'Sobre mí' },
    { icon: <FolderGit2 className="w-5 h-5" />, href: '#projects', label: 'Proyectos' },
    { icon: <Mail className="w-5 h-5" />, href: '#contact', label: 'Contacto' },
  ];

  const handleNavClick = (href: string) => {
    setActive(href);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center justify-center gap-6 px-6 py-3 
        ${scrolled ? 'bg-white/70 dark:bg-gray-900/70' : 'bg-white/30 dark:bg-gray-800/30'}`}
    >
      {navItems.map((item) => (
        <div key={item.href} className="relative flex flex-col items-center">
          <motion.button
            onClick={() => handleNavClick(item.href)}
            onMouseEnter={() => setHovered(item.href)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-3 rounded-xl transition-colors duration-200 ${
              active === item.href
                ? 'bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
            }`}
            aria-current={active === item.href ? 'true' : undefined}
            aria-label={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
            {active === item.href && (
              <motion.div
                layoutId="activeOutline"
                className="absolute inset-0 rounded-xl border-2 border-white/30"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>

          
          <AnimatePresence>
            {hovered === item.href && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-8 px-2 py-1 text-xs rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
