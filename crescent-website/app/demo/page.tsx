'use client';

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";
import { FaRocket, FaCheckCircle, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { useState } from "react";

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
        <div className="min-h-screen theme-bg relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-mesh-dark opacity-100 z-0"></div>

            {/* Cinematic Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-primary-600/10 rounded-full blur-[120px] animate-float-slow"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-secondary-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDB2LTF6TTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDEyOCwxMjgsMTI4LDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

            <div className="pt-32 pb-24 relative z-10 min-h-screen flex items-center">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Content & Benefits */}
                        <div className="lg:col-span-5 space-y-10 mt-8 lg:mt-16">
                            <AnimatedSection direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 border border-secondary-500/30">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
                                    </span>
                                    <span className="text-xs text-secondary-400 font-semibold tracking-wide uppercase">
                                        Live Demonstration
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
                                    <span className="theme-text">Experience the </span>
                                    <br />
                                    <span className="gradient-text-alt drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Future of Mgt.</span>
                                </h1>
                                <p className="text-xl theme-text-muted mb-8 leading-relaxed font-light">
                                    See firsthand how our avant-garde software solutions can streamline your operations, reduce overhead, and drastically improve efficiency.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="space-y-6">
                                    {[
                                        { icon: FaLaptopCode, title: "Live Walkthrough", desc: "Personalized tour of features relevant to your business needs.", color: "primary" },
                                        { icon: FaChartLine, title: "ROI Analysis", desc: "See the potential impact on your bottom line with real metrics.", color: "secondary" },
                                        { icon: FaCheckCircle, title: "Q&A Session", desc: "Technical deep-dive with our elite solution architects.", color: "neon-purple" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-5 p-5 glass rounded-2xl transition-colors group" style={{ border: '1px solid var(--border-primary)' }}>
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}>
                                                <item.icon className={`text-xl ${item.color === 'primary' ? 'text-primary-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : item.color === 'secondary' ? 'text-secondary-400 drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]' : 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold theme-text-secondary text-lg mb-1 group-hover:theme-text transition-colors">{item.title}</h3>
                                                <p className="theme-text-muted text-sm font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="left" delay={0.4}>
                                <Card className="p-8 md:p-12 glass-strong shadow-2xl relative overflow-hidden border border-primary-500/20 rounded-[2rem]">
                                    {/* Form internal glows */}
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
                                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

                                    <div className="mb-10 relative z-10 pb-6" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                                        <h2 className="text-3xl font-bold theme-text mb-3">Schedule Your Demo</h2>
                                        <p className="theme-text-muted font-light">Fill in your details and we&apos;ll set up a time that perfectly aligns with your schedule.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="name" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                    Full Name <span className="text-primary-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="email" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                    Work Email <span className="text-primary-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="phone" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                    Phone Number <span className="text-primary-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="company" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="service" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                Solution of Interest <span className="text-primary-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="service"
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none cursor-pointer shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                >
                                                    <option value="">Select a solution...</option>
                                                    {SERVICES.map((service) => (
                                                        <option key={service.id} value={service.id}>
                                                            {service.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary-500 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide">
                                                Specific Requirements
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none shadow-inner"
                                                style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                placeholder="Tell us about your current challenges..."
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button type="submit" variant="neon" size="lg" icon={<FaRocket className="text-xl" />} className="w-full py-5 text-xl font-bold rounded-xl tracking-wide">
                                                Request Free Demo
                                            </Button>
                                        </div>

                                        <p className="text-xs theme-text-muted text-center mt-6 font-light">
                                            No credit card required. Your data is encrypted and secure with us.
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
