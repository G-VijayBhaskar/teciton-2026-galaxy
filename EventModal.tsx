import React from 'react';
import { X, Users, Clock, MapPin, Trophy, CheckCircle2, ExternalLink } from 'lucide-react';
import { SymposiumEvent } from '../types';
import { REGISTRATION_FORM_URL } from '../config';

interface EventModalProps {
  event: SymposiumEvent | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  const targetFormUrl = event.googleFormUrl || REGISTRATION_FORM_URL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#060919] border border-cyan-500/30 p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(56,189,248,0.3)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
              event.category === 'technical'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                : 'bg-purple-950 text-purple-300 border border-purple-500/40'
            }`}
          >
            {event.category.toUpperCase()} COMPETITION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2">{event.title}</h3>
          <p className="text-sm sm:text-base text-cyan-200/80 italic font-serif">{event.tagline}</p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/15 mb-6 text-xs sm:text-sm">
          <div>
            <span className="text-slate-400 block mb-1 font-semibold flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> Team Size
            </span>
            <strong className="text-white">{event.teamSize}</strong>
          </div>

          <div>
            <span className="text-slate-400 block mb-1 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Timing
            </span>
            <strong className="text-white truncate block">{event.timing}</strong>
          </div>

          <div>
            <span className="text-slate-400 block mb-1 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Venue
            </span>
            <strong className="text-white truncate block">{event.venue}</strong>
          </div>

          <div>
            <span className="text-amber-300/80 block mb-1 font-semibold flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Prize Pool
            </span>
            <strong className="text-amber-300 font-bold">{event.prize}</strong>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">Event Description</h4>
          <p className="text-slate-300 text-sm leading-relaxed font-light">{event.description}</p>
        </div>

        {/* Rules */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">Rules & Guidelines</h4>
          <ul className="space-y-2">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordinators */}
        <div className="mb-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Event Coordinators</h4>
          <p className="text-sm text-cyan-200 font-medium">{event.coordinators}</p>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:bg-slate-800 text-sm font-medium transition-colors"
          >
            Close
          </button>
          <a
            href={targetFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all min-h-[44px]"
          >
            <span>Register For {event.title}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
