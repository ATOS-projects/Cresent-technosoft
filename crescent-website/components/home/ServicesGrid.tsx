'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { SERVICES } from '@/lib/constants';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesGrid: React.FC = () => {
    return (
        <section className="py-12 md:py-16 bg-slate-50 border-t border-gray-200">
            <Container>
                <div className="mb-10 md:max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Healthcare Management Solutions
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Comprehensive administrative and clinical software modules designed for hospitals, clinics, and laboratories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link key={service.id} href={service.href} className="block group">
                                <div className="h-full bg-white p-6 md:p-8 rounded border border-gray-200 hover:border-blue-700 hover:shadow-lg transition-all duration-200">
                                    <div className="flex flex-col h-full">
                                        
                                        <div className="mb-5 w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-800 rounded">
                                            <Icon className="text-xl" />
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center text-sm font-semibold text-blue-700 mt-auto pt-4 border-t border-gray-100 group-hover:text-blue-900">
                                            <span>Learn More</span>
                                            <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
