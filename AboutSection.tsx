import React from 'react';
import { Zap, Award, Code2, Users, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../config';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Zap className="w-4 h-4 text-cyan-400" />
            ABOUT THE SYMPOSIUM
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Where Innovation Meets <span className="font-serif italic text-cyan-400">Technology</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main About Glass Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-6">
                Welcome to <span className="text-cyan-300">TECITON 2026</span>
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                <strong className="text-white font-semibold">TECITON 2026</strong> is the flagship National Level Technical Symposium organized by <strong className="text-cyan-300 font-semibold">{EVENT_DETAILS.college}</strong>. Designed to unleash the technical aptitude, problem-solving intelligence, and creative ingenuity of engineering students across the country.
              </p>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                Featuring a handpicked lineup of premier technical competitions and high-energy non-technical arenas, TECITON 2026 offers an extraordinary platform complete with live coding battles, paper presentations, cash rewards, verified certificates, and inter-collegiate networking.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono block">10+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Events Total</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono block">50+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Colleges</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono block">1000+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Delegates</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono block">₹75K+</span>
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Prizes</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-xl flex items-start gap-5 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Cash Prizes & Certificates</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Win grand monetary rewards for 1st & 2nd place winners in every event plus verified certificates of merit for all delegates.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#060919]/60 border border-purple-500/20 backdrop-blur-xl flex items-start gap-5 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Real-World Coding Arena</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Challenge yourself with algorithmic problem solving, rapid web UI design, and complex code debugging in live environments.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#060919]/60 border border-blue-500/20 backdrop-blur-xl flex items-start gap-5 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Inter-College Networking</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Connect with fellow tech enthusiasts, competitive programmers, and college delegates from across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
