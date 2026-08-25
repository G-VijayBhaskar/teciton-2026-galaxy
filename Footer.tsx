import React from 'react';
import { Cpu, Heart } from 'lucide-react';
import { EVENT_DETAILS, REGISTRATION_FORM_URL } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-[#03050c]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-normal text-white">
              TECITON <span className="text-cyan-400 italic font-serif">2026</span>
            </span>
          </a>
          <p className="text-xs text-slate-400 max-w-sm mb-1 font-light">
            {EVENT_DETAILS.college}
          </p>
          <small className="text-[11px] text-slate-500 font-mono">
            © 2026 TECITON. All rights reserved. Designed for technical excellence.
          </small>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#home" className="hover:text-cyan-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <a href="#events" className="hover:text-cyan-300 transition-colors">
            Events
          </a>
          <a href="#schedule" className="hover:text-cyan-300 transition-colors">
            Schedule
          </a>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold"
          >
            Register Now
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
