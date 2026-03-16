import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaCubes, FaWarehouse, FaShoppingCart, FaFileInvoiceDollar, FaWarehouse as FaWarehouses, FaBarcode, FaBell, FaClipboardCheck, FaChartLine, FaPlug, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function InventoryPage() {
    const service = SERVICES.find(s => s.id === 'inventory')!;
    const Icon = service.icon;

    const modules = [
        {
            icon: FaCubes,
            title: "Item Master Management",
            description: "Product catalog, SKU/barcode management, categories, and reorder levels"
        },
        {
            icon: FaWarehouse,
            title: "Stock Management",
            description: "Real-time tracking, multi-location inventory, batch/serial numbers, and valuation"
        },
        {
            icon: FaShoppingCart,
            title: "Purchase Management",
            description: "Purchase orders, supplier management, GRN, and purchase returns"
        },
        {
            icon: FaFileInvoiceDollar,
            title: "Sales Management",
            description: "Sales orders, delivery challans, invoicing, sales returns, and customer management"
        },
        {
            icon: FaWarehouses,
            title: "Warehouse Management",
            description: "Multi-warehouse support, bin locations, stock movements, and space utilization"
        },
        {
            icon: FaBarcode,
            title: "Barcode System",
            description: "Barcode generation, scanning, quick stock entry, and label printing"
        },
        {
            icon: FaBell,
            title: "Alerts & Notifications",
            description: "Low stock alerts, reorder notifications, expiry alerts, and overstock warnings"
        },
        {
            icon: FaClipboardCheck,
            title: "Quality Control",
            description: "Inspection management, quality parameters, rejection tracking, and vendor ratings"
        },
        {
            icon: FaChartLine,
            title: "Reports & Analytics",
            description: "Stock reports, aging analysis, movement analysis, profit margins, and ABC analysis"
        },
        {
            icon: FaPlug,
            title: "Integration Module",
            description: "Accounting sync, e-commerce integration, supplier portal, and API access"
        }
    ];

    const benefits = [
        "Reduce stock-outs with automated reorder points and smart forecasting",
        "Cost optimization by reducing excess inventory and carrying costs",
        "Real-time visibility of live stock levels across all locations",
        "Improved accuracy with barcode scanning and automated calculations",
        "Better decision making with detailed analytics and trend analysis",
        "Scalability to handle growing inventory and multiple locations"
    ];

    const capabilities = [
        "Complete product cataloging with images and specifications",
        "SKU and barcode generation for all items",
        "Category and sub-category management",
        "Reorder level and safety stock configuration",
        "Multiple unit of measurement support",
        "Real-time stock tracking across locations",
        "Batch and lot number tracking",
        "Serial number tracking for items",
        "FIFO, LIFO, and average costing methods",
        "Stock transfer between warehouses",
        "Purchase requisition and approval workflow",
        "Supplier management with price history",
        "Goods receipt note (GRN) processing",
        "Purchase and sales return management",
        "Low stock and expiry date alerts",
        "Bin location management in warehouses",
        "Mobile scanner integration for faster operations",
        "GST/Tax compliance with detailed reports",
        "Landed cost calculation",
        "Consignment and drop shipping support",
        "Quality inspection and rejection workflows",
        "Aging analysis for stock movement",
        "Slow-moving and dead stock reports",
        "Profitability analysis by item/category",
        "Custom dashboards for management insights"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left max-w-2xl">
                            <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Icon className="text-white text-3xl" />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Smart Inventory & Stock Management - Real-time inventory tracking, stock optimization, and warehouse management for businesses of all sizes
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center">
                                        Request a Demo
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-600 hover:bg-sky-50 transition-all w-full sm:w-auto text-center">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image 
                                src="/Assets/inventory.jpg"
                                alt="Inventory Management System"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Overlay Gradient for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
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
                        Complete inventory control from purchase to sales with real-time tracking
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
                            Transform your inventory operations with these powerful advantages
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
                            Ready to Optimize Your Inventory?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Get a customized inventory management solution built specifically for your needs. Contact us today for a free consultation and demo.
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
