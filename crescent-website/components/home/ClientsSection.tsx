import { Container } from "../ui/Container";
import Image from "next/image";

const clients = [
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

export const ClientsSection = () => {
    return (
        <section className="py-12 md:py-16 bg-white">
            <Container>
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Trusted by Healthcare Facilities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Over 60+ top hospitals and clinics rely on our industry-leading solutions.
                    </p>
                </div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-12 items-center max-w-6xl mx-auto justify-items-center">
                    {clients.map((client, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center justify-center p-2 w-full hover:-translate-y-0.5 transition-transform duration-200"
                        >
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={140}
                                height={60}
                                className="object-contain max-h-12 md:max-h-14 w-auto"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">60+</div>
                        <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">10+</div>
                        <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">24/7</div>
                        <div className="text-xs md:text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                        <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1 md:mb-2">98%</div>
                        <div className="text-xs md:text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
