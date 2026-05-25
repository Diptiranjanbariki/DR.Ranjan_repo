import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, User, X, CheckCircle } from "lucide-react";
import { HEALTH_TIPS } from "../data";
import { HealthTip } from "../types";

export default function HealthTips() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTip, setActiveTip] = useState<HealthTip | null>(null);

  const categories = ["All", "Hypertension", "Diabetes", "General Health"];

  const filteredTips = selectedCategory === "All"
    ? HEALTH_TIPS
    : HEALTH_TIPS.filter((t) => t.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Education & Guidelines
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Consult Our Family Health Tips
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Empowering Brajrajnagar families with clinical suggestions, metabolic routines, and preventative health care workflows.
          </p>
        </div>

        {/* Categories filters tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-102"
                  : "bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {filteredTips.map((tip: HealthTip, idx: number) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-[28px] border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-600 transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Meta details tag bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-sans font-medium">
                  <span className="bg-blue-50 text-blue-700 font-extrabold px-3 py-1 rounded-md uppercase tracking-wider text-[10px]">
                    {tip.category}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {tip.readTime}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {tip.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-medium">
                  {tip.summary}
                </p>
              </div>

              {/* Card CTA & Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-50 p-1.5 rounded-full text-blue-600">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-slate-900 uppercase tracking-tight">{tip.author}</span>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Chief Consultant</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTip(tip)}
                  className="px-4 py-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-700 font-extrabold rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Article</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full blog details Modal */}
      <AnimatePresence>
        {activeTip && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-2xl space-y-6 relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveTip(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                {/* Meta details header inside modal */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-450 font-sans">
                  <span className="bg-sky-100 text-sky-800 font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                    {activeTip.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {activeTip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {activeTip.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeTip.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-semibold italic pl-3 border-l-4 border-sky-500">
                  “{activeTip.summary}”
                </p>

                {/* Main Content Paragraph with Pre Line break handling */}
                <div className="text-slate-705 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-2 font-sans space-y-2">
                  {activeTip.content}
                </div>
              </div>

              {/* Official Verified Signature Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-50 text-sky-600 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900">{activeTip.author}</span>
                    <span className="block text-xs text-slate-400">Trusted Practitioner • Dr Ranjan Polyclinic</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const text = `Hello Doctor, I was reading your clinic post on "${activeTip.title}" and would like to register a consultation...`;
                    window.open(`https://wa.me/918456096341?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  Ask Doctor via WhatsApp
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
