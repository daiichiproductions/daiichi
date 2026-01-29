'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videoProjects = [
  {
    title: "SYNETHESIA 2025",
    category: "Brand Film",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1025",
    accent: "rgba(59, 130, 246, 0.5)"
  },
  {
    title: "NEON DREAMS",
    category: "Fashion Cinema",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    accent: "rgba(168, 85, 247, 0.5)"
  },
  {
    title: "URBAN ARCHITECT",
    category: "Documentary",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    poster: "https://images.unsplash.com/photo-1449156006077-9740445f89e9?auto=format&fit=crop&q=80&w=1000",
    accent: "rgba(34, 197, 94, 0.5)"
  }
];

export const CinemaShowcase: React.FC = () => {
  return (
    <section id="cinema" className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-[0.5em] text-[10px] uppercase mb-4"
          >
            Cinematography
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-syne font-extrabold tracking-tighter leading-none"
          >
            DAIICHI <span className="text-white/20 italic font-light">CINEMA</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {videoProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-[2rem] border border-white/5 cursor-none"
            >
              {/* Video Backdrop (Simulation using project info) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.poster})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.accent} 0%, transparent 70%)` }}
              />

              <div className="absolute inset-0 p-12 flex flex-col justify-end md:justify-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <motion.span 
                      className="inline-block px-4 py-1 rounded-full border border-white/20 text-[9px] uppercase tracking-[0.2em] mb-4 backdrop-blur-md"
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="text-4xl md:text-6xl font-syne font-bold leading-none mb-4 group-hover:tracking-wider transition-all duration-700">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden md:block w-32 h-[1px] bg-white/20 group-hover:w-48 transition-all duration-700" />
                    <button className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl group-hover:bg-white group-hover:text-black transition-all duration-500 scale-90 group-hover:scale-100">
                      <Play className="w-8 h-8 fill-current" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Decals */}
              <div className="absolute top-8 left-8 text-[8px] font-mono text-white/30 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                RESOLUTION: 8K RAW <br />
                CODEC: PRORES 4444 <br />
                FRAME: {23.976 + index * 0.001} FPS
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button className="px-12 py-5 rounded-full glass hover:bg-white hover:text-black transition-all duration-500 uppercase text-[11px] font-bold tracking-[0.3em]">
            View Full Showreel
          </button>
        </motion.div>
      </div>
    </section>
  );
};
