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
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-3xl text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                                <Icon className="text-blue-900" size={14} />
                                <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Lab Software</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                                Complete <span className="text-blue-900 border-b-4 border-blue-900">Lab Management</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Crescent LMS is a Comprehensive Lab Management Software available in offline, Cloud as well as Mobile-Ready Solutions to take care of your Diagnostic Centre efficiently.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/demo">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm flex items-center justify-center gap-2">
                                        Request a Demo
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm flex items-center justify-center gap-2">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                            <Image
                                src="/Assets/lab management hero.jpg"
                                alt="Lab Management Software"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Core Modules Section */}
            <Container className="py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                        Core Modules
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        User-friendly interfaces making report generation and administration very easy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm hover:border-blue-900 transition-colors duration-300 group flex flex-col">
                                <div className="relative w-full h-48 overflow-hidden bg-slate-50 border-b border-gray-200">
                                    <Image 
                                        src={module.img} 
                                        alt={module.title} 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col relative bg-white">
                                    <div className="w-12 h-12 bg-white border border-gray-200 text-blue-900 rounded-sm flex flex-shrink-0 items-center justify-center mb-4 shadow-sm -mt-12 relative z-10 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                                        <ModuleIcon size={20} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-blue-950 mb-2 tracking-tight">{module.title}</h3>
                                    <p className="text-sm text-gray-600 font-medium flex-1 leading-relaxed">{module.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* Key Benefits Section */}
            <div className="bg-slate-50 border-t border-gray-200 py-16 md:py-24">
                <Container>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                            <FaCheckCircle className="text-blue-900" size={14} />
                            <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Key Benefits</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                            Operational Advantages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                            Transform your clinical lab operations digitally with powerful integration advantages
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white rounded-sm border border-gray-200 p-6 group hover:border-blue-900 shadow-sm transition-colors duration-300">
                                <div className="mt-1 w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0"></div>
                                <span className="text-sm text-gray-600 font-medium leading-relaxed">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* What We Can Do Section */}
            <Container className="py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                        What We Can Build For You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        Customizable features tailored specifically for Diagnostic Centres
                    </p>
                </div>

                <div className="bg-slate-50 rounded-sm border border-gray-200 p-8 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0 mt-2"></div>
                                <span className="text-gray-700 font-medium">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-blue-950 border-t border-blue-900 py-20">
                <Container>
                    <div className="text-center text-white max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                            Ready to Transform Your Clinical Lab?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Get a customized lab management solution built specifically for your needs. Contact us today for a free consultation and demo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm flex items-center justify-center gap-2">
                                    <span>Contact Us Now</span>
                                    <FaArrowRight size={14} />
                                </button>
                            </Link>
                            <Link href="tel:+914442865141">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-900 text-white font-bold tracking-wide rounded-sm hover:bg-blue-800 transition-colors border border-blue-800 shadow-sm flex items-center justify-center gap-2">
                                    <FaPhone size={14} />
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
