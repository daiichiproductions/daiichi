'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-syne font-bold leading-tight mb-8">
            REDEFINING THE <br />
            <span className="text-white/40">VISUAL NARRATIVE</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-lg mb-12">
            Daiichi is a collective of visionary directors, cinematographers, and digital artists dedicated to pushing the boundaries of what&apos;s possible in visual storytelling. We don&apos;t just capture moments; we architect experiences.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-syne font-bold mb-1">10Y+</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-syne font-bold mb-1">250+</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Projects Delivered</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group cursor-pointer overflow-hidden rounded-2xl"
        >
          <Image 
            src="https://picsum.photos/seed/cinema/800/1000" 
            alt="Cinematic production" 
            width={800}
            height={1000}
            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
