import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaFlask, FaMicroscope, FaVial, FaFileAlt, FaBarcode, FaUsers, FaClock, FaMobileAlt, FaChartLine, FaPrint, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function LabPage() {
    const service = SERVICES.find(s => s.id === 'lab')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaVial,
            title: "Sample Collection",
            description: "Barcode labeling and sample tracking from collection to disposal"
        },
        {
            icon: FaMicroscope,
            title: "Test Management",
            description: "Comprehensive test catalog with normal ranges and methods"
        },
        {
            icon: FaFileAlt,
            title: "Report Generation",
            description: "Customizable report templates with digital signatures"
        },
        {
            icon: FaBarcode,
            title: "Barcode Integration",
            description: "Sample tracking with barcode/QR code system"
        },
        {
            icon: FaUsers,
            title: "Patient Management",
            description: "Complete patient demographics and history tracking"
        },
        {
            icon: FaClock,
            title: "TAT Monitoring",
            description: "Turnaround time tracking for quality control"
        },
        {
            icon: FaMobileAlt,
            title: "Mobile App",
            description: "Patient app for report download and home collection booking"
        },
        {
            icon: FaChartLine,
            title: "Analytics Dashboard",
            description: "Real-time insights on tests, revenue, and performance"
        },
        {
            icon: FaPrint,
            title: "Billing & Invoicing",
            description: "GST-compliant billing with insurance processing"
        }
    ];

    const benefits = [
        "Eliminate manual entry errors with barcode scanning",
        "Instant report delivery via SMS/Email/WhatsApp",
        "Integration with analyzers and lab machines",
        "Multi-location lab chain support",
        "Home sample collection management",
        "Quality control and calibration tracking",
        "Referral doctor commission management",
        "Online appointment and slot booking",
        "NABL compliance and audit trail",
        "Customizable report formats per doctor",
        "Critical value alerts and notifications",
        "Mobile access for technicians and doctors"
    ];

    const capabilities = [
        "Test master with departments and categories",
        "Sample type and container tracking",
        "Outsource test management",
        "Culture and antibiotic sensitivity reports",
        "Histopathology and cytology modules",
        "Radiology integration (X-Ray, CT, MRI, Ultrasound)",
        "PACS integration for digital images",
        "Reference lab integration",
        "Corporate and health checkup packages",
        "B2B billing for hospitals and clinics",
        "Accounts receivable and payable tracking",
        "Staff performance and productivity reports",
        "Inventory management for reagents and consumables",
        "Equipment maintenance scheduling",
        "Patient report portal with login access",
        "Franchise management for collection centers"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Icon className="text-white text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                            Complete Laboratory Information System (LIS) for diagnostics centers and pathology labs
                        </p>
                        <div className="inline-block bg-purple-100 rounded-lg px-6 py-3 mb-6">
                            <p className="text-purple-700 font-semibold">
                                Starting at just ₹999/month
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all">
                                    Request a Demo
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all">
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
                        Everything you need to run a modern diagnostic laboratory
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 p-6 hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <div className="bg-gradient-to-br from-purple-50 to-white py-16 md:py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Streamline laboratory operations and improve patient experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg border border-purple-200 p-4 hover:border-purple-400 hover:shadow-md transition-all">
                                <FaCheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
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
                        Advanced LIS features customized for your laboratory
                    </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-100 p-8 md:p-12 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-gray-700">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 py-16 md:py-20">
                <Container>
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Digitize Your Laboratory Today
                        </h2>
                        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                            Join hundreds of labs using our LIS. Affordable pricing starting at ₹999/month. Get a free demo now!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                    <span>Contact Us Now</span>
                                    <FaArrowRight />
                                </button>
                            </Link>
                            <Link href="tel:+914442865141">
                                <button className="px-8 py-4 bg-purple-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-purple-900 hover:border-white transition-all flex items-center gap-2">
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
