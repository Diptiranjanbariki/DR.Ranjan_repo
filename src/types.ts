export interface Review {
  id: string;
  name: string;
  rating: number;
  content: string;
  source: string;
  isHighlight?: boolean;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'equipment' | 'consultation';
  imageUrl: string;
}

export interface Appointment {
  fullName: string;
  phoneNumber: string;
  age: string;
  appointmentDate: string;
  slot: string;
  message?: string;
}
