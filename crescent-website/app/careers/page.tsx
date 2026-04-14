import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaBriefcase, FaCode, FaUsers, FaRocket, FaHeart, FaGraduationCap, FaChartLine, FaMapMarkerAlt, FaClock, FaArrowRight, FaLaptop } from "react-icons/fa";

export default function CareersPage() {
    const positions = [
        {
            title: "Marketing Executive",
            department: "Marketing",
            type: "Full-time",
            location: "India / Remote",
            icon: FaBriefcase,
            description: "Join our marketing team to help us reach more clients and grow our brand presence in the healthcare software industry.",
            responsibilities: [
                "Develop and execute marketing campaigns",
                "Manage social media presence",
                "Generate leads and convert them to clients"
            ]
        },
        {
            title: "Software Developer",
            department: "Development",
            type: "Full-time",
            location: "India / Remote",
            icon: FaCode,
            description: "Build innovative healthcare management solutions with cutting-edge technologies and work on exciting projects.",
            responsibilities: [
                "Develop and maintain software applications",
                "Write clean, maintainable code",
                "Collaborate with cross-functional teams"
            ]
        },
        {
            title: "HR Manager",
            department: "Human Resources",
            type: "Full-time",
            location: "India",
            icon: FaUsers,
            description: "Help us build a great team and foster a positive company culture that attracts and retains top talent.",
            responsibilities: [
                "Manage recruitment processes",
                "Handle employee relations",
                "Develop HR policies and procedures"
            ]
        }
    ];

    const benefits = [
        {
            icon: FaRocket,
            title: "Innovation First",
            description: "Work on cutting-edge projects using the latest technologies"
        },
        {
            icon: FaUsers,
            title: "Collaborative Culture",
            description: "Join a supportive team of talented professionals"
        },
        {
            icon: FaChartLine,
            title: "Career Growth",
            description: "Continuous learning and advancement opportunities"
        },
        {
            icon: FaHeart,
            title: "Work-Life Balance",
            description: "Flexible working hours and remote work options"
        },
        {
            icon: FaGraduationCap,
            title: "Learning & Development",
            description: "Training programs and skill development initiatives"
        },
        {
            icon: FaLaptop,
            title: "Modern Workspace",
            description: "State-of-the-art tools and comfortable work environment"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - Split Slide Design */}
            <div className="relative bg-white border-b border-gray-200 overflow-hidden flex flex-col lg:flex-row mt-[76px] lg:mt-[88px]">
                
                {/* Left Side: Content aligned to container grid securely */}
                <div className="w-full lg:w-1/2 flex items-center py-12 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-24 z-10 bg-white">
                    <div className="max-w-2xl w-full mx-auto lg:mx-0 lg:ml-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-gray-200 rounded-sm mb-8">
                            <FaBriefcase className="text-blue-900" />
                            <span className="text-sm font-extrabold tracking-wide text-blue-950 uppercase">We're Hiring!</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight leading-[1.1]">
                            Join Our <br className="hidden md:block"/> Growing <br className="hidden lg:block"/> Team
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-12 max-w-xl">
                            Be part of a dynamic team building innovative software solutions that make a real difference 
                            in healthcare, education, and enterprise management. 
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                            <a href="#openings" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 focus:outline-none transition-colors border border-blue-900 flex items-center justify-center gap-3">
                                    <span>View Open Positions</span>
                                    <FaArrowRight size={14} />
                                </button>
                            </a>
                            <a href="#internship" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 font-bold tracking-wide rounded-sm border border-gray-300 hover:border-blue-900 hover:bg-slate-50 transition-colors">
                                    Internship Program
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Full Bleed Image */}
                <div className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-full relative overflow-hidden group border-t-4 lg:border-t-0 lg:border-l-8 border-white bg-slate-200 flex-grow">
                    <Image
                        src="/Assets/careers.jpg"
                        alt="Careers at Crescent"
                        fill
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        priority
                    />
                    {/* Hover Tint */}
                    <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>
            </div>

            <Container className="py-16 md:py-24">
                {/* Why Join Us */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Why Work With Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We believe in creating an environment where talent thrives and innovation flourishes.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-sm border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-lg hover:border-blue-900 transition-all duration-300 relative group"
                                >
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                                    <div className="w-14 h-14 bg-slate-50 text-blue-900 border border-gray-200 shadow-sm rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                                        <Icon className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-blue-950 mb-3 tracking-tight">{benefit.title}</h3>
                                    <p className="text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Open Positions */}
                <div id="openings" className="mb-20 md:mb-24 scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Open Positions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our current openings and find the perfect role for your skills and aspirations.
                        </p>
                    </div>
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {positions.map((position, index) => {
                            const Icon = position.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-sm border border-gray-200 p-6 md:p-8 hover:border-blue-900 transition-all duration-300 relative group"
                                >
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                                        <div className="w-14 h-14 bg-slate-50 text-blue-900 border border-gray-200 shadow-sm rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
                                            <Icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-extrabold text-blue-950 mb-3 tracking-tight">{position.title}</h3>
                                            <div className="flex flex-wrap gap-3 mb-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-gray-200 text-blue-950 rounded-sm text-sm font-bold uppercase tracking-wide">
                                                    <FaBriefcase size={12} className="text-blue-900" />
                                                    {position.department}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-gray-200 text-blue-950 rounded-sm text-sm font-bold uppercase tracking-wide">
                                                    <FaClock size={12} className="text-blue-900" />
                                                    {position.type}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-gray-200 text-blue-950 rounded-sm text-sm font-bold uppercase tracking-wide">
                                                    <FaMapMarkerAlt size={12} className="text-blue-900" />
                                                    {position.location}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                                {position.description}
                                            </p>
                                            <div className="space-y-3">
                                                <h4 className="font-extrabold text-blue-950 text-sm uppercase tracking-wide">Key Responsibilities:</h4>
                                                <ul className="space-y-2">
                                                    {position.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1.5 w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0"></div>
                                                            <span className="text-gray-600 text-sm leading-relaxed">{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-auto flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 self-stretch">
                                            <Link href="/contact" className="flex-1 md:flex-initial">
                                                <button className="w-full md:w-auto px-8 py-3.5 bg-white border-2 border-blue-900 text-blue-950 font-bold tracking-wide rounded-sm hover:bg-blue-900 hover:text-white transition-all duration-300 whitespace-nowrap">
                                                    Apply Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Internship Program CTA Box */}
                <div id="internship" className="scroll-mt-24">
                    <div className="bg-slate-50 border border-gray-200 rounded-sm p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                        <div className="relative z-20 flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                                    <FaGraduationCap className="text-blue-900" />
                                    <span className="text-sm font-extrabold tracking-wide text-blue-950 uppercase">Students & Freshers</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                                    Online Internship Program
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                    We offer comprehensive online internships in software development for computer science graduates. 
                                    Gain practical experience, learn from industry experts, and kickstart your career in tech.
                                </p>
                            </div>
                            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="https://intern2experts.crescenttechnosoft.com/courses/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <button className="w-full px-8 py-4 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900">
                                        Register Now
                                    </button>
                                </a>
                                <Link href="/contact">
                                    <button className="w-full px-8 py-4 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
