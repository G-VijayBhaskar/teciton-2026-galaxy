import React, { useRef } from 'react';
import * as Icons from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/eventsData';

export default function EventCard({ event, onOpenModal }) {
  const cardRef = useRef(null);
  const isTech = event.category === 'technical';

  // Dynamic Lucide Icon Resolver
  const IconComponent = Icons[event.icon] || (isTech ? Icons.Terminal : Icons.Gamepad2);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      className="event-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="event-card-top flex items-center justify-between">
          <div className="event-card-icon">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isTech
              ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
              : 'bg-purple-950 text-purple-300 border border-purple-500/30'
          }`}>
            {isTech ? 'TECHNICAL' : 'NON-TECHNICAL'}
          </span>
        </div>

        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-desc">{event.tagline}</p>

        <div className="event-card-meta font-medium">
          <span className="flex items-center gap-1">
            <Icons.Users className="w-3.5 h-3.5 text-sky-400" />
            {event.teamSize}
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <Icons.Trophy className="w-3.5 h-3.5 text-amber-300" />
            {event.prize.split('+')[0]}
          </span>
        </div>
      </div>

      <div className="event-card-actions">
        <button
          onClick={() => onOpenModal(event)}
          className="btn-view-details"
        >
          <Icons.Eye className="w-3.5 h-3.5 text-sky-400" /> Details
        </button>
        <a
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-register-direct"
        >
          Register <Icons.ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
