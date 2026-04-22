import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaUserMd, FaFileMedical, FaPrescription, FaHistory, FaFlask, FaCalendarCheck, FaBell, FaClipboardList, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function ClinicPage() {
    const service = SERVICES.find(s => s.id === 'clinic')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaClipboardList,
            title: "Patient Registration",
            description: "Complete patient demographic and contact information management"
        },
        {
            icon: FaFileMedical,
            title: "Medical Record Maintenance",
            description: "Digital storage and easy access to all patient medical records"
        },
        {
            icon: FaPrescription,
            title: "Doctor Prescription",
            description: "Digital prescription generation with medication database"
        },
        {
            icon: FaUserMd,
            title: "Medical Observation Form",
            description: "Record vital signs, symptoms, and clinical observations"
        },
        {
            icon: FaHistory,
            title: "Previous History of Patients",
            description: "Complete medical history tracking and retrieval"
        },
        {
            icon: FaFlask,
            title: "Investigations",
            description: "Lab test orders, results tracking, and report management"
        },
        {
            icon: FaCalendarCheck,
            title: "Follow-up Management",
            description: "Schedule and track patient follow-up appointments"
        },
        {
            icon: FaBell,
            title: "SMS/Email Reminders",
            description: "Automated reminders for appointments and medicine intake"
        }
    ];

    const benefits = [
        "No need of patients carrying old physical files",
        "Keep tracks of patient medicinal history digitally",
        "Follow up of patients made very easy",
        "Reminders to patients on their follow ups and medicine intake",
        "Integrated with SMS and mail options to post reminders",
        "Automated alerts to patients for upcoming appointments",
        "Quick access to complete patient medical records",
        "Prescription history and medication tracking"
    ];

    const capabilities = [
        "Patient appointment scheduling and management",
        "Doctor consultation notes and treatment plans",
        "Billing and payment tracking",
        "Insurance claim processing",
        "Multi-location clinic support",
        "Staff and doctor management",
        "Inventory tracking for medical supplies",
        "Detailed reports and analytics"
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
                                <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Clinic Software</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                                Complete <span className="text-blue-900 border-b-4 border-blue-900">Clinic Management</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Complete digital solution for modern clinic management - from patient registration to follow-ups
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
                                src="/Assets/clinic.avif"
                                alt="Clinic Management Software"
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
                        Everything you need to manage your clinic efficiently in one integrated system
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200 bg-white">
                    {modules.map((module, index) => {
                        const ModuleIcon = module.icon;
                        return (
                            <div key={index} className="relative p-8 border-r border-b border-gray-200 group hover:bg-slate-50 transition-colors duration-300">
                                {/* Diagonal Line Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                                    <div className="absolute top-[-24px] right-[-24px] w-12 h-12 bg-gray-100 rotate-45 group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300"></div>
                                </div>
                                <div className="w-12 h-12 bg-white border border-gray-200 text-blue-900 flex items-center justify-center mb-6 group-hover:border-blue-900 group-hover:text-blue-950 transition-colors duration-300 relative z-10 rounded-sm">
                                    <ModuleIcon size={20} />
                                </div>
                                <h3 className="text-lg font-extrabold text-blue-950 mb-3 tracking-tight relative z-10">{module.title}</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed relative z-10">{module.description}</p>
                                
                                {/* Structural Line Hover Indicator */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-900 group-hover:w-full transition-all duration-500"></div>
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
                            Transform your clinic operations with these powerful advantages
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white rounded-sm border border-gray-200 p-6 group hover:border-blue-900 shadow-sm transition-colors duration-300 relative overflow-hidden">
                                {/* Left Line Accent */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-900 transition-colors duration-300"></div>
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
                        Customizable features tailored to your clinic's specific needs
                    </p>
                </div>

                <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
                    {/* Top Architectural Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-900"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
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
                            Ready to Transform Your Clinic?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Get a customized clinic management solution built specifically for your needs. Contact us today for a free consultation.
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
