import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaUserGraduate, FaBook, FaClipboardList, FaMoneyBillWave, FaChalkboardTeacher, FaBookReader, FaBus, FaBuilding, FaUsers, FaChartLine, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function SchoolPage() {
    const service = SERVICES.find(s => s.id === 'school')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaUserGraduate,
            title: "Student Information System",
            description: "Complete student profiles, admission, attendance tracking, and ID card generation"
        },
        {
            icon: FaBook,
            title: "Academic Management",
            description: "Class management, subject allocation, timetable scheduling, and syllabus tracking"
        },
        {
            icon: FaClipboardList,
            title: "Examination Management",
            description: "Exam scheduling, mark entry, grade calculation, and report card generation"
        },
        {
            icon: FaMoneyBillWave,
            title: "Fee Management",
            description: "Fee structure, online payments, receipts, fine calculation, and concessions"
        },
        {
            icon: FaChalkboardTeacher,
            title: "Teacher Management",
            description: "Staff profiles, attendance, workload management, and performance tracking"
        },
        {
            icon: FaBookReader,
            title: "Library Management",
            description: "Book cataloging, issue/return tracking, RFID integration, and digital library"
        },
        {
            icon: FaBus,
            title: "Transport Management",
            description: "Route planning, GPS bus tracking, driver management, and transport fees"
        },
        {
            icon: FaBuilding,
            title: "Hostel Management",
            description: "Room allocation, mess management, hostel fees, and visitor tracking"
        },
        {
            icon: FaUsers,
            title: "Parent Portal",
            description: "Real-time attendance, exam results, fee payments, and teacher communication"
        },
        {
            icon: FaChartLine,
            title: "Reports & Analytics",
            description: "Performance analytics, attendance reports, financial tracking, and dashboards"
        }
    ];

    const benefits = [
        "Paperless administration - digital records and workflows",
        "Enhanced parent-teacher communication through SMS, email, and mobile app",
        "Automated fee collection with real-time financial tracking",
        "Improved academic performance with performance tracking and early alerts",
        "Time savings through automated processes and efficient scheduling",
        "Data security with secure cloud storage and role-based access",
        "Multi-branch support for schools with multiple campuses",
        "Biometric integration for accurate attendance tracking"
    ];

    const capabilities = [
        "Complete admission and enrollment management system",
        "Period-wise and daily attendance tracking",
        "Online fee payment gateway integration",
        "Automated report card and progress report generation",
        "GPS-enabled school bus tracking for parents",
        "Digital homework and assignment submission",
        "SMS/Email notifications for parents and staff",
        "Biometric attendance for students and teachers",
        "Student promotion and transfer management",
        "Hall ticket and admit card generation",
        "Substitute teacher allocation system",
        "Mobile app for parents, students, and teachers",
        "Custom report builder for administrative needs",
        "Hostel room and mess management",
        "Library book reservation and RFID tagging",
        "Event calendar and notice board management"
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
                            Complete School Management Solution - Streamline academic operations, student management, and parent communication with our comprehensive school ERP system
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
                        Everything you need to manage your educational institution efficiently in one integrated system
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                            Transform your educational institution with these powerful advantages
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
                        Customizable features tailored to your institution's specific needs
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
                            Ready to Transform Your School?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Get a customized school management solution built specifically for your needs. Contact us today for a free consultation and demo.
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
