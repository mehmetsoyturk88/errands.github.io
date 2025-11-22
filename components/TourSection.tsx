import React from 'react';
import { SectionId, TourDate } from '../types';
import { MapPin, Calendar, Ticket } from 'lucide-react';

const TOUR_DATES: TourDate[] = [
  { id: '1', date: 'OCT 12', venue: 'The Basement East', city: 'Nashville, TN', status: 'sold-out' },
  { id: '2', date: 'OCT 15', venue: '9:30 Club', city: 'Washington, DC', status: 'available' },
  { id: '3', date: 'OCT 18', venue: 'Terminal 5', city: 'New York, NY', status: 'limited' },
];

export const TourSection: React.FC = () => {
  return (
    <section id={SectionId.TOUR} className="min-h-screen bg-neutral-950 py-24 relative flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="mb-16 text-center md:text-left border-b border-red-900/30 pb-8">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-4">
            TOUR <span className="text-red-600">DATES</span>
          </h2>
          <p className="text-gray-400 font-hand text-xl -rotate-1 inline-block">
            Chaos coming to a city near you.
          </p>
        </div>

        <div className="grid gap-4">
          {TOUR_DATES.map((tour) => (
            <div 
              key={tour.id} 
              className="group relative bg-neutral-900/50 border border-neutral-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between hover:bg-neutral-800 hover:border-red-900 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
                <div className="flex flex-col">
                  <span className="text-red-500 font-bold tracking-widest text-sm flex items-center justify-center md:justify-start gap-2">
                    <Calendar size={14} /> {tour.date.split(' ')[0]}
                  </span>
                  <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                    {tour.date.split(' ')[1]}
                  </span>
                </div>
                
                <div className="h-px w-full md:w-px md:h-12 bg-neutral-700 md:block hidden"></div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{tour.venue}</h3>
                  <div className="text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm">
                    <MapPin size={14} /> {tour.city}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                {tour.status === 'sold-out' ? (
                  <span className="block w-full text-center px-8 py-3 bg-neutral-800 text-neutral-500 font-bold uppercase tracking-wider cursor-not-allowed border border-neutral-700">
                    Sold Out
                  </span>
                ) : (
                  <button className={`w-full px-8 py-3 font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2
                    ${tour.status === 'limited' 
                      ? 'bg-red-900/20 text-red-500 border border-red-500/50 hover:bg-red-600 hover:text-white' 
                      : 'bg-white text-black hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <Ticket size={16} />
                    {tour.status === 'limited' ? 'Low Tickets' : 'Get Tickets'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};