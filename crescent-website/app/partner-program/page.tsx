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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50/30 pt-24 md:pt-32 pb-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-6">
                                <FaHandshake className="text-sky-600" />
                                <span className="text-sm font-semibold text-sky-700">Partner Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Grow Your Business <span className="text-sky-600">With Us</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                We aim to expand our reach and are actively looking to collaborate with passionate partners. 
                                Join our network and be part of a 15-year-old software company trusted by hundreds of clients.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/collaboration">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 hover:shadow-lg transition-all duration-200 active:scale-95">
                                        Apply Now
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 active:scale-95">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/Assets/Partner.webp"
                                        alt="Partnership"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Partnership Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose the partnership tier that best suits your business goals and capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {partnershipTiers.map((tier, idx) => {
                            const Icon = tier.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-300 ${
                                        tier.recommended 
                                            ? 'border-sky-400 shadow-lg' 
                                            : 'border-sky-100 hover:border-sky-300'
                                    }`}
                                >
                                    {tier.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                                RECOMMENDED
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                        <div className="space-y-1">
                                            <div className="text-sm text-gray-500">Investment</div>
                                            <div className="text-xl font-bold text-sky-600">{tier.investment}</div>
                                            <div className="text-sm text-gray-500 mt-2">Margins</div>
                                            <div className="text-lg font-bold text-sky-600">{tier.margins}</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        {tier.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                            Eligibility
                                        </h4>
                                        <ul className="space-y-2">
                                            {tier.eligibility.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <FaCheck className="text-sky-600 mt-1 flex-shrink-0" size={12} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {tier.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-sky-600 font-bold">•</span>
                                                    <span>{benefit}</span>
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
                <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Partner With Us?
                    </h2>
                    <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                        Join our network of successful partners and start growing your business today. 
                        Fill out our collaboration form and our team will get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/collaboration">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:shadow-lg transition-all duration-200 active:scale-95">
                                Apply for Partnership
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white hover:shadow-lg transition-all duration-200 active:scale-95">
                                Have Questions?
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
