'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { FaRocket, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <Container className="relative z-10 w-full">
                <div className="text-center space-y-6 md:space-y-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full border border-sky-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                        </span>
                        <span className="text-sm text-sky-700 font-semibold">
                            15+ Years of Excellence
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                        Innovative Software Solutions
                        <br />
                        <span className="text-sky-600">For Your Business</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering healthcare, education, and businesses with cutting-edge management solutions.
                        Transform your operations with our comprehensive software suite.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/demo">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                                <FaRocket size={18} />
                                <span>Get Free Demo</span>
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                                <span>Contact Sales</span>
                                <FaArrowRight size={16} />
                            </button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="pt-12 md:pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { number: '60+', label: 'Happy Clients' },
                            { number: '11+', label: 'Software Solutions' },
                            { number: '24/7', label: 'Support' },
                            { number: '15+', label: 'Years Experience' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-4 md:p-6 bg-white rounded-xl border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all">
                                <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1">{stat.number}</div>
                                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" />
                            <span>ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" />
                            <span>Secure & Reliable</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
