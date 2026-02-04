"use client";

import { useState, useEffect } from "react";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";

export default function MobileStickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (approx 500px)
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 lg:hidden animate-in slide-in-from-bottom duration-300">
            <div className="flex gap-3 max-w-sm mx-auto">
                <a
                    href="tel:+15146000078"
                    className="flex-1 flex items-center justify-center gap-2 bg-neutral-100 text-neutral-900 font-semibold py-3 rounded-xl active:scale-95 transition-transform"
                >
                    <Phone className="w-4 h-4" />
                    <span>Appeler</span>
                </a>
                <Link
                    href="#contact"
                    className="flex-[1.5] btn btn-primary py-3 rounded-xl shadow-lg shadow-primary-500/30 active:scale-95 transition-transform"
                >
                    <FileText className="w-4 h-4" />
                    <span>Recevoir mon offre</span>
                </Link>
            </div>
            <div className="h-[safe-area-inset-bottom]" />
        </div>
    );
}
