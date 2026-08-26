import React from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-white flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-500/40 inline-block mb-3">
          {event.category.toUpperCase()}
        </span>
        <h3 className="font-serif text-3xl font-normal text-white mb-1">{event.title}</h3>
        <p className="text-sm text-cyan-200/80 italic font-serif mb-6">{event.tagline}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/15 mb-6 text-xs">
          <div>
            <span className="text-slate-400 block font-semibold">Team Size</span>
            <strong className="text-white">{event.teamSize}</strong>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold">Timing</span>
            <strong className="text-white">{event.timing}</strong>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold">Venue</span>
            <strong className="text-white">{event.venue}</strong>
          </div>
          <div>
            <span className="text-amber-300 block font-semibold">Prize</span>
            <strong className="text-amber-300">{event.prize}</strong>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">Description</h4>
          <p className="text-sm text-slate-300 font-light leading-relaxed">{event.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">Rules & Guidelines</h4>
          <ul className="space-y-2 text-sm text-slate-300 font-light">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Coordinators</h4>
          <p className="text-sm text-cyan-200 font-medium">{event.coordinators}</p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Register For Event</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
