'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, MonitorPlay, Zap } from 'lucide-react';

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: "Videography",
    description: "High-end cinematic capture using industry-standard RED and ARRI ecosystems.",
    tag: "Production"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Luxury fashion, architectural, and commercial photography with distinct aesthetics.",
    tag: "Capture"
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Post-Production",
    description: "Advanced color grading, VFX, and immersive motion design services.",
    tag: "Synthesis"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Creative Direction",
    description: "Full-scale concept development and visual strategy for global brands.",
    tag: "Concept"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-blue-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Our Capabilities</p>
            <h2 className="text-5xl md:text-7xl font-syne font-bold">CORE EXPERTISE</h2>
          </div>
          <div className="max-w-xs text-white/40 text-sm leading-relaxed">
            We provide an end-to-end creative pipeline, ensuring every frame aligns with your brand&apos;s unique DNA.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl group transition-all duration-500 hover:bg-white/5"
            >
              <div className="mb-8 text-white group-hover:text-blue-400 transition-colors duration-500">
                {service.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 block">{service.tag}</span>
              <h3 className="text-2xl font-syne font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="w-8 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
