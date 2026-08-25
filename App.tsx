import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { GalaxyCanvas, isWebGLAvailable } from './components/GalaxyCanvas';
import { WebGlFallback } from './components/WebGlFallback';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationCtaSection } from './components/RegistrationCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    // Verify WebGL support on initial mount
    const supported = isWebGLAvailable();
    setWebGlSupported(supported);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03050c] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      {/* 3D Galaxy Canvas or WebGL Fallback */}
      {webGlSupported ? (
        <GalaxyCanvas onWebGlError={() => setWebGlSupported(false)} />
      ) : (
        <WebGlFallback />
      )}

      {/* Main Website Structure */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <ScheduleSection />
          <RegistrationCtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
