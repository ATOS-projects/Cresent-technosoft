'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/constants';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);

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
        <section className="py-20">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Client Testimonials</span>
                        </h2>
                        <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                            See what our clients say about our services
                        </p>
                    </div>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-strong rounded-2xl p-8 md:p-12 relative">
                        <FaQuoteLeft className="text-blue-400 text-4xl mb-6 opacity-50" />

                        <div className="mb-8">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                                "{currentTestimonial.content}"
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>
                                <h4 className="text-slate-900 font-semibold text-lg">{currentTestimonial.name}</h4>
                                <p className="text-slate-600 text-sm">{currentTestimonial.role}, {currentTestimonial.company}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={goToPrevious}
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <FaChevronLeft className="text-slate-700" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <FaChevronRight className="text-slate-700" />
                                </button>
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
