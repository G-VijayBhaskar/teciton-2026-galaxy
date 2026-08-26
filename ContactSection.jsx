import React from 'react';
import { MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4 text-sky-400" /> REACH US
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Venue & Contact <span className="italic text-cyan-400 font-serif">Information</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-4">Symposium Secretariat</h3>
              <p className="text-base text-cyan-300 font-semibold mb-2">New Prince Shri Bhavani College of Engineering and Technology</p>
              <p className="text-sm text-slate-300 font-light mb-6">Vengaivasal Main Road, Gowrivakkam, Senthil Nagar, Chennai, Tamil Nadu 600073</p>

              <div className="space-y-3 text-sm text-slate-300 font-light">
                <p><strong>Phone Support:</strong> +91 98401 23456 / +91 94442 87654</p>
                <p><strong>Email:</strong> teciton2026@newprinceshribhavani.edu.in</p>
                <p><strong>Website:</strong> www.newprinceshribhavani.edu.in</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-6">Coordinators Desk</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20">
                  <h4 className="text-base font-semibold text-white">Dr. K. R. Ramesh</h4>
                  <span className="text-xs text-cyan-300 block font-medium">Staff Convenor — HOD (CSE)</span>
                  <small className="text-xs text-slate-400">+91 98401 11223</small>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20">
                  <h4 className="text-base font-semibold text-white">Arun Kumar V</h4>
                  <span className="text-xs text-purple-300 block font-medium">Student President (TECITON '26)</span>
                  <small className="text-xs text-slate-400">+91 98765 12345</small>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200">
              Transport facility available from all major Chennai bus stops & railway stations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
