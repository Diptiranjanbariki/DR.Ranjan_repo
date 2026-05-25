import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle, Heart, MapPin, Users } from "lucide-react";

const DOCTOR_IMAGE_URL = "/src/assets/images/doctor_portrait_1779692255664.png";

export default function AboutDoctor() {
  const doctorBadges = [
    {
      icon: <GraduationCap className="h-6 w-6 text-sky-600" />,
      title: "Qualifications",
      desc: "M.B.B.S., Senior General Physician & Consultant"
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-600" />,
      title: "15+ Years Experience",
      desc: "Over a decade of successful medical services in Odisha"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Trusted Clinician",
      desc: "Delivered customized care to over 25,000+ local patients"
    }
  ];

  const valueAims = [
    "Caring and patient-focused treatment methodologies",
    "Evidence-based medicine usage with no unnecessary prescribing",
    "Comprehensive physical assessments and health guidance logs",
    "Highly trusted by families in Brajrajnagar, Jharsuguda, and nearby regions"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Outer stylish border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-emerald-500 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-sky-200 rounded-full -z-10" />
              
              {/* Main image */}
              <div className="bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={DOCTOR_IMAGE_URL}
                  alt="Dr. Anil Kumar Ranjan"
                  className="w-full h-auto aspect-square object-cover rounded-xl grayscale-20 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Experience tag */}
              <div className="absolute bottom-8 -right-6 sm:-right-8 bg-white py-3.5 px-5 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-100">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">
                  <Heart className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-slate-800">15+ Years</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Clinical Vibe</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctor Info Details Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-blue-600 text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
                Qualified Consultant
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Dr. Anil Kumar Ranjan
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5 pt-1">
                <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                <span>Brajrajnagar, Jharsuguda, Odisha</span>
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Dr. Anil Kumar Ranjan is widely regarded as one of the best general healthcare consultants and physicians in the Jharsuguda district. Practicing at <strong>Dr Ranjan Polyclinic</strong>, he has built a strong reputation for his highly compassionate, practical, and comprehensive style of diagnostic inquiry.
            </p>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {doctorBadges.map((badge, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-2 opacity-90">{badge.icon}</div>
                  <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-tight mb-1">{badge.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{badge.desc}</p>
                </div>
              ))}
            </div>

            {/* Core Values Bullets */}
            <div className="pt-4 space-y-3">
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-widest">Our Treatment Philosophy</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {valueAims.map((aim, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-xs sm:text-sm leading-normal font-semibold">{aim}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row inside Doctor */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <span>Read Counseling Schedule</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="px-6 py-3 border-2 border-slate-200 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-colors"
              >
                Explore Medical Portfolios
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
