"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc3kiLz48ZmVDb2xvck1hdHJpeCBpbj0ibm9pc3kiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              DAIICHI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Coming Soon
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-zinc-400 mb-4 max-w-2xl mx-auto">
            We're crafting something extraordinary
          </p>
          <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl mx-auto">
            A new era of video production is on the horizon. Stay tuned for cinematic excellence.
          </p>

          {/* Email signup form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                disabled={submitted}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? "Subscribed!" : "Notify Me"}
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-green-400 text-sm">Thanks! We'll be in touch soon.</p>
            )}
          </div>

          {/* Video production icons/features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl mb-3">🎬</div>
              <p className="text-zinc-400 text-sm">Cinematic</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📹</div>
              <p className="text-zinc-400 text-sm">Production</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <p className="text-zinc-400 text-sm">Creative</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <p className="text-zinc-400 text-sm">Excellence</p>
            </div>
          </div>

          {/* Social links or contact */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 mb-4">Get in touch</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:info@daiichi.com" className="text-zinc-400 hover:text-white transition-colors">
                info@daiichi.com
              </a>
            </div>
          </div>
        </div>

        {/* Decorative film reel corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-zinc-700 rounded-full opacity-30">
          <div className="absolute inset-2 border-2 border-zinc-600 rounded-full"></div>
        </div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-zinc-700 rounded-full opacity-30">
          <div className="absolute inset-2 border-2 border-zinc-600 rounded-full"></div>
        </div>
      </main>
    </div>
  );
}
