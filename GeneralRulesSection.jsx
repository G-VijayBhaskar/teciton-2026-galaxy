import React from 'react';
import { ShieldCheck, BadgeCheck, Award, Bus, CheckCircle2, AlertTriangle, FileText, Sparkles, Users } from 'lucide-react';

export default function GeneralRulesSection() {
  const generalRules = [
    {
      id: "rule-1",
      icon: BadgeCheck,
      title: "Mandatory College ID Card",
      badge: "IDENTITY",
      color: "text-sky-400",
      description: "All participants must wear their valid official College Identity Card at all times on campus. Entry will be denied without proper ID verification."
    },
    {
      id: "rule-2",
      icon: Users,
      title: "Eligibility & Team Formation",
      badge: "ELIGIBILITY",
      color: "text-purple-400",
      description: "Open to all UG & PG engineering, MCA, MBA, and science delegates. All members of a team must belong to the same institution."
    },
    {
      id: "rule-3",
      icon: Award,
      title: "Overall Championship Shield",
      badge: "TROPHY",
      color: "text-amber-300",
      description: "The college securing maximum aggregate points across technical and non-technical competitions will be awarded the prestigious TECITON '26 Overall Championship Shield!"
    },
    {
      id: "rule-4",
      icon: FileText,
      title: "Registration & Check-In",
      badge: "ENTRY",
      color: "text-cyan-300",
      description: "Online pre-registration via Google Form is strongly recommended. On-spot desk verification opens at 08:30 AM and closes strictly at 09:30 AM."
    },
    {
      id: "rule-5",
      icon: Bus,
      title: "Transport & Refreshments",
      badge: "AMENITIES",
      color: "text-emerald-400",
      description: "Complimentary college bus routes operate from major Chennai junctions. Free breakfast, lunch, and welcome delegate kits provided for all registered participants."
    },
    {
      id: "rule-6",
      icon: AlertTriangle,
      title: "Campus Discipline & Decorum",
      badge: "CONDUCT",
      color: "text-rose-400",
      description: "Decent attire and professional behavior must be maintained. Use of unauthorized devices or malpractice in events will cause immediate disqualification."
    }
  ];

  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-400" /> OFFICIAL GUIDELINES
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Symposium Overall <span className="italic text-cyan-400 font-serif">Rules & Code</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Essential guidelines and campus regulations for all TECITON 2026 delegates.
          </p>
        </div>

        {/* Feature Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {generalRules.map((rule) => {
            const IconComponent = rule.icon;
            return (
              <div
                key={rule.id}
                className="glass-card p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-700/60 flex items-center justify-center ${rule.color} group-hover:border-cyan-400 group-hover:scale-105 transition-all`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {rule.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center text-xs text-slate-400 font-mono gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Enforced across all 10 event venues</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Championship Banner Card */}
        <div className="glass-card p-8 sm:p-10 relative overflow-hidden" style={{ borderColor: 'rgba(251, 191, 36, 0.4)' }}>
          <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  PRESTIGIOUS CHAMPIONSHIP CRITERIA
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  TECITON 2026 Overall Champions Shield
                </h3>
                <p className="text-slate-300 text-sm font-light max-w-2xl mt-1">
                  1st Place: 10 Points | 2nd Place: 7 Points | Participation: 2 Points per event. Minimum 5 event entries required to qualify for Overall Championship.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>₹75,000 Total Cash Pool</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
