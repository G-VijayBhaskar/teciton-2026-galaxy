import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ExternalLink } from 'lucide-react';
import { REGISTRATION_FORM_URL, EVENT_DETAILS } from '../config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060919]/80 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-normal tracking-wide text-white group-hover:text-cyan-300 transition-colors">
              TECITON <span className="text-cyan-400 italic font-serif">2026</span>
            </span>
            <span className="text-[10px] text-cyan-200/60 uppercase tracking-widest font-semibold">
              {EVENT_DETAILS.collegeShort} SYMPOSIUM
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            About
          </a>
          <a
            href="#events"
            className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Events
          </a>
          <a
            href="#schedule"
            className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Schedule
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-cyan-300/40"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 flex items-center justify-center focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060919]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
            >
              About
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
            >
              Events
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
            >
              Schedule
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/60"
            >
              Contact
            </a>

            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-95 transition-all min-h-[48px]"
            >
              <span>Register Now (Google Form)</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
