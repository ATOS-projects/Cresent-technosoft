import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaBook, FaExchangeAlt, FaUsers, FaShoppingCart, FaTabletAlt, FaSearch, FaChartBar, FaCog, FaCheckCircle, FaArrowRight, FaPhone, FaBarcode, FaBell, FaBuilding, FaMobileAlt } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function LibraryPage() {
    const service = SERVICES.find(s => s.id === 'library')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaBook,
            title: "Catalog Management",
            description: "ISBN cataloging, multiple copies, Dewey classification, and barcode/RFID tagging"
        },
        {
            icon: FaExchangeAlt,
            title: "Circulation Management",
            description: "Book issue/return, renewals, reservations, overdue tracking, and fine automation"
        },
        {
            icon: FaUsers,
            title: "Member Management",
            description: "Member registration, ID cards, borrowing limits, and membership tracking"
        },
        {
            icon: FaShoppingCart,
            title: "Acquisition Management",
            description: "Purchase requisition, vendor management, order tracking, and budget allocation"
        },
        {
            icon: FaTabletAlt,
            title: "Digital Library",
            description: "E-books, e-journals, research papers, remote access, and download tracking"
        },
        {
            icon: FaSearch,
            title: "OPAC System",
            description: "Advanced search, availability status, online reservations, and reading history"
        },
        {
            icon: FaChartBar,
            title: "Reports & Statistics",
            description: "Circulation stats, collection analysis, member activity, and custom reports"
        },
        {
            icon: FaCog,
            title: "Administration",
            description: "User roles, library configuration, holiday calendar, and automated backups"
        }
    ];

    const benefits = [
        "Barcode/RFID support for quick book scanning and fast checkout",
        "Automated notifications for overdue, reservations, and new arrivals",
        "Multi-library support with branch management and centralized catalog",
        "Mobile app for members to search books and request renewals",
        "Integration with biometric systems and payment gateways",
        "Powerful search with advanced filters and boolean operations",
        "Automated fine calculation with payment tracking and receipts",
        "Comprehensive reporting with pre-built and custom reports"
    ];

    const capabilities = [
        "Complete book cataloging with ISBN lookup",
        "Multiple copy and branch tracking",
        "Dewey Decimal classification system",
        "Book reservation and hold requests",
        "Member borrowing history and preferences",
        "Overdue fine calculation and collection",
        "New arrivals notification to members",
        "Vendor and purchase order management",
        "Budget allocation by category",
        "E-book and e-journal management",
        "Remote access control for digital resources",
        "Inter-library book transfers",
        "Lost book management and charges",
        "Member photo ID card printing",
        "SMS and email notification system",
        "Anti-theft RFID gate integration",
        "Circulation statistics and analytics",
        "Collection development reports",
        "Most borrowed books analysis",
        "Member activity dashboards"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Icon className="text-white text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Modern Library Management Solution - Digitize your library operations with automated cataloging, circulation, and member management
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all">
                                    Request a Demo
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-600 hover:bg-sky-50 transition-all">
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
                        Everything you need to manage any type of library efficiently in one integrated system
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ModuleIcon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* Key Benefits Section */}
            <div className="bg-gradient-to-br from-sky-50 to-white py-16 md:py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transform your library operations with these powerful advantages
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg border border-sky-200 p-4 hover:border-sky-400 hover:shadow-md transition-all">
                                <FaCheckCircle className="text-sky-600 flex-shrink-0 mt-1" size={20} />
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
                        Customizable features tailored to your library's specific needs
                    </p>
                </div>

                <div className="bg-white rounded-2xl border-2 border-sky-100 p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-sky-600 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 py-16 md:py-20">
                <Container>
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Modernize Your Library?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Get a customized library management solution built specifically for your needs. Contact us today for a free consultation and demo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                    <span>Contact Us Now</span>
                                    <FaArrowRight />
                                </button>
                            </Link>
                            <Link href="tel:+914442865141">
                                <button className="px-8 py-4 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white transition-all flex items-center gap-2">
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
