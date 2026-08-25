import React from 'react';
import { Clock, Sun, Sparkles, Terminal, Coffee, Gamepad2, Trophy } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/eventsData';

const scheduleIconMap: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Sparkles,
  Terminal,
  Coffee,
  Gamepad2,
  Trophy,
};

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Clock className="w-4 h-4 text-cyan-400" />
            TIMELINE
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Symposium Day <span className="font-serif italic text-cyan-400">Schedule</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            February 14, 2026 — Plan your day at New Prince Shri Bhavani Campus.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-cyan-500/40 sm:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {SCHEDULE_DATA.map((item, idx) => {
              const IconComponent = scheduleIconMap[item.icon] || Clock;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#060919] border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <div
                      className={`p-6 rounded-3xl bg-[#060919]/60 border backdrop-blur-xl transition-all ${
                        item.isGold
                          ? 'border-amber-500/40 shadow-[0_0_30px_rgba(251,191,36,0.15)] bg-slate-950/80'
                          : 'border-cyan-500/20 hover:border-cyan-400/40'
                      }`}
                    >
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
                          item.isGold
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                            : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-300 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
