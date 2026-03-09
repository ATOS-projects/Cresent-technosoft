import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ClientsPage() {
    return (
        <div className="min-h-screen theme-bg relative overflow-hidden pt-32 pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>
            <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-secondary-600/10 rounded-full blur-[100px] animate-float-slow pointer-events-none z-0"></div>
            <div className="relative z-10 min-h-screen flex flex-col">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                                <span className="gradient-text">Our Clients</span>
                            </h1>
                            <p className="text-xl theme-text-muted font-light max-w-3xl mx-auto">
                                Trusted by hundreds of organizations across healthcare, education, and business sectors
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Stats */}
                    <AnimatedSection direction="up" delay={0.1}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            <Card className="glass transition-colors group text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                                <div className="theme-text-muted font-light">Happy Clients</div>
                            </Card>
                            <Card className="glass transition-colors group text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                                <div className="theme-text-muted font-light">Satisfaction Rate</div>
                            </Card>
                            <Card className="glass transition-colors group text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                                <div className="theme-text-muted font-light">Support</div>
                            </Card>
                            <Card className="glass transition-colors group text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                                <div className="theme-text-muted font-light">Years Experience</div>
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
                                {TESTIMONIALS.map((testimonial) => (
                                    <Card key={testimonial.id} className="p-8 glass transition-colors group">
                                        <div className="flex items-center mb-4">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400 text-sm" />
                                            ))}
                                        </div>
                                        <p className="theme-text-muted font-light mb-4 italic">&quot;{testimonial.content}&quot;</p>
                                        <div className="pt-4" style={{ borderTop: '1px solid var(--border-primary)' }}>
                                            <h4 className="theme-text font-semibold">{testimonial.name}</h4>
                                            <p className="theme-text-muted font-light text-sm">{testimonial.role}, {testimonial.company}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="glass-strong rounded-[2.5rem] border border-primary-500/20 shadow-2xl p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4 theme-text">
                                Join Our Growing Family of Satisfied Clients
                            </h2>
                            <p className="text-xl theme-text-muted font-light mb-8">
                                Experience the difference our solutions can make for your organization
                            </p>
                            <Link href="/demo">
                                <Button variant="primary" size="lg">Get Started Today</Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </Container>
            </div>
        </div>
    );
}
