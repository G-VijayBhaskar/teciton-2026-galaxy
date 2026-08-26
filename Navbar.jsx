import React, { useState, useEffect } from 'react';
import { Cpu, ExternalLink, Menu, X } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-all">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-normal text-white">
              TECITON <span className="italic text-cyan-400 font-serif">2026</span>
            </span>
            <span className="text-[10px] text-cyan-200/70 uppercase tracking-widest font-semibold">
              DEPARTMENT OF MCA • NPSBCET
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">About</a>
          <a href="#events" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Events</a>
          <a href="#rules" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Rules</a>
          <a href="#schedule" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Schedule</a>
          <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060919]/95 border-b border-cyan-500/20 px-6 py-6 mt-3 backdrop-blur-xl flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            About
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            Events
          </a>
          <a
            href="#rules"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            Rules
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            Schedule
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-cyan-300"
          >
            Contact
          </a>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center mt-2"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
