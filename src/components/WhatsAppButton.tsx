"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/15141234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contacter sur WhatsApp"
        >
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />

            {/* Button */}
            <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-whatsapp shadow-lg shadow-whatsapp"
            >
                <MessageCircle className="w-6 h-6 text-white" />
            </div>

            {/* Tooltip */}
            <span
                className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 bg-neutral-900 text-white shadow-md"
            >
                Écrivez-nous!
            </span>
        </a>
    );
}
