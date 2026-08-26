import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function RegistrationCTA() {
  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="glass-card p-8 sm:p-12 text-center"
          style={{
            borderColor: 'rgba(56, 189, 248, 0.4)',
            boxShadow: '0 0 50px rgba(56, 189, 248, 0.25)'
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-semibold uppercase mb-4">
            <Sparkles className="w-4 h-4 text-sky-400" /> REGISTRATION PORTAL
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-4">
            Secure Your Spot for <span className="italic text-cyan-400 font-serif">TECITON 2026</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
            Registration deadline closes on <strong className="text-cyan-300 font-semibold">FEB 12, 2026 - 11:59 PM</strong>. Click below to register via official Google Form.
          </p>

          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg font-bold"
          >
            <span>OPEN GOOGLE FORM REGISTRATION</span>
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
