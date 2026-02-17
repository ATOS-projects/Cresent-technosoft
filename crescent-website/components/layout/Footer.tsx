import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-blue-50 to-sky-100 border-t border-blue-200 mt-20">
            <Container>
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold gradient-text">Crescent</span>
                                <span className="text-xs text-slate-700">Technosofts</span>
                            </div>
                        </div>
                        <p className="text-slate-800 text-sm">
                            Leading the way in providing innovative software solutions for healthcare, education, and business management.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors" aria-label="Facebook">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors" aria-label="Twitter">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {SERVICES.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={service.href}
                                        className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/clients" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    Our Clients
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/partner-program" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    Partner Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-slate-900 font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FaPhone className="text-blue-600 mt-1 flex-shrink-0" />
                                <div className="space-y-1">
                                    {CONTACT_INFO.phones.slice(0, 3).map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.replace(/\s/g, '')}`}
                                            className="block text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <FaEnvelope className="text-blue-600 mt-1 flex-shrink-0" />
                                <div className="space-y-1">
                                    {CONTACT_INFO.emails.map((email, index) => (
                                        <a
                                            key={index}
                                            href={`mailto:${email}`}
                                            className="block text-slate-700 hover:text-blue-600 text-sm transition-colors">
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            {CONTACT_INFO.address && (
                                <li className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-800 text-sm">{CONTACT_INFO.address}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-800 text-sm text-center md:text-left">
                            © {currentYear} Crescent Technosofts. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-slate-800 hover:text-blue-600 text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
