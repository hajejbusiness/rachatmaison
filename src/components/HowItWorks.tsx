"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Banknote, PartyPopper } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: FileText,
        title: "Dites-nous en plus",
        description: "Remplissez le formulaire ou appelez-nous. 2 minutes suffisent pour nous donner les infos de base.",
    },
    {
        number: "02",
        icon: Banknote,
        title: "Recevez votre offre",
        description: "En 24h ou moins, on vous présente une offre claire. Sans obligation, sans pression.",
    },
    {
        number: "03",
        icon: PartyPopper,
        title: "Encaissez",
        description: "Si ça vous convient, on ferme chez le notaire. Vous choisissez la date. Cash en main.",
    },
];

export default function HowItWorks() {
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
        <section
            ref={sectionRef}
            id="comment-ca-marche"
            className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10 mb-6">
                            Simple et transparent
                        </span>
                    </div>
                    <h2
                        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold !text-white mb-5 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Comment ça marche
                    </h2>
                    <p
                        className={`text-lg text-primary-100 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        3 étapes simples. Aucune surprise. Aucun frais caché.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                    {/* Connection line (desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Step number */}
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-primary-900 font-bold text-lg mb-8 shadow-lg relative z-10 font-display">
                                {step.number}
                            </div>

                            {/* Icon container */}
                            <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-inner">
                                <step.icon className="w-10 h-10 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold !text-white mb-4 font-display">
                                {step.title}
                            </h3>
                            <p className="text-primary-100 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div
                    className={`text-center mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <Link
                        href="#contact"
                        className="group btn btn-primary px-8 py-4 text-lg"
                    >
                        <span>Recevoir mon offre</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
