import { useState, useEffect } from "react";
import { Menu, X, Phone, CalendarRange, HeartPulse } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Ranjan", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Patient Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Health Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800"
          : "bg-gradient-to-b from-sky-900/30 via-sky-800/10 to-transparent py-4 text-white hover:bg-sky-950/80 hover:backdrop-blur-sm lg:hover:bg-slate-900/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Vibe info */}
          <a href="#home" id="nav-brand-link" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                Dr Ranjan Polyclinic
              </span>
              <span className={`text-[10px] font-bold tracking-widest uppercase leading-none mt-1 ${
                scrolled ? "text-blue-600" : "text-sky-300"
              }`}>
                Brajrajnagar, Odisha
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-extrabold transition-colors hover:text-blue-600 relative py-1 ${
                  scrolled ? "text-slate-700" : "text-slate-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call and Book Appointment CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="sticky-call-btn"
              href={`tel:${CLINIC_INFO.phone}`}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                scrolled
                  ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                  : "border-sky-300/40 text-slate-100 hover:bg-white/10"
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-blue-600" />
              <span>084560 96341</span>
            </a>
            <a
              id="sticky-book-btn"
              href="#booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <CalendarRange className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className={`p-2 rounded-lg border flex md:hidden ${
                scrolled ? "border-slate-200 text-slate-700" : "border-white/20 text-white"
              }`}
              title="Call Clinic"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden animate-fade-in bg-white border-t border-slate-100 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold"
              >
                <Phone className="h-4 w-4 text-sky-500" />
                <span>Call Center: 084560 96341</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/10"
              >
                <CalendarRange className="h-4 w-4" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
