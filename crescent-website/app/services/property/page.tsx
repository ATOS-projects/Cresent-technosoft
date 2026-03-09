import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaBuilding, FaUserTie, FaMoneyCheckAlt, FaFileContract, FaTools, FaCalculator, FaBolt, FaUserShield, FaChartLine, FaCheckCircle, FaArrowRight, FaPhone, FaMobileAlt, FaFileAlt } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function PropertyPage() {
    const service = SERVICES.find(s => s.id === 'property')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaBuilding,
            title: "Property Management",
            description: "Property listings, unit management, occupancy status, amenities, and specifications"
        },
        {
            icon: FaUserTie,
            title: "Tenant Management",
            description: "Tenant profiles, documents, lease agreements, screening, and communication portal"
        },
        {
            icon: FaMoneyCheckAlt,
            title: "Rent Management",
            description: "Automated rent calculation, escalation, multiple payments, receipts, and penalties"
        },
        {
            icon: FaFileContract,
            title: "Lease Management",
            description: "Lease creation/renewal, expiry alerts, security deposits, and digital signatures"
        },
        {
            icon: FaTools,
            title: "Maintenance Management",
            description: "Request tracking, vendor management, work orders, preventive scheduling, and cost tracking"
        },
        {
            icon: FaCalculator,
            title: "Accounting & Finance",
            description: "Income/expense tracking, owner statements, P&L, tax management, and bank reconciliation"
        },
        {
            icon: FaBolt,
            title: "Utility Management",
            description: "Meter readings, consumption tracking, bill generation, and CAM charges"
        },
        {
            icon: FaUserShield,
            title: "Visitor Management",
            description: "Gate passes, visitor logs, security tracking, vehicle tracking, and delivery management"
        },
        {
            icon: FaChartLine,
            title: "Reports & Analytics",
            description: "Occupancy, rent roll, outstanding, maintenance, financial statements, and custom reports"
        }
    ];

    const benefits = [
        "Streamlined operations with centralized management and automated workflows",
        "Improved cash flow with on-time rent collection and automated reminders",
        "Better tenant satisfaction through quick maintenance response and self-service portal",
        "Financial transparency with real-time reporting and detailed statements",
        "Time savings through automated processes and bulk operations",
        "Scalable solution to grow your portfolio with unlimited properties"
    ];

    const capabilities = [
        "Property listings with photos and specifications",
        "Multiple property types (Residential/Commercial/Industrial)",
        "Unit and floor-wise management",
        "Occupancy status tracking",
        "Amenities and facilities management",
        "Tenant profiles with complete documentation",
        "Digital lease agreement storage",
        "Move-in and move-out checklists",
        "Tenant screening and verification",
        "Automated rent calculation with escalation",
        "Late payment penalties automatic",
        "Multiple payment mode support",
        "Rent receipt generation",
        "Partial payment tracking",
        "Lease creation and renewal workflows",
        "Lease expiry alert notifications",
        "Security deposit tracking",
        "Lease terms and conditions templates",
        "Digital signature support",
        "Maintenance request tracking system",
        "Vendor and contractor management",
        "Work order creation and assignment",
        "Preventive maintenance scheduling",
        "Maintenance cost tracking by property",
        "Tenant complaint management portal",
        "Income and expense tracking",
        "Owner payment statements",
        "Property-wise profit and loss",
        "Tax document management",
        "Budget planning and tracking",
        "Electricity and water meter readings",
        "Utility consumption tracking",
        "Utility bill generation",
        "Common area maintenance charges",
        "Gate pass and visitor log management",
        "Security personnel tracking",
        "Vehicle entry and exit tracking",
        "Delivery and courier management",
        "Online tenant payment portal",
        "Payment gateway integration",
        "Automated payment reminders",
        "Auto-receipt generation and email",
        "Document management system",
        "Notice board for announcements",
        "Event and community notifications",
        "Emergency alert system",
        "Mobile app for tenants and owners",
        "SMS and email notification system",
        "Role-based access control",
        "Multi-property support",
        "Cloud-based with automatic backups"
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
                            Complete Property Management Solution - Manage properties, tenants, rent collection, maintenance, and finances all in one platform
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
                        Complete property management from tenants to finances in one integrated system
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            Transform your property management with these powerful advantages
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
                        Customizable features tailored to your property portfolio's specific needs
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
                            Ready to Transform Your Property Management?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Get a customized property management solution built specifically for your needs. Schedule a demo to see how we can simplify your operations!
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
