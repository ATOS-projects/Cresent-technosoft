import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { CONTACT_INFO, SERVICES } from '@/lib/constants';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-primary)' }}>
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group w-fit">
                            <div className="w-12 h-12 border border-primary-500/30 rounded-xl flex items-center justify-center transform group-hover:scale-105 group-hover:border-primary-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]" style={{ backgroundColor: 'var(--bg-card)' }}>
                                <span className="font-bold text-2xl tracking-tighter" style={{ color: 'var(--text-primary)' }}>C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold gradient-text tracking-tight">Crescent</span>
                                <span className="text-xs text-primary-400 font-medium tracking-widest uppercase">Technosofts</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed theme-text-muted">
                            Leading the way in providing innovative, high-performance software solutions for healthcare, education, and business management worldwide.
                        </p>
                        <div className="flex space-x-5 pt-2">
                            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center theme-text-muted hover:text-primary-400 hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 transform hover:-translate-y-1" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-secondary)' }} aria-label={['Facebook', 'Twitter', 'LinkedIn', 'Instagram'][i]}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center theme-text">
                            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
                            Our Target Systems
                        </h3>
                        <ul className="space-y-3">
                            {SERVICES.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={service.href}
                                        className="theme-text-muted hover:text-primary-400 text-sm transition-colors flex items-center group">
                                        <span className="text-primary-500/0 group-hover:text-primary-500 transition-colors mr-2 transform -translate-x-2 group-hover:translate-x-0 duration-300">›</span>
                                        <span className="transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center theme-text">
                            <span className="w-2 h-2 rounded-full bg-secondary-500 mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Clients', path: '/clients' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Partner Program', path: '/partner-program' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.path} className="theme-text-muted hover:text-secondary-400 text-sm transition-colors flex items-center group">
                                        <span className="text-secondary-500/0 group-hover:text-secondary-500 transition-colors mr-2 transform -translate-x-2 group-hover:translate-x-0 duration-300">›</span>
                                        <span className="transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center theme-text">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan mr-2 animate-pulse" style={{ animationDelay: '1s' }}></span>
                            Reach Out
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-primary-500/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-secondary)' }}>
                                    <FaPhone className="text-primary-400" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    {CONTACT_INFO.phones.slice(0, 3).map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.replace(/\s/g, '')}`}
                                            className="block theme-text-secondary hover:text-primary-400 text-sm transition-colors">
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-secondary-500/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-secondary)' }}>
                                    <FaEnvelope className="text-secondary-400" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    {CONTACT_INFO.emails.map((email, index) => (
                                        <a
                                            key={index}
                                            href={`mailto:${email}`}
                                            className="block theme-text-secondary hover:text-secondary-400 text-sm transition-colors">
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            {CONTACT_INFO.address && (
                                <li className="flex items-start space-x-4 group">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-primary-500/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-secondary)' }}>
                                        <FaMapMarkerAlt className="text-primary-400" />
                                    </div>
                                    <span className="theme-text-secondary text-sm pt-2 leading-relaxed">{CONTACT_INFO.address}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 mt-4 relative" style={{ borderTop: '1px solid var(--border-primary)' }}>
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="theme-text-muted text-sm text-center md:text-left flex items-center">
                            © {currentYear} Crescent Technosofts. <span className="hidden sm:inline">&nbsp;Engineered for the future.</span>
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="theme-text-muted hover:text-primary-400 text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-400 hover:after:w-full after:transition-all">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="theme-text-muted hover:text-primary-400 text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-400 hover:after:w-full after:transition-all">
                                Terms of Service
                            </Link>
                            <div className="flex items-center theme-text-muted text-sm hidden lg:flex">
                                <FaGlobe className="mr-2" /> Global
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
