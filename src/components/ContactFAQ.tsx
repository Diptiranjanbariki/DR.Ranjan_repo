import { useState } from "react";
import { MapPin, Phone, Mail, Clock, HelpCircle, ChevronDown, MessageSquare, ExternalLink, Calendar } from "lucide-react";
import { CLINIC_INFO, FAQ_ITEMS } from "../data";

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-section layout: Grid columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Contact Details & Google Maps Embed (lg:span 7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                How to Reach Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Our Location & Contact Coordinates
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                We are conveniently located near Gandhi Chowk in Brajrajnagar. Access prompt diagnostics behind the Hero Honda showroom.
              </p>
            </div>

            {/* Quick Contact Details Boxes Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address card */}
              <div className="border-2 border-slate-100 p-5 rounded-[24px] bg-slate-50 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-105 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Polyclinic Address</span>
                  <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">
                    Show Room, Gandhi Chowk, Gokul Nagar, Behind Hero Honda, Brajrajnagar, Odisha 768216
                  </p>
                  <a
                    href="https://maps.google.com/?q=Gandhi+Chowk,+Brajrajnagar,+Odisha+768216"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-750 text-xs font-black flex items-center gap-1 mt-1 font-sans uppercase tracking-wider"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="border-2 border-slate-100 p-5 rounded-[24px] bg-slate-50 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-105 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Consulting Hours</span>
                  <div className="text-slate-750 text-xs space-y-1 font-bold">
                    <p>🌅 Morning: <b className="text-slate-900 font-extrabold">{CLINIC_INFO.timings.morning}</b></p>
                    <p>🌆 Evening: <b className="text-slate-900 font-extrabold">{CLINIC_INFO.timings.evening}</b></p>
                    <p className="text-[10px] text-slate-500 italic pt-1 font-medium">Mon – Sat (Sunday on emergency call advice)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google map iframe wrapper */}
            <div className="rounded-3xl border border-slate-200 shadow-lg overflow-hidden h-72 sm:h-80 relative">
              <iframe
                title="Dr Ranjan Polyclinic Google Maps Location"
                src={CLINIC_INFO.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
                    {/* Column B: Accordion FAQ Sector (lg:span 5) */}
          <div id="faq" className="lg:col-span-5 space-y-6 text-left lg:pt-5">
            <div className="space-y-4">
              <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
                Patient Helpdesk
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Frequently Asked Vitals
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Get immediate clarifications regarding consulting checklists, diabetic sugar packages, and pediatric outpatient guides.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5 pt-4">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaq === item.id;
                
                return (
                  <div
                    key={item.id}
                    className="border-2 border-slate-100 rounded-[20px] bg-slate-50/60 overflow-hidden transition-all hover:bg-slate-50/90"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-extrabold text-slate-900 text-sm sm:text-base cursor-pointer focus:outline-hidden"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span>{item.question}</span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-blue-600 font-bold" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`transition-all duration-350 ${
                        isOpen ? "max-h-[250px] border-t-2 border-slate-100 p-5 bg-white" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fast help box */}
            <div className="p-6 bg-slate-900 text-white rounded-[28px] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 relative z-10 text-left">
                <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest font-sans">STILL HAVE QUESTIONS?</span>
                <p className="font-display text-sm font-black uppercase tracking-tight">Contact our desk at 084560 96341</p>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-750 text-white text-xs font-extrabold uppercase tracking-widest rounded-xl relative z-10 transition-colors"
              >
                Call Support
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Floating WhatsApp Chat Desk Badge Button (Desktop & general) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={`https://wa.me/918456096341?text=Hello%20Dr%20Ranjan%20Polyclinic!`}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 text-white hover:bg-emerald-700 p-4 rounded-full flex items-center gap-2 shadow-2xl transition-all transform hover:-translate-y-1 duration-300 font-bold text-xs"
          title="Chat with Clinic Assistant"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="font-extrabold uppercase tracking-widest text-[11px] pr-1">WhatsApp Chat</span>
        </a>
      </div>

      {/* Persistent Sticky Mobile Bottom Call & Reservation Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-slate-100 p-3 flex sm:hidden gap-3 shadow-md">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 uppercase tracking-wider"
        >
          <Phone className="h-4 w-4 text-emerald-450 stroke-[2.5]" />
          <span>Call 084560 96341</span>
        </a>
        <a
          href="#booking"
          className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 shadow-lg shadow-blue-500/20 uppercase tracking-wider"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Priority</span>
        </a>
      </div>  </div>

    </section>
  );
}
