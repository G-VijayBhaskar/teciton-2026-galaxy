import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { REGISTRATION_FORM_URL, EVENT_DETAILS } from '../config';

export const RegistrationCtaSection: React.FC = () => {
  return (
    <section id="register" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0b1026]/90 to-[#060919]/90 border border-cyan-500/30 p-8 sm:p-12 md:p-16 backdrop-blur-xl text-center overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)]">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            REGISTRATION PORTAL
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Secure Your Spot for <span className="font-serif italic text-cyan-400">TECITON 2026</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Registration deadline closes on <strong className="text-cyan-300 font-semibold">{EVENT_DETAILS.registrationDeadline}</strong>. Click below to register via the official Google Form.
          </p>

          {/* Features check list */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium mb-10">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
              <Check className="w-4 h-4 text-cyan-400" /> Free Delegate Participation
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
              <Check className="w-4 h-4 text-cyan-400" /> ₹75,000+ Prize Pool
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
              <Check className="w-4 h-4 text-cyan-400" /> Certificates for All
            </span>
          </div>

          {/* Big CTA Button */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg sm:text-xl shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:shadow-[0_0_65px_rgba(56,189,248,0.9)] hover:scale-105 active:scale-95 transition-all duration-200 border border-cyan-200/50 min-h-[56px]"
            >
              <span>OPEN GOOGLE FORM REGISTRATION</span>
              <ExternalLink className="w-6 h-6" />
            </a>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Official Google Form link • Opens securely in a new tab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
