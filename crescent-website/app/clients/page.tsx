import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ClientsPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Our Clients</span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                            Trusted by hundreds of organizations across healthcare, education, and business sectors
                        </p>
                    </div>
                </AnimatedSection>

                {/* Stats */}
                <AnimatedSection direction="up" delay={0.1}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <Card className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                            <div className="text-slate-600">Happy Clients</div>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                            <div className="text-slate-600">Satisfaction Rate</div>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                            <div className="text-slate-600">Support</div>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-slate-600">Years Experience</div>
                        </Card>
                    </div>
                </AnimatedSection>

                {/* Testimonials */}
                <AnimatedSection direction="up" delay={0.2}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Client Testimonials</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <Card key={testimonial.id}>
                                    <div className="flex items-center mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                                    <div className="border-t border-white/10 pt-4">
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-slate-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection direction="up" delay={0.3}>
                    <div className="glass-strong rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Join Our Growing Family of Satisfied Clients
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Experience the difference our solutions can make for your organization
                        </p>
                        <Link href="/demo">
                            <Button variant="primary" size="lg">Get Started Today</Button>
                        </Link>
                    </div>
                </AnimatedSection>
            </Container>
        </div>
    );
}
