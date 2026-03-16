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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 md:pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Assets/pharma.avif"
                        alt="Pharmacy Management Software"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60"></div>
                </div>

                <Container className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Icon className="text-white text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 drop-shadow-sm">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                            Complete pharmacy management solution with inventory control, GST billing, and expiry tracking
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                                    Request a Demo
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">
                                    Contact Sales
                                </button>
                            </Link>
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
                        Everything you need to run a modern retail or hospital pharmacy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 p-6 hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ModuleIcon className="text-white text-xl" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
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
                            Streamline operations and maximize profitability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg border border-blue-200 p-4 hover:border-blue-400 hover:shadow-md transition-all">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Capabilities Section */}
            <Container className="py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What We Can Build For You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Advanced features customized for your pharmacy business
                    </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
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
                            Modernize Your Pharmacy Today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Join thousands of pharmacies using our software. Get a free demo and see how we can increase your efficiency and profits.
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
