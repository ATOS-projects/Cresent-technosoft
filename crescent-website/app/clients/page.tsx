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
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - Split Slide Design */}
            <div className="relative bg-white border-b border-gray-200 overflow-hidden flex flex-col lg:flex-row mt-[76px] lg:mt-[88px]">
                
                {/* Left Side: Content aligned to container grid securely */}
                <div className="w-full lg:w-1/2 flex items-center py-12 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-24 z-10 bg-white">
                    <div className="max-w-2xl w-full mx-auto lg:mx-0 lg:ml-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-gray-200 rounded-sm mb-8">
                            <FaMapMarkerAlt className="text-blue-900" />
                            <span className="text-sm font-extrabold tracking-wide text-blue-950 uppercase">Our Global Network</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight leading-[1.1]">
                            Trusted <br className="hidden md:block"/> Partnerships <br className="hidden lg:block"/> Worldwide
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-12 max-w-xl">
                            Join over {totalClients}+ organizations across healthcare, education, and enterprise sectors 
                            who rely on Crescent Technosoft for robust software solutions.
                        </p>
                        
                        {/* Slide UI Navigation Element */}
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-12 h-1 bg-blue-900 rounded-sm shadow-sm"></div>
                            <div className="w-6 h-1 bg-gray-200 rounded-sm"></div>
                            <div className="w-6 h-1 bg-gray-200 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Full Bleed Image */}
                <div className="w-full lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-full relative overflow-hidden group border-t-4 lg:border-t-0 lg:border-l-8 border-white bg-slate-200 flex-grow">
                    <Image
                        src="/Assets/clients shaking hands.jpg"
                        alt="Client Partnership"
                        fill
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        priority
                    />
                    {/* Hover Tint */}
                    <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>
            </div>

            {/* Featured Client Logos */}
            <Container className="py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                        Featured Clients
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Leading institutions that have transformed their operations with our technology.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-20 md:mb-24">
                    {featuredClients.map((client, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-sm border border-gray-200 p-8 flex items-center justify-center h-32 md:h-40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(30,58,138,0.2)] hover:border-blue-900 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={160}
                                height={80}
                                className="object-contain max-w-[120px] md:max-w-[140px] max-h-[60px] md:max-h-[70px] group-hover:scale-110 transition-transform duration-500 relative z-10"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-200 border border-gray-200 rounded-sm overflow-hidden shadow-sm mb-20 md:mb-24">
                    <div className="text-center p-8 bg-white hover:bg-slate-50 transition-colors group">
                        <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 group-hover:scale-105 transition-transform">{totalClients}+</div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Happy Clients</div>
                    </div>
                    <div className="text-center p-8 bg-white hover:bg-slate-50 transition-colors group">
                        <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 group-hover:scale-105 transition-transform">98%</div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-8 bg-white hover:bg-slate-50 transition-colors group">
                        <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 group-hover:scale-105 transition-transform">24/7</div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Support</div>
                    </div>
                    <div className="text-center p-8 bg-white hover:bg-slate-50 transition-colors group">
                        <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 group-hover:scale-105 transition-transform">10+</div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Years Experience</div>
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="mb-20 md:mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Feedback from the organizations that rely on our systems every day.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-sm border border-gray-200 p-8 hover:border-blue-900 hover:shadow-lg transition-all duration-300 relative group">
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                                <div className="flex items-center mb-6">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-blue-800 text-lg md:text-xl" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                                    "{testimonial.content}"
                                </p>
                                <div className="pt-6 border-t border-gray-200 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-sm border border-gray-200 flex items-center justify-center font-bold text-blue-900 text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-blue-950 font-extrabold text-base tracking-tight">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm font-medium">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clients by Location */}
                <div className="mb-0">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
                            Our Global Presence
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Serving clients across {clientsByLocation.length} locations in India and internationally
                        </p>
                    </div>
                    
                    {/* Unified Location List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {clientsByLocation.map((locationData, idx) => (
                            <div key={idx} className="group bg-white rounded-sm border border-gray-200 hover:border-blue-900 transition-all duration-300 relative">
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900 transition-colors pointer-events-none z-10" />
                                <div className="bg-slate-50 p-5 md:p-6 border-b border-gray-200 flex items-center justify-between group-hover:bg-white transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white text-blue-900 border border-gray-200 rounded-sm flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                            <FaMapMarkerAlt size={18} />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-blue-950 tracking-tight">{locationData.location}</h3>
                                    </div>
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-sm text-sm font-bold bg-blue-900 text-white tracking-wide">
                                        {locationData.count} {locationData.count === 1 ? 'Client' : 'Clients'}
                                    </span>
                                </div>
                                <div className="p-5 md:p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {locationData.clients.map((client, clientIdx) => (
                                            <div 
                                                key={clientIdx} 
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 hover:border-blue-900 rounded-sm text-sm text-gray-700 hover:text-blue-950 font-bold transition-all hover:bg-slate-50"
                                            >
                                                <span className="text-blue-900">✓</span>
                                                {client}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div className="bg-blue-950 border-t border-blue-900 py-16 md:py-24 text-center w-full px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
                        Get in touch with our team to discuss how we can create a custom solution for your organization's unique challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 text-base font-bold tracking-wide rounded-sm hover:bg-gray-100 transition-colors">
                                Contact Us Today
                            </button>
                        </Link>
                        <Link href="/services/hospital">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white text-base font-bold tracking-wide rounded-sm border border-blue-800 hover:bg-blue-800 transition-colors">
                                View Our Solutions
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
