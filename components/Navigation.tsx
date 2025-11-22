import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Music, Calendar, Users } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: SectionId) => void;
  activeSection: SectionId;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionId.HERO, label: 'HOME', icon: Music },
    { id: SectionId.TOUR, label: 'TOUR DATES', icon: Calendar },
    { id: SectionId.ABOUT, label: 'THE BAND', icon: Users },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Band Name */}
        <div 
          className="text-2xl font-black tracking-tighter text-white font-heading cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => handleNavClick(SectionId.HERO)}
        >
          NEON<span className="text-red-600">VEINS</span>
        </div>

        {/* Desktop Links (Top Left aligned as requested, pushed slightly right of logo) */}
        <div className="hidden md:flex ml-12 space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-bold tracking-widest flex items-center gap-2 group transition-colors ${
                activeSection === item.id ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              <item.icon size={14} className={`group-hover:rotate-12 transition-transform ${activeSection === item.id ? 'text-red-500' : ''}`} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-red-900/30">
          <div className="flex flex-col p-6 space-y-4">
             {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-bold font-heading tracking-wider text-left ${
                  activeSection === item.id ? 'text-red-500' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};