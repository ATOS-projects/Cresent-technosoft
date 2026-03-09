import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const featuredClients = [
    { name: "Annor Eye Hospital", image: "/Assets/Annor.webp" },
    { name: "DRJ Hospital", image: "/Assets/drj hopital.webp" },
    { name: "Elite Hospital", image: "/Assets/Elite.webp" },
    { name: "Erode Cancer Center", image: "/Assets/ecc_logo-1.webp" },
    { name: "Lab Services", image: "/Assets/lab7.webp" },
    { name: "Laser Hospital", image: "/Assets/Laser hospital.webp" },
    { name: "Mediflip Lab", image: "/Assets/Mediflip.webp" },
    { name: "Port Med", image: "/Assets/port.webp" },
    { name: "Riyadh Clinic", image: "/Assets/riyadh.webp" },
    { name: "Salma Medical Center", image: "/Assets/Salma.webp" },
    { name: "Subra Hospital", image: "/Assets/subra.webp" },
    { name: "Tejnaksh Hospital", image: "/Assets/tejnaksh.webp" },
    { name: "Vasavi Hospital", image: "/Assets/vasavi_logo-1.webp" },
];

const clientsByLocation = [
    {
        location: "Chennai",
        count: 24,
        clients: [
            "Anand Hospitals", "Priya Nursing Home", "An noor Eye Hospital", "Raj Nursing Home",
            "Christu doss Hospital", "Laser Hospital", "SEN Hospitals", "Ezhil Hospital",
            "DRJ Hospital", "Remedy Family Clinic", "Iyyapa Diabetic Hospital", "Tamil Nadu Lab",
            "Medshine Hospital", "Raju Nursing Hospital", "Perfect Lab", "Singhvi Health Center",
            "Sai Lab", "Best Diagnostic Center", "Arrow Diagnostic Center", "Akshita Hospital",
            "Shifa Lab", "GKm Lab", "Evvent Tools", "Engineering Automation", "KGS Hospital"
        ]
    },
    {
        location: "Bangalore",
        count: 10,
        clients: [
            "Mediscon Nursing Home", "Town Hospital", "Mirror Health", "Siddique Ent Center",
            "Sapthagiri Diagnostic Center", "Sadguru Lab", "Salma Medical Center", "Medflebi Lab",
            "Elite Hospital", "Lifecare hospital"
        ]
    },
    {
        location: "Vellore",
        count: 4,
        clients: ["Saradha Nursing Home", "Chandran Hospital", "Jamia Darussalam Hospital", "Bismi Lab"]
    },
    {
        location: "Tiruvanamalai",
        count: 3,
        clients: ["Vasavi Hospital", "Kamalam Lab", "Raghvendra Hospital"]
    },
    {
        location: "Krishnagiri",
        count: 3,
        clients: ["Kavery Childrens Hospital", "Uma Rani Hospital", "Nidish Laboratory"]
    },
    {
        location: "Mumbai",
        count: 2,
        clients: ["Tej Vedaant Hospitals", "Lion Tarachand Hospital and Research Institute"]
    },
    {
        location: "Coimbatore",
        count: 2,
        clients: ["Rajaseals", "Dr.Nandagopal Poly Clinic"]
    },
    {
        location: "UAE",
        count: 2,
        clients: ["Bushra Medical Center", "PortMed"]
    },
    {
        location: "Erode",
        count: 1,
        clients: ["Erode Cancer Center"]
    },
    {
        location: "Bihar",
        count: 1,
        clients: ["Life Line Lab"]
    },
    {
        location: "Mysore",
        count: 1,
        clients: ["Dr.Bhaskar Cardiac Case Center"]
    },
    {
        location: "Gulbarga",
        count: 1,
        clients: ["Balaji Stone Industry"]
    },
    {
        location: "Andhra Pradesh",
        count: 1,
        clients: ["Panasonic Carbon India Pvt.Ltd"]
    },
    {
        location: "Guwahati",
        count: 1,
        clients: ["Rahman Hospitals pvt ltd"]
    },
    {
        location: "Bellary",
        count: 1,
        clients: ["St Marys Hospital"]
    },
    {
        location: "Dhule",
        count: 1,
        clients: ["Institute of Urology"]
    },
    {
        location: "Kashmir",
        count: 1,
        clients: ["Dr.Khazi Clinic"]
    },
    {
        location: "Nigeria",
        count: 1,
        clients: ["Wolexdox Microprocessor"]
    },
    {
        location: "Riyadh",
        count: 1,
        clients: ["Dr.Nisreen Yacoub"]
    }
];

export default function ClientsPage() {
    const totalClients = clientsByLocation.reduce((sum, loc) => sum + loc.count, 0);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 to-white pt-24 md:pt-32 pb-12 md:pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Our Valued Clients
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Trusted by {totalClients}+ organizations across healthcare, education, and business sectors worldwide
                        </p>
                    </div>
                </Container>
            </div>

            {/* Featured Client Logos */}
            <Container className="py-12 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                    Featured Clients
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
                    {featuredClients.map((client, idx) => (
                        <div 
                            key={idx} 
                            className="h-28 md:h-32 flex items-center justify-center p-4 md:p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-sky-400 hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={160}
                                height={80}
                                className="object-contain max-h-20 md:max-h-24 w-auto"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </Container>

            <Container className="py-8 md:py-12">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">{totalClients}+</div>
                        <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">98%</div>
                        <div className="text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">24/7</div>
                        <div className="text-xs md:text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">10+</div>
                        <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-4">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl border border-sky-100 p-6 md:p-8 hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-base md:text-lg" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 md:mb-6 italic leading-relaxed text-sm md:text-base">
                                    &quot;{testimonial.content}&quot;
                                </p>
                                <div className="pt-4 border-t border-sky-100">
                                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clients by Location */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-center px-4">
                        Our Global Presence
                    </h2>
                    <p className="text-center text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
                        Serving clients across {clientsByLocation.length} locations in India and internationally
                    </p>
                    
                    {/* Unified Location List */}
                    <div className="space-y-4 md:space-y-5">
                        {clientsByLocation.map((locationData, idx) => (
                            <div key={idx} className="group bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="bg-gradient-to-r from-sky-50 to-white p-3 md:p-4 border-b border-sky-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                                            <FaMapMarkerAlt className="text-white" size={16} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{locationData.location}</h3>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-600 text-white">
                                                {locationData.count} {locationData.count === 1 ? 'Client' : 'Clients'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 md:p-5">
                                    <div className="flex flex-wrap gap-2">
                                        {locationData.clients.map((client, clientIdx) => (
                                            <div 
                                                key={clientIdx} 
                                                className="inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg text-xs md:text-sm text-gray-700 hover:text-gray-900 font-medium transition-all hover:shadow-md group/item"
                                            >
                                                <span className="text-sky-600 text-sm font-bold group-hover/item:text-sky-700">✓</span>
                                                <span>{client}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl md:rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                        Join Our Growing Family of Satisfied Clients
                    </h2>
                    <p className="text-base md:text-lg text-sky-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                        Experience the difference our solutions can make for your organization. Get started with a free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/demo" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:shadow-lg transition-all duration-200 active:scale-95">
                                Get Started Today
                            </button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white hover:shadow-lg transition-all duration-200 active:scale-95">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
