'use client';

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

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
        <div className="pt-32 pb-20">
            <Container>
                <AnimatedSection direction="up">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Contact Us</span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                            Get in touch with us for any inquiries or support. We're here to help!
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    <AnimatedSection direction="up" delay={0.1}>
                        <Card className="text-center h-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaPhone className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                            <div className="space-y-2">
                                {CONTACT_INFO.phones.map((phone, index) => (
                                    <a
                                        key={index}
                                        href={`tel:${phone.replace(/\s/g, '')}`}
                                        className="block text-slate-600 hover:text-primary-400 transition-colors"
                                    >
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        <Card className="text-center h-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaEnvelope className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                            <div className="space-y-2">
                                {CONTACT_INFO.emails.map((email, index) => (
                                    <a
                                        key={index}
                                        href={`mailto:${email}`}
                                        className="block text-slate-600 hover:text-primary-400 transition-colors"
                                    >
                                        {email}
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.3}>
                        <Card className="text-center h-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaMapMarkerAlt className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Location</h3>
                            <p className="text-slate-600">{CONTACT_INFO.address}</p>
                        </Card>
                    </AnimatedSection>
                </div>

                {/* Contact Form */}
                <AnimatedSection direction="up" delay={0.4}>
                    <Card className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                                />
                            </div>

                            <Button type="submit" variant="primary" size="lg" icon={<FaPaperPlane />} className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </AnimatedSection>
            </Container>
        </div>
    );
}
