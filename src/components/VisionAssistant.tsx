'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const VisionAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const generateVision = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a world-class creative director at Daiichi Studio. 
        A client wants to shoot a video/photo project described as: "${prompt}". 
        Give me a 3-sentence high-end cinematic vision, suggesting specific lighting (e.g., anamorphic, moody, high-contrast) and a key visual hook. Keep it professional and futuristic.`,
      });
      setResult(response.text || 'Vision generated successfully.');
    } catch (error) {
      console.error(error);
      setResult('Failed to connect to the neural core. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vision" className="py-32 px-6 md:px-12 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Neural Concept Engine</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8">DESCRIBE YOUR VISION</h2>
        <p className="text-white/50 mb-12 max-w-2xl mx-auto">
          Our proprietary AI-assisted conceptualizer helps translate your abstract ideas into a cinematic reality. Tell us what you imagine, and let our core generate a baseline aesthetic.
        </p>

        <div className="relative max-w-2xl mx-auto mb-12">
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A cyberpunk street scene in Tokyo with anamorphic flares..."
            className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-blue-500 transition-colors pr-16 text-white"
            onKeyDown={(e) => e.key === 'Enter' && generateVision()}
          />
          <button 
            onClick={generateVision}
            disabled={loading}
            className="absolute right-3 top-3 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-8 glass rounded-3xl text-left border-blue-500/20"
            >
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">DAIICHI_CORE VISION_OUTPUT:</h4>
              <p className="text-lg font-light leading-relaxed italic text-white/90">
                "{result}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
