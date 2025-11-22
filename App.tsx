import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TourSection } from './components/TourSection';
import { AboutSection } from './components/AboutSection';
import { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HERO);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  // Setup intersection observer to update active nav item on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    Object.values(SectionId).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-red-600 selection:text-white">
      <Navigation onNavigate={scrollToSection} activeSection={activeSection} />
      
      <Hero onScrollDown={() => scrollToSection(SectionId.TOUR)} />
      
      <TourSection />
      
      <AboutSection />
      
      {/* Simple Footer */}
      <footer className="bg-black py-12 border-t border-neutral-900 text-center">
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Errands. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

export default App;