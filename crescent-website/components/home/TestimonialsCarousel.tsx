'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { TESTIMONIALS } from '@/lib/constants';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="py-12 md:py-16 bg-slate-50 border-t border-gray-200">
            <Container>
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Client Testimonials
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover what leading healthcare providers say about partnering with us.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-l-4 border-blue-700 shadow-sm p-6 md:p-8 relative rounded-sm">
                        <FaQuoteLeft className="text-slate-100 text-3xl absolute top-6 left-6" />

                        <div className="mb-6 relative z-10 pt-4 px-4 md:px-8">
                            <p className="text-base text-gray-700 leading-relaxed italic">
                                &quot;{currentTestimonial.content}&quot;
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-gray-100 mt-4 px-4 md:px-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded bg-blue-900 flex items-center justify-center text-white font-bold text-lg">
                                    {currentTestimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="flex items-center mb-1 gap-0.5">
                                        {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>
                                    <h4 className="text-gray-900 font-bold text-base">{currentTestimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{currentTestimonial.role}, {currentTestimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={goToPrevious}
                                    className="w-10 h-10 rounded border border-gray-200 bg-white hover:border-blue-800 hover:text-blue-900 flex items-center justify-center text-gray-500 transition-all"
                                    aria-label="Previous testimonial"
                                >
                                    <FaChevronLeft size={14} />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="w-10 h-10 rounded border border-gray-200 bg-white hover:border-blue-800 hover:text-blue-900 flex items-center justify-center text-gray-500 transition-all"
                                    aria-label="Next testimonial"
                                >
                                    <FaChevronRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Dots indicator */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${
                                        idx === currentIndex ? 'w-8 bg-blue-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
