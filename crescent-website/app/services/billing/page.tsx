import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaBolt, FaUsers, FaCube, FaFileInvoiceDollar, FaCreditCard, FaFileAlt, FaMoneyBillAlt, FaChartBar, FaCheckCircle, FaArrowRight, FaPhone, FaBarcode, FaMobileAlt } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function BillingPage() {
    const service = SERVICES.find(s => s.id === 'billing')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaBolt,
            title: "Quick Billing",
            description: "Fast invoice generation, barcode scanning, product search, and multi-payment modes"
        },
        {
            icon: FaUsers,
            title: "Customer Management",
            description: "Customer database, credit limits, sales history, outstanding reports, and loyalty programs"
        },
        {
            icon: FaCube,
            title: "Product Management",
            description: "Product catalog, price lists, stock tracking, batch/serial numbers, and variants"
        },
        {
            icon: FaFileInvoiceDollar,
            title: "GST Compliance",
            description: "GST invoices, GSTIN validation, HSN/SAC codes, GSTR reports, and e-way bills"
        },
        {
            icon: FaCreditCard,
            title: "Payment Management",
            description: "Multiple payment modes, payment gateway, partial payments, reminders, and receipts"
        },
        {
            icon: FaFileAlt,
            title: "Quotation & Estimates",
            description: "Professional quotations, convert to invoice, follow-ups, and digital signatures"
        },
        {
            icon: FaMoneyBillAlt,
            title: "Expense Management",
            description: "Business expenses, vendor payments, expense reports, and profit/loss calculation"
        },
        {
            icon: FaChartBar,
            title: "Reports & Analytics",
            description: "Sales reports, payment collection, outstanding, product-wise sales, and tax reports"
        }
    ];

    const benefits = [
        "Faster billing - reduce billing time by 70% with barcode scanning",
        "Error reduction - automated calculations with accurate GST computation",
        "Better cash flow - track outstanding payments with reminders",
        "Professional image - branded invoices with customizable templates",
        "Compliance made easy -GST-ready invoices with automated tax calculation",
        "Business insights - sales trends, best-selling products, and profit margins"
    ];

    const capabilities = [
        "Fast invoice generation with keyboard shortcuts",
        "Barcode scanning for quick billing",
        "Multiple payment modes (Cash/Card/UPI/Cheque)",
        "Payment gateway integration",
        "Customer credit limit tracking",
        "Customer-wise sales history and analysis",
        "Product catalog with images and variants",
        "Stock level tracking",
        "GST invoice format with GSTIN validation",
        "HSN and SAC code management",
        "GSTR-1 and GSTR-3B reports",
        "E-way bill generation",
        "Professional quotation templates",
        "Convert quotation to invoice",
        "Recurring billing for subscriptions",
        "Multi-store and multi-location support",
        "Scheme and discount management",
        "Coupon code functionality",
        "Inclusive and exclusive tax options",
        "Tax exemption handling",
        "Windows, web, and mobile apps",
        "Customizable invoice templates",
        "Company logo and branding",
        "Multi-language support",
        "PDF invoice generation",
        "Email invoices instantly",
        "SMS integration for notifications",
        "Cloud backup and data security",
        "Offline mode with auto-sync",
        "User access control and audit logs",
        "Integration with accounting software"
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
                            Professional Billing & Invoicing Solution - Create invoices, manage customers, track payments,and streamline your billing process with GST compliance
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
                        Everything you need for fast, accurate, and GST-compliant billing
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
                            Transform your billing operations with these powerful advantages
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
                        Customizable features tailored to your business's specific needs
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
                            Ready to Streamline Your Billing?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Start creating professional invoices in minutes. Try our billing software free for 30 days and experience the difference!
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
