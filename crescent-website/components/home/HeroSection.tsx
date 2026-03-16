'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { FaRocket, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <Container className="relative z-10 w-full py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight">
                            Innovative Software Solutions
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">For Your Business</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Empowering healthcare, education, and businesses with cutting-edge management solutions.
                            Transform your operations with our comprehensive software suite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/demo" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 shadow-[0_8px_30px_rgb(2,132,199,0.3)] hover:shadow-[0_8px_30px_rgb(2,132,199,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <FaRocket size={18} />
                                    <span>Get Free Demo</span>
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl border-2 border-sky-200 hover:border-sky-400 hover:bg-sky-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <span>Contact Sales</span>
                                    <FaArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="pt-6 flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-gray-600">
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <FaCheckCircle className="text-green-500" />
                                <span>ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <FaCheckCircle className="text-green-500" />
                                <span>Secure & Reliable</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <FaCheckCircle className="text-green-500" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image Collage */}
                    <div className="relative w-full h-[500px] lg:h-[600px] hidden md:block">
                        {/* Main Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white group">
                            <Image 
                                src="/Assets/home page.avif" 
                                alt="Dashboard Interface" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Image 1 (Top Right) */}
                        <div className="absolute top-[5%] right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white animate-float-slow group">
                            <Image 
                                src="/Assets/home page 2.avif" 
                                alt="Business Team" 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                        </div>

                        {/* Floating Image 2 (Bottom Left) */}
                        <div className="absolute bottom-[2%] left-0 w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white animate-float group">
                            <Image 
                                src="/Assets/home page 3.avif" 
                                alt="Developer Workflow" 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-1/4 -right-12 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-12 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                    </div>
                </div>

                {/* Stats Section moved to bottom */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-30">
                    {[
                        { number: '60+', label: 'Happy Clients' },
                        { number: '11+', label: 'Software Solutions' },
                        { number: '24/7', label: 'Support' },
                        { number: '15+', label: 'Years Experience' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 md:p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-sky-100 hover:border-sky-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.number}</div>
                            <div className="text-gray-600 text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
