
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
        isScrolled ? 'bg-black/60 backdrop-blur-xl py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="font-syne font-bold text-2xl tracking-tighter">DAIICHI</span>
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
      </div>

      <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-medium text-white/60">
        {['About', 'Services', 'Work', 'Cinema', 'Vision'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            className="hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <button 
        onClick={(e) => {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-6 py-2.5 glass rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500"
      >
        Start Project
      </button>
    </motion.nav>
  );
};
