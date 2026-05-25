import { motion } from "motion/react";
import { Phone, Star, ShieldCheck, HeartPulse, Clock, Sparkles } from "lucide-react";
import { CLINIC_INFO, CLINIC_STATS } from "../data";

// Correct path to the generated clinic interior hero image
const HERO_IMAGE_URL = "/src/assets/images/clinic_hero_1779692237225.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex flex-col justify-center bg-slate-900 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Dr Ranjan Polyclinic Building Facade"
          className="w-full h-full object-cover object-center lg:object-[center_40%] opacity-50 sm:opacity-55 filter brightness-85 saturate-[1.08] contrast-[1.02] transition-all duration-700 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Layered high-contrast gradients for readability & aesthetic pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 select-none to-slate-950/20 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent select-none to-slate-950/50" />
        {/* Animated ambient glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-slate-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-2xl"
            >
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span>{CLINIC_INFO.rating} ({CLINIC_INFO.reviewsCount} Patient Reviews)</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </motion.div>

            {/* Display Header */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-4"
              >
                TRUSTED <br />
                <span className="text-sky-400">HEALTHCARE</span> <br />
                FOR FAMILIES.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
              >
                Dedicated care by <span className="font-bold text-white">Dr. Anil Kumar Ranjan</span>. Providing premium medical consulting with 15+ years of clinical excellence in Brajrajnagar, Jharsuguda, Odisha.
              </motion.p>
            </div>

            {/* Timings Quick Glance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300 text-xs font-sans p-4 rounded-xl bg-white/5 border border-white/10 max-w-xl backdrop-blur-xs"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                Morning: <span className="text-white">{CLINIC_INFO.timings.morning}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                Evening: <span className="text-white">{CLINIC_INFO.timings.evening}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium w-full mt-1.5 border-t border-white/5 pt-1.5 text-slate-400">
                ⭐ {CLINIC_INFO.timings.days}
              </span>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#booking"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl shadow-xl shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 text-base uppercase tracking-tight"
              >
                <HeartPulse className="h-5 w-5 animate-pulse text-white" />
                <span>Book Appointment</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-3 text-base uppercase tracking-tight"
              >
                <Phone className="h-5 w-5 text-emerald-400 animate-bounce" />
                <span>Call Polyclinic</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800"
            >
              {CLINIC_STATS.map((stat, i) => (
                <div key={i} className="text-left">
                  <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Graphical Trust Presentation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-600 to-sky-600 opacity-20 blur-lg transition duration-1000" />
            <div className="relative bg-white text-slate-900 border border-slate-100 p-6 sm:p-8 rounded-[32px] text-left shadow-2xl shadow-blue-100/50">
              <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 p-2.5 rounded-full">
                <Sparkles className="h-5 w-5 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
                <ShieldCheck className="text-blue-600 h-6 w-6 shrink-0" />
                <span>Health Screening</span>
              </h3>
              
              <p className="text-slate-600 text-sm mb-6 leading-relaxed font-normal">
                Our clinic offers prompt reporting, hygienic examination tables, and precise blood glucose profiling using clinical diagnostics equipment.
              </p>

              {/* Highlights bullets */}
              <ul className="space-y-3.5 mb-6 text-sm text-slate-700 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-green-100 text-green-700 font-bold flex items-center justify-center text-xs shrink-0">✓</span>
                  <span className="font-medium text-slate-800"><strong>Clean & Sanitized environment</strong> checked after each counseling session.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-green-100 text-green-700 font-bold flex items-center justify-center text-xs shrink-0">✓</span>
                  <span className="font-medium text-slate-800"><strong>Patient-friendly receptionist panel</strong> assisting with emergency reports on time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-green-100 text-green-700 font-bold flex items-center justify-center text-xs shrink-0">✓</span>
                  <span className="font-medium text-slate-800"><strong>Accurate and trusted solutions</strong> backed by 15+ years of local experience.</span>
                </li>
              </ul>

              {/* Highlight call of Emergency */}
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-3">
                <div className="bg-blue-600 p-2.5 rounded-xl text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider">Emergency Outpatient Assistance URL</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-blue-700 hover:text-blue-800 font-bold font-sans text-sm block">
                    084560 96341 <span className="text-slate-400 font-light">•</span> Click to Call
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
