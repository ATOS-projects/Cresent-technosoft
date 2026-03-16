import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { 
    FaMobileAlt, FaWhatsapp, FaChartBar, FaQrcode, FaFileInvoiceDollar, 
    FaNetworkWired, FaCheckCircle, FaArrowRight, FaPhone
} from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function LabPage() {
    const service = SERVICES.find(s => s.id === 'lab')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaWhatsapp,
            title: "Patient Communication",
            description: "Automated PDF reports sent directly to patients and doctors via Email and WhatsApp.",
            img: "/Assets/lab communication.webp"
        },
        {
            icon: FaNetworkWired,
            title: "Multi Branch Management",
            description: "Control all Lab Centres and Branches from a single location with real-time dashboards.",
            img: "/Assets/lab multi branch.webp"
        },
        {
            icon: FaMobileAlt,
            title: "Mobile Compatibility",
            description: "Secure, on-the-go access to clinical reports and analytics via mobile user interfaces.",
            img: "/Assets/lab compatible.webp"
        },
        {
            icon: FaChartBar,
            title: "MIS & Analytics",
            description: "Detailed graphs, collection analytics, Doctor reports, and Patient reports.",
            img: "/Assets/lab mis1 reports.webp"
        },
        {
            icon: FaQrcode,
            title: "QR Coded Reports",
            description: "Professional test formats with QR options, highlighting abnormal values to reduce errors.",
            img: "/Assets/lab qrcode.webp"
        },
        {
            icon: FaFileInvoiceDollar,
            title: "Billing & Masters",
            description: "Master management for profiles/group tests, discounted invoice formats, and barcode support.",
            img: "/Assets/lab billing.webp"
        }
    ];

    const benefits = [
        "100% Elimination of manual errors in billing and entry",
        "Streamlined operational workflows across multi-city branches",
        "Improved patient retention through fast mobile delivery",
        "Automated lab instrument interfacing available",
        "Digital tracking significantly improves turnaround speed",
        "Audit-ready data logs maintaining standards compliance"
    ];

    const capabilities = [
        "Master profile management and group testing",
        "Customizable test report formats (with/without headers)",
        "QR code validation on patient test reports",
        "Abnormal value auto-highlighting feature",
        "Centralized informative dashboards for branch management",
        "Automated PDF conversion and WhatsApp/Email delivery",
        "Secure cloud, offline, or hybrid deployment options",
        "Integrated billing with discounts, offers, and ledger tracking",
        "Barcode sample tracking from collection to disposal",
        "Comprehensive MIS reporting, graphs, and daily registers"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left max-w-2xl">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Icon className="text-white text-3xl" />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Lab Management Software
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Crescent LMS is a Comprehensive Lab Management Software available in offline, Cloud as well as Mobile-Ready Solutions to take care of your Diagnostic Centre efficiently.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center">
                                        Request a Demo
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all w-full sm:w-auto text-center">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/Assets/lab management hero.jpg"
                                alt="Lab Management Software"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Overlay Gradient for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Core Modules Section */}
            <Container className="py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Core Modules
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        User-friendly interfaces making report generation and administration very easy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl border-2 border-blue-50 hover:border-blue-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="relative w-full h-48 overflow-hidden bg-blue-50">
                                    <Image 
                                        src={module.img} 
                                        alt={module.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col relative">
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex flex-shrink-0 items-center justify-center mb-4 shadow-md -mt-12 relative z-10 border-4 border-white">
                                        <ModuleIcon className="text-white text-lg" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                                    <p className="text-gray-600 flex-1 leading-relaxed">{module.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* Key Benefits Section */}
            <div className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transform your clinical lab operations digitally with powerful integration advantages
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg border border-blue-200 p-4 hover:border-blue-400 hover:shadow-md transition-all">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* What We Can Do Section */}
            <Container className="py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What We Can Build For You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Customizable features tailored specifically for Diagnostic Centres
                    </p>
                </div>

                <div className="bg-white rounded-2xl border-2 border-blue-100 p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-20">
                <Container>
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Clinical Lab?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Get a customized lab management solution built specifically for your needs. Contact us today for a free consultation and demo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                    <span>Contact Us Now</span>
                                    <FaArrowRight />
                                </button>
                            </Link>
                            <Link href="tel:+914442865141">
                                <button className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-blue-900 hover:border-white transition-all flex items-center gap-2">
                                    <FaPhone />
                                    <span>Call +91 44 4286 5141</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
