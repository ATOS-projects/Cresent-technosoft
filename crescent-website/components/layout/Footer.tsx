import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 pt-16 pb-8 bg-gray-50 border-t border-sky-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Company Info */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
                                <Image src="/Assets/logo.webp" alt="Crescent Technosofts" width={44} height={44} className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-sky-600">Crescent</span>
                                <span className="text-[9px] text-sky-500 font-medium tracking-wider uppercase">Technosofts</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-600">
                            Leading software solutions for healthcare, education, and business management worldwide.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/CrescentTechnosoft/' },
                                { Icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/UC9o4bNi3N7WoBbN7ONMi9rA/videos' },
                                { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/crescenttechnosoft/' },
                                { Icon: FaInstagram, label: 'Instagram', href: '#' }
                            ].map(({ Icon, label, href }) => (
                                <a 
                                    key={label} 
                                    href={href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 hover:text-sky-600 border border-sky-200 hover:border-sky-400 transition-colors" 
                                    aria-label={label}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-base mb-4 text-gray-900">Our Systems</h3>
                        <ul className="space-y-2.5">
                            {SERVICES.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-600 hover:text-sky-600 text-sm transition-colors block">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-base mb-4 text-gray-900">Company</h3>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Clients', path: '/clients' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Partner Program', path: '/partner-program' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-gray-600 hover:text-sky-600 text-sm transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-base mb-4 text-gray-900">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-200">
                                    <FaPhone className="text-sky-600" size={14} />
                                </div>
                                <div className="space-y-1 pt-1.5">
                                    {CONTACT_INFO.phones.slice(0, 2).map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.replace(/\s/g, '')}`}
                                            className="block text-gray-700 hover:text-sky-600 text-sm transition-colors">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-200">
                                    <FaEnvelope className="text-sky-600" size={14} />
                                </div>
                                <div className="space-y-1 pt-1.5">
                                    {CONTACT_INFO.emails.slice(0, 1).map((email, index) => (
                                        <a
                                            key={index}
                                            href={`mailto:${email}`}
                                            className="block text-gray-700 hover:text-sky-600 text-sm transition-colors">
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            {CONTACT_INFO.address && (
                                <li className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-200">
                                        <FaMapMarkerAlt className="text-sky-600" size={14} />
                                    </div>
                                    <span className="text-gray-700 text-sm pt-2 leading-relaxed">{CONTACT_INFO.address}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-sky-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm text-center md:text-left">
                            © {currentYear} Crescent Technosofts. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-gray-600 hover:text-sky-600 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-600 hover:text-sky-600 text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
