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
        <section className="py-24 theme-bg relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-mesh-dark opacity-30 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <Container className="relative z-10">
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                            <span className="theme-text">Client </span>
                            <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Testimonials</span>
                        </h2>
                        <p className="text-xl theme-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Discover how our software solutions have transformed businesses and driven exceptional results.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="max-w-5xl mx-auto">
                    <AnimatedSection direction="up" delay={0.2} className="relative">
                        {/* Decorative background glow for the active card */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-2xl opacity-50 rounded-[3rem] z-0"></div>

                        <div className="glass shadow-2xl rounded-[2.5rem] p-10 md:p-16 relative z-10 backdrop-blur-xl" style={{ border: '1px solid var(--border-secondary)' }}>
                            <div className="absolute top-10 right-10 md:top-16 md:right-16 opacity-10">
                                <FaQuoteLeft className="text-8xl text-primary-400" />
                            </div>

                            <FaQuoteLeft className="text-primary-400 text-4xl mb-8 opacity-80 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />

                            <div className="mb-12 relative z-10 min-h-[120px] md:min-h-[100px] flex items-center">
                                <p className="text-xl md:text-3xl theme-text-secondary leading-snug font-light italic">
                                    &quot;{currentTestimonial.content}&quot;
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 mt-8 pt-8 relative z-10" style={{ borderTop: '1px solid var(--border-primary)' }}>
                                <div className="flex items-center gap-6">
                                    {/* Abstract Avatar Placeholder */}
                                    <div className="w-16 h-16 rounded-full border-2 border-primary-500/50 flex items-center justify-center text-primary-400 font-bold text-xl shadow-[0_0_15px_rgba(0,240,255,0.2)]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                        {currentTestimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-1 gap-1">
                                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400 text-sm drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                                            ))}
                                        </div>
                                        <h4 className="theme-text font-bold text-xl tracking-tight">{currentTestimonial.name}</h4>
                                        <p className="theme-text-muted text-sm font-light"><span className="text-primary-400/80">{currentTestimonial.role}</span> &bull; {currentTestimonial.company}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
                                    <button
                                        onClick={goToPrevious}
                                        className="w-12 h-12 rounded-full flex items-center justify-center hover:border-primary-500/50 hover:text-primary-400 theme-text-muted transition-all duration-300 group shadow-lg"
                                        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}
                                        aria-label="Previous testimonial"
                                    >
                                        <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="w-12 h-12 rounded-full flex items-center justify-center hover:border-primary-500/50 hover:text-primary-400 theme-text-muted transition-all duration-300 group shadow-lg"
                                        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}
                                        aria-label="Next testimonial"
                                    >
                                        <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center space-x-3 mt-10 relative z-10">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? 'bg-primary-500 w-10 shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                                        : 'w-2'
                                        }`}
                                    style={index !== currentIndex ? { backgroundColor: 'var(--border-secondary)' } : undefined}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
};
