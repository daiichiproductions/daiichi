'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  { title: "NEON VELOCITY", category: "Commercial", img: "https://picsum.photos/seed/car/800/600" },
  { title: "SILENT ARCHIVE", category: "Documentary", img: "https://picsum.photos/seed/archive/800/600" },
  { title: "KINETIC FLOW", category: "Music Video", img: "https://picsum.photos/seed/dance/800/600" },
  { title: "URBAN PULSE", category: "Fashion", img: "https://picsum.photos/seed/urban/800/600" },
];

export const Showreel: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-[#0a0a0a]">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-5xl md:text-8xl font-syne font-bold tracking-tighter">FEATURED WORK</h2>
      </div>
      
      <div className="flex overflow-x-auto pb-20 gap-8 px-6 md:px-12 hide-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
              <Image 
                src={project.img} 
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full">View Project</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-syne font-bold mb-1">{project.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{project.category}</p>
              </div>
              <div className="text-xl font-syne font-light text-white/20">0{index + 1}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
