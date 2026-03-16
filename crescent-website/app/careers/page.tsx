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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50/30 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full">
                                <FaBriefcase className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">We're Hiring!</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Join Our <span className="text-sky-600">Growing Team</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Be part of a dynamic team building innovative software solutions that make a real difference 
                                in healthcare, education, and business management. With 15+ years of excellence, we're looking for passionate individuals to grow with us.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <a href="#openings" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                                        <span>View Open Positions</span>
                                        <FaArrowRight size={14} />
                                    </button>
                                </a>
                                <a href="#internship" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 active:scale-95">
                                        Internship Program
                                    </button>
                                </a>
                            </div>
                        </div>
                        
                        {/* Right side - Image */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image 
                                src="/Assets/careers.jpg"
                                alt="Careers at Crescent"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="py-16 md:py-20">
                {/* Why Join Us */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Work With Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We believe in creating an environment where talent thrives and innovation flourishes
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="group bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Open Positions */}
                <div id="openings" className="mb-20 scroll-mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our current openings and find the perfect role for your skills and aspirations
                        </p>
                    </div>
                    <div className="space-y-6">
                        {positions.map((position, index) => {
                            const Icon = position.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                                    <Icon className="text-white" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                                                    <div className="flex flex-wrap gap-3 mb-3">
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                                            <FaBriefcase size={12} />
                                                            {position.department}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                                            <FaClock size={12} />
                                                            {position.type}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                                            <FaMapMarkerAlt size={12} />
                                                            {position.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
                                            <div className="bg-sky-50 rounded-lg p-4 border border-sky-100">
                                                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Responsibilities:</h4>
                                                <ul className="space-y-1.5">
                                                    {position.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <span className="text-sky-600 font-bold mt-0.5">•</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-col gap-3 md:justify-center">
                                            <Link href="/contact" className="flex-1 md:flex-initial">
                                                <button className="w-full px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                                                    <span>Apply Now</span>
                                                    <FaArrowRight size={14} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Internship Program */}
                <div id="internship" className="scroll-mt-20">
                    <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FaGraduationCap className="text-white text-3xl" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Online Internship Program
                            </h2>
                            <p className="text-lg text-sky-100 mb-8 leading-relaxed">
                                We offer comprehensive online internships in software development for computer science graduates. 
                                Gain practical experience, learn from industry experts, and kickstart your career in tech.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a 
                                    href="https://intern2experts.crescenttechnosofts.com/courses/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                                        <span>Register for Internship</span>
                                        <FaArrowRight size={14} />
                                    </button>
                                </a>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white hover:shadow-lg transition-all duration-200 active:scale-95">
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
