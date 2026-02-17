import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { FaCheck, FaDownload, FaPhone } from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

export default function HospitalPage() {
    const service = SERVICES.find(s => s.id === 'hospital')!;
    const Icon = service.icon;

    return (
        <div className="pt-32 pb-20">
            <Container>
                {/* Header */}
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Icon className="text-white text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">{service.title}</span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                            {service.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="/demo">
                                <Button variant="primary" size="lg">Request Demo</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" icon={<FaPhone />}>Contact Sales</Button>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Features */}
                <AnimatedSection direction="up" delay={0.2}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Key Features</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features?.map((feature, index) => (
                                <Card key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <FaCheck className="text-white text-xs" />
                                    </div>
                                    <span className="text-slate-700">{feature}</span>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Benefits */}
                <AnimatedSection direction="up" delay={0.3}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Why Choose Our HMS?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <h3 className="text-xl font-semibold text-white mb-3">Complete Hospital Management</h3>
                                <p className="text-slate-600">
                                    Manage all aspects of your hospital operations from a single platform. From patient registration to discharge, billing to inventory - everything in one place.
                                </p>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold text-white mb-3">Cloud-Based & Secure</h3>
                                <p className="text-slate-600">
                                    Access your data from anywhere with our cloud-based solution. Bank-level security ensures your patient data is always protected.
                                </p>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold text-white mb-3">Easy to Use</h3>
                                <p className="text-slate-600">
                                    Intuitive interface designed for healthcare professionals. Minimal training required to get your team up and running.
                                </p>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                                <p className="text-slate-600">
                                    Our dedicated support team is available round the clock to help you with any issues or questions.
                                </p>
                            </Card>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection direction="up" delay={0.4}>
                    <div className="glass-strong rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Ready to Modernize Your Hospital?
                        </h2>
                        <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                            Schedule a free demo to see how our HMS can transform your hospital operations
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/demo">
                                <Button variant="primary" size="lg">Get Free Demo</Button>
                            </Link>
                            <Button variant="outline" size="lg" icon={<FaDownload />}>
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </div>
    );
}
