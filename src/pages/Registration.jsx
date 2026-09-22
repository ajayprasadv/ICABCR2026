import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, ListChecks, ReceiptText, FileText, Wrench, UserCheck, ClipboardList } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';
import FeeTable from './FeeTable';
import FeeStructure from '../assets/FeeStructure.png';
import scopusLogo from '../assets/scopus-logo.png';
import novaLogo from '../assets/nova-logo.jpg';
import ConferenceAlerts from '../assets/ConferenceAlerts.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const guidelines = [
    {
        icon: FileText,
        title: "Authors with an Accepted Paper",
        desc: "Fill the Title and ID correctly.",
        detail: "Use the exact paper title and the Submission/Paper ID you received in your acceptance notification."
    },
    {
        icon: UserCheck,
        title: "Non-Author Participants",
        desc: 'Fill "For Participation Only" and "00000".',
        detail: 'Enter "For Participation Only" in the Title field and "00000" in the ID field of the payment form.'
    },
    {
        icon: Wrench,
        title: "Workshop Participation",
        desc: "Fill the Workshop Name and Workshop ID.",
        detail: "A complete list of workshops with their names and IDs will be provided here soon."
    }
];

const Registration = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
            {/* Navigation - Glassmorphism Light */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logoImg} alt="IILM Logo" className="h-8 xl:h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <span className="w-[1px] h-6 xl:h-8 bg-slate-200"></span>
                        <img
                            src={icabcrLogo}
                            alt="ICABCR 2026"
                            className="h-8 xl:h-10 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link
                            to="/submission"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Submissions
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px]"
                    />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-sans font-bold text-slate-900 mb-8 tracking-tight">
                            Registration <span className="text-slate-400 font-light">Portal</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-500 pl-6">
                            Complete your ICABCR 2026 registration securely online. Read the guidelines below before making your payment.
                        </motion.p>

                        {/* Registrations Open Banner */}
                        <motion.div variants={fadeInUp} className="mt-8">
                            <div className="inline-flex items-center gap-4 bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-xl shadow-sm shadow-emerald-100/50">
                                <span className="relative flex h-3 w-3 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                                </span>
                                <p className="text-sm md:text-base font-bold text-emerald-800 tracking-wide uppercase">
                                    Registrations are Open
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-32 relative z-10">
                <div className="container mx-auto px-6 md:px-12 flex flex-col gap-16">

                    {/* Registration Guidelines */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                                <ListChecks className="text-emerald-600" size={28} />
                                <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Registration Guidelines</h2>
                            </div>

                            <p className="text-slate-600 text-base mb-8 max-w-3xl">
                                While filling the payment form, please enter the <strong className="text-slate-900 font-semibold">Title</strong> and <strong className="text-slate-900 font-semibold">ID</strong> fields according to your registration category below.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {guidelines.map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex flex-col gap-4 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 shrink-0 font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                            <item.icon className="text-slate-400" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-900 font-bold text-base mb-1">{item.title}</h3>
                                            <p className="text-emerald-700 font-semibold text-sm mb-2">{item.desc}</p>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Payment Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-emerald-200 p-8 md:p-12 rounded-2xl shadow-lg shadow-emerald-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px]"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                        <CreditCard size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">Payment Link</h2>
                                        <p className="text-slate-600 text-lg">
                                            Registration payments are processed securely via Razorpay: <span className="text-emerald-700 font-semibold">https://rzp.io/rzp/VAKq1W4</span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://rzp.io/rzp/VAKq1W4"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-emerald-600 border border-emerald-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-colors hover:bg-emerald-700 whitespace-nowrap"
                                >
                                    Pay Now
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-blue-200 p-8 md:p-12 rounded-2xl shadow-lg shadow-blue-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px]"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                        <ClipboardList size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">Registration Form</h2>
                                        <p className="text-slate-600 text-lg">
                                            <strong className="text-slate-900 font-semibold">After completing your payment</strong>, you must fill this form for our records.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfWHylynQpS2RaDvnCDKmM8C_rWZ5AVHFYgOUyqQOaJ-HxB7Q/viewform?usp=mail_form_link"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-blue-600 border border-blue-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-colors hover:bg-blue-700 whitespace-nowrap"
                                >
                                    Fill Registration Form
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fee Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                                <ReceiptText className="text-blue-600" size={28} />
                                <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Fee Structure</h2>
                            </div>

                           {/*  <div className="overflow-x-auto mb-8">
                                <FeeTable />
                            </div> */}

                            <div className="flex justify-center">
                                <img src={FeeStructure} alt="Fee Structure" className="max-w-full md:max-w-2xl rounded-lg border border-slate-200" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-8">
                        <p className="text-slate-400 text-sm mb-6">Indexed & Supported By:</p>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            <img src={scopusLogo} alt="Scopus" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            <img src={novaLogo} alt="Nova" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            <a href="https://conferencealerts.co.in/" className="flex items-center gap-4 group">
                                <img src={ConferenceAlerts} alt="Conference Alerts" className="h-14 w-auto object-contain" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center border-t border-slate-800 pt-8">
                        <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
                        <Link to="/" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                            Return to Conference Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Registration;
