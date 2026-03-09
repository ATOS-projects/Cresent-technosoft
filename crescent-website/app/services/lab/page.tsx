import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { FaCheck, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function LabPage() {
    const service = SERVICES.find(s => s.id === 'lab')!;
    const Icon = service.icon;

    return (
        <div className="min-h-screen theme-bg relative overflow-hidden pt-32 pb-24">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>
            <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-primary-600/10 rounded-full blur-[100px] animate-float-slow pointer-events-none z-0"></div>
            <div className="relative z-10">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Icon className="theme-text text-4xl" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <span className="gradient-text">{service.title}</span>
                        </h1>
                        <p className="text-xl theme-text-muted font-light max-w-3xl mx-auto mb-4">
                            {service.description}
                        </p>
                        <div className="glass rounded-lg px-6 py-3 inline-block mb-8">
                            <p className="text-primary-400 font-semibold">
                                Starting at just ₹999/month
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/demo">
                                <Button variant="primary" size="lg">Request Demo</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" icon={<FaPhone />}>Contact Sales</Button>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Key Features</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features?.map((feature, index) => (
                                <Card key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary-500/20 border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <FaCheck className="text-primary-400 text-xs drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
                                    </div>
                                    <span className="theme-text-muted font-light">{feature}</span>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                    <div className="glass-strong rounded-[2.5rem] border border-primary-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 theme-text">
                            Transform Your Laboratory Operations
                        </h2>
                        <p className="text-xl theme-text-muted font-light mb-8">
                            Join hundreds of diagnostic centers using our LMS
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
