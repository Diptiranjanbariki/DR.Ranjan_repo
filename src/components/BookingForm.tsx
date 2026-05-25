import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarRange, Phone, CheckCircle, Clock, Trash2, Calendar, User, FileText, Check } from "lucide-react";
import { CLINIC_INFO } from "../data";
import { Appointment } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<Appointment>({
    fullName: "",
    phoneNumber: "",
    age: "",
    appointmentDate: "",
    slot: "10:00 AM",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [localAppointments, setLocalAppointments] = useState<Appointment[]>([]);

  // Supported slots
  const morningSlots = ["09:30 AM", "10:15 AM", "11:00 AM", "11:45 AM", "12:30 PM", "01:15 PM"];
  const eveningSlots = ["05:15 PM", "06:00 PM", "06:45 PM", "07:30 PM", "08:15 PM", "08:45 PM"];

  // Load booked slots from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dr_ranjan_appointments");
      if (saved) {
        setLocalAppointments(JSON.parse(saved));
      }
    } catch (e) {
      console.error("LocalStorage load error", e);
    }
  }, []);

  const saveAppointments = (updated: Appointment[]) => {
    try {
      localStorage.setItem("dr_ranjan_appointments", JSON.stringify(updated));
      setLocalAppointments(updated);
    } catch (e) {
      console.error("LocalStorage save error", e);
    }
  };

  const validate = (): boolean => {
    const tempErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Please provide your full name.";
    } else if (formData.fullName.trim().length < 3) {
      tempErrors.fullName = "Name must be at least 3 letters long.";
    }

    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[\s-+]/g, ""))) {
      tempErrors.phoneNumber = "Phone number must be a valid 10-digit number.";
    }

    if (!formData.age.trim()) {
      tempErrors.age = "Please provide your age.";
    } else {
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
        tempErrors.age = "Please provide a valid age between 1 and 120.";
      }
    }

    if (!formData.appointmentDate) {
      tempErrors.appointmentDate = "Please choose a booking date.";
    } else {
      const selected = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        tempErrors.appointmentDate = "Appointments cannot be booked in the past.";
      }
    }

    if (!formData.slot) {
      tempErrors.slot = "Please select a preferred slot.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSlotSelect = (selectedSlot: string) => {
    setFormData((prev) => ({ ...prev, slot: selectedSlot }));
    if (errors.slot) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.slot;
        return copy;
      });
    }
  };

  // Generate WhatsApp dynamic message link
  const buildWhatsAppLink = (data: Appointment) => {
    const text = `Hello Dr Ranjan Polyclinic! I'd like to book a medical appointment slot.
------------------------------------
👤 *Patient Name*: ${data.fullName.trim()}
📞 *Phone*: ${data.phoneNumber.trim()}
🎂 *Age*: ${data.age} Years
📅 *Date*: ${data.appointmentDate}
⏰ *Time Slot*: ${data.slot}
ℹ️ *Message/Vitals*: ${data.message?.trim() || "Routine medical consultation"}`;

    return `https://wa.me/918456096341?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save locally
    const updated = [formData, ...localAppointments];
    saveAppointments(updated);

    // Show Success Popup
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!validate()) return;
    const link = buildWhatsAppLink(formData);
    window.open(link, "_blank");
  };

  const clearBooking = (index: number) => {
    const updated = localAppointments.filter((_, i) => i !== index);
    saveAppointments(updated);
  };

  const closeSuccess = () => {
    setIsSuccess(false);
    // Reset forms
    setFormData({
      fullName: "",
      phoneNumber: "",
      age: "",
      appointmentDate: "",
      slot: "10:00 AM",
      message: ""
    });
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Online Appointment System
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Schedule a Diagnostic counseling
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Fill the OPD reservation card to request your priority slot. Alternatively, book instantly via WhatsApp message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Inputs Block */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-100 p-6 sm:p-8 rounded-[32px] shadow-2xl shadow-blue-100/30">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="h-4 w-4 text-sky-500" />
                    <span>Full Name <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={changeHandler}
                    placeholder="E.g. Ramesh Chandra"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50 focus:bg-white transition-colors focus:ring-2 focus:ring-sky-500/20 focus:outline-hidden ${
                      errors.fullName ? "border-rose-400 focus:border-rose-500" : "border-slate-200 focus:border-sky-500"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-rose-500 text-xs font-semibold block">{errors.fullName}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-sky-500" />
                    <span>Phone Number <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={changeHandler}
                    placeholder="E.g. 084560 96341 or 10-digit number"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50 focus:bg-white transition-colors focus:ring-2 focus:ring-sky-500/20 focus:outline-hidden ${
                      errors.phoneNumber ? "border-rose-400 focus:border-rose-500" : "border-slate-200 focus:border-sky-500"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-rose-500 text-xs font-semibold block">{errors.phoneNumber}</span>
                  )}
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label htmlFor="age" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="h-4 w-4 text-sky-500" />
                    <span>Patient Age <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={changeHandler}
                    placeholder="E.g. 45"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50 focus:bg-white transition-colors focus:ring-2 focus:ring-sky-500/20 focus:outline-hidden ${
                      errors.age ? "border-rose-400 focus:border-rose-500" : "border-slate-200 focus:border-sky-500"
                    }`}
                  />
                  {errors.age && (
                    <span className="text-rose-500 text-xs font-semibold block">{errors.age}</span>
                  )}
                </div>

                {/* Appointment Date */}
                <div className="space-y-1.5">
                  <label htmlFor="appointmentDate" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-sky-500" />
                    <span>Preferred Date <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={changeHandler}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50 focus:bg-white transition-colors focus:ring-2 focus:ring-sky-500/20 focus:outline-hidden ${
                      errors.appointmentDate ? "border-rose-400 focus:border-rose-500" : "border-slate-200 focus:border-sky-500"
                    }`}
                  />
                  {errors.appointmentDate && (
                    <span className="text-rose-500 text-xs font-semibold block">{errors.appointmentDate}</span>
                  )}
                </div>

              </div>

              {/* Slots select area */}
              <div className="space-y-3 pt-2">
                <span className="text-xs sm:text-sm font-bold text-slate-705 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sky-500" />
                  <span>Available Timings Slot: <b className="text-blue-600 font-sans font-black uppercase text-xs tracking-wider bg-blue-50 px-2 py-1 rounded-md">{formData.slot}</b></span>
                </span>
                
                {/* Morning Slots */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block font-sans">
                    🌅 Morning Hours Session (09:00 AM – 02:00 PM)
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {morningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => handleSlotSelect(slot)}
                        className={`py-2 px-15 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                          formData.slot === slot
                            ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md shadow-blue-500/10"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-105 border-slate-200"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block font-sans">
                    🌆 Evening Hours Session (05:00 PM – 09:00 PM)
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {eveningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => handleSlotSelect(slot)}
                        className={`py-2 px-15 text-xs font-bold rounded-xl transition-all cursor-pointer border ${
                          formData.slot === slot
                            ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md shadow-blue-500/10"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-105 border-slate-200"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 pt-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Reason for Booking (Symptoms/Request details)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={changeHandler}
                  placeholder="E.g. Diagnosed with high sugar last month, fever lasting 3 days, routine elder care advice lookup..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-hidden transition-colors"
                />
              </div>

              {/* Submit triggers buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-grow py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm uppercase tracking-wider"
                >
                  <CalendarRange className="h-5 w-5" />
                  <span>Reserve Slot (Save locally)</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-grow py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm uppercase tracking-wider"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.45 5.58 0 10.12-4.54 10.12-10.1 0-2.69-1.05-5.22-2.95-7.13-1.9-1.91-4.43-2.96-7.14-2.96-5.59 0-10.13 4.54-10.13 10.12 0 1.95.53 3.85 1.53 5.56l-.97 3.54L6.647 19.15z" />
                  </svg>
                  <span>Quick WhatsApp Booking</span>
                </button>
              </div>

            </form>
          </div>

          {/* Timing details widget / Current Local Bookings list */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Timings summary board */}
            <div className="bg-sky-950 p-6 sm:p-8 text-white rounded-3xl relative overflow-hidden text-left shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/10 rounded-full blur-2xl" />
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                <Clock className="h-5 w-5 text-sky-400" />
                <span>OPD Doctor Timings</span>
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <span className="block text-[11px] font-bold text-sky-300 uppercase tracking-wider">Morning OPD</span>
                  <span className="text-sm font-semibold">{CLINIC_INFO.timings.morning}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider">Evening OPD</span>
                  <span className="text-sm font-semibold">{CLINIC_INFO.timings.evening}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-slate-300 tracking-wider uppercase">Open Days</span>
                  <span className="text-xs text-slate-200 block mt-0.5">{CLINIC_INFO.timings.days}</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider">Emergency Help</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-rose-400 hover:text-rose-300 font-extrabold text-sm font-sans block mt-0.5">
                    084560 96341
                  </a>
                </div>
              </div>
            </div>

            {/* Current bookings from LocalStorage list */}
            {localAppointments.length > 0 && (
              <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-md text-left">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Your Bookings ({localAppointments.length})</span>
                  </h4>
                  <button
                    onClick={() => {
                      localStorage.removeItem("dr_ranjan_appointments");
                      setLocalAppointments([]);
                    }}
                    className="text-slate-400 hover:text-slate-600 text-[10px] uppercase tracking-wider font-extrabold transition-colors cursor-pointer"
                  >
                    Clear History
                  </button>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {localAppointments.map((appt, idx) => (
                    <div key={idx} className="bg-slate-55 p-3 rounded-xl border border-slate-200/50 text-xs hover:bg-slate-100 transition-colors relative group">
                      <button
                        onClick={() => clearBooking(idx)}
                        className="absolute top-2.5 right-2.5 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete booking log"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                      <h5 className="font-bold text-slate-800 pr-5 truncate">{appt.fullName}</h5>
                      
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1.5 text-[11px] text-slate-500 font-sans">
                        <span>🗓 {appt.appointmentDate}</span>
                        <span>⏰ {appt.slot}</span>
                        <span>🎂 Age: {appt.age}</span>
                        <span className="text-emerald-600 font-semibold truncate animate-pulse flex items-center gap-0.5">
                          ● Confirmed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Helpful Reminder banner */}
                <div className="mt-4 p-2.5 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] text-emerald-800 font-semibold leading-relaxed">
                  📢 Show these logs on your mobile phone screen at Dr Ranjan Polyclinic reception to guarantee direct priority slots queue.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Success Popup Dialog */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-md w-full p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-2xl text-center space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto animate-bounce">
                <CheckCircle className="h-12 w-12" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Appointment Submitted!
                </h3>
                <p className="text-slate-500 text-sm">
                  Your reservation request is secured in your browser. We highly recommend completing the booking by sending a quick message to Dr. Ranjan's assistant on WhatsApp.
                </p>
              </div>

              {/* Display card summarizing booking details */}
              <div className="bg-slate-50 p-4 border border-slate-100 rounded-2xl text-left text-xs text-slate-700 font-sans space-y-2">
                <p>👤 <strong>Patient:</strong> {localAppointments[0]?.fullName}</p>
                <p>📞 <strong>Phone:</strong> {localAppointments[0]?.phoneNumber}</p>
                <p>🗓 <strong>Date & Time:</strong> {localAppointments[0]?.appointmentDate} at {localAppointments[0]?.slot}</p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const link = buildWhatsAppLink(localAppointments[0] || formData);
                    window.open(link, "_blank");
                  }}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  ⚡ Complete on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={closeSuccess}
                  className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
