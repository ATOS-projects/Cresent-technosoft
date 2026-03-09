'use client';

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
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
        alert('Thank you for contacting us! We will get back to you soon.');
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
                <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary-600/10 rounded-full blur-[120px] animate-float-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-secondary-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDB2LTF6TTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDEyOCwxMjgsMTI4LDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

            <div className="pt-32 pb-24 relative z-10 min-h-screen flex items-center">
                <Container>
                    <AnimatedSection direction="up">
                        <div className="text-center mb-16 lg:mb-24 mt-8 lg:mt-12">
                            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                                <span className="theme-text">Let&apos;s </span>
                                <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Connect</span>
                            </h1>
                            <p className="text-xl theme-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                                Have a groundbreaking project in mind or want to learn more about our strategic services?
                                <strong className="theme-text-secondary font-medium"> We&apos;re here to help</strong> turn your vision into reality.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-8">
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-10 group" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-secondary)' }}>
                                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
                                    <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-primary-500/0 transition-colors duration-700 z-10 mix-blend-overlay"></div>

                                    <div className="w-full aspect-[4/3] relative">
                                        <Image
                                            src="/assets/Contact_customerSupport.jpg"
                                            alt="Customer Support Team"
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.parentElement!.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
                                            }}
                                        />
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-3 border border-primary-500/30">
                                            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                                            <span className="text-[10px] text-primary-300 font-bold uppercase tracking-widest">Global HQ</span>
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-1 tracking-tight">Visit Our Office</h3>
                                        <p className="text-slate-400 text-sm font-light">We&apos;d love to meet you in person to discuss your next big idea.</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="right" delay={0.3}>
                                <div className="space-y-5">
                                    {[
                                        { icon: FaPhone, title: "Call Us", desc: "Mon-Fri from 9am to 6pm", color: "primary", content: CONTACT_INFO.phones, isLink: true, hrefPrefix: "tel:" },
                                        { icon: FaEnvelope, title: "Email Us", desc: "We'll reply within 24 hours", color: "secondary", content: CONTACT_INFO.emails, isLink: true, hrefPrefix: "mailto:" },
                                        { icon: FaMapMarkerAlt, title: "Location", desc: "Come say hello at our HQ", color: "neon-purple", content: [CONTACT_INFO.address], isLink: false }
                                    ].map((item, i) => (
                                        <Card key={i} className="flex items-start gap-5 p-6 glass hover:shadow-lg transition-all duration-300 border-l-4 group" style={{ borderLeftColor: item.color === 'primary' ? '#0ea5e9' : item.color === 'secondary' ? '#8b5cf6' : '#d946ef' }}>
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)' }}>
                                                <item.icon className={`text-xl ${item.color === 'primary' ? 'text-primary-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : item.color === 'secondary' ? 'text-secondary-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]' : 'text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]'}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold theme-text mb-1 tracking-tight">{item.title}</h3>
                                                <p className="theme-text-muted text-xs uppercase tracking-wider mb-3 font-semibold">{item.desc}</p>
                                                <div className="space-y-1.5">
                                                    {item.content.map((text, index) => (
                                                        item.isLink ? (
                                                            <a key={index} href={`${item.hrefPrefix}${text ? text.replace(/\s/g, '') : ''}`} className={`block theme-text-secondary font-medium ${item.color === 'primary' ? 'hover:text-primary-400' : 'hover:text-secondary-400'} transition-colors text-sm`}>
                                                                {text}
                                                            </a>
                                                        ) : (
                                                            <p key={index} className="theme-text-secondary font-medium leading-relaxed text-sm">
                                                                {text}
                                                            </p>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="left" delay={0.4}>
                                <Card className="p-8 md:p-12 glass-strong shadow-2xl relative overflow-hidden rounded-[2.5rem]" style={{ border: '1px solid var(--border-secondary)' }}>
                                    {/* Form background glows */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none" />

                                    <div className="mb-10 relative z-10 pb-6" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                                        <h2 className="text-3xl font-bold theme-text mb-3 tracking-tight">Send us a Message</h2>
                                        <p className="theme-text-muted font-light text-lg">Fill out the form below and our strategic team will be in touch shortly.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="name" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide group-focus-within:text-primary-400 transition-colors">
                                                    Full Name <span className="text-primary-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="email" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide group-focus-within:text-primary-400 transition-colors">
                                                    Email Address <span className="text-primary-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label htmlFor="phone" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide group-focus-within:text-primary-400 transition-colors">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-inner"
                                                    style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="subject" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide group-focus-within:text-primary-400 transition-colors">
                                                    Subject <span className="text-primary-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        required
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all appearance-none shadow-inner cursor-pointer"
                                                        style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                                    >
                                                        <option value="" disabled>Select a subject</option>
                                                        <option value="General Inquiry">General Inquiry</option>
                                                        <option value="Project Proposal">Project Proposal</option>
                                                        <option value="Support">Support</option>
                                                        <option value="Careers">Careers</option>
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary-500 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm font-semibold theme-text-secondary mb-2 ml-1 tracking-wide group-focus-within:text-primary-400 transition-colors">
                                                Message <span className="text-primary-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="Tell us about your project or inquiry..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none shadow-inner"
                                                style={{ backgroundColor: 'var(--bg-input)', border: '1px solid var(--border-secondary)', color: 'var(--text-primary)' }}
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button type="submit" variant="neon" size="lg" icon={<FaPaperPlane className="text-xl" />} className="w-full py-5 text-xl font-bold rounded-xl tracking-wide">
                                                Send Message
                                            </Button>
                                        </div>
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
