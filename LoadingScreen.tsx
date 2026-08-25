import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth 5-second (5000ms) loading timer
    const totalDuration = 5000; // 5 seconds
    const intervalTime = 50; // Update every 50ms
    const step = 100 / (totalDuration / intervalTime); // 1% per 50ms

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onLoaded, 600); // Trigger main site render after fade out
          }, 300);
          return 100;
        }
        return Math.min(Math.round(next), 99);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050c] text-white px-4 select-none overflow-hidden"
        >
          {/* Ambient Cosmic Background */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Central 3D Galaxy Core Loading Animation */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Orbiting Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.3)]"
            />
            {/* Counter-Rotating Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute w-24 h-24 md:w-30 md:h-30 rounded-full border border-purple-500/40 border-b-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            />
            {/* Center Icon */}
            <div className="absolute flex items-center justify-center text-cyan-400">
              <Cpu className="w-10 h-10 animate-pulse" />
            </div>
          </div>

          {/* Brand Titles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              NPSBCET Technical Symposium
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              TECITON <span className="font-serif italic text-cyan-400">2026</span>
            </h1>

            <p className="mt-2 text-sm md:text-base text-cyan-200/70 font-light tracking-wider">
              ENTERING THE DIGITAL GALAXY
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-64 md:w-80 mt-8">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2 font-mono">
              <span>INITIALIZING CORE...</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900/90 rounded-full overflow-hidden border border-cyan-500/20 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
