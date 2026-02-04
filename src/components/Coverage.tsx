"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const regions = [
    "Grand Montréal",
    "Laval",
    "Rive-Sud",
    "Rive-Nord",
    "Québec",
    "Gatineau",
    "Sherbrooke",
    "Trois-Rivières",
    "Saguenay",
    "+ Toutes les régions",
];

export default function Coverage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-cream-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <span className="section-badge mb-6">
                                <MapPin className="w-4 h-4" />
                                <span>Partout au Québec</span>
                            </span>
                        </div>
                        <h2
                            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-5 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            On achète dans toutes les régions
                        </h2>
                        <p
                            className={`text-lg text-neutral-600 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            De Gatineau à Rimouski, de Montréal à Saguenay. Peu importe où se trouve votre propriété au Québec, on est là.
                        </p>

                        {/* Region Tags */}
                        <div
                            className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            {regions.map((region, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2.5 rounded-full text-sm font-medium bg-white text-neutral-700 transition-all duration-300 hover:bg-primary-500 hover:text-white cursor-default shadow-sm hover:shadow-md"
                                >
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right CTA Card */}
                    <div
                        className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 translate-x-8'}`}
                    >
                        <div
                            className="relative p-10 lg:p-12 rounded-3xl text-center overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative">
                                <h3 className="text-2xl font-bold !text-white mb-4 font-display">
                                    Votre propriété est au Québec?
                                </h3>
                                <p className="text-white/80 mb-8 text-lg">
                                    On peut l&apos;acheter. Peu importe l&apos;état, la taille ou la situation.
                                </p>
                                <Link
                                    href="#contact"
                                    className="group btn btn-primary text-lg px-8 py-4"
                                >
                                    <span>Recevoir mon offre</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
