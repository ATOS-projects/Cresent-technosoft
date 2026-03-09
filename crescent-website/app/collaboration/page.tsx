'use client';

import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaHandshake } from "react-icons/fa";
import Link from "next/link";

export default function CollaborationPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        location: '',
        partnershipType: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 to-white pt-24 md:pt-32 pb-12">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-6">
                            <FaHandshake className="text-sky-600" />
                            <span className="text-sm font-semibold text-sky-700">Partnership Application</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Let's Collaborate
                        </h1>
                        <p className="text-lg text-gray-600">
                            Fill out the form below and our partnership team will review your application and get back to you within 24 hours
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl border-2 border-sky-100 p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Application Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaUser className="text-gray-400" size={16} />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaEnvelope className="text-gray-400" size={16} />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaPhone className="text-gray-400" size={16} />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company Name *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaBuilding className="text-gray-400" size={16} />
                                            </div>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                                                placeholder="Your Company Name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Location *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaMapMarkerAlt className="text-gray-400" size={16} />
                                            </div>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                                                placeholder="City, State"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="partnershipType" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Partnership Type *
                                        </label>
                                        <select
                                            id="partnershipType"
                                            name="partnershipType"
                                            value={formData.partnershipType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors bg-white"
                                        >
                                            <option value="">Select a type</option>
                                            <option value="reseller">Reseller (15% margins)</option>
                                            <option value="dealer">Dealer (20-25% margins)</option>
                                            <option value="channel">Channel Partner (30% margins)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Tell Us About Your Business *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your business, experience, and why you'd like to partner with us..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-sky-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    <FaPaperPlane />
                                    <span>Submit Application</span>
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our terms and conditions
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Info Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl border-2 border-sky-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">What Happens Next?</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Application Review</h4>
                                        <p className="text-xs text-gray-600">Our team reviews your application within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Initial Discussion</h4>
                                        <p className="text-xs text-gray-600">We schedule a call to discuss the partnership</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Agreement & Onboarding</h4>
                                        <p className="text-xs text-gray-600">We finalize the agreement and begin onboarding</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-sky-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Have questions about our partnership program? Our team is here to help.
                            </p>
                            <Link href="/contact">
                                <button className="w-full bg-white text-sky-600 font-semibold py-2.5 px-4 rounded-lg border-2 border-sky-200 hover:border-sky-400 transition-all duration-200">
                                    Contact Support
                                </button>
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-bold mb-2">15+ Years</h3>
                            <p className="text-sm text-sky-100">
                                of excellence in software solutions, trusted by 60+ clients worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
