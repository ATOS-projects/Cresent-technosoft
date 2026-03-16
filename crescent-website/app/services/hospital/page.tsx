import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaHospital, FaUserInjured, FaBed, FaProcedures, FaAmbulance, FaFlask, FaPills, FaMoneyBillWave, FaUsers, FaChartLine, FaCalendarAlt, FaFileInvoice, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function HospitalPage() {
    const service = SERVICES.find(s => s.id === 'hospital')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaUserInjured,
            title: "Patient Management",
            description: "Complete patient registration, records, and history management"
        },
        {
            icon: FaBed,
            title: "In-Patient Management",
            description: "Bed allocation, admission, discharge, and ward management"
        },
        {
            icon: FaProcedures,
            title: "OPD Management",
            description: "Outpatient department appointments and consultation tracking"
        },
        {
            icon: FaAmbulance,
            title: "Emergency Module",
            description: "Emergency case management with priority handling"
        },
        {
            icon: FaFlask,
            title: "Laboratory Management",
            description: "Lab test orders, sample tracking, and report generation"
        },
        {
            icon: FaPills,
            title: "Pharmacy Integration",
            description: "Prescription management and pharmacy stock control"
        },
        {
            icon: FaMoneyBillWave,
            title: "Billing & Accounts",
            description: "Comprehensive billing, insurance claims, and financial reports"
        },
        {
            icon: FaUsers,
            title: "Staff Management",
            description: "Doctor scheduling, staff attendance, and payroll"
        },
        {
            icon: FaChartLine,
            title: "Reports & Analytics",
            description: "Real-time dashboards and customizable reports"
        },
        {
            icon: FaCalendarAlt,
            title: "Appointment System",
            description: "Online and offline appointment scheduling"
        },
        {
            icon: FaFileInvoice,
            title: "Insurance Processing",
            description: "Insurance claim management and verification"
        },
        {
            icon: FaHospital,
            title: "Inventory Control",
            description: "Medical supplies, equipment, and asset management"
        }
    ];

    const benefits = [
        "Centralized patient data accessible across all departments",
        "Automated billing and insurance claim processing",
        "Real-time bed occupancy and availability tracking",
        "Digital prescription and medication management",
        "Integrated lab and radiology reporting",
        "Multi-location hospital chain support",
        "Mobile app for doctors and patients",
        "Automated SMS/Email notifications and reminders",
        "Complete audit trail and compliance tracking",
        "Doctor and staff scheduling optimization",
        "Emergency case prioritization",
        "Banking and payment gateway integration"
    ];

    const capabilities = [
        "Patient registration with demographic details and photo",
        "OPD token management and queue system",
        "Doctor consultation notes and treatment plans",
        "Operation theater scheduling and management",
        "ICU and ward management with vital signs tracking",
        "Laboratory information system (LIS) integration",
        "Radiology PACS integration",
        "Blood bank management",
        "Diet and nutrition planning for in-patients",
        "Ambulance and transport management",
        "Medical equipment maintenance tracking",
        "Pharmacy point of sale (POS) system",
        "Insurance TPA integration",
        "Government scheme (Ayushman Bharat, CGHS, etc.) support",
        "Birth and death certificate generation",
        "MIS reports for management decisions"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 md:pt-32 pb-16 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Assets/hospital tech.jpg"
                        alt="Hospital Management Software"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
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
                            Complete end-to-end hospital management solution for multi-specialty hospitals, nursing homes, and healthcare chains
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
                        Comprehensive Modules
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        All-in-one integrated solution covering every aspect of hospital operations
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
                            Why Choose Our HMS?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Enterprise-grade hospital management system trusted by healthcare providers
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
                        Fully customizable features to match your hospital's unique workflows
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
                            Transform Your Hospital Operations
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Join hundreds of hospitals already using our HMS. Get a personalized demo and see how we can help digitize your hospital.
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
