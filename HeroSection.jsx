import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Trophy, Sparkles, GraduationCap, ExternalLink, Layers } from 'lucide-react';
import { EVENT_DATE, REGISTRATION_FORM_URL } from '../data/eventsData';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>National Level College Technical Symposium</span>
        </div>

        <p className="text-xs sm:text-sm font-semibold tracking-widest text-cyan-200/70 uppercase mb-1">
          NEW PRINCE SHRI BHAVANI COLLEGE OF ENGINEERING AND TECHNOLOGY
        </p>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
          <GraduationCap className="w-4 h-4 text-cyan-400" /> DEPARTMENT OF MASTER OF COMPUTER APPLICATIONS
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-none mb-4" style={{ textShadow: '0 0 35px rgba(56, 189, 248, 0.4)' }}>
          TECITON <span className="italic text-cyan-400 font-serif">2026</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-cyan-200/90 max-w-2xl mb-6">
          "Where Technology Meets Innovation — Enter The Digital Galaxy"
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Join hundreds of tech prodigies, coders, web crafters, and gamers in a high-octane 3D cosmic battleground to test your engineering prowess and claim massive rewards.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10">
          <div className="glass-card p-4 text-left">
            <Calendar className="w-5 h-5 text-sky-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Event Date</span>
            <strong className="text-sm sm:text-base text-white font-bold block">FEBRUARY 14, 2026</strong>
          </div>

          <div className="glass-card p-4 text-left">
            <MapPin className="w-5 h-5 text-sky-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Venue</span>
            <strong className="text-sm sm:text-base text-white font-bold block truncate">NPSBCET Campus, Chennai</strong>
          </div>

          <div className="glass-card p-4 text-left">
            <Clock className="w-5 h-5 text-sky-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Deadline</span>
            <strong className="text-sm sm:text-base text-white font-bold block">FEB 12, 2026</strong>
          </div>

          <div className="glass-card p-4 text-left" style={{ borderColor: 'rgba(251, 191, 36, 0.4)' }}>
            <Trophy className="w-5 h-5 text-amber-300 mb-2" />
            <span className="text-[11px] text-amber-300/80 uppercase tracking-wider block font-semibold">Cash Prize Pool</span>
            <strong className="text-sm sm:text-base text-amber-300 font-extrabold block">₹ 75,000+</strong>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-10 w-full max-w-xl p-4 sm:p-5 rounded-2xl glass-card">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>SYMPOSIUM STARTS IN</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-cyan-500/20">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-cyan-300">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase block font-semibold mt-1">Days</span>
            </div>
            <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-cyan-500/20">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-cyan-300">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase block font-semibold mt-1">Hours</span>
            </div>
            <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-cyan-500/20">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-cyan-300">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase block font-semibold mt-1">Minutes</span>
            </div>
            <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-cyan-500/20">
              <span className="text-2xl sm:text-4xl font-bold font-mono text-cyan-300">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase block font-semibold mt-1">Seconds</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-base min-h-[52px]"
          >
            <Sparkles className="w-5 h-5" />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#events"
            className="btn-secondary w-full sm:w-auto text-base min-h-[52px]"
          >
            <Layers className="w-5 h-5 text-sky-400" />
            <span>Explore Events</span>
          </a>
        </div>

      </div>
    </section>
  );
}
