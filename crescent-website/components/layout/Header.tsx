'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '@/lib/constants';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';
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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-blue-100'
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold gradient-text">Crescent</span>
                            <span className="text-xs text-slate-700">Technosofts</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="relative group">
                                {link.children ? (
                                    <>
                                        <button
                                            className={cn(
                                                'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600',
                                                pathname.startsWith(link.href) ? 'text-blue-600 font-semibold' : 'text-slate-800'
                                            )}
                                            onMouseEnter={() => setOpenDropdown(link.label)}
                                        >
                                            <span>{link.label}</span>
                                            <FaChevronDown className="w-3 h-3" />
                                        </button>
                                        {openDropdown === link.label && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-lg shadow-xl py-2 animate-fadeIn"
                                                onMouseLeave={() => setOpenDropdown(null)}
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-sm text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'text-sm font-medium transition-colors hover:text-blue-600',
                                            pathname === link.href ? 'text-blue-600 font-semibold' : 'text-slate-800'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="tel:+919944992460">
                            <Button variant="outline" size="sm" icon={<FaPhone />}>
                                Call Now
                            </Button>
                        </Link>
                        <Link href="/demo">
                            <Button variant="primary" size="sm">
                                Free Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-800 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden glass-strong rounded-lg mt-4 mb-4 py-4 animate-fadeIn">
                        <nav className="flex flex-col space-y-2">
                            {NAV_LINKS.map((link) => (
                                <div key={link.label}>
                                    {link.children ? (
                                        <>
                                            <button
                                                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                                onClick={() => toggleDropdown(link.label)}
                                            >
                                                <span>{link.label}</span>
                                                <FaChevronDown
                                                    className={cn(
                                                        'w-3 h-3 transition-transform',
                                                        openDropdown === link.label && 'rotate-180'
                                                    )}
                                                />
                                            </button>
                                            {openDropdown === link.label && (
                                                <div className="pl-4 py-2 space-y-1">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'block px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 rounded',
                                                pathname === link.href ? 'text-blue-600 font-semibold' : 'text-slate-800'
                                            )}
                                            onClick={toggleMobileMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="flex flex-col space-y-2 px-4 mt-4">
                            <Link href="tel:+919944992460" onClick={toggleMobileMenu}>
                                <Button variant="outline" size="sm" className="w-full" icon={<FaPhone />}>
                                    Call Now
                                </Button>
                            </Link>
                            <Link href="/demo" onClick={toggleMobileMenu}>
                                <Button variant="primary" size="sm" className="w-full">
                                    Free Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};
