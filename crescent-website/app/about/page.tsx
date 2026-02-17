import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaLightbulb, FaUsers, FaAward, FaRocket } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                {/* Header */}
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">About Crescent Technosofts</span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                            Leading the way in providing innovative software solutions for healthcare, education, and business management since our inception.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <AnimatedSection direction="left" delay={0.1}>
                        <Card className="h-full">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                                <FaLightbulb className="text-white text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-slate-700">
                                To empower organizations with cutting-edge software solutions that streamline operations, enhance productivity, and drive growth. We are committed to delivering excellence through innovation and customer-centric approach.
                            </p>
                        </Card>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2}>
                        <Card className="h-full">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                                <FaRocket className="text-white text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-slate-700">
                                To be the most trusted and innovative software solutions provider globally, transforming businesses through technology and creating lasting value for our clients and stakeholders.
                            </p>
                        </Card>
                    </AnimatedSection>
                </div>

                {/* Values */}
                <AnimatedSection direction="up" delay={0.3}>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <span className="gradient-text">Our Core Values</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaAward className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                                <p className="text-slate-600">
                                    We strive for excellence in everything we do, from product development to customer service.
                                </p>
                            </Card>

                            <Card className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaUsers className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
                                <p className="text-slate-600">
                                    Our customers are at the heart of everything we do. Their success is our success.
                                </p>
                            </Card>

                            <Card className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaLightbulb className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                                <p className="text-slate-600">
                                    We continuously innovate to stay ahead and provide cutting-edge solutions.
                                </p>
                            </Card>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection direction="up" delay={0.4}>
                    <div className="glass-strong rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Want to Learn More?
                        </h2>
                        <p className="text-xl text-slate-700 mb-8">
                            Get in touch with us to discuss how we can help your organization
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Contact Us</Button>
                        </Link>
                    </div>
                </AnimatedSection>
            </Container>
        </div>
    );
}
