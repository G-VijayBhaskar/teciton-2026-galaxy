import React from 'react';
import { Network, Cpu, Sun, Sparkles, Terminal, Coffee, Gamepad2, Trophy, Clock, Award } from 'lucide-react';

export default function ScheduleSection() {
  const scheduleNodes = [
    {
      time: "08:30 AM - 09:30 AM",
      title: "Reporting & Desk Verification",
      description: "Delegate check-in, pass validation, breakfast, and kit distribution at Main Auditorium.",
      icon: Sun,
      isGold: false
    },
    {
      time: "09:30 AM - 10:15 AM",
      title: "Grand Inauguration Ceremony",
      description: "Welcome address by College Dignitaries, Chief Guest keynote speech, and official launch.",
      icon: Sparkles,
      isGold: false
    },
    {
      time: "10:30 AM - 01:00 PM",
      title: "Morning Tech & Non-Tech Round 1",
      description: "Coding Odyssey, Bug Hunt, Web Crafters, Paper Presentation, Connection, Treasure Hunt kick-off.",
      icon: Terminal,
      isGold: false
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Lunch Break & Delegate Networking",
      description: "Complimentary lunch for all registered delegates in the Campus Dining Hall.",
      icon: Coffee,
      isGold: false
    },
    {
      time: "02:00 PM - 03:45 PM",
      title: "Final Showdowns & E-Sports Arena",
      description: "Web Dev final showdown, E-Sports Arena, Meme Contest judging, Tech Quiz finals.",
      icon: Gamepad2,
      isGold: false
    },
    {
      time: "04:00 PM - 05:00 PM",
      title: "Valedictory & Grand Prize Distribution",
      description: "Awarding Cash Prizes (₹75,000+), Trophies, Certificates, and Overall Championship Shield!",
      icon: Trophy,
      isGold: true
    }
  ];

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Network className="w-4 h-4 text-sky-400" /> MIND MAP TIMELINE
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Symposium Day <span className="italic text-cyan-400 font-serif">Mind Map</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            February 14, 2026 — Interactive schedule network nodes across New Prince Shri Bhavani Campus.
          </p>
        </div>

        <div className="mindmap-wrapper">
          {/* Central Core Hub */}
          <div className="mindmap-core-hub">
            <Cpu className="w-8 h-8 text-sky-400 mb-1" />
            <span className="font-serif text-xl text-white font-bold leading-tight">TECITON '26</span>
            <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-widest mt-1">FEB 14 CORE HUB</span>
          </div>

          {/* Grid Nodes */}
          <div className="mindmap-grid">
            {scheduleNodes.map((node, idx) => {
              const NodeIcon = node.icon;
              return (
                <div key={idx} className={`mindmap-node ${node.isGold ? 'gold-node' : ''}`}>
                  <div className="mindmap-node-icon">
                    <NodeIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="mindmap-time-badge">
                      {node.isGold ? <Award className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {node.time}
                    </span>
                    <h3 className={`font-serif text-xl font-normal mb-1 ${node.isGold ? 'text-amber-300' : 'text-white'}`}>
                      {node.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
