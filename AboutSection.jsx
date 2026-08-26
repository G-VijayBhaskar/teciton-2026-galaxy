import React from 'react';
import { Zap, Award, Code2, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Zap className="w-4 h-4 text-sky-400" /> ABOUT THE SYMPOSIUM
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Where Innovation Meets <span className="italic text-cyan-400 font-serif">Technology</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-6">
                Welcome to <span className="text-cyan-300">TECITON 2026</span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                <strong className="text-white font-semibold">TECITON 2026</strong> is the flagship National Level Technical Symposium organized by <strong className="text-cyan-300 font-semibold">New Prince Shri Bhavani College of Engineering and Technology</strong>. Designed to unleash technical aptitude, problem-solving intelligence, and creative ingenuity.
              </p>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                Featuring premier technical challenges and vibrant non-technical arenas, TECITON 2026 offers an extraordinary platform complete with cash rewards, verified certificates, and inter-college networking.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono block">10+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Events Total</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono block">50+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Colleges</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono block">1000+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Delegates</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono block">₹75K+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold">Prizes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="glass-card p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Cash Prizes & Certificates</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">Monetary rewards for 1st & 2nd winners in every event plus verified certificates for all delegates.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Real-World Coding Arena</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">Algorithmic problem solving, rapid web UI design, and code debugging in live environments.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Inter-College Networking</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">Connect with fellow tech enthusiasts and delegates from across top engineering colleges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
