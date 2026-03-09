'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SERVICES } from '@/lib/constants';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesGrid: React.FC = () => {
    return (
        <section className="py-24 theme-bg relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <Container className="relative z-10">
                <AnimatedSection direction="up">
                    <div className="text-center mb-20">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                            <span className="theme-text">Comprehensive </span>
                            <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Services</span>
                        </h2>
                        <p className="text-xl theme-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Cutting-edge software solutions meticulously tailored to elevate your business operations and drive growth.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;
                        const iconGradient = isEven
                            ? 'from-primary-500 to-sky-500 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                            : 'from-secondary-500 to-purple-500 shadow-[0_0_20px_rgba(176,38,255,0.2)]';
                        const hoverColor = isEven ? 'group-hover:text-primary-400' : 'group-hover:text-secondary-400';
                        const dotColor = isEven ? 'bg-primary-500 shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'bg-secondary-500 shadow-[0_0_8px_rgba(176,38,255,0.6)]';

                        return (
                            <AnimatedSection key={service.id} direction="up" delay={index * 0.1}>
                                <Link href={service.href} className="block h-full">
                                    <Card className="h-full group backdrop-blur-md" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                                        <div className="flex flex-col h-full relative z-10">
                                            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent transition-colors duration-500"></div>

                                            <div className={`w-14 h-14 bg-gradient-to-br ${iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative`}>
                                                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                                                <Icon className="text-white text-2xl relative z-10 drop-shadow-md" />
                                            </div>

                                            <h3 className={`text-2xl font-bold theme-text mb-4 tracking-tight ${hoverColor} transition-colors duration-300`}>
                                                {service.title}
                                            </h3>

                                            <p className="theme-text-muted text-sm mb-6 flex-grow leading-relaxed font-light">
                                                {service.description}
                                            </p>

                                            {service.features && (
                                                <ul className="space-y-3 mb-8">
                                                    {service.features.slice(0, 3).map((feature, idx) => (
                                                        <li key={idx} className="text-sm theme-text-secondary flex items-center font-light">
                                                            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${dotColor}`}></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className={`flex items-center text-sm font-semibold tracking-wide ${isEven ? 'text-primary-400' : 'text-secondary-400'} group-hover:gap-3 transition-all mt-auto pt-4`} style={{ borderTop: '1px solid var(--border-primary)' }}>
                                                <span>Explore Solution</span>
                                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
