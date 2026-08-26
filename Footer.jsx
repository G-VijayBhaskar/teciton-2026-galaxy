import React from 'react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/15 bg-[#03050c]/90 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-2xl font-normal text-white">
            TECITON <span className="text-cyan-400 italic font-serif">2026</span>
          </h2>
          <p className="text-xs text-slate-400 font-light">
            New Prince Shri Bhavani College of Engineering and Technology
          </p>
          <small className="text-[11px] text-slate-500">© 2026 TECITON. All rights reserved.</small>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#events" className="hover:text-cyan-300 transition-colors">Events</a>
          <a href="#schedule" className="hover:text-cyan-300 transition-colors">Schedule</a>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            Register Now
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
