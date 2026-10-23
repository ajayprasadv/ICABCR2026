import React from 'react';
import { ArrowRight, Calendar, MapPin, Users, Award, BookOpen, Mic2, FileText, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import logoImg from './assets/iilm-logo.png';
import icabcrLogo from './assets/icabcr-logo.jpg';
import novaLogo from './assets/nova-logo.jpg';
import scopusLogo from './assets/scopus-logo.png';
import manjuKhariImg from './assets/ManjuKhari.jpg';
import shailendraRathoreImg from './assets/DrShailendraRathore.jpg';
import sudhakarImg from './assets/DrSudhakar.jpg';
import siddharthaImg from './assets/DrSiddhartha.jpeg';
import yoginderTalwarImg from './assets/Yoginder talwar.jpg';
import raghurajSinghImg from './assets/Raghuraj Singh.jpg';
import danishAtherImg from './assets/Danish Ather.jpeg';
import ankurKhareImg from './assets/Ankur Khare.jpeg';
import vinayShankarDubeyImg from './assets/Vinay Shankar Dubey.jpeg';

// Event photos
const glimpseModules = import.meta.glob('./assets/glimpses-optimized/*.{JPG,jpg}', { eager: true, import: 'default' });
const GLIMPSES = Object.values(glimpseModules);

const SPEAKERS = [
  { name: "Dr. Yoginder Talwar", affiliation: "Director, National Informatics Centre, Ministry of Communications & IT", img: yoginderTalwarImg },
  { name: "Dr. Manju Khari", affiliation: "Professor, JNU, New Delhi", img: manjuKhariImg },
  { name: "Dr. Shailendra Rathore", affiliation: "Professor, Abertay University, United Kingdom", img: shailendraRathoreImg },
  { name: "Dr. Raghuraj Singh", affiliation: "Head and Professor at Harcourt Butler Technological Institute, Kanpur", img: raghurajSinghImg },
  { name: "Dr. Sudhakar", affiliation: "CERT-In, India", img: sudhakarImg },
  { name: "Dr. Siddharth Chaurasia", affiliation: "Co-Founder, PrajniX Labs, former AI Practice Head and Talent Development Head @TCS", img: siddharthaImg },
  { name: "Dr. Danish Ather", affiliation: "Adjunct Professor, Dept. of AI, Tashkent University of IT (al-Khwarizmi)", img: danishAtherImg },
  { name: "Ankur Khare", affiliation: "Senior Solution Advisor - AI Innovation, SAP America Inc", img: ankurKhareImg },
  { name: "Vinay Shankar Dubey", affiliation: "Director - School of Engineering & Technology (Certificate Programs), Brookfield International University (South Dakota, USA / Paris, France)", img: vinayShankarDubeyImg }
];

const STATS = [
  { value: "280", label: "Papers Received", sub: "From India and abroad" },
  { value: "65", label: "Papers Accepted", sub: "~23% acceptance rate" },
  { value: "50", label: "Papers Presented", sub: "Across 6 parallel tracks" },
  { value: "8", label: "Keynotes", sub: "Plus a hands-on workshop" },
];

const LEADERSHIP = [
  { name: "Dr. Jayasankar Variyar", role: "Vice Chancellor, IILM University" },
  { name: "Brig. Supreet Singh Gill", role: "Registrar, IILM University" },
  { name: "Prof. (Dr.) Vadivel Ayyasamy", role: "Director, IILM University" },
  { name: "Dr. Kaushik Ghosh", role: "Dean, School of Computer Science & Engineering" },
];

const GUESTS_OF_HONOUR = ["Sh. H. S. Randhawa", "Mr. Ram Badan Singh"];

const getInitials = (name) => {
  const clean = name.replace(/^Dr\.?\s*/i, "");
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[parts.length - 1]?.[0] || "")).toUpperCase();
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const SectionHeader = ({ kicker, title, subtitle, light = false, align = "left" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeInUp}
    className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {kicker && (
      <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className={`h-[1px] w-10 ${light ? "bg-emerald-400" : "bg-emerald-500"}`}></span>
        <p className={`text-xs uppercase tracking-[0.3em] font-bold ${light ? "text-emerald-400" : "text-emerald-600"}`}>{kicker}</p>
      </div>
    )}
    <h2 className={`text-3xl md:text-5xl font-serif font-medium tracking-tight ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
    {subtitle && <p className={`mt-4 text-lg font-light leading-relaxed ${light ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</p>}
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-900 selection:text-white overflow-x-hidden">

      {/* --- NAV --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="IILM University" className="h-9 md:h-10 w-auto object-contain" />
            <span className="w-[1px] h-7 bg-slate-200"></span>
            <img src={icabcrLogo} alt="ICABCR 2026" className="h-9 md:h-10 w-auto object-contain mix-blend-multiply" />
          </div>
          <Link
            to="/icabcr2027"
            className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] bg-slate-950 text-white hover:bg-emerald-600 transition-colors rounded-sm whitespace-nowrap"
          >
            ICABCR 2027 &rarr;
          </Link>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '36px 36px' }}></div>
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-emerald-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Conference Concluded</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-6">
              🎉 ICABCR-2026 Concludes
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-emerald-300 font-light mb-8">
              Thank you for making it a success!
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-500 pl-6 mb-10">
              We are grateful as we close two days of the International Conference on AI Based Cyber Resilience (ICABCR-2026) at the School of Computer Science &amp; Engineering, IILM University, Greater Noida.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-10">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-emerald-400" /> 9&ndash;10 October 2026</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-emerald-400" /> IILM University, Greater Noida</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                to="/icabcr2027"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors"
              >
                Explore ICABCR 2027 <ArrowRight size={14} />
              </Link>
              <a
                href="#glimpses"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-colors"
              >
                View Glimpses
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* --- STATS --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader kicker="In Numbers" title="Two Days, One Resilient Community" align="center" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {STATS.map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center p-8 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">{s.value}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-1">{s.label}</p>
                <p className="text-xs text-slate-500">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- DAY RECAP --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-lg border border-slate-100 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Day 1 &middot; 9 October</span>
              <h3 className="text-2xl font-serif text-slate-900 mt-3 mb-4">Inauguration, Keynotes &amp; Workshop</h3>
              <p className="text-slate-600 leading-relaxed">
                The day featured the inauguration, keynote addresses, paper presentation sessions, and a hands-on cybersecurity workshop.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-lg border border-slate-100 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Day 2 &middot; 10 October</span>
              <h3 className="text-2xl font-serif text-slate-900 mt-3 mb-4">Paper Sessions &amp; Valedictory</h3>
              <p className="text-slate-600 leading-relaxed">
                More paper presentations and engaging discussions filled the day, which closed with the valedictory session.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GLIMPSES GALLERY --- */}
      <section id="glimpses" className="py-20 md:py-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader kicker="Glimpses" title="Moments from ICABCR-2026" subtitle="A look back at the people, sessions, and energy that made the conference memorable." />
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...GLIMPSES, ...GLIMPSES].map((src, idx) => (
              <div
                key={idx}
                className="w-[200px] h-[260px] sm:w-[240px] sm:h-[300px] md:w-[280px] md:h-[340px] shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50"
              >
                <img
                  src={src}
                  alt={`ICABCR 2026 glimpse ${(idx % GLIMPSES.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PUBLICATION --- */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-emerald-400" size={28} />
                <h3 className="text-2xl md:text-3xl font-serif">Proceedings &amp; Indexing</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                The proceedings will be published by <strong className="text-white">Nova Science Publishers</strong>. The publisher will send the complete book to <strong className="text-white">Elsevier</strong> for possible <strong className="text-white">Scopus</strong> indexing.
              </p>
            </div>
            <div className="md:col-span-4 flex items-center gap-6 justify-start md:justify-end">
              <img src={novaLogo} alt="Nova Science Publishers" className="h-12 w-auto object-contain bg-white rounded px-3 py-2" />
              <img src={scopusLogo} alt="Scopus" className="h-12 w-auto object-contain bg-white rounded px-3 py-2" />
            </div>
          </div>
        </div>
      </section>

      {/* --- THANKS --- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader kicker="Gratitude" title="With Sincere Thanks" align="center" />

          {/* Guests of Honour */}
          <div className="mb-16 text-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Guests of Honour</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {GUESTS_OF_HONOUR.map((g) => (
                <span key={g} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-900 font-semibold">{g}</span>
              ))}
            </div>
          </div>

          {/* Keynote speakers */}
          <div className="mb-16">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">Distinguished Keynote Speakers</h4>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {SPEAKERS.map((s, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center">
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-sm mb-3" />
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-50 border-2 border-white shadow-sm mb-3 flex items-center justify-center text-emerald-600 font-bold">
                      {getInitials(s.name)}
                    </div>
                  )}
                  <p className="text-xs font-bold text-slate-900 leading-tight">{s.name}</p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-snug">{s.affiliation}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* IILM Leadership */}
          <div className="mb-16">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">IILM University Leadership</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {LEADERSHIP.map((p) => (
                <div key={p.name} className="bg-white p-5 rounded-lg border border-slate-100 text-center">
                  <Users className="mx-auto text-emerald-600 mb-2" size={18} />
                  <p className="text-sm font-bold text-slate-900">{p.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{p.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* General thanks */}
          <div className="max-w-3xl mx-auto text-center">
            <Award className="mx-auto text-emerald-600 mb-4" size={28} />
            <p className="text-slate-600 leading-relaxed text-lg">
              Heartfelt thanks also to every <strong className="text-slate-900">author, reviewer, session chair, committee member and student volunteer</strong>. You made this happen.
            </p>
          </div>
        </div>
      </section>

      {/* --- CLOSING --- */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[140px] rounded-full"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
          <Mic2 className="mx-auto text-emerald-400 mb-6" size={32} />
          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-10">
            "Cyber resilience is about building systems, and people, that can anticipate, adapt and recover. Let's keep the conversation going."
          </p>
          <p className="text-emerald-300 font-bold tracking-wide uppercase text-sm mb-8">Until the next edition &#128272;&#129302;</p>
          <Link
            to="/icabcr2027"
            className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-[0.25em] rounded-sm transition-colors"
          >
            Visit ICABCR 2027 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10 pb-10 border-b border-white/10">
            <img src={logoImg} alt="IILM University" className="h-10 w-auto object-contain opacity-90" />
            <img src={novaLogo} alt="Nova Science Publishers" className="h-10 w-auto object-contain opacity-90" />
            <img src={scopusLogo} alt="Scopus" className="h-10 w-auto object-contain opacity-90" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <p>&copy; 2026 IILM University. All rights reserved. ICABCR-2026 has concluded.</p>
            <Link to="/icabcr2027" className="text-emerald-400 hover:text-white transition-colors">
              ICABCR 2027 &rarr;
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
