import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { FaLaptopCode, FaShoppingCart, FaCogs, FaWordpress, FaMobileAlt, FaTools, FaCheckCircle, FaArrowRight, FaPhone, FaCode, FaDatabase, FaServer, FaPalette } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function WebsiteDevPage() {
    const service = SERVICES.find(s => s.id === 'website')!;
    const Icon = service.icon;

    const services = [
        {
            icon: FaLaptopCode,
            title: "Corporate Website Development",
            description: "Professional business websites with responsive design, CMS, SEO optimization, and fast loading speeds"
        },
        {
            icon: FaShoppingCart,
            title: "E-Commerce Development",
            description: "Online stores with shopping cart, payment gateway, inventory, order management, and multi-currency support"
        },
        {
            icon: FaCogs,
            title: "Web Application Development",
            description: "Custom SaaS applications, business tools, customer portals, booking systems, and data dashboards"
        },
        {
            icon: FaWordpress,
            title: "CMS Development",
            description: "WordPress, custom CMS, blog platforms, news portals with easy content management and updates"
        },
        {
            icon: FaMobileAlt,
            title: "Responsive Web Design",
            description: "Mobile-first, touch-friendly interfaces, Progressive Web Apps (PWA), and cross-browser compatibility"
        },
        {
            icon: FaTools,
            title: "Website Maintenance",
            description: "Regular updates, security patches, performance optimization, backups, and technical support"
        }
    ];

    const benefits = [
        "Custom solutions tailored to your specific business needs",
        "Expert team of developers, designers, and QA specialists",
        "Latest technologies and modern frameworks for future-proof solutions",
        "Transparent process with regular updates and clear communication",
        "Post-launch support with maintenance packages and technical assistance",
        "Proven track record with 60+ successful projects globally"
    ];

    const capabilities = [
        "Responsive design for all devices (mobile, tablet, desktop)",
        "Custom design matching your brand identity",
        "Content Management System (CMS) integration",
        "SEO-friendly architecture and optimization",
        "Fast loading speeds with optimized code",
        "Contact forms and lead capture systems",
        "Social media integration",
        "Analytics and tracking setup",
        "Shopping cart and e-commerce functionality",
        "Product catalog management",
        "Payment gateway integration (Stripe, PayPal, Razorpay)",
        "Order and inventory management",
        "Customer account management",
        "Multi-currency and multi-language support",
        "Shipping and tax calculation",
        "Coupon and discount system",
        "SaaS and business web applications",
        "Customer portals and dashboards",
        "Booking and scheduling systems",
        "CRM and ERP web systems",
        "RESTful API development",
        "Database design and optimization",
        "WordPress theme and plugin development",
        "Blog and news portal development",
        "Progressive Web Apps (PWA)",
        "App-like mobile experience",
        "Offline functionality",
        "Push notifications",
        "Security patches and SSL setup",
        "Performance optimization",
        "Backup management",
        "Uptime monitoring",
        "Technical support and maintenance",
        "Content updates",
        "Bug fixes and enhancements",
        "HTML5, CSS3, JavaScript",
        "React.js, Next.js, Vue.js, Angular",
        "Node.js, PHP, Python, .NET, Java",
        "MySQL, PostgreSQL, MongoDB",
        "Cloud hosting (AWS, Google Cloud, Azure)"
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
                                Professional Website Development Services - Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center">
                                        Get a Quote
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-600 hover:bg-sky-50 transition-all w-full sm:w-auto text-center">
                                        View Portfolio
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image 
                                src="/Assets/web-development.avif"
                                alt="Website Development"
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

            {/* Our Services Section */}
            <Container className="py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive web development services from simple landing pages to complex applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, index) => {
                        const ServiceIcon = svc.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ServiceIcon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
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
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Partner with us for exceptional web development services
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
                        Comprehensive web development capabilities using the latest technologies
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
                            Ready to Build Your Dream Website?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Let's discuss your project and create something amazing together. Contact us today for a free consultation and quote!
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
