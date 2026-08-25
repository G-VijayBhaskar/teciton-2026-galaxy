import React, { useState, useRef } from 'react';
import {
  Cpu,
  Code2,
  Bug,
  Layout,
  Brain,
  FileText,
  Link2,
  Compass,
  Smile,
  Gamepad2,
  Sparkles,
  Search,
  Grid,
  Terminal,
  Eye,
  ExternalLink,
  Users,
  Trophy
} from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';
import { SymposiumEvent, EventCategory } from '../types';
import { EventModal } from './EventModal';
import { REGISTRATION_FORM_URL } from '../config';

// Icon Map helper
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Bug,
  Layout,
  Brain,
  FileText,
  Link2,
  Compass,
  Smile,
  Gamepad2,
  Sparkles,
};

export const EventsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<SymposiumEvent | null>(null);

  const filteredEvents = EVENTS_DATA.filter(evt => {
    const matchesCat = activeCategory === 'all' || evt.category === activeCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const techCount = EVENTS_DATA.filter(e => e.category === 'technical').length;
  const nonTechCount = EVENTS_DATA.filter(e => e.category === 'non-technical').length;

  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-cyan-400" />
            COMPETITIONS & ARENAS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Explore TECITON 2026 <span className="font-serif italic text-cyan-400">Events</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Choose from our high-octane technical challenges or exciting non-technical arenas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#060919]/70 p-1.5 rounded-2xl border border-cyan-500/20 backdrop-blur-md w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>All Events ({EVENTS_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveCategory('technical')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Technical ({techCount})</span>
            </button>

            <button
              onClick={() => setActiveCategory('non-technical')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'non-technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Non-Technical ({nonTechCount})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search event by name..."
              className="w-full bg-[#060919]/70 border border-cyan-500/20 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 backdrop-blur-md transition-colors"
            />
          </div>
        </div>

        {/* 3D Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(evt => {
            const IconComponent = iconMap[evt.icon] || Code2;
            const isTech = evt.category === 'technical';
            const targetFormUrl = evt.googleFormUrl || REGISTRATION_FORM_URL;

            return (
              <EventCard
                key={evt.id}
                event={evt}
                IconComponent={IconComponent}
                isTech={isTech}
                targetFormUrl={targetFormUrl}
                onViewDetails={() => setSelectedEvent(evt)}
              />
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-[#060919]/60 border border-cyan-500/20 backdrop-blur-md">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No events found matching your search</h3>
            <p className="text-sm text-slate-400">Try adjusting your category filter or search keyword.</p>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};

interface EventCardProps {
  event: SymposiumEvent;
  IconComponent: React.FC<{ className?: string }>;
  isTech: boolean;
  targetFormUrl: string;
  onViewDetails: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, IconComponent, isTech, targetFormUrl, onViewDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl bg-[#060919]/60 border border-cyan-500/20 hover:border-cyan-400/50 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(56,189,248,0.25)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div>
        {/* Card Header: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all">
            <IconComponent className="w-6 h-6" />
          </div>

          <span
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              isTech ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'bg-purple-950 text-purple-300 border border-purple-500/30'
            }`}
          >
            {isTech ? 'TECHNICAL' : 'NON-TECHNICAL'}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-serif text-2xl font-normal text-white group-hover:text-cyan-300 transition-colors mb-2">
          {event.title}
        </h3>
        <p className="text-xs text-slate-300 font-light leading-relaxed mb-6 line-clamp-2">
          {event.tagline || event.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 py-2 border-y border-slate-800/80 font-medium">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            {event.teamSize}
          </span>
          <span className="flex items-center gap-1.5 text-amber-300">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            {event.prize.split('+')[0]}
          </span>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5 pt-2">
        <button
          onClick={onViewDetails}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>Details</span>
        </button>

        <a
          href={targetFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all min-h-[40px]"
        >
          <span>Register</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
