import React from 'react';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section 
      id={SectionId.HERO} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
          alt="Band Concert Live" 
          className="object-cover w-full h-full animate-pulse-slow scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h2 className="text-red-600 font-hand text-2xl md:text-4xl mb-4 rotate-[-2deg] opacity-90 tracking-widest">
          The New Single 'Circles' Out Now
        </h2>
        <h1 className="text-6xl md:text-9xl font-black text-white font-heading tracking-tighter leading-none mb-8 drop-shadow-2xl">
          ERRANDS
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Sonic distortion meets melodic chaos. Join the revolution of sound.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onScrollDown}
            className="px-8 py-4 bg-red-600 text-white font-bold tracking-widest hover:bg-red-700 transition-all uppercase font-heading clip-path-slant"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
          >
            See Tour Dates
          </button>
          <button className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase font-heading"
             style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
          >
            Listen on Spotify
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};