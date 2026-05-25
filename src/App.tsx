import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeartPulse, ArrowUp, PhoneCall, CalendarCheck } from "lucide-react";

// Import custom sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutDoctor from "./components/AboutDoctor";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import HealthTips from "./components/HealthTips";
import ContactFAQ from "./components/ContactFAQ";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Gentle loading delay to showcase premium medical animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen relative selection:bg-sky-500/20 selection:text-sky-900 overflow-x-hidden">
      
      {/* 🩺 Premium Entry Loading Indicator screens */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
          >
            <div className="text-center space-y-6">
              {/* Pulsing Medical Heartbeat Ring */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-sky-500/10 border-2 border-sky-400 animate-ping" />
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-sky-500/30 relative z-10">
                  <HeartPulse className="h-10 w-10 animate-pulse text-white" />
                </div>
              </div>

              <div className="space-y-2 px-4">
                <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tighter">
                  Dr Ranjan Polyclinic
                </h2>
                <div className="flex items-center justify-center gap-1.5 text-xs text-sky-400 font-extrabold tracking-widest uppercase">
                  <span>Elite Medical Care</span>
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                  <span>Odisha</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website View Container */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen"
        >
          {/* Header Bar */}
          <Navbar />

          <main className="flex-grow">
            {/* 1. Hero Zone */}
            <Hero />

            {/* 2. Meet Dr. Ranjan (About Doctor) */}
            <AboutDoctor />

            {/* 3. Portfolios (OPD Services Grid) */}
            <Services />

            {/* 4. Strengths Features */}
            <WhyChooseUs />

            {/* 5. Patient Reviews Carousel */}
            <Reviews />

            {/* 6. Form booking Reservation with Local Booking History */}
            <BookingForm />

            {/* 7. Sanitation & Interior Lightbox Images Gallery */}
            <Gallery />

            {/* 8. Doctor guidelines Health Blog Previews */}
            <HealthTips />

            {/* 9. Contact coordinates & FAQ accordions */}
            <ContactFAQ />
          </main>

          {/* footer area */}
          <Footer />

          {/* 🔼 Floating Back to Top control button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                onClick={handleScrollToTop}
                className="fixed bottom-6 left-6 z-40 p-3 bg-slate-900 hover:bg-sky-600 text-white rounded-full shadow-2xl transition-all cursor-pointer hover:-translate-y-1"
                aria-label="Back to Top"
              >
                <ArrowUp className="h-5 w-5 stroke-[2.5]" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}
