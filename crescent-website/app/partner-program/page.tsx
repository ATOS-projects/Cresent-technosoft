import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { FaCheck, FaPhone, FaHandshake } from "react-icons/fa";

export default function PartnerProgramPage() {
    const benefits = [
        "Attractive commission structure",
        "Marketing support and materials",
        "Technical training and support",
        "Dedicated partner manager",
        "Co-branding opportunities",
        "Priority support for your clients"
    ];

    return (
        <div className="pt-32 pb-20">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FaHandshake className="text-white text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Partner Program</span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
                            Join our partner network and grow your business with our comprehensive software solutions
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.1}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Partner Benefits</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <FaCheck className="text-white text-xs" />
                                    </div>
                                    <span className="text-slate-700">{benefit}</span>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Partnership Tiers</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <h3 className="text-2xl font-bold text-white mb-4">Silver Partner</h3>
                                <p className="text-slate-600 mb-4">Entry-level partnership for new partners</p>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• 10% commission</li>
                                    <li>• Basic training</li>
                                    <li>• Email support</li>
                                </ul>
                            </Card>

                            <Card className="border-2 border-primary-500">
                                <div className="text-primary-400 text-sm font-semibold mb-2">RECOMMENDED</div>
                                <h3 className="text-2xl font-bold text-white mb-4">Gold Partner</h3>
                                <p className="text-slate-600 mb-4">For established partners with proven track record</p>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• 15% commission</li>
                                    <li>• Advanced training</li>
                                    <li>• Priority support</li>
                                    <li>• Marketing materials</li>
                                </ul>
                            </Card>

                            <Card>
                                <h3 className="text-2xl font-bold text-white mb-4">Platinum Partner</h3>
                                <p className="text-slate-600 mb-4">Exclusive partnership for top performers</p>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• 20% commission</li>
                                    <li>• Dedicated manager</li>
                                    <li>• 24/7 support</li>
                                    <li>• Co-branding</li>
                                    <li>• Custom solutions</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.3}>
                    <div className="glass-strong rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Ready to Become a Partner?
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Join our growing network of successful partners
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button variant="primary" size="lg">Apply Now</Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" icon={<FaPhone />}>Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </div>
    );
}
