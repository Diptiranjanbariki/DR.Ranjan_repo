import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "clinic", "consultation", "equipment"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Polyclinic Visual Vibe
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Take a Visual Tour of Our Facility
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            High quality hygiene is our priority. Browse reception rooms, sanitized diagnostics gear, and OPD consultation tables at Gandhi Chowk.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-102"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat === "All" ? "View All Photos" : `${cat} views`}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all h-64 sm:h-72"
              >
                {/* Image element with required referrer and aspect classes */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="bg-white/10 backdrop-blur-md p-1 rounded-full absolute top-4 right-4 text-white">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-sky-300 tracking-widest block mb-1">
                    {item.category} Perspective
                  </span>
                  <h4 className="text-white text-base font-bold font-display line-clamp-1 block">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty status */}
        {filteredItems.length === 0 && (
          <div className="py-12 text-center text-slate-400 font-medium">
            <Image className="h-12 w-12 mx-auto stroke-1" />
            <p className="mt-2 text-sm">No images listed in this medical filter yet.</p>
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
            
            {/* Close button top right */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main picture area with transition animations */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4"
              >
                <img
                  src={filteredItems[lightboxIndex]?.imageUrl}
                  alt={filteredItems[lightboxIndex]?.title}
                  className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl bg-slate-900"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Details Caption */}
                <div className="text-center text-white space-y-1">
                  <h3 className="font-display text-lg font-bold">
                    {filteredItems[lightboxIndex]?.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-sans uppercase tracking-widest">
                    Category: {filteredItems[lightboxIndex]?.category} views • Photo {lightboxIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            </div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
