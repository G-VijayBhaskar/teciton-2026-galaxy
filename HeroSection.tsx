import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Clock, Trophy, ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { REGISTRATION_FORM_URL, EVENT_DETAILS } from '../config';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.isoDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{EVENT_DETAILS.subtitle}</span>
        </div>

        {/* College Subtitle */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-cyan-200/70 uppercase max-w-3xl mb-3">
          {EVENT_DETAILS.college}
        </p>

        {/* Main Display Title with Instrument Serif */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-none drop-shadow-[0_0_35px_rgba(56,189,248,0.4)] mb-4">
          TECITON <span className="font-serif italic text-cyan-400">2026</span>
        </h1>

        {/* Professional Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-cyan-200/90 max-w-2xl mb-6">
          "Where Technology Meets Innovation — Enter The Digital Galaxy"
        </p>

        {/* Short Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Join hundreds of tech prodigies, coders, web crafters, and gamers in a high-octane 3D cosmic battleground to test your engineering prowess and claim massive rewards.
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10">
          <div className="p-4 rounded-2xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-md text-left hover:border-cyan-500/40 transition-colors">
            <Calendar className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Event Date</span>
            <strong className="text-sm sm:text-base text-white font-bold block">{EVENT_DETAILS.date}</strong>
          </div>

          <div className="p-4 rounded-2xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-md text-left hover:border-cyan-500/40 transition-colors">
            <MapPin className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Venue</span>
            <strong className="text-sm sm:text-base text-white font-bold block truncate">{EVENT_DETAILS.venue.split(',')[0]}</strong>
          </div>

          <div className="p-4 rounded-2xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-md text-left hover:border-cyan-500/40 transition-colors">
            <Clock className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Deadline</span>
            <strong className="text-sm sm:text-base text-white font-bold block">{EVENT_DETAILS.registrationDeadline.split('-')[0]}</strong>
          </div>

          <div className="p-4 rounded-2xl bg-[#060919]/80 border border-amber-500/40 backdrop-blur-md text-left shadow-[0_0_20px_rgba(251,191,36,0.15)]">
            <Trophy className="w-5 h-5 text-amber-400 mb-2 animate-bounce" />
            <span className="text-[11px] text-amber-300/80 uppercase tracking-wider block font-semibold">Cash Prize Pool</span>
            <strong className="text-sm sm:text-base text-amber-300 font-extrabold block">{EVENT_DETAILS.cashPrizePool}</strong>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="mb-10 w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[#060919]/70 border border-cyan-500/25 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Clock className="w-4 h-4 text-cyan-400" />
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

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_50px_rgba(56,189,248,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 border border-cyan-300/40 min-h-[52px]"
          >
            <Sparkles className="w-5 h-5 text-cyan-200" />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <a
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-cyan-200 font-medium text-base border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400 transition-all min-h-[52px]"
          >
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
