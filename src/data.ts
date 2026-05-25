import { MedicalService, Review, FAQItem, HealthTip, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: "Dr Ranjan Polyclinic",
  category: "Health Consultant / Polyclinic / Healthcare Clinic",
  rating: 4.7,
  reviewsCount: 71,
  address: "Show Room, Gandhi Chowk, Gokul Nagar, Behind Hero Honda, Brajrajnagar, Odisha 768216",
  phone: "084560 96341",
  whatsapp: "+918456096341",
  timings: {
    morning: "9:00 AM – 2:00 PM",
    evening: "5:00 PM – 9:00 PM",
    days: "Monday – Saturday (Sunday on Emergency Call)"
  },
  emergencyPhone: "084560 96341",
  location: {
    lat: 21.8214, // Brajrajnagar Odisha coordinates representation
    lng: 83.9189,
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1362141527284!2d83.91671137592476!3d21.821400080182746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da94a205d15%3A0x7d612e4f04c6a66b!2sGandhi%20Chowk%2C%20Brajrajnagar%2C%20Odisha%20768216!5e0!3m2!1sen!2sin!4v1716616000000!5m2!1sen!2sin"
  }
};

export const CLINIC_STATS = [
  { label: "Years of Trust", value: "15+" },
  { label: "Happy Patients", value: "25k+" },
  { label: "Expert Doctor", value: "1" },
  { label: "Patient Rating", value: "4.7 ⭐" }
];

