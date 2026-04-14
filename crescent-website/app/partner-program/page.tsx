import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { FaCheck, FaHandshake, FaUsers, FaChartLine, FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function PartnerProgramPage() {
    const partnershipTiers = [
        {
            name: "Resellers",
            icon: FaUsers,
            investment: "No Sign-Up Fee",
            margins: "15%",
            description: "Be a Reseller of a 15 years old software company by just signing up a reseller application",
            eligibility: [
                "Computer Sellers & Software Companies",
                "Aspiring Entrepreneurs",
                "Hospital & Clinical Lab Equipment Dealers",
                "Pharma Wholesalers"
            ],
            benefits: [
                "15% margin on all sales",
                "No upfront investment",
                "Marketing support",
                "Technical training"
            ]
        },
        {
            name: "Dealers",
            icon: FaChartLine,
            investment: "₹50,000",
            margins: "20-25%",
            description: "Become an authorized dealer with enhanced margins and exclusive territory rights",
            eligibility: [
                "Computer Sellers & Software Companies",
                "Aspiring Entrepreneurs",
                "Hospital & Clinical Lab Equipment Dealers",
                "Pharma Wholesalers"
            ],
            benefits: [
                "20-25% profit margins",
                "Exclusive territory rights",
                "Priority support",
                "Advanced training programs"
            ],
            recommended: true
        },
        {
            name: "Channel Partner",
            icon: FaRocket,
            investment: "₹1,00,000",
            margins: "30%",
            description: "Premium partnership tier with maximum returns and comprehensive business support",
            eligibility: [
                "Computer Sellers & Software Companies",
                "Aspiring Entrepreneurs",
                "Hospital & Clinical Lab Equipment Dealers",
                "Pharma Wholesalers"
            ],
            benefits: [
                "30% profit margins",
                "Regional exclusivity",
                "Dedicated account manager",
                "Co-branding opportunities",
                "Custom solution development"
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                                <FaHandshake className="text-blue-900" size={14} />
                                <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Partner Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                                Grow Your Business <span className="text-blue-900 border-b-4 border-blue-900">With Us</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We aim to expand our reach and are actively looking to collaborate with passionate partners. 
                                Join our network and be part of a 15-year-old software company trusted by hundreds of clients.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/collaboration">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm">
                                        Apply Now
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-64 rounded-sm overflow-hidden border border-gray-200">
                                    <Image
                                        src="/Assets/Partner.webp"
                                        alt="Partnership"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-sm overflow-hidden border border-gray-200 mt-8">
                                    <Image
                                        src="/Assets/Partnership_100720074sm.webp"
                                        alt="Collaboration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="py-16 md:py-20">
                {/* Partnership Tiers */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
                            Partnership Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Choose the partnership tier that best suits your business goals and capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {partnershipTiers.map((tier, idx) => {
                            const Icon = tier.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className={`relative bg-white rounded-sm border p-8 hover:border-blue-900 transition-all duration-300 group flex flex-col ${
                                        tier.recommended 
                                            ? 'border-blue-900 shadow-md' 
                                            : 'border-gray-200'
                                    }`}
                                >
                                    {tier.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-blue-900 text-white px-4 py-1.5 rounded-sm text-xs font-extrabold uppercase tracking-wide shadow-sm border border-blue-950">
                                                RECOMMENDED
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-8 pb-8 border-b border-gray-100 flex-1">
                                        <div className="w-16 h-16 bg-slate-50 border border-gray-200 rounded-sm flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white text-blue-900">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-blue-950 mb-4 tracking-tight">{tier.name}</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Investment</div>
                                                <div className="text-xl font-bold text-blue-900">{tier.investment}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Margins</div>
                                                <div className="text-lg font-bold text-blue-900">{tier.margins}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
                                        {tier.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-extrabold text-blue-950 mb-4 text-xs uppercase tracking-wider">
                                            Eligibility
                                        </h4>
                                        <ul className="space-y-3">
                                            {tier.eligibility.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <div className="mt-1 w-1.5 h-1.5 bg-blue-900 rounded-sm flex-shrink-0"></div>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <h4 className="font-extrabold text-blue-950 mb-4 text-xs uppercase tracking-wider">
                                            Benefits
                                        </h4>
                                        <ul className="space-y-3">
                                            {tier.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <div className="mt-1 border border-blue-900 w-1.5 h-1.5 rounded-sm flex-shrink-0"></div>
                                                    <span className="leading-relaxed font-semibold">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-slate-50 border border-gray-200 rounded-sm p-8 md:p-12 text-center shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                    <div className="relative z-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join our network of successful partners and start growing your business today. 
                            Fill out our collaboration form and our team will get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/collaboration">
                                <button className="w-full sm:w-auto px-8 py-4 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm">
                                    Apply for Partnership
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 font-bold tracking-wide rounded-sm hover:bg-slate-100 transition-colors border border-gray-300 shadow-sm">
                                    Have Questions?
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
