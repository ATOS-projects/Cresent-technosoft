'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 to-white pt-32 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-gray-600">
                            Thank you for your interest. Please fill out the form below to inquire about our work in Digital.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl border border-sky-100 p-8 shadow-sm">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full">
                                    <FaPaperPlane className="mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-white" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                                    <div className="space-y-1">
                                        {CONTACT_INFO.phones.map((phone, idx) => (
                                            <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-gray-600 hover:text-sky-600 transition-colors">
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-white" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                                    <div className="space-y-1">
                                        {CONTACT_INFO.emails.map((email, idx) => (
                                            <a key={idx} href={`mailto:${email}`} className="block text-sm text-gray-600 hover:text-sky-600 transition-colors">
                                                {email}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl p-6 text-white">
                            <h3 className="font-semibold mb-2">Business Hours</h3>
                            <p className="text-sm text-sky-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-sm text-sky-100">Saturday: 9:00 AM - 1:00 PM</p>
                            <p className="text-sm text-sky-100 mt-2">Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* Office Locations */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
                        <p className="text-lg text-gray-600">Visit us at any of our global offices</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CONTACT_INFO.locations?.map((location, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-sky-100 p-6 hover:shadow-lg transition-all">
                                {location.type && (
                                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full mb-3">
                                        {location.type}
                                    </span>
                                )}
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-sky-600" />
                                    {location.name}
                                </h3>
                                
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 mb-1">Address:</p>
                                        <p className="text-sm text-gray-600">{location.address}</p>
                                    </div>

                                    {location.phones && location.phones.length > 0 && (
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">Phone:</p>
                                            {location.phones.map((phone, i) => (
                                                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-sky-600 hover:text-sky-700">
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {location.email && (
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">Email:</p>
                                            <a href={`mailto:${location.email}`} className="text-sm text-sky-600 hover:text-sky-700">
                                                {location.email}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
