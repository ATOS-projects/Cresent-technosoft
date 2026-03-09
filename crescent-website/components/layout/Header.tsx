'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95',
                isScrolled
                    ? 'backdrop-blur-xl shadow-sm border-b border-sky-100'
                    : 'border-b border-transparent'
            )}
        >
            <Container>
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center transition-transform group-hover:scale-105">
                            <Image src="/Assets/logo.webp" alt="Crescent Technosofts" width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-sky-600">Crescent</span>
                            <span className="text-[9px] text-sky-500 font-medium tracking-wider uppercase -mt-0.5">Technosofts</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="relative">
                                {link.children ? (
                                    <>
                                        <button
                                            className={cn(
                                                'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                                                openDropdown === link.label ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900',
                                                pathname.startsWith(link.href) ? 'text-sky-600' : ''
                                            )}
                                            onMouseEnter={() => setOpenDropdown(link.label)}
                                        >
                                            <span>{link.label}</span>
                                            <FaChevronDown className={cn(
                                                "w-3 h-3 transition-transform",
                                                openDropdown === link.label ? "rotate-180" : ""
                                            )} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={cn(
                                                "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 transition-all duration-200",
                                                openDropdown === link.label ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                                            )}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <div className="rounded-xl p-1 shadow-lg border border-sky-100 bg-white">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
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
                                            'block px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                                            pathname === link.href ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons + Theme Toggle */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/demo">
                            <Button variant="primary" size="md">
                                Get Started
                                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </Button>
                        </Link>
                        <Link href="tel:+919944992460" className="flex items-center justify-center w-10 h-10 rounded-lg border border-sky-200 text-gray-600 hover:text-sky-600 hover:border-sky-400 transition-colors">
                            <IoCall size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 transition-colors border border-sky-200"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                <div className={cn(
                    "lg:hidden overflow-hidden transition-all duration-200",
                    isMobileMenuOpen ? "max-h-[70vh] opacity-100 mt-4" : "max-h-0 opacity-0"
                )}>
                    <div className="rounded-xl border border-sky-100 p-3 shadow-lg max-h-[calc(70vh-1rem)] overflow-y-auto bg-white">
                        <nav className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <div key={link.label}>
                                    {link.children ? (
                                        <>
                                            <button
                                                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
                                                onClick={() => toggleDropdown(link.label)}
                                            >
                                                <span>{link.label}</span>
                                                <FaChevronDown
                                                    className={cn(
                                                        'w-3 h-3 transition-transform',
                                                        openDropdown === link.label ? 'rotate-180' : ''
                                                    )}
                                                />
                                            </button>
                                            <div className={cn(
                                                "overflow-hidden transition-all duration-200",
                                                openDropdown === link.label ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"
                                            )}>
                                                <div className="pl-4 py-1 space-y-1">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-600 transition-colors rounded-lg"
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
                                                'block px-3 py-2.5 text-sm font-medium transition-colors rounded-lg',
                                                pathname === link.href ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'
                                            )}
                                            onClick={toggleMobileMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-sky-100">
                            <Link href="/demo" onClick={toggleMobileMenu}>
                                <Button variant="primary" size="md" className="w-full justify-center">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </Button>
                            </Link>
                            <Link href="tel:+919944992460" onClick={toggleMobileMenu}>
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-sky-200 text-gray-600 hover:text-sky-600 transition-colors">
                                    <IoCall size={16} />
                                    Call Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
