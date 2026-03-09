'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { FaRocket, FaPlay } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 theme-bg">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>

            {/* Ambient Animated Glows */}
            <div className="absolute inset-0 z-0">
                <div className="glow-orb-primary w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] top-[-10%] left-[-10%] animate-float-slow opacity-60"></div>
                <div className="glow-orb-secondary w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bottom-[-20%] right-[-10%] animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] bg-secondary-500/20 rounded-full blur-[100px] animate-pulse-neon"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDB2LTF6TTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDEyOCwxMjgsMTI4LDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0"></div>

            <Container className="relative z-10 w-full">
                <div className="text-center space-y-8 mt-12">
                    <AnimatedSection direction="up">
                        <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-6 border border-primary-500/30 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-primary-400/50 transition-all cursor-default">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-400"></span>
                            </span>
                            <span className="text-sm text-primary-500 font-semibold tracking-wide uppercase">
                                Leading Software Solutions Provider
                            </span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
                            <span className="theme-text">Innovative Software</span>
                            <br />
                            <span className="gradient-text">For Your Business</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        <p className="text-xl md:text-2xl theme-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                            Empowering healthcare, education, and businesses with cutting-edge management solutions.
                            <strong className="theme-text-secondary font-medium"> Transform your operations</strong> with our comprehensive software suite.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                            <Link href="/demo" className="w-full sm:w-auto">
                                <Button variant="neon" size="lg" icon={<FaRocket />} className="w-full text-lg py-4 px-10">
                                    Get Free Demo
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" icon={<FaPlay />} className="w-full text-lg py-4 px-10">
                                    Watch Video
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.4}>
                        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { number: '500+', label: 'Happy Clients' },
                                { number: '11+', label: 'Software Solutions' },
                                { number: '24/7', label: 'Support' },
                                { number: '99.9%', label: 'Uptime' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl glass hover:border-primary-500/30 transition-colors group" style={{ border: '1px solid var(--border-primary)' }}>
                                    <div className="text-4xl md:text-5xl font-black mb-2 group-hover:text-primary-400 transition-colors theme-text">{stat.number}</div>
                                    <div className="text-primary-500/80 text-sm font-semibold tracking-wider uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </Container>

            {/* Futuristic Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-xs theme-text-muted uppercase tracking-widest mb-3 font-semibold">Scroll</span>
                <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-1 transition-colors" style={{ borderColor: 'var(--border-secondary)' }}>
                    <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-bounce shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 z-0 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
        </section>
    );
};
