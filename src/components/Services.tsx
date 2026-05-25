import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Stethoscope,
  Thermometer,
  Activity,
  HeartHandshake,
  ShieldAlert,
  UserCheck,
  HeartPulse,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "../data";
import { MedicalService } from "../types";

// Dynamic Lucide icon lookup map
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Stethoscope,
  Thermometer,
  Activity,
  HeartHandshake,
  ShieldAlert,
  UserCheck,
  HeartPulse,
  ClipboardCheck
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories for reactive tags
  const categories = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];

  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Our Core Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            OPD Services & Medical Specialties
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Dr Ranjan Polyclinic delivers modern medical counseling, sugar reviews, and family healthcare audits at a clean and friendly facility.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid with Framer Motion AnimatePresence */}
        <motion.div
          id="services-container-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: MedicalService) => {
              const IconComp = iconMap[service.icon] || Stethoscope;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="group relative bg-white border-2 border-slate-100 rounded-[28px] p-6 hover:shadow-2xl hover:border-blue-600 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Card Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-bl-full transition-colors duration-300 -z-10" />
                  
                  <div>
                    {/* Icon section with selective theme styling */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-5">
                      <IconComp className="h-6 w-6 stroke-[2]" />
                    </div>

                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-600 mb-1.5 block">
                      {service.category}
                    </span>
                    
                    <h3 className="font-display text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-50 mt-4">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom stats callout list */}
        <div className="mt-16 p-6 sm:p-8 bg-sky-950 text-white rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
          <div className="text-left space-y-2 relative z-10 max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Require Immediate Medical Attention?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              We look after severe fever outbreaks, respiratory distress, pediatric crises, and severe hypertension levels. Get direct guidance from Brajrajnagar's top general practitioner.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto shrink-0">
            <a
              href="tel:08456096341"
              className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-lg shadow-rose-600/20 text-center transition-colors text-sm"
            >
              ☎ Call Emergency Line
            </a>
            <a
              href="#booking"
              className="px-6 py-3 bg-white hover:bg-slate-50 text-sky-950 font-bold rounded-xl text-center transition-colors text-sm"
            >
              Reserve a Slot
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
