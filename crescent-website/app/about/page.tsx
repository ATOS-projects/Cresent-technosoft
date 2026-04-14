import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaLightbulb, FaUsers, FaAward, FaRocket, FaCode, FaDatabase, FaServer, FaGlobe, FaCheckCircle, FaCertificate } from "react-icons/fa";

export default function AboutPage() {
    const technologies = [
        "Data Warehousing",
        "Software Testing Tools",
        "J2EE",
        ".NET (ASP.NET, C#, VB.NET)",
        "XML",
        "Client-Server Applications",
        "Internet/Intranet Solutions",
        "Database Design"
    ];

    const services = [
        {
            icon: FaCode,
            title: "Customized Programming",
            description: "Tailored software solutions designed specifically for your business needs."
        },
        {
            icon: FaDatabase,
            title: "Database Design",
            description: "Robust and scalable database architecture for optimal performance."
        },
        {
            icon: FaServer,
            title: "Client-Server Applications",
            description: "Efficient client-server solutions for enterprise-level operations."
        },
        {
            icon: FaGlobe,
            title: "Internet/Intranet Development",
            description: "Modern web applications and internal network solutions."
        }
    ];

    const values = [
        {
            icon: FaAward,
            title: "Quality & Reliability",
            description: "We are committed to delivering high-quality, reliable software applications that exceed expectations."
        },
        {
            icon: FaUsers,
            title: "Expert Team",
            description: "Our diverse team of professionals brings expertise from various backgrounds, expanding creative potential."
        },
        {
            icon: FaRocket,
            title: "Innovation",
            description: "We stay ahead with the latest development technologies and methodologies."
        },
        {
            icon: FaCertificate,
            title: "Years of Experience",
            description: "Over 15 years of excellence in software development and outsourcing services."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-gray-200 pt-24 md:pt-32 pb-16 md:pb-20">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-gray-200 rounded mb-6">
                            <FaLightbulb className="text-blue-800" />
                            <span className="text-sm font-bold tracking-wide text-blue-950 uppercase">About Us</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
                            Crescent Technosoft
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            A rapidly growing customized software development and outsourcing company with headquarters in Chennai, India.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-16 md:py-24">
                {/* Company Overview */}
                <div className="mb-20 md:mb-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12 shadow-sm">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    Crescent Technosoft is a rapidly growing customized software development and outsourcing company with headquarters 
                                    in Chennai, India. We specialize in the development of customized software applications and offshore software 
                                    outsourcing services.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    Specifically, our company carries out customized programming, database design, client-server and internet/intranet 
                                    software applications development. Over the years we have managed to build a solid team of software outsourcing 
                                    professionals that come from various backgrounds and expand the creative potential of the company.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The expertise that we possess embraces a wide range of customized programming skills involving the latest and most 
                                    effective development technologies. This defines to a great extent, the quality and reliability of the customized 
                                    software applications that we develop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Our Core Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive software development services tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start pb-8 md:pb-16">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div 
                                    key={index} 
                                    className={`group bg-white border border-gray-200 p-10 shadow-sm hover:shadow-xl hover:border-blue-900 transition-all duration-500 ${
                                        index % 2 === 1 ? 'md:mt-16' : ''
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 bg-slate-50 text-blue-900 border border-gray-200 flex items-center justify-center rounded-sm group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                                            <Icon className="text-3xl" />
                                        </div>
                                        <span className="text-6xl font-black text-slate-100 select-none group-hover:text-blue-50 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-blue-950 mb-4 tracking-tight group-hover:text-blue-900 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Technologies */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Our Technology Expertise
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Latest and most effective development frameworks and methodologies.
                        </p>
                    </div>

                    <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12 max-w-5xl mx-auto shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {technologies.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-sm border border-gray-200 hover:border-blue-900 hover:shadow-md transition-all duration-300 group"
                                >
                                    <FaCheckCircle className="text-blue-900 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                    <span className="text-gray-900 text-base font-bold tracking-tight">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles and strengths that define our approach to software engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-sm border border-gray-200 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
                                >
                                    <div className="w-14 h-14 bg-slate-50 text-blue-800 border border-gray-100 rounded flex items-center justify-center mx-auto mb-5">
                                        <Icon className="text-2xl" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-blue-950 border-t border-blue-900 py-16 md:py-24 text-center mt-12 md:mt-16 w-full px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                        Get in touch with our team to discuss how we can create a custom solution for your organization's unique challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 text-base font-bold tracking-wide rounded-sm hover:bg-gray-100 transition-colors">
                                Contact Us Today
                            </button>
                        </Link>
                        <Link href="/services/hospital">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white text-base font-bold tracking-wide rounded-sm border border-blue-800 hover:bg-blue-800 transition-colors">
                                View Our Solutions
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
