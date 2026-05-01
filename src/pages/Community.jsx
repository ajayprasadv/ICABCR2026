import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Globe, Award, BookOpen, Megaphone, DollarSign, Share2, Briefcase } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';
import novaLogo from '../assets/nova-logo.jpg';
import scopusLogo from '../assets/scopus-logo.png';

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
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const CommitteeSection = ({ title, icon, members }) => {
    if (!members || members.length === 0) return null;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    {icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="bg-white p-5 border border-slate-100 rounded-sm hover:border-emerald-200 hover:shadow-md transition-all"
                    >
                        <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{member.affiliation}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const COMMITTEE_DATA = {
    chiefPatrons: [
        { name: "Mr. Bharat Kaushal", affiliation: "Chancellor, IILM University, Greater Noida, India" },
        { name: "Mrs. Malvika Rai", affiliation: "Pro-Chancellor, IILM University, Greater Noida, India" },
    ],
    patrons: [
        { name: "Dr. Nihar Amoncar", affiliation: "Vice Chancellor, IILM University, Greater Noida, India" },
    ],
    generalChairs: [
        { name: "Dr. Munish Sabharwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Ravi S Iyer", affiliation: "IISc Bengaluru, India" },
        { name: "Dr. Babusena Paul", affiliation: "University Of Johannesburg, South Africa" },
    ],
    organizingChairs: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida" },
        // { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Shamik Tiwari", affiliation: "IILM University, Gurugram" },
    ],
    organizingCoChairs: [
        { name: "Dr. Anil Saroliya", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Lalit Kumar", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Suman Avdhesh Yadav", affiliation: "IILM University, Greater Noida" },
    ],
    convenor: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida" },
    ],
    secretary: [
        { name: "Dr. Saurabh Shanu", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Kingshuk Srivastava", affiliation: "IILM University, Greater Noida" },
    ],
    SecretaryTechnicalProgram: [
        { name: "Dr. Himanshu Sharma", affiliation: "IILM University, Greater Noida" }, 
    ],
    TechnicalProgramCommitteeChair: [
        { name: "Dr. Avadhesh Kumar Gupta", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Anand Singh", affiliation: "IILM University, Greater Noida" },
    ],
    TechnicalProgramCommitteeCoChairs: [
        { name: "Dr. Saurabh Kumar", affiliation: "IILM University, Greater Noida" },
        
        { name: "Dr. Amar Shukla", affiliation: "IILM University, Gurugram" },
        { name: "Dr. Anurag Jain", affiliation: "IILM University, Gurugram" },
        { name: "Dr. Deependra Rastogi", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Harendra Singh", affiliation: "IILM University, Greater Noida" },
    ],

    MediaOutreachandArtefactsChair: [
        { name: "Dr. Pinki Yadav", affiliation: "IILM University, Greater Noida" },
    ],
    MediaOutreachandArtefactsCoChair: [
        { name: "Ms. Priyanka Tyagi", affiliation: "IILM University, Greater Noida" },
    ],
    RegistrationCommitteeChairs: [
        { name: "Dr. Richa Vijay", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Akash Punhani", affiliation: "IILM University, Greater Noida" },
    ],
    FinanceCommitteeChairs: [
        { name: "Dr. Sandeep Saxena", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Udai Bhan Trivedi", affiliation: "IILM University, Greater Noida" },
    ],
    ExecutionandCoordinationCommitteeChairs: [
        { name: "Dr. Kamal Kant", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Deependra Rastogi", affiliation: "IILM University, Greater Noida" },
    ],
    ExecutionandCoordinationCommitteeMembers: [
        { name: "Mr. Shantanu Bindewari", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. A K Rastogi", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Rani Kumari", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Ashish Kumar Ratha", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Sahil Kansal", affiliation: "IILM University, Greater Noida" },
    ],
    SponsorshipCommitteeChairs: [
        { name: "Dr. Saurabh Shanu", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Amit Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Richa Vijay", affiliation: "IILM University, Greater Noida" },
    ],
    SponsorshipCommitteeCoChairs: [
        { name: "Ms. Jyoti Thakur", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Sumeet Choudhary", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Mukesh Kumar", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Hilal", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Hena Khera", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Aina Mehta", affiliation: "IILM University, Greater Noida" },
    ],
    WorkshopExecutionChairs: [
        { name: "Dr. Monika Kumari", affiliation: "IILM University, Greater Noida" },
    ],
    WorkshopExecutionCoChairs: [
        { name: "Mr. Anik Acharjee", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Gagan Gupta", affiliation: "IILM University, Greater Noida" },
    ],
    technicalProgramCommitteeMembers: [
        { name: "Dr. Ved Prakash Mishra", affiliation: "Professor, Amity University Dubai" },
        { name: "Dr Swadha Gupta", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Seema Rawat", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Abdul Razaq", affiliation: "Abertay University, United Kingdom" },
        { name: "Dr. Praveen Kumar", affiliation: "Professor, Astana IT University, Kazakhstan" },
        { name: "Ms. Marcie Sonderson", affiliation: "Criminal Investigator McAfee, Missouri, United States" },
        { name: "Dr Cheng Cheng", affiliation: "Senior Lecturer Computer Science, Swansea University, UK" },
        { name: "Dr. Madhu Khurana", affiliation: "Assistant Professor, University of Gloucestershire, United Kingdom" },
        { name: "Dr. THINAGARAN A/L PERUMAL / FSKTM", affiliation: "Associate Professor, Universiti Putra, Malaysia" },
        { name: "Dr Danish Ather", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Salim Barbhuiya", affiliation: "Professor, University of Leeds, UK" },
        { name: "Dr. Pramod Gaur", affiliation: "Senior Lecturer, Nottingham Trent University, Nottingham, England, United Kingdom" },
        { name: "Dr. Manash K. Paul", affiliation: "Scientist, Principal Investigator, University of California Los Angeles" },
        { name: "Dr. Sayantan Chakraborty", affiliation: "Chairman, International Association of Professional and Fellow Engineers-Delaware-USA" },
        { name: "Dr. Vinayakumar Ravi", affiliation: "Assistant Research Professor Prince Mohammad Bin Fahd University, Khobar, Saudi Arabia" },
        { name: "Dr. Amit Kumar Mondal", affiliation: "Assistant Professor, Manipal University Dubai UAE" },
        { name: "Dr. Santhi Raju Pilli", affiliation: "Assistant Professor, Jazan University, KSA" },
        { name: "Dr. Manoj Kumar", affiliation: "Associate Professor, University of Wollongong, Dubai, UAE" },
        { name: "Dr. Nguyen Gia Nhu", affiliation: "Professor, Duy Tan University, Da Nang, Vietnam" },
        { name: "Dr. Teoh Teik Toe", affiliation: "Professor and Academic Director, NTU Singapore" },
        { name: "Dr Mohit Mittal", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Alexander Kuiper", affiliation: "Computer Scientist at Kuiper Forensics, Maintal, Hesse, Germany" },
        { name: "Dr. Jung-Sup Um", affiliation: "Professor, Kyungpook National University, South Korea" },
        { name: "Ms. Jane Eliseva", affiliation: "Head Alliances, Social Links, Riga, Latvia" },
        { name: "Dr. Hussain Falih Mahdi", affiliation: "Associate Professor, University of Diyala, Iraq" },
        { name: "Dr. Arijit Ghosh", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Tanupriya Choudhury", affiliation: "UPES, India" },
        { name: "Dr. Akash Punhani", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Sudhir Kumar Barai", affiliation: "BITS Pilani, India" },
        { name: "Dr. Kirti Shukla", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. P. Kumar", affiliation: "IIT Patna, India" },
        { name: "Dr. Adarsh Kumar", affiliation: "UPES, India" },
        { name: "Dr. Nitish Kumar Guru", affiliation: "Scientific Assistant (Ballistics), Directorate of Forensic Science and Laboratory, India" },
        { name: "Dr. Kaushik Ghosh", affiliation: "UPES, India" },
        { name: "Dr. Sourav Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Harshal Patil", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Udai Bhan Trivedi", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Amit Kumar", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. S. Raghavan", affiliation: "NIT TRICHY, India" },
        { name: "Dr. Ujwal Chakraborty", affiliation: "NIT Silchar, India" },
        { name: "Dr. Talwar Yoginder", affiliation: "Scientist at National Informatics Centre, Min. of Communications & IT, India" },
        { name: "Dr. Supratim Biswas", affiliation: "BIT Mesra Ranchi, India" },
        { name: "Dr. Gunjan Mittal Roy", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr Chandrashekhar Azad", affiliation: "National Institute of Technology, India" },
        { name: "Dr. Suneet", affiliation: "CU, India" },
        { name: "Dr. Saurabh Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anil Kumar", affiliation: "UPES, India" },
        { name: "Dr. Kumar Venkatesh", affiliation: "MNNIT Allahabad, India" },
        { name: "Dr. Rudra P. Pradhan", affiliation: "Indian Institute of Technology Kharagpur, India" },
        { name: "Dr. Anirban Ghatak", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Richa Vijay", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anup Dewanji", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Souvik Ganguli", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. Hitesh Kumar Sharma", affiliation: "UPES, India" },
        { name: "Dr. Jaswinder Singh", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Soumik Das", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Soumyabrata Chakrabarty", affiliation: "IIT, India" },
        { name: "Dr. Debrup Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Mr. Karuna Nidhan Upadhyay", affiliation: "Assistant Director (Cyber Forensic), Directorate of Forensic Science and Laboratory, India" },
    ],
};


const Community = () => {
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
                            to="/submission"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Submissions
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <a
                            href="/cmt-acknowledgment.html"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            CMT Acknowledgment
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </a>
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
                            <span className="h-[1px] w-12 bg-emerald-400"></span>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400">ICABCR 2026</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Organizing Committee</h1>
                        <p className="text-lg text-slate-400 max-w-2xl font-light">
                            Meet the distinguished academicians, researchers, and industry leaders driving the International Conference on AI Based Cyber Resilience (ICABCR-2026).
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12">

                    {/* <CommitteeSection title="Chief Patrons" icon={<Award size={20} />} members={COMMITTEE_DATA.chiefPatrons} /> */}
                    <CommitteeSection title="Patrons" icon={<Award size={20} />} members={COMMITTEE_DATA.patrons} />
                    <CommitteeSection title="General Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.generalChairs} />
                    <CommitteeSection title="Organizing Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingChairs} />
                    <CommitteeSection title="Organizing Co-Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingCoChairs} />
                    <CommitteeSection title="Convenor" icon={<Users size={20} />} members={COMMITTEE_DATA.convenor} />
                    <CommitteeSection title="Secretary" icon={<Users size={20} />} members={COMMITTEE_DATA.secretary} />
                    <CommitteeSection title="Secretary (Technical Program)" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.SecretaryTechnicalProgram} />
                    <CommitteeSection title="Technical Program Committee (Chair)" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.TechnicalProgramCommitteeChair} />
                    <CommitteeSection title="Technical Program Committee (Co-Chairs)" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.TechnicalProgramCommitteeCoChairs} />
                    <CommitteeSection title="Media, Outreach and Artefacts (Chair)" icon={<Share2 size={20} />} members={COMMITTEE_DATA.MediaOutreachandArtefactsChair} />
                    <CommitteeSection title="Media, Outreach and Artefacts (Co-Chair)" icon={<Share2 size={20} />} members={COMMITTEE_DATA.MediaOutreachandArtefactsCoChair} />
                    <CommitteeSection title="Registration Committee (Chairs)" icon={<Users size={20} />} members={COMMITTEE_DATA.RegistrationCommitteeChairs} />
                    <CommitteeSection title="Finance Committee (Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.FinanceCommitteeChairs} />
                    <CommitteeSection title="Execution and Coordination Committee (Chairs)" icon={<Users size={20} />} members={COMMITTEE_DATA.ExecutionandCoordinationCommitteeChairs} />
                    <CommitteeSection title="Execution and Coordination Committee (Members)" icon={<Users size={20} />} members={COMMITTEE_DATA.ExecutionandCoordinationCommitteeMembers} />
                    <CommitteeSection title="Sponsorship Committee (Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.SponsorshipCommitteeChairs} />
                    <CommitteeSection title="Sponsorship Committee (Co-Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.SponsorshipCommitteeCoChairs} />
                    <CommitteeSection title="Workshop Execution Committee (Chairs)" icon={<Users size={20} />} members={COMMITTEE_DATA.WorkshopExecutionChairs} />  
                    <CommitteeSection title="Workshop Execution Committee (Co-Chairs)" icon={<Users size={20} />} members={COMMITTEE_DATA.WorkshopExecutionCoChairs} />
                    <CommitteeSection title="Technical Program Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.technicalProgramCommitteeMembers} />

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

export default Community;
