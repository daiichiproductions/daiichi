'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Showreel } from '@/components/Showreel';
import { CinemaShowcase } from '@/components/CinemaShowcase';
import { Contact } from '@/components/Contact';
import { CustomCursor } from '@/components/CustomCursor';
import { VisionAssistant } from '@/components/VisionAssistant';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of assets
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#050505]">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="w-24 h-[1px] bg-white mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <span className="font-syne text-sm uppercase tracking-[0.5em] text-white/50">Daiichi Studio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      
      {!loading && <Navbar />}
      
      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Hero />
        <About />
        <Services />
        <Showreel />
        <CinemaShowcase />
        <VisionAssistant />
        <Contact />
      </main>

      {!loading && (
        <footer className="py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs tracking-widest uppercase">
          <p>© 2025 Daiichi Digital. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
        </footer>
      )}
    </div>
  );
}
