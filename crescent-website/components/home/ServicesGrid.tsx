'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { SERVICES } from '@/lib/constants';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesGrid: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        Comprehensive <span className="text-sky-600">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cutting-edge software solutions tailored to elevate your business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link key={service.id} href={service.href} className="block h-full group">
                                <div className="h-full bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 hover:shadow-xl transition-all duration-300">
                                    <div className="flex flex-col h-full">
                                        {/* Icon - solid color without gradient */}
                                        <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                            <Icon className="text-white text-2xl" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-5 flex-grow leading-relaxed">
                                            {service.description}
                                        </p>

                                        {service.features && (
                                            <ul className="space-y-2 mb-5">
                                                {service.features.slice(0, 3).map((feature, idx) => (
                                                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-3 mt-1.5 flex-shrink-0"></span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex items-center text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all mt-auto pt-4 border-t border-sky-100">
                                            <span>Explore Solution</span>
                                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
