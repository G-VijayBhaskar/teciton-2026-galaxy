import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Sparkles, Terminal, ShieldAlert, Zap, Orbit, Activity } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);
  const canvasRef = useRef(null);

  const statusMessages = [
    "[01/10] POWERING UP QUANTUM CORE V2.0...",
    "[02/10] CALIBRATING OPTICAL STAR SENSORS...",
    "[03/10] MAPPING 3D GALAXY STARFIELD GEOMETRY...",
    "[04/10] LOADING THREE.JS WEBGL RENDER SHADERS...",
    "[05/10] SYNCHRONIZING NEURAL EVENT DATABASE...",
    "[06/10] CHARGING GYROSCOPIC ACCELERATOR RINGS...",
    "[07/10] ENGAGING HYPERDRIVE WARP TURBO ENGINES...",
    "[08/10] VERIFYING INTER-COLLEGE NETWORK NODES...",
    "[09/10] SYMPOSIUM MATRIX FULLY CHARGED...",
    "[10/10] SYSTEM READY: WELCOME TO TECITON 2026"
  ];

  // 1. Progress & Status Ticker (10 Seconds Duration)
  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const intervalTime = 40;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);

        // Update status index based on percentage
        if (next < 10) setStatusIndex(0);
        else if (next < 20) setStatusIndex(1);
        else if (next < 30) setStatusIndex(2);
        else if (next < 40) setStatusIndex(3);
        else if (next < 50) setStatusIndex(4);
        else if (next < 60) setStatusIndex(5);
        else if (next < 70) setStatusIndex(6);
        else if (next < 80) setStatusIndex(7);
        else if (next < 90) setStatusIndex(8);
        else setStatusIndex(9);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFade(true);
            setTimeout(() => setHidden(true), 700);
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // 2. Animated Cosmic Background Canvas (Star Sparks & Laser Grid)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate floating sparks
    const numSparks = 60;
    const sparks = Array.from({ length: numSparks }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      alpha: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? '#22d3ee' : '#a855f7'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating sparks and connecting lines
      for (let i = 0; i < numSparks; i++) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.fill();

        // Connect nearby sparks with glowing laser lines
        for (let j = i + 1; j < numSparks; j++) {
          const s2 = sparks[j];
          const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = s.color;
            ctx.globalAlpha = (1 - dist / 100) * 0.25;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="loading-screen" className={`loading-container ${fade ? 'fade-out' : ''}`}>
      {/* Background Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="loading-spark-canvas" />

      {/* Futuristic Scanline Overlay */}
      <div className="scanline" />

      {/* Cyber Grid Lines */}
      <div className="cyber-grid-overlay" />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg px-4 text-center">
        
        {/* 4-RING GYROSCOPIC REACTOR CORE */}
        <div className="loading-core-wrapper">
          <div className="ring-gyro ring-gyro-1" />
          <div className="ring-gyro ring-gyro-2" />
          <div className="ring-gyro ring-gyro-3" />
          <div className="ring-gyro ring-gyro-4" />
          <div className="reactor-core-glow" />
          
          <div className="reactor-icon">
            <Cpu className="w-10 h-10 text-cyan-300 animate-pulse" />
          </div>
        </div>

        {/* Symposium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>NPSBCET Technical Symposium 2026</span>
        </div>

        {/* Holographic Glowing Title */}
        <h1 className="loading-title-glow">
          TECITON <span className="italic text-cyan-400 font-serif">2026</span>
        </h1>
        
        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan-200/80 uppercase mb-6 flex items-center justify-center gap-2">
          <Activity className="w-4 h-4 text-purple-400 animate-bounce" />
          <span>ENTER THE DIGITAL GALAXY</span>
          <Activity className="w-4 h-4 text-purple-400 animate-bounce" />
        </p>

        {/* Terminal Status Box */}
        <div className="loading-status-card">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 mb-2 border-b border-cyan-500/20 pb-1.5">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" /> BOOT_SEQUENCE
            </span>
            <span className="text-purple-400 font-bold tracking-widest">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Animated Status Message Ticker */}
          <div className="text-left font-mono text-xs text-slate-200 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="truncate">{statusMessages[statusIndex]}</span>
          </div>

          {/* Progress Bar Container */}
          <div className="loading-bar-bg mt-3">
            <div className="loading-bar-fill" style={{ width: `${progress}%` }}>
              <div className="bar-spark-head" />
            </div>
          </div>

          {/* Equalizer Frequency Analyzer Bar Graphics */}
          <div className="equalizer-bar-group mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 18 }).map((_, idx) => (
              <span
                key={idx}
                className="equalizer-bar"
                style={{
                  animationDelay: `${(idx % 5) * 0.15}s`,
                  height: `${Math.max(12, ((idx * 7) % 28) + (progress > 50 ? 10 : 4))}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer Security Note */}
        <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-amber-300" />
          <span>WEBGL 3D GALAXY ACCELERATION ACTIVE</span>
        </div>

      </div>
    </div>
  );
}
