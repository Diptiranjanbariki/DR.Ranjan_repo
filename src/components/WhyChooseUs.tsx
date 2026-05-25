import React from "react";
import { motion } from "motion/react";
import { Award, Users, HandCoins, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Award,
  Users,
  HandCoins,
  Sparkles,
  Clock,
  ShieldCheck
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Our Care Qualities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Why Patients Choose Our Polyclinic
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Providing reliable patient services in Brajrajnagar, Odisha with accurate clinical insights and compassionate staff behavior.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-[28px] border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-600 transition-all group relative text-left"
              >
                {/* Accent side tag */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Styled icon circle */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center mb-5">
                  <IconComp className="h-6 w-6 stroke-[2]" />
                </div>

                <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
