'use client';

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary-50 to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float pointer-events-none" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

            <div className="pt-32 pb-20 relative z-10">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                <span className="gradient-text">Let's Connect</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Have a project in mind or want to learn more about our services?
                                We're here to help turn your vision into reality.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-8">
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                                    <div className="bg-slate-200 w-full aspect-[4/3] relative">
                                        <Image
                                            src="/assets/Contact_customerSupport.jpg"
                                            alt="Customer Support Team"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                // Fallback if image doesn't exist
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.parentElement!.classList.add('bg-gradient-to-br', 'from-primary-400', 'to-secondary-500');
                                            }}
                                        />
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <h3 className="text-white text-xl font-bold">Visit Our Office</h3>
                                        <p className="text-white/90 text-sm">We'd love to meet you in person</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="right" delay={0.3}>
                                <div className="space-y-6">
                                    <Card className="flex items-start gap-4 p-6 glass hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary-500">
                                        <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                                            <FaPhone className="text-primary-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Call Us</h3>
                                            <p className="text-slate-500 text-sm mb-3">Mon-Fri from 9am to 6pm</p>
                                            <div className="space-y-1">
                                                {CONTACT_INFO.phones.map((phone, index) => (
                                                    <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-slate-700 font-medium hover:text-primary-600 transition-colors">
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="flex items-start gap-4 p-6 glass hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary-500">
                                        <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center shrink-0">
                                            <FaEnvelope className="text-secondary-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Email Us</h3>
                                            <p className="text-slate-500 text-sm mb-3">We'll get back to you within 24 hours</p>
                                            <div className="space-y-1">
                                                {CONTACT_INFO.emails.map((email, index) => (
                                                    <a key={index} href={`mailto:${email}`} className="block text-slate-700 font-medium hover:text-secondary-600 transition-colors">
                                                        {email}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="flex items-start gap-4 p-6 glass hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500">
                                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                                            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">Location</h3>
                                            <p className="text-slate-500 text-sm mb-3">Come say hello at our office</p>
                                            <p className="text-slate-700 font-medium leading-relaxed">
                                                {CONTACT_INFO.address}
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="left" delay={0.4}>
                                <Card className="p-8 md:p-10 glass-strong shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-[100px] pointer-events-none" />

                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                                    <p className="text-slate-600 mb-8">Fill out the form below and we'll be in touch shortly.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 ml-1 group-focus-within:text-primary-600 transition-colors">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 ml-1 group-focus-within:text-primary-600 transition-colors">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 ml-1 group-focus-within:text-primary-600 transition-colors">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2 ml-1 group-focus-within:text-primary-600 transition-colors">
                                                    Subject <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white appearance-none"
                                                >
                                                    <option value="" disabled>Select a subject</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Project Proposal">Project Proposal</option>
                                                    <option value="Support">Support</option>
                                                    <option value="Careers">Careers</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 ml-1 group-focus-within:text-primary-600 transition-colors">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="Tell us about your project or inquiry..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white resize-none"
                                            />
                                        </div>

                                        <Button type="submit" variant="primary" size="lg" icon={<FaPaperPlane />} className="w-full py-4 text-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transform transition-all hover:-translate-y-1">
                                            Send Message
                                        </Button>
                                    </form>
                                </Card>
                            </AnimatedSection>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
