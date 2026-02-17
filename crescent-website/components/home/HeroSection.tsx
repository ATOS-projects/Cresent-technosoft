'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { FaRocket, FaPlay } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>

            <Container className="relative z-10">
                <div className="text-center space-y-8">
                    <AnimatedSection direction="up">
                        <div className="inline-block px-4 py-2 glass rounded-full mb-4">
                            <span className="text-sm text-blue-600 font-semibold">
                                🚀 Leading Software Solutions Provider
                            </span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.1}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="gradient-text">Innovative Software</span>
                            <br />
                            <span className="text-slate-900">For Your Business</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
                            Empowering healthcare, education, and businesses with cutting-edge management solutions.
                            Transform your operations with our comprehensive software suite.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="/demo">
                                <Button variant="primary" size="lg" icon={<FaRocket />}>
                                    Get Free Demo
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" icon={<FaPlay />}>
                                    Watch Video
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.4}>
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
                                <div className="text-slate-700 text-sm mt-2">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text">11+</div>
                                <div className="text-slate-700 text-sm mt-2">Software Solutions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
                                <div className="text-slate-700 text-sm mt-2">Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text">99.9%</div>
                                <div className="text-slate-700 text-sm mt-2">Uptime</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-slate-500 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};
