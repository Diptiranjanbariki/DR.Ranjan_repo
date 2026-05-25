import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, autoplay]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-slate-100 opacity-60">
        <MessageSquare className="w-96 h-96 -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Loved & Trusted by Families
          </h2>
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-slate-900 text-sm">4.7 out of 5</span>
            <span className="text-slate-500 text-xs font-bold font-sans">(71 Verified Reviews)</span>
          </div>
        </div>

        {/* Carousel Slide Area with Framer Motion */}
        <div
          className="relative bg-white border-2 border-slate-100 p-8 sm:p-12 rounded-[32px] shadow-2xl shadow-blue-100/40"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Quote Icon Background decoration */}
          <div className="absolute top-6 right-8 text-blue-50 bg-transparent">
            <Quote className="h-16 w-16 rotate-180 transform stroke-[3] text-blue-100" />
          </div>

          <div className="min-h-[160px] flex flex-col justify-between relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                {/* Score Stars */}
                <div className="flex items-center text-amber-400">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  {[...Array(5 - currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-slate-200" />
                  ))}
                </div>

                {/* Quoted Text */}
                <p className="font-display text-slate-800 text-base sm:text-lg leading-relaxed font-semibold italic">
                  “{currentReview.content}”
                </p>

                {/* Patient Signature block */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-slate-900 font-extrabold text-sm sm:text-base uppercase tracking-tight">
                      {currentReview.name}
                    </h4>
                    <span className="text-blue-600 text-[11px] font-extrabold uppercase tracking-widest block">
                      {currentReview.source}
                    </span>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-800 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Verified Patient
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left / Right Control Arrows */}
          <div className="absolute inset-y-0 -left-4 sm:-left-6 flex items-center">
            <button
              onClick={handlePrev}
              className="p-3 bg-white text-slate-800 hover:text-blue-600 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
          <div className="absolute inset-y-0 -right-4 sm:-right-6 flex items-center">
            <button
              onClick={handleNext}
              className="p-3 bg-white text-slate-800 hover:text-blue-600 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
