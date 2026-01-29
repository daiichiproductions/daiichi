
import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-syne font-bold tracking-tighter leading-none mb-12">
              READY TO <br />
              <span className="text-white/20">CREATE?</span>
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">New Projects</p>
                <a href="mailto:hello@daiichi.studio" className="text-2xl md:text-3xl font-syne hover:text-blue-500 transition-colors">hello@daiichi.studio</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Office</p>
                <address className="text-xl md:text-2xl font-light not-italic text-white/70">
                  Shibuya Sky 45F, <br />
                  Shibuya, Tokyo, Japan
                </address>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-16 rounded-[40px]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Project Details</label>
                <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 p-3 focus:outline-none focus:border-white transition-colors resize-none" />
              </div>
              
              <button className="w-full py-6 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all duration-500">
                Send Transmission
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
