'use client';

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";
import { FaRocket, FaCheckCircle, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function DemoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly to schedule your demo.');
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
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-l from-primary-100/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-float pointer-events-none" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

            <div className="pt-32 pb-20 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Content & Benefits */}
                        <div className="lg:col-span-5 space-y-8">
                            <AnimatedSection direction="right">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                    Experience the <br />
                                    <span className="gradient-text">Future of Management</span>
                                </h1>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                    See firsthand how our software solutions can streamline your operations, reduce costs, and improved efficiency.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 glass rounded-xl border-l-4 border-l-primary-500">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <FaLaptopCode className="text-primary-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Live Walkthrough</h3>
                                            <p className="text-slate-600 text-sm">Personalized tour of features relevant to your business needs.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 glass rounded-xl border-l-4 border-l-secondary-500">
                                        <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <FaChartLine className="text-secondary-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">ROI Analysis</h3>
                                            <p className="text-slate-600 text-sm">See the potential impact on your bottom line with real metrics.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 glass rounded-xl border-l-4 border-l-indigo-500">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                                            <FaCheckCircle className="text-indigo-600 text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">Q&A Session</h3>
                                            <p className="text-slate-600 text-sm">Technical deep-dive with our solution architects.</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>


                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="left" delay={0.4}>
                                <Card className="p-8 md:p-10 glass-strong shadow-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl pointer-events-none" />

                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Schedule Your Demo</h2>
                                        <p className="text-slate-500">Fill in your details and we'll set up a time that works for you.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                    Work Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white"
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                Solution of Interest <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="service"
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select a solution...</option>
                                                    {SERVICES.map((service) => (
                                                        <option key={service.id} value={service.id}>
                                                            {service.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                                                Specific Requirements
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all hover:bg-white resize-none"
                                                placeholder="Tell us about your current challenges..."
                                            />
                                        </div>

                                        <Button type="submit" variant="primary" size="lg" icon={<FaRocket />} className="w-full py-4 text-lg shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all">
                                            Request Free Demo
                                        </Button>

                                        <p className="text-xs text-slate-400 text-center mt-4">
                                            No credit card required. Your data is secure with us.
                                        </p>
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
