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
        <div className="bg-white">
            {/* Split Monochrome Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-3xl text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-8">
                                <Icon className="text-blue-900" size={14} />
                                <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Web Engineering</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight leading-tight">
                                Enterprise <br className="hidden lg:block"/><span className="text-blue-900 border-b-4 border-blue-900">Web Development</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                Professional Website Development Services - Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm flex items-center justify-center gap-2">
                                        Get a Quote <FaArrowRight size={14}/>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm flex items-center justify-center gap-2">
                                        View Portfolio
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="relative order-1 lg:order-2">
                            {/* Accent Background Box */}
                            <div className="absolute -right-4 -bottom-4 w-full h-full bg-blue-900 rounded-sm"></div>
                            <div className="relative h-72 md:h-96 w-full rounded-sm overflow-hidden border border-gray-200 shadow-sm bg-white">
                                <Image 
                                    src="/Assets/web-development.avif"
                                    alt="Website Development"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Core Modules Section - Abstract Tech Grid */}
            <Container className="py-16 md:py-24">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                        Digital Engineering Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        Comprehensive web development services from simple landing pages to complex responsive applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {services.map((svc, index) => {
                        const ServiceIcon = svc.icon;
                        // Alternate background colors for a checkerboard effect
                        const isPrimary = (index % 2 === 0);
                        return (
                            <div key={index} className={`p-10 border border-gray-200 group transition-colors duration-300 ${isPrimary ? 'bg-white hover:bg-slate-50' : 'bg-slate-50 hover:bg-white'}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <ServiceIcon size={20} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-blue-950 tracking-tight">{svc.title}</h3>
                                </div>
                                <p className="text-base text-gray-600 font-medium leading-relaxed">{svc.description}</p>
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
                            <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Why Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                            The Tech Advantage
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                            Partner with us for exceptional web development services built on modern stacks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white rounded-sm border border-gray-200 p-6 group hover:border-blue-900 shadow-sm transition-colors duration-300 relative overflow-hidden">
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
                        Technological Capabilities
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed border-b border-gray-200 pb-8">
                        Comprehensive web development capabilities using the latest technologies
                    </p>
                </div>

                <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-900"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-4 py-2 border-b border-gray-100 border-dashed last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0 mt-2"></div>
                                <span className="text-gray-700 font-medium">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Structured CTA Section */}
            <div className="bg-blue-950 border-t border-blue-900 py-20 relative overflow-hidden">
                {/* Tech Code Overlay Accent */}
                <div className="absolute inset-0 opacity-5 font-mono text-[8px] sm:text-xs leading-none whitespace-pre select-none pointer-events-none overflow-hidden text-blue-100 flex items-center justify-center p-4">
                    {"class WebsiteBuilder {\n  constructor(config = {}) {\n    this.theme = config.theme || 'modern';\n    this.framework = 'next.js';\n  }\n  \n  async build() {\n    await initCore();\n    deploy();\n  }\n}\n\nmodule.exports = new WebsiteBuilder();"}
                </div>
                
                <Container className="relative z-10">
                    <div className="text-center text-white max-w-3xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-1 bg-blue-900 rounded-sm"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                            Ready to Build Your Engineering Backbone?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Let's discuss and architect your digital system properly. Contact us today for technical consultation.
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
