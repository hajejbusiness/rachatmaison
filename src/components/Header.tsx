"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

const navLinks = [
    { href: "#comment-ca-marche", label: "Comment ça marche" },
    { href: "#avantages", label: "Pourquoi nous" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#faq", label: "FAQ" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "py-3 bg-white/90 backdrop-blur-xl shadow-sm"
                    : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div
                                className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-primary-500 to-primary-700 shadow-md shadow-primary-500/20"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg lg:text-xl text-primary-500 tracking-tight font-display">
                                RachatMaison.ca
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-[15px] font-medium text-neutral-600 hover:text-primary-500 transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-5">
                            <a
                                href="tel:+15146000078"
                                className="flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-400 transition-colors duration-300"
                            >
                                <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-[15px]">(514) 600-0078</span>
                            </a>
                            <Link
                                href="#contact"
                                className="btn btn-primary px-5 py-2.5 text-sm rounded-xl"
                            >
                                <span>Recevoir mon offre</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-neutral-800"
                            aria-label="Menu"
                        >
                            <div className="relative w-5 h-4">
                                <span
                                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                                        }`}
                                />
                                <span
                                    className={`absolute left-0 top-1.5 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                                        }`}
                                />
                                <span
                                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <div
                    className={`absolute top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-2xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                >
                    <nav className="space-y-1 mb-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-neutral-800 hover:bg-cream-100 rounded-xl transition-colors duration-200"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span>{link.label}</span>
                                <ChevronRight className="w-5 h-5 text-neutral-400" />
                            </Link>
                        ))}
                    </nav>

                    <div className="pt-6 border-t border-neutral-100 space-y-4">
                        <a
                            href="tel:+15146000078"
                            className="flex items-center gap-3 px-4 py-3 text-primary-600 font-semibold"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>(514) 600-0078</span>
                        </a>
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full btn btn-primary text-center py-3"
                        >
                            Obtenir mon offre gratuite
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
