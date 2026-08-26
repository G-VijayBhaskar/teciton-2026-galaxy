import React, { useState } from 'react';
import { Cpu, SearchX } from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';
import EventCard from './EventCard';

export default function EventsSection({ onOpenModal }) {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = EVENTS_DATA.filter((evt) => {
    const matchesCategory = category === 'all' || evt.category === category;
    const matchesSearch =
      evt.title.toLowerCase().includes(search.toLowerCase()) ||
      evt.description.toLowerCase().includes(search.toLowerCase()) ||
      evt.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4 text-sky-400" /> COMPETITIONS & ARENAS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4">
            Explore TECITON 2026 <span className="italic text-cyan-400 font-serif">Events</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Choose from our high-octane technical challenges or exciting non-technical arenas.
          </p>
        </div>

        {/* Filters & Search Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#060919]/70 p-1.5 rounded-2xl border border-cyan-500/20 backdrop-blur-md w-full md:w-auto">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                category === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Events (10)
            </button>
            <button
              onClick={() => setCategory('technical')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                category === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical (5)
            </button>
            <button
              onClick={() => setCategory('non-technical')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                category === 'non-technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Non-Technical (5)
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search event by name..."
              className="w-full bg-[#060919]/70 border border-cyan-500/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            />
          </div>
        </div>

        {/* Event Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="glass-card text-center p-12 col-span-full">
            <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">No events found matching your search</h3>
            <p className="text-slate-400 text-sm">Try clearing your filter or searching for another keyword.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="events-grid">
            {filteredEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} onOpenModal={onOpenModal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
