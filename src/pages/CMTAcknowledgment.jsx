import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const CMTAcknowledgment = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logoImg} alt="IILM Logo" className="h-10 xl:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <span className="w-[1px] h-6 xl:h-8 bg-slate-200"></span>
                        <img
                            src={icabcrLogo}
                            alt="ICABCR 2026"
                            className="h-8 xl:h-10 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link
                            to="/editors"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Editors
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/advisory"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Advisory
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/community"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Committee
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/submission"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Submissions
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/cmt-acknowledgment"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-950"
                        >
                            CMT Acknowledgment
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-100 transition-transform origin-left duration-300"></span>
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
            <header className="pt-32 pb-16 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
                    />
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-blue-400"></span>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">ICABCR 2026</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">CMT Acknowledgment</h1>
                        <p className="text-lg text-slate-400 max-w-2xl font-light">
                            Acknowledgment for the peer-review management service provided by Microsoft.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-sm border border-slate-200 shadow-sm"
                    >
                        <p className="text-lg text-slate-700 leading-relaxed font-light">
                            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
                    <Link to="/" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                        Return to Conference Home
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default CMTAcknowledgment;
