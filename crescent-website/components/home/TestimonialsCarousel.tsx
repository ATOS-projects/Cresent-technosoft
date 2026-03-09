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
        <section className="py-12 md:py-16 bg-white">
            <Container>
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from businesses we've helped transform
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl border-2 border-sky-100 p-6 md:p-10 relative">
                        <FaQuoteLeft className="text-sky-300 text-3xl mb-4" />

                        <div className="mb-6">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                                &quot;{currentTestimonial.content}&quot;
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-sky-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
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
                                    className="w-10 h-10 rounded-lg bg-white border-2 border-sky-200 hover:border-sky-400 hover:bg-sky-50 flex items-center justify-center text-sky-600 transition-all"
                                    aria-label="Previous testimonial"
                                >
                                    <FaChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="w-10 h-10 rounded-lg bg-white border-2 border-sky-200 hover:border-sky-400 hover:bg-sky-50 flex items-center justify-center text-sky-600 transition-all"
                                    aria-label="Next testimonial"
                                >
                                    <FaChevronRight size={16} />
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
                                        idx === currentIndex ? 'w-8 bg-sky-600' : 'w-2 bg-sky-200 hover:bg-sky-400'
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
