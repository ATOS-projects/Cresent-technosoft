'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from "react-icons/fa";
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
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 mt-[76px] lg:mt-[88px] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded-sm mb-6">
                            <FaEnvelope className="text-blue-900" size={14} />
                            <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Contact Us</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Thank you for your interest. Please fill out the form below to inquire about our work in Digital.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8 lg:p-10 max-w-full">
                            <h2 className="text-2xl font-extrabold text-blue-950 tracking-tight mb-8 pb-4 border-b border-gray-100">Send us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-blue-950 mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all bg-slate-50 focus:bg-white text-blue-950 placeholder-gray-400"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-blue-950 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all bg-slate-50 focus:bg-white text-blue-950 placeholder-gray-400"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-blue-950 mb-2">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all bg-slate-50 focus:bg-white text-blue-950 placeholder-gray-400"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="organization" className="block text-sm font-bold text-blue-950 mb-2">
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all bg-slate-50 focus:bg-white text-blue-950 placeholder-gray-400"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-blue-950 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 outline-none transition-all resize-none bg-slate-50 focus:bg-white text-blue-950 placeholder-gray-400"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <button type="submit" className="w-full px-8 py-3.5 bg-blue-950 text-white font-bold tracking-wide rounded-sm hover:bg-blue-900 transition-colors border border-blue-900 flex items-center justify-center gap-2">
                                    <FaPaperPlane />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-6 lg:pl-12 flex flex-col pt-8 lg:pt-0">
                        <div className="bg-white rounded-sm p-8 border border-gray-200 shadow-sm">
                            <h3 className="font-extrabold text-blue-950 mb-6 tracking-tight text-lg border-b border-gray-100 pb-4">Direct Contact</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-slate-50 border border-gray-200 text-blue-900 rounded-sm flex items-center justify-center flex-shrink-0">
                                            <FaPhone size={14} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Call Us</p>
                                            <div className="space-y-1">
                                                {CONTACT_INFO.phones.map((phone, idx) => (
                                                    <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors">
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-slate-50 border border-gray-200 text-blue-900 rounded-sm flex items-center justify-center flex-shrink-0">
                                            <FaEnvelope size={14} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Us</p>
                                            <div className="space-y-1">
                                                {CONTACT_INFO.emails.map((email, idx) => (
                                                    <a key={idx} href={`mailto:${email}`} className="block text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors break-all">
                                                        {email}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="bg-blue-950 border border-blue-900 rounded-sm p-8 shadow-sm text-white relative overflow-hidden flex-1">
                            <div className="relative z-10">
                                <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight border-b border-blue-800/50 pb-4">Business Hours</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm border-b border-blue-800/30 pb-3">
                                        <span className="text-blue-200 font-medium">Monday - Friday</span>
                                        <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-blue-800/30 pb-3">
                                        <span className="text-blue-200 font-medium">Saturday</span>
                                        <span className="text-white font-bold">9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm pt-1">
                                        <span className="text-blue-200 font-medium">Sunday</span>
                                        <span className="text-blue-300 font-bold uppercase text-xs tracking-wider">Closed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
                                <FaClock size={120} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office Locations */}
                <div className="mt-20 pt-16 border-t border-gray-200">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-gray-200 shadow-sm rounded-sm mb-6">
                            <FaMapMarkerAlt className="text-blue-900" size={14} />
                            <span className="text-xs font-extrabold tracking-wide text-blue-950 uppercase">Global Presence</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">Our Office Locations</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Visit us at any of our global offices</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CONTACT_INFO.locations?.map((location, idx) => (
                            <div key={idx} className="bg-white rounded-sm border border-gray-200 p-8 group hover:border-blue-900 shadow-sm transition-all duration-300">
                                {location.type && (
                                    <span className="inline-block px-3 py-1 bg-slate-50 border border-gray-200 text-blue-900 text-xs font-bold uppercase tracking-wider rounded-sm mb-6">
                                        {location.type}
                                    </span>
                                )}
                                <h3 className="text-xl font-extrabold text-blue-950 mb-6 flex items-center gap-3 tracking-tight">
                                    {location.name}
                                </h3>
                                
                                <div className="space-y-6 pt-6 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Address</p>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-[250px]">{location.address}</p>
                                    </div>

                                    {location.phones && location.phones.length > 0 && (
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</p>
                                            {location.phones.map((phone, i) => (
                                                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors">
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {location.email && (
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</p>
                                            <a href={`mailto:${location.email}`} className="text-sm font-bold text-blue-900 hover:text-blue-950 transition-colors break-all">
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
