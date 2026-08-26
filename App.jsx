import React, { useState } from 'react';
import GalaxyCanvas from './components/GalaxyCanvas';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GeneralRulesSection from './components/GeneralRulesSection';
import EventModal from './components/EventModal';
import ScheduleSection from './components/ScheduleSection';
import RegistrationCTA from './components/RegistrationCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#02030a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Three.js 3D WebGL Background Canvas */}
      <GalaxyCanvas />

      {/* 3.5s Cinematic Loading Overlay */}
      <LoadingScreen />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection onOpenModal={(evt) => setSelectedEvent(evt)} />
        <GeneralRulesSection />
        <ScheduleSection />
        <RegistrationCTA />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Event Details Modal Popup */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
