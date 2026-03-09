import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaUsers, FaClock, FaCalendarAlt, FaMoneyCheckAlt, FaDollarSign, FaFileAlt, FaReceipt, FaCoins, FaChartLine, FaCheckCircle, FaArrowRight, FaPhone, FaFingerprint, FaUniversity } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function PayrollPage() {
    const service = SERVICES.find(s => s.id === 'payroll')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaUsers,
            title: "Employee Management",
            description: "Complete profiles, documents, designation,joining/exit, and self-service portal"
        },
        {
            icon: FaClock,
            title: "Attendance Management",
            description: "Biometric integration, shift support, overtime calculation, and WFH tracking"
        },
        {
            icon: FaCalendarAlt,
            title: "Leave Management",
            description: "Multiple leave types, approval workflow, encashment, and holiday calendar"
        },
        {
            icon: FaMoneyCheckAlt,
            title: "Salary Structure",
            description: "Flexible components, CTC configuration, allowances, deductions, and arrears"
        },
        {
            icon: FaDollarSign,
            title: "Payroll Processing",
            description: "Automated calculations, TDS, PF, ESI, professional tax, and net salary"
        },
        {
            icon: FaFileAlt,
            title: "Statutory Compliance",
            description: "PF returns, ESI, TDS, Form 16 generation, PT returns, and bonus calculation"
        },
        {
            icon: FaReceipt,
            title: "Reimbursements",
            description: "Travel, medical, conveyance claims, approval workflow, and receipt management"
        },
        {
            icon: FaCoins,
            title: "Loan & Advance",
            description: "Loan application, EMI calculation, automatic deduction, and advance salary"
        },
        {
            icon: FaChartLine,
            title: "Reports & Analytics",
            description: "Salary register, payment advice, pay slips, cost analysis, and custom reports"
        }
    ];

    const benefits = [
        "Time savings - automated calculations reduce manual work by 80%",
        "100% accuracy with error-free calculations and validated formulas",
        "Compliance management - updated with latest laws and auto-generated reports",
        "Employee self-service - view pay slips, download Form 16, apply leave online",
        "Cost effective - reduce payroll staff and eliminate paper costs",
        "Data security with encrypted salary data and role-based access"
    ];

    const capabilities = [
        "Complete employee database with documents",
        "Organizational hierarchy management",
        "Biometric integration (fingerprint, face, RFID)",
        "Multiple shift and overtime management",
        "Leave balance tracking and encashment",
        "Flexible salary structure with custom components",
        "CTC and gross salary configuration",
        "Automated TDS calculation (Section 192)",
        "PF and ESI auto-calculation",
        "Professional tax by state",
        "Loan EMI and advance deduction",
        "Automated bonus calculation",
        "Form 16 and Form 16A generation",
        "PF ECR file generation",
        "ESI challan generation",
        "Bank file generation (NEFT/RTGS)",
        "Multiple bank support",
        "Investment declaration for tax planning",
        "HRA and LTA exemption calculation",
        "Pay slip generation (email/print)",
        "Salary register reports",
        "Department-wise cost analysis",
        "Attendance and leave reports",
        "Statutory compliance reports",
        "Mobile app for employees"
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
                            Complete Payroll & HR Management - Automate salary processing, attendance, leave management, and statutory compliance for your workforce
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
                        Complete HR and payroll automation from attendance to salary disbursement
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
                            Transform your HR operations with these powerful advantages
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
                        Customizable features tailored to your organization's specific needs
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
                            Ready to Simplify Your Payroll?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Get a customized payroll management solution built specifically for your needs. Contact us today for a free consultation and demo.
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
