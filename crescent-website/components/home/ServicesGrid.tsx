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
        <section className="py-20">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Our Services</span>
                        </h2>
                        <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                            Comprehensive software solutions tailored to meet your business needs
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={service.id} direction="up" delay={index * 0.1}>
                                <Link href={service.href}>
                                    <Card className="h-full group">
                                        <div className="flex flex-col h-full">
                                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="text-white text-2xl" />
                                            </div>

                                            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm mb-4 flex-grow">
                                                {service.description}
                                            </p>

                                            {service.features && (
                                                <ul className="space-y-2 mb-4">
                                                    {service.features.slice(0, 3).map((feature, idx) => (
                                                        <li key={idx} className="text-xs text-slate-600 flex items-center">
                                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                                                <span>Learn More</span>
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