export const SERVICES: MedicalService[] = [
  {
    id: "general-consultation",
    title: "General Health Consultation",
    description: "Comprehensive evaluation of chronic and acute symptoms with precise diagnosis and customized therapy regimes.",
    icon: "Stethoscope",
    category: "Primary Care"
  },
  {
    id: "fever-infection",
    title: "Fever & Infection Treatment",
    description: "Expert therapy for viral, bacterial, and seasonal infections, ensuring quick recovery and symptom relief.",
    icon: "Thermometer",
    category: "Infectious Care"
  },
  {
    id: "diabetes-bp",
    title: "Diabetes & BP Checkup",
    description: "Specialized monitoring and medication management for diabetes mellitus and arterial hypertension.",
    icon: "Activity",
    category: "Cardiometabolic"
  },
  {
    id: "family-health",
    title: "Family Healthcare",
    description: "Total care packages and support designed to protect health across entire families and multiple generations.",
    icon: "HeartHandshake",
    category: "Primary Care"
  },
  {
    id: "preventive-care",
    title: "Preventive Health Care",
    description: "Detailed wellness counseling, screening recommendations, and health trackers to avoid diseases.",
    icon: "ShieldAlert",
    category: "Prevention"
  },
  {
    id: "routine-checkups",
    title: "Routine Medical Checkups",
    description: "Physical examinations and basic vital assessments to verify health status and monitor key parameters.",
    icon: "UserCheck",
    category: "Primary Care"
  },
  {
    id: "child-elder-care",
    title: "Child & Elder Care",
    description: "Compassionate healthcare guidance optimized for both growing children and transitioning geriatric patients.",
    icon: "HeartPulse",
    category: "Specialized"
  },
  {
    id: "guidance-consultation",
    title: "Health Guidance & Consultation",
    description: "One-on-one professional health coaching, nutritional frameworks, and lifestyle modifications advisory.",
    icon: "ClipboardCheck",
    category: "Guidance"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Ramesh Chandra Sahu",
    rating: 5,
    content: "Excellent clinic with caring staff and highly experienced doctor. Dr. Anil Kumar Ranjan provides highly accurate diagnosis and doesn't prescribe unnecessary medicines.",
    source: "Google Reviews",
    isHighlight: true
  },
  {
    id: "rev-2",
    name: "Suman Mohanty",
    rating: 5,
    content: "Great treatment and excellent staff behavior. The clinic is very clean, and they respect patient timings perfectly. Definitely highly recommended.",
    source: "Google Reviews",
    isHighlight: true
  },
  {
    id: "rev-3",
    name: "Dipak Kumar Barik",
    rating: 5,
    content: "Best doctor in Jharsuguda district. Very sensible counseling and authentic guidance. The family healthcare packages are very affordable here.",
    source: "Google Reviews",
    isHighlight: true
  },
  {
    id: "rev-4",
    name: "Pooja Sharma",
    rating: 5,
    content: "Very good service and healthy treatment. Extremely patient-friendly environment inside the OPD. Clean waiting area and helpful receptionist.",
    source: "Google Reviews",
    isHighlight: false
  },
  {
    id: "rev-5",
    name: "Pradip Pradhan",
    rating: 4,
    content: "Affordable healthcare with excellent diagnostics. Dr. Ranjan is very soft-spoken and takes time to explain the medical reports details to patients.",
    source: "Google Reviews",
    isHighlight: false
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "why-1",
    title: "Experienced Doctor",
    description: "Consult with Dr. Anil Kumar Ranjan, trusted by thousands of patients in Odisha for his clinical acumen.",
    icon: "Award"
  },
  {
    id: "why-2",
    title: "Friendly Staff",
    description: "Experience supportive and polite receptionists and healthcare workers committed to client comfort.",
    icon: "Users"
  },
  {
    id: "why-3",
    title: "Affordable Treatment",
    description: "High-quality, evidence-based therapies and medical diagnosis at patient-friendly, reasonable fees.",
    icon: "HandCoins"
  },
  {
    id: "why-4",
    title: "Clean Environment",
    description: "We follow strict sterilization standards, ensuring sanitization across all areas of the polyclinic.",
    icon: "Sparkles"
  },
  {
    id: "why-5",
    title: "Fast Consultation",
    description: "Streamlined queue management and fast, attentive booking systems reduce waiting times.",
    icon: "Clock"
  },
  {
    id: "why-6",
    title: "Trusted by Hundreds",
    description: "Rated 4.7 out of 5 stars with over 71 Google reviews highlighting excellent outpatient treatment outcomes.",
    icon: "ShieldCheck"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Reception & Waiting Lounge",
    category: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-2",
    title: "Doctor Consultation Room",
    category: "consultation",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-3",
    title: "Advanced Diabetes Diagnostic Equipment",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-4",
    title: "Sanitized OPD Room Area",
    category: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-5",
    title: "Safe Primary Pediatric Assessment Setup",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1519494080410-f9aa2625a3bd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-6",
    title: "Healthy Wellness Center Lobby",
    category: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are Dr Ranjan Polyclinic's timing slots?",
    answer: "The clinic is open from 9:00 AM to 2:00 PM in the morning and from 5:00 PM to 9:00 PM in the evening from Monday to Saturday. On Sundays, Dr. Ranjan is available for emergency consultations on call.",
    category: "Timings"
  },
  {
    id: "faq-2",
    question: "Do I need to book an appointment before visiting?",
    answer: "Yes, we encourage patients to book an appointment online or call us at 084560 96341. While walk-in patients are also welcome, booking a slot helps reduce waiting hours.",
    category: "Appointments"
  },
  {
    id: "faq-3",
    question: "Is there a vaccination or routine checkup facility for children?",
    answer: "Absolutely. Dr Ranjan Polyclinic provides General Child & Elder Care, fever management, immunizations guidance, and pediatric metabolic vital assessments.",
    category: "Services"
  },
  {
    id: "faq-4",
    question: "Do you have digital blood pressure and sugar monitors?",
    answer: "Yes, we use advanced and calibrated diagnostic medical gear to assure highly accurate blood pressure and glucometry checks.",
    category: "Services"
  },
  {
    id: "faq-5",
    question: "Where exactly is the clinic located in Brajrajnagar?",
    answer: "We are situated behind the Hero Honda showroom, at Show Room, Gandhi Chowk, Gokul Nagar, Brajrajnagar, Odisha 768216. Our location is highly recognizable and is right on the main street.",
    category: "Location"
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "5 Practical Ways to Keep Your Blood Pressure Stable Daily",
    category: "Hypertension",
    summary: "Managing hypertension is highly achievable with structured routine adjustments. Follow these daily guidelines.",
    content: "1. Monitor your salt intake (aim for less than 1 teaspoon/5g daily).\n2. Engage in brisk walking or cycling for 30 minutes at least 5 days a week.\n3. Increase potassium-rich foods like bananas, green leafy vegetables, and coconut water.\n4. Avoid stress through deep breathing exercises for 10 minutes.\n5. Log your blood pressure twice a week to keep Dr. Ranjan updated during review visits.",
    readTime: "3 min read",
    date: "May 20, 2026",
    author: "Dr. Anil Kumar Ranjan"
  },
  {
    id: "tip-2",
    title: "Fever Care Guideline: When to Watch and When to Consult",
    category: "General Health",
    summary: "Seasonal high body temperature requires hydration and appropriate monitoring. Here's a brief patient guide.",
    content: "When hot flashes or fever hit, ensure a cold water sponge massage across the forehead. Maintain dynamic fluid intakes including fresh soups, oral rehydration solutions (ORS), and warm water. Rest is critical. Avoid immediate self-medication with strong antibiotics; consult Dr. Ranjan if the fever stays over 101°F for more than 48 hours.",
    readTime: "4 min read",
    date: "May 18, 2026",
    author: "Dr. Anil Kumar Ranjan"
  },
  {
    id: "tip-3",
    title: "Managing Blood Sugar: Small Dietary Adjustments That work",
    category: "Diabetes",
    summary: "Sustaining a healthy glycemic timeline is possible. Learn simple meal balancing strategies.",
    content: "Prefer whole fiber grains like finger millet (Ragi), oats, and brown rice instead of white flour (maida) or polished rice. Split meals into 4 smaller bites rather than 2 massive servings. Take regular checkups to evaluate HbA1c levels to protect kidney and nerve health.",
    readTime: "5 min read",
    date: "May 12, 2026",
    author: "Dr. Anil Kumar Ranjan"
  }
];
