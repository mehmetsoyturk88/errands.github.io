import React from 'react';
import { SectionId } from '../types';
import { Mic2, Guitar, Drum, Activity } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="min-h-screen bg-neutral-900 py-24 relative flex items-center overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 border-2 border-red-600 translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Neon Veins Band Members" 
              className="w-full h-auto object-cover grayscale contrast-125 brightness-75 shadow-2xl relative z-10"
            />
            <div className="absolute bottom-0 left-0 bg-red-600 text-white px-6 py-2 font-heading font-bold tracking-widest text-xl z-20">
              EST. 2021
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 leading-none">
              WE ARE <br />
              <span className="text-red-600">NEON VEINS</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 font-serif leading-relaxed">
              Born from the static of a dying analog world, Neon Veins is a four-piece alternative rock outfit hailing from the underground of Nashville, TN. 
            </p>
            
            <p className="text-gray-400 mb-10 leading-relaxed">
              We don't just play music; we engineer chaos. With a sound that blends the raw aggression of 90s grunge with the atmospheric tension of modern post-rock, our mission is to dismantle the silence. Our latest record, <em>Entropy</em>, is a testament to the beauty of disorder in a perfectly curated world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-red-600/50 transition-colors group">
                <div className="p-3 bg-neutral-800 group-hover:bg-red-600 transition-colors">
                    <Mic2 size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-white uppercase tracking-wider">Alex Mercer</h4>
                    <p className="text-xs text-gray-500">Vocals / Rhythm Guitar</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-red-600/50 transition-colors group">
                <div className="p-3 bg-neutral-800 group-hover:bg-red-600 transition-colors">
                    <Guitar size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-white uppercase tracking-wider">Lena Void</h4>
                    <p className="text-xs text-gray-500">Lead Guitar / Synth</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-red-600/50 transition-colors group">
                <div className="p-3 bg-neutral-800 group-hover:bg-red-600 transition-colors">
                    <Activity size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-white uppercase tracking-wider">Marcus Graves</h4>
                    <p className="text-xs text-gray-500">Bass / Backing Vocals</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 hover:border-red-600/50 transition-colors group">
                <div className="p-3 bg-neutral-800 group-hover:bg-red-600 transition-colors">
                    <Drum size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-white uppercase tracking-wider">Jax</h4>
                    <p className="text-xs text-gray-500">Drums / Percussion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};