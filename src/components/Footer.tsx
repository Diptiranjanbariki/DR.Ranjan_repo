import { HeartPulse, Phone, Mail, MapPin, ExternalLink, CalendarRange } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Ranjan", href: "#about" },
    { name: "OPD Services", href: "#services" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Testimonials", href: "#reviews" },
    { name: "Facility Gallery", href: "#gallery" },
    { name: "Health Tips Blog", href: "#blog" },
    { name: "F.A.Q", href: "#faq" },
    { name: "Book Slot", href: "#booking" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout: Grid Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          
          {/* Column A: Brand identity (md:span 4) */}
          <div className="md:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                <HeartPulse className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="font-display text-xl font-black uppercase tracking-tighter text-white block leading-none">
                  Dr Ranjan Polyclinic
                </span>
                <span className="text-[10px] uppercase tracking-widest font-sans font-black text-blue-400 block mt-1">
                  Healthcare Consultant
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Providing premium family wellness diagnostics, metabolic care schedules, and elderly treatments with over 15 years of local practice under the supervision of <strong>Dr. Anil Kumar Ranjan</strong> in Brajrajnagar, Odisha.
            </p>

            {/* Google trust badge summary */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center gap-3 w-fit">
              <span className="text-amber-400 font-black block text-lg">4.7 ⭐</span>
              <div className="text-[10px] text-slate-300 font-medium">
                <span className="block font-extrabold uppercase tracking-widest text-[9px] text-blue-400">Google Verified Polyclinic</span>
                <span className="block">Based on 71 outpatient reviews</span>
              </div>
            </div>
          </div>

          {/* Column B: Links List (md:span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase font-black tracking-widest font-sans text-blue-500">Quick Navigation</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 hover:translate-x-1.5 transition-all duration-300 block text-slate-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C: Operating Details (md:span 5) */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="text-white text-xs uppercase font-black tracking-widest font-sans text-blue-500 font-black">Clinic Timings & Contact</h4>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 font-medium leading-normal">
                  Show Room, Gandhi Chowk, Gokul Nagar, Behind Hero Honda, Brajrajnagar, Odisha 768216
                </address>
              </div>

              <div className="flex gap-2.5">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1 font-medium text-slate-300">
                  <span className="block">Reception desk: <strong>084560 96341</strong> (Morning / Evening)</span>
                  <span className="block">Emergency call: <a href={`tel:${CLINIC_INFO.phone}`} className="text-rose-400 hover:underline font-extrabold">084560 96341</a></span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-1.5 border-t border-white/5 font-medium">
                <span className="text-blue-400 font-extrabold">🕒 Open:</span>
                <span className="text-slate-300">Mon – Sat (09:00 AM – 02:00 PM & 05:00 PM – 09:00 PM)</span>
              </div>
            </div>

            {/* Quick appointment action button */}
            <div className="pt-2">
              <a
                href="#booking"
                className="py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                <CalendarRange className="h-3.5 w-3.5" />
                <span>Reserve Consultation Slot</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Dr Ranjan Polyclinic. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600 mt-1">Designated as best General Medicine and Diabetic consultant center in Jharsuguda district.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-[11px] font-medium text-slate-400">
            <span>ODISHA MEDICAL GUIDANCE BOARD COMPLIANT</span>
            <span>•</span>
            <span>STERILIZED OUTPATIENT STANDARDS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
