'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { FaRocket, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
    {
        title: "Next-Generation Hospital Management",
        subtitle: "Integrated Software for Modern Healthcare",
        description: "Empowering healthcare providers with a comprehensive, secure, and scalable Hospital Management System designed for efficiency and patient-centric care.",
        image: "/Assets/hospital tech.jpg",
    },
    {
        title: "Advanced Lab & Clinic Solutions",
        subtitle: "Streamlining Diagnostics & Care",
        description: "From sample tracking in labs to appointment scheduling in clinics, our specialized software enhances accuracy and operational workflow.",
        image: "/Assets/home page.avif",
    },
    {
        title: "Intelligent Pharmacy & Inventory",
        subtitle: "Optimized for Accuracy and Control",
        description: "Manage prescriptions, track stock, and streamline pharmacy operations with our integrated inventory and pharmacy management software.",
        image: "/Assets/home page 3.avif",
    },
    {
        title: "Data-Driven Healthcare Analytics",
        subtitle: "Unlock Actionable Insights",
        description: "Turn complex healthcare data into clear, actionable insights. Our analytics platform helps you improve patient outcomes and operational performance.",
        image: "/Assets/home page 2.avif",
    }
];

export const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000); // Change slide every 7 seconds
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    const textVariants = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 30 },
    };

    const imageVariants = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <Container className="relative z-10 w-full pt-28 lg:pt-36 pb-20 lg:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.7, ease: 'easeInOut' }}
                                className="lg:max-w-lg" // Enforce a max-width on the text container
                            >
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight">
                                    {slide.title}
                                    <br />
                                    <span className="text-blue-800">{slide.subtitle}</span>
                                </h1>
                                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mt-6 mx-auto lg:mx-0">
                                    {slide.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                            <Link href="/demo" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <FaRocket size={18} />
                                    <span>Get Free Demo</span>
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg border border-gray-300 hover:border-blue-400 hover:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <span>Contact Sales</span>
                                    <FaArrowRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative w-full h-80 lg:h-[450px]">
                        <AnimatePresence>
                            <motion.div
                                key={currentSlide}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.7, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
};
