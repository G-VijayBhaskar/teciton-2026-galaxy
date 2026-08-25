import React from 'react';
import { MapPin, Phone, Mail, Globe, Bus, UserCheck, User, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { EVENT_DETAILS } from '../config';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-cyan-400" />
            REACH US
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Venue & Contact <span className="font-serif italic text-cyan-400">Information</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Have questions? Get in touch with our event convenors and student coordinators.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Symposium Secretariat Info */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">Symposium Secretariat</h3>
              <p className="text-base text-cyan-300 font-semibold mb-2">{EVENT_DETAILS.college}</p>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">{EVENT_DETAILS.venue}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Phone Support</strong>
                    <span className="text-sm text-white font-medium">{EVENT_DETAILS.contactPhones.join(' / ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Email Inquiries</strong>
                    <span className="text-sm text-white font-medium">{EVENT_DETAILS.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Official College Website</strong>
                    <span className="text-sm text-white font-medium">www.newprinceshribhavani.edu.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a href={EVENT_DETAILS.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={EVENT_DETAILS.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={EVENT_DETAILS.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={EVENT_DETAILS.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coordinators Desk */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-6">Coordinators Desk</h3>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Dr. K. R. Ramesh</h4>
                    <span className="text-xs text-cyan-300 block font-medium">Staff Convenor — HOD (CSE)</span>
                    <small className="text-xs text-slate-400 font-mono">+91 98401 11223</small>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Arun Kumar V</h4>
                    <span className="text-xs text-purple-300 block font-medium">Student President (TECITON '26)</span>
                    <small className="text-xs text-slate-400 font-mono">+91 98765 12345</small>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Deepika S</h4>
                    <span className="text-xs text-blue-300 block font-medium">Student Vice-President</span>
                    <small className="text-xs text-slate-400 font-mono">+91 97890 54321</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Notice */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3 text-xs text-cyan-200">
              <Bus className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Transport facility available from all major Chennai bus stops & railway stations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
