export enum SectionId {
  HERO = 'hero',
  TOUR = 'tour',
  ABOUT = 'about'
}

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  status: 'available' | 'sold-out' | 'limited';
}

export interface GeneratedLyrics {
  title: string;
  content: string;
}