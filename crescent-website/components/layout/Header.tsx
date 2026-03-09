'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_LINKS } from '@/lib/constants';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null);
    };

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'backdrop-blur-md shadow-lg py-2'
                    : 'bg-transparent border-transparent py-4'
            )}
            style={isScrolled ? { backgroundColor: 'var(--bg-header)', borderColor: 'var(--border-primary)' } : undefined}
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 border border-primary-500/30 rounded-xl flex items-center justify-center transform group-hover:scale-105 group-hover:border-primary-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                            <span className="font-bold text-xl relative z-10" style={{ color: 'var(--text-primary)' }}>C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold gradient-text tracking-tight">Crescent</span>
                            <span className="text-[10px] text-primary-400 font-medium tracking-widest uppercase -mt-1">Technosofts</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="relative group px-1">
                                {link.children ? (
                                    <>
                                        <button
                                            className={cn(
                                                'flex items-center space-x-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full',
                                                openDropdown === link.label ? 'theme-bg-secondary theme-text' : 'theme-text-muted hover:theme-text',
                                                pathname.startsWith(link.href) ? 'text-primary-400' : ''
                                            )}
                                            onMouseEnter={() => setOpenDropdown(link.label)}
                                        >
                                            <span>{link.label}</span>
                                            <FaChevronDown className={cn(
                                                "w-2.5 h-2.5 transition-transform duration-300",
                                                openDropdown === link.label ? "rotate-180 text-primary-400" : "theme-text-muted"
                                            )} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={cn(
                                                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 w-64",
                                                openDropdown === link.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"
                                            )}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <div className="glass-strong rounded-2xl p-2 shadow-2xl border border-primary-500/20 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[40px] pointer-events-none" />

                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="flex items-center px-4 py-3 text-sm theme-text-muted hover:theme-text rounded-xl transition-all group/item relative overflow-hidden"
                                                        style={{ backgroundColor: 'transparent' }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-secondary)')}
                                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                                    >
                                                        <span className="relative z-10">{child.label}</span>
                                                        <div className="absolute inset-y-0 left-0 w-1 bg-primary-500 transform -translate-x-full group-hover/item:translate-x-0 transition-transform"></div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'px-4 py-2 text-sm font-medium transition-all rounded-full relative overflow-hidden group/link',
                                            pathname === link.href ? 'text-primary-400 bg-primary-900/10' : 'theme-text-muted hover:theme-text'
                                        )}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {pathname === link.href && (
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-primary-500 shadow-[0_0_8px_rgba(0,240,255,0.8)] rounded-t-md"></div>
                                        )}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons + Theme Toggle */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <ThemeToggle />
                        <Link href="/demo">
                            <button className="relative px-6 py-2.5 font-semibold rounded-full border border-primary-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:border-primary-400 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-neon"></div>
                                <span className="relative z-10 flex items-center">
                                    Get Started
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </span>
                            </button>
                        </Link>
                        <Link href="tel:+919944992460" className="group flex items-center justify-center w-10 h-10 rounded-full border hover:border-secondary-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-secondary)' }}>
                            <div className="absolute inset-0 bg-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <IoCall className="theme-text-muted group-hover:text-secondary-400 relative z-10 transition-colors" size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors theme-text-muted hover:theme-text"
                            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                <div className={cn(
                    "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "max-h-[80vh] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
                )}>
                    <div className="glass-strong rounded-2xl border border-primary-500/20 p-4 shadow-2xl relative overflow-hidden max-h-[calc(80vh-2rem)] overflow-y-auto custom-scrollbar">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[40px] pointer-events-none" />

                        <nav className="flex flex-col space-y-1 relative z-10">
                            {NAV_LINKS.map((link) => (
                                <div key={link.label} className="border-b pb-1 mb-1 last:pb-0 last:mb-0" style={{ borderColor: 'var(--border-primary)' }}>
                                    {link.children ? (
                                        <>
                                            <button
                                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium theme-text-muted hover:theme-text rounded-xl transition-colors"
                                                onClick={() => toggleDropdown(link.label)}
                                            >
                                                <span>{link.label}</span>
                                                <FaChevronDown
                                                    className={cn(
                                                        'w-3 h-3 transition-transform duration-300',
                                                        openDropdown === link.label ? 'rotate-180 text-primary-400' : 'theme-text-muted'
                                                    )}
                                                />
                                            </button>
                                            <div className={cn(
                                                "overflow-hidden transition-all duration-300",
                                                openDropdown === link.label ? "max-h-64 opacity-100 mb-2" : "max-h-0 opacity-0"
                                            )}>
                                                <div className="pl-6 py-2 space-y-1 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px]" style={{ ['--tw-before-bg' as string]: 'var(--border-primary)' }}>
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-4 py-2.5 text-sm theme-text-muted hover:text-primary-400 transition-colors rounded-lg relative"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'block px-4 py-3 text-sm font-medium transition-colors rounded-xl',
                                                pathname === link.href ? 'text-primary-400 bg-primary-900/10' : 'theme-text-muted hover:theme-text'
                                            )}
                                            onClick={toggleMobileMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="flex flex-col space-y-3 mt-6 pt-6 relative z-10" style={{ borderTop: '1px solid var(--border-primary)' }}>
                            <Link href="tel:+919944992460" onClick={toggleMobileMenu}>
                                <button className="w-full flex items-center justify-center px-4 py-3 rounded-xl border theme-text-muted hover:theme-text transition-all" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-secondary)' }}>
                                    Call Now
                                    <IoCall className="ml-2 text-secondary-400" size={16} />
                                </button>
                            </Link>
                            <Link href="/demo" onClick={toggleMobileMenu}>
                                <button className="w-full relative px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative z-10 flex items-center justify-center">
                                        Get Started Today
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
