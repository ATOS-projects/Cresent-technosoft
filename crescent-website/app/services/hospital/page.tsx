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
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-3xl text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                                <FaHospital className="text-blue-900" size={14} />
                                <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Hospital Software</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                                Complete <span className="text-blue-900 border-b-4 border-blue-900">Hospital Management</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Complete end-to-end enterprise hospital management solution for multi-specialty hospitals, nursing homes, and healthcare chains.
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
                        <div className="relative h-64 md:h-80 lg:h-96 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                            <Image
                                src="/Assets/hospital tech.jpg"
                                alt="Hospital Management Software"
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
                        Comprehensive Modules
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        All-in-one integrated solution covering every aspect of enterprise hospital operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="bg-white rounded-sm border border-gray-200 p-8 group hover:border-blue-900 transition-colors duration-300 shadow-sm">
                                <div className="w-12 h-12 bg-slate-50 border border-gray-200 rounded-sm flex items-center justify-center mb-6 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                                    <ModuleIcon size={20} />
                                </div>
                                <h3 className="text-xl font-extrabold text-blue-950 mb-3 tracking-tight">{module.title}</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">{module.description}</p>
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
                            <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Core Benefits</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                            Why Choose Our HMS?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                            Enterprise-grade hospital management system trusted by healthcare providers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white rounded-sm border border-gray-200 p-6 group hover:border-blue-900 shadow-sm transition-colors duration-300">
                                <div className="mt-1 w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0"></div>
                                <span className="text-sm text-gray-600 font-medium leading-relaxed">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Capabilities Section */}
            <Container className="py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                        What We Can Build For You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        Fully customizable features to match your hospital's unique workflows
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
                            Transform Your Hospital Operations
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Join hundreds of hospitals already using our HMS. Get a personalized demo and see how we can help digitize your hospital.
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
