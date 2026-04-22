import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaPills, FaBoxes, FaBarcode, FaMoneyCheckAlt, FaExclamationTriangle, FaChartBar, FaUserFriends, FaReceipt, FaTruck, FaFileInvoiceDollar, FaTablets, FaPrescription, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function PharmacyPage() {
    const service = SERVICES.find(s => s.id === 'pharmacy')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaBoxes,
            title: "Inventory Management",
            description: "Real-time stock tracking with automatic reorder alerts"
        },
        {
            icon: FaBarcode,
            title: "Barcode Scanner Integration",
            description: "Fast billing with barcode/QR code scanning support"
        },
        {
            icon: FaMoneyCheckAlt,
            title: "POS & Billing",
            description: "Quick counter sales with multiple payment options"
        },
        {
            icon: FaExclamationTriangle,
            title: "Expiry Management",
            description: "Automatic alerts for expiring medicines and batch tracking"
        },
        {
            icon: FaFileInvoiceDollar,
            title: "GST Billing",
            description: "GST-compliant invoices with automatic tax calculation"
        },
        {
            icon: FaPrescription,
            title: "Prescription Management",
            description: "Digital prescription upload and verification"
        },
        {
            icon: FaTruck,
            title: "Purchase Orders",
            description: "Supplier management and automated purchase ordering"
        },
        {
            icon: FaUserFriends,
            title: "Customer Management",
            description: "Customer database with purchase history and loyalty programs"
        },
        {
            icon: FaChartBar,
            title: "Reports & Analytics",
            description: "Sales reports, profit analysis, and inventory insights"
        }
    ];

    const benefits = [
        "Zero stock-out situations with automatic reorder alerts",
        "Reduce wastage with expiry date tracking",
        "GST-compliant billing and invoicing",
        "Fast checkout with barcode scanning",
        "Track medicine batch numbers for recalls",
        "Multiple payment modes (Cash, Card, UPI, Wallet)",
        "Customer purchase history and reminders",
        "Supplier payment tracking and reconciliation",
        "Profit and loss analysis by medicine/category",
        "Multi-store management from single dashboard",
        "Drug interactions and contraindications alerts",
        "Mobile app for inventory checks"
    ];

    const capabilities = [
        "Medicine master database with composition details",
        "Generic and branded medicine mapping",
        "Rack and bin location tracking",
        "Dead stock and slow-moving inventory reports",
        "Credit sales and customer outstanding tracking",
        "Doctor-wise prescription analytics",
        "Schedule H and H1 drug compliance",
        "Narcotic drugs register maintenance",
        "Insurance and cashless billing support",
        "Home delivery management",
        "SMS notifications for customers",
        "Multi-currency support for import/export",
        "WhatsApp integration for order updates",
        "Franchise and chain pharmacy support"
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Clean Professional Hero Section - Enterprise Style */}
            <div className="bg-white border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6 text-blue-900">
                                <Icon size={14} />
                                <span className="text-xs font-extrabold tracking-wide uppercase text-blue-950">Pharmacy Operations</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight leading-[1.10]">
                                Precision <span className="text-blue-900 border-b-4 border-blue-900">Pharmacy</span> & POS Solution
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                                A highly structured, cloud-ready pharmacy command center. Streamline inventory tracking, automate GST billing, and eliminate manual errors.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/demo">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors shadow-sm flex items-center justify-center gap-2 border border-blue-900">
                                        Request Demo <FaArrowRight size={14} />
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-50 transition-colors border border-gray-300 shadow-sm flex items-center justify-center gap-2">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px] rounded-sm overflow-hidden shadow-md border border-gray-200 bg-white p-2">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-900 z-20"></div>
                            <div className="relative w-full h-full rounded-sm overflow-hidden bg-slate-100">
                                <Image
                                    src="/Assets/pharma.avif"
                                    alt="Pharmacy Management Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Core Modules - Structured Grid */}
            <Container className="py-20 lg:py-28">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                        Comprehensive Module Suite
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed border-b border-gray-200 pb-8 font-medium">
                        Everything you need to run a high-volume retail or hospital pharmacy with absolute precision and zero leakage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        const isPrimary = (index % 2 === 0);
                        return (
                            <div key={index} className={`p-8 border border-gray-200 transition-colors duration-300 group ${isPrimary ? 'bg-white hover:bg-slate-50' : 'bg-slate-50 hover:bg-white'}`}>
                                <div className="w-12 h-12 bg-white text-blue-900 border border-gray-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <ModuleIcon size={20} />
                                </div>
                                <h3 className="text-xl font-extrabold text-blue-950 mb-3 tracking-tight">{module.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{module.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* Key Benefits Section - Sticky Layout with Enterprise Accents */}
            <div className="bg-white border-y border-gray-200 py-20 lg:py-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6 text-blue-900">
                                <FaCheckCircle size={14} />
                                <span className="text-xs font-extrabold tracking-wide uppercase text-blue-950">Why Choose Us</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-6">
                                Maximized ROI & Operational Efficiency
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                                Built to eliminate manual errors, stop inventory shrinkage, and ensure total tax compliance seamlessly.
                            </p>
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-6 py-3.5 bg-blue-900 text-white font-bold tracking-wide rounded-sm hover:bg-blue-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                                    Talk to an Expert <FaArrowRight size={14} />
                                </button>
                            </Link>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 bg-slate-50 rounded-sm hover:border-blue-900 transition-colors group relative overflow-hidden">
                                        <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-900 transition-colors duration-300"></div>
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-blue-900 flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Capabilities Section - Structural Two Column */}
            <Container className="py-20 lg:py-28">
                <div className="bg-blue-950 rounded-sm overflow-hidden shadow-md relative border border-blue-900">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-16 flex flex-col justify-center bg-blue-950 relative">
                            {/* Subtle Grid Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                                    Advanced Technical Features
                                </h2>
                                <p className="text-lg text-blue-100 leading-relaxed mb-10 font-medium">
                                    Detailed clinical features created for serious pharmaceutical operations handling complex regulatory requirements.
                                </p>
                                <div className="space-y-4">
                                    {capabilities.slice(0, 7).map((capability, index) => (
                                        <div key={index} className="flex items-center gap-3 text-slate-100">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm flex-shrink-0"></div>
                                            <span className="font-medium text-sm">{capability}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-900 p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-blue-800 flex flex-col justify-center">
                            <div className="space-y-4">
                                {capabilities.slice(7).map((capability, index) => (
                                    <div key={index} className="flex items-center gap-3 text-slate-100">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm flex-shrink-0"></div>
                                        <span className="font-medium text-sm">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Clean CTA Section */}
            <div className="py-24 bg-white border-t border-gray-200">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="w-16 h-16 bg-white border border-gray-200 text-blue-900 rounded-sm flex items-center justify-center mx-auto mb-8 shadow-sm">
                            <FaPills size={24} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
                            Modernize Your Pharmacy Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            Join thousands of retail pharmacies executing seamless billing, tracking intelligent inventory, and securing higher profits.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors shadow-sm flex items-center justify-center gap-2 border border-blue-900">
                                    Get Started Free <FaArrowRight size={14} />
                                </button>
                            </Link>
                            <Link href="tel:+914442865141">
                                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-50 transition-colors border border-gray-300 shadow-sm flex items-center justify-center gap-2">
                                    <FaPhone size={14} /> Contact Support
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
