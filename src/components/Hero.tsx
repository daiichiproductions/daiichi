'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Particles = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      positions[i * 3] = 1.5 * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = 1.5 * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = 1.5 * Math.cos(theta);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // Moved the group's rotation directly to the Points component to avoid 'group' intrinsic tag errors
    <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled={false} 
      rotation={[0, 0, Math.PI / 4]}
    >
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-blue-400 font-medium tracking-[0.5em] text-[10px] uppercase mb-6"
        >
          Premium Visual Production Studio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-syne font-extrabold tracking-tighter leading-[0.9] mb-12"
        >
          CRAFTING <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-blue-500">DIGITAL CINEMA</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-10 py-5 overflow-hidden rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest transition-all">
            <span className="relative z-10">Explore Work</span>
            <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
          
          <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-widest font-medium">
            <span className="w-12 h-[1px] bg-white/20"></span>
            Scroll to Enter
          </div>
        </motion.div>
      </div>

      {/* Floating UI Decals */}
      <div className="absolute bottom-12 left-12 hidden lg:block text-[9px] text-white/20 font-mono tracking-tighter z-10">
        LVL_2025_VER_0.9 <br />
        STABILITY: NOMINAL <br />
        FOCUS: 1.2F
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block text-[9px] text-white/20 font-mono text-right tracking-tighter z-10">
        LAT: 35.6762° N <br />
        LNG: 139.6503° E <br />
        ORIGIN: TOKYO, JP
      </div>
    </section>
  );
};