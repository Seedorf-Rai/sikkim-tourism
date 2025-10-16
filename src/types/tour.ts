export interface TourBasics {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  type: "Group Tour" | "Private Tour" | "Sharing Tour";
  rating: number;
  reviewCount: number;
}

export interface TourItinerary {
  day: number;
  title: string;
  activities: string[];
  timing?: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
  included: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TourLocation {
  name: string;
  latitude?: number;
  longitude?: number;
  distance?: string;
  altitude?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Tour extends TourBasics {
  itinerary: TourItinerary[];
  amenities: Amenity[];
  faqs: FAQ[];
  locations: TourLocation[];
  reviews: Review[];
  inclusions: string[];
  exclusions: string[];
  requirements?: string[];
  bestTime?: string;
  languages?: string[];
  maxGuests?: number;
  minAge?: number;
}
