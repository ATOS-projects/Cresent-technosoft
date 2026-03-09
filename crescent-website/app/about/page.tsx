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
            description: "Tailored software solutions designed specifically for your business needs"
        },
        {
            icon: FaDatabase,
            title: "Database Design",
            description: "Robust and scalable database architecture for optimal performance"
        },
        {
            icon: FaServer,
            title: "Client-Server Applications",
            description: "Efficient client-server solutions for enterprise-level operations"
        },
        {
            icon: FaGlobe,
            title: "Internet/Intranet Development",
            description: "Modern web applications and internal network solutions"
        }
    ];

    const values = [
        {
            icon: FaAward,
            title: "Quality & Reliability",
            description: "We are committed to delivering high-quality, reliable software applications that exceed expectations"
        },
        {
            icon: FaUsers,
            title: "Expert Team",
            description: "Our diverse team of professionals brings expertise from various backgrounds, expanding creative potential"
        },
        {
            icon: FaRocket,
            title: "Innovation",
            description: "We stay ahead with the latest development technologies and methodologies"
        },
        {
            icon: FaCertificate,
            title: "Years of Experience",
            description: "Over 15 years of excellence in software development and outsourcing services"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50/30 pt-20 md:pt-28 pb-12">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-4">
                            <FaLightbulb className="text-sky-600" />
                            <span className="text-sm font-semibold text-sky-700">About Us</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Crescent <span className="text-sky-600">Technosoft</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A rapidly growing customized software development and outsourcing company with headquarters in Chennai, India
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-12 md:py-16">
                {/* Company Overview */}
                <div className="mb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl border-2 border-sky-100 p-6 md:p-8 shadow-md">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                                    Crescent Technosoft is a rapidly growing customized software development and outsourcing company with headquarters 
                                    in Chennai, India. We specialize in the development of customized software applications and offshore software 
                                    outsourcing services.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                                    Specifically, our company carries out customized programming, database design, client-server and internet/intranet 
                                    software applications development. Over the years we have managed to build a solid team of software outsourcing 
                                    professionals that come from various backgrounds and expand the creative potential of the company.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    The expertise that we possess embraces a wide range of customized programming skills involving the latest and most 
                                    effective development technologies. This defines to a great extent, the quality and reliability of the customized 
                                    software applications that we develop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Our Core Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive software development services tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-5 md:p-6 hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-3 shadow-md">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Technologies */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Our Technology Expertise
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Latest and most effective development technologies
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl border-2 border-sky-100 p-6 md:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {technologies.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-sky-200 hover:border-sky-400 hover:shadow-sm transition-all"
                                >
                                    <FaCheckCircle className="text-sky-600 flex-shrink-0" size={16} />
                                    <span className="text-gray-700 text-sm font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles and strengths that define our approach
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-5 hover:shadow-lg transition-all text-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                        Get in touch with our team to discuss how we can create a custom solution for your organization's unique challenges
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:shadow-lg transition-all duration-200 active:scale-95">
                                Contact Us Today
                            </button>
                        </Link>
                        <Link href="/services/hospital">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white hover:shadow-lg transition-all duration-200 active:scale-95">
                                View Our Solutions
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
