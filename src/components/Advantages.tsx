"use client";

import { useEffect, useRef, useState } from "react";
import { DollarSign, Zap, Hammer, Calendar, Ban, FileCheck, X, Check } from "lucide-react";

const advantages = [
    {
        icon: DollarSign,
        title: "Zéro commission",
        description: "Pas de 5% qui part en fumée. Chaque dollar de l'offre va dans votre poche.",
    },
    {
        icon: Zap,
        title: "Fermeture en 7 jours",
        description: "Besoin d'aller vite? On peut closer aussi rapidement que vous le voulez.",
    },
    {
        icon: Hammer,
        title: "Aucune réparation",
        description: "On achète \"tel quel\". Fissures, toiture, travaux inachevés — on prend tout.",
    },
    {
        icon: Calendar,
        title: "Vous choisissez la date",
        description: "Besoin de temps pour déménager? On s'adapte à VOTRE calendrier.",
    },
    {
        icon: Ban,
        title: "Aucun ménage requis",
        description: "Laissez les objets dont vous ne voulez plus. On s'occupe de vider la maison.",
    },
    {
        icon: FileCheck,
        title: "Sans garantie légale",
        description: "Vente finale aux risques et périls de l'acheteur. Vous êtes 100% protégé.",
    },
];

const traditionalSale = [
    "3-6 mois de délai moyen",
    "Commission de 4-6%",
    "Rénovations requises",
    "Dizaines de visites",
    "Offres qui tombent à l'eau",
    "Garantie légale (1-5 ans)",
    "Stress constant",
];

const ourApproach = [
    "Offre en 24h, closing en 7 jours",
    "0$ de commission",
    "On achète \"tel quel\"",
    "Une seule visite",
    "Offre garantie par écrit",
    "Sans garantie légale",
    "Paix d'esprit totale",
];

export default function Advantages() {
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
        <section ref={sectionRef} id="avantages" className="py-16 md:py-24 lg:py-32 bg-cream-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left - Advantages List */}
                    <div>
                        <div
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <span className="section-badge mb-6">Pourquoi nous choisir</span>
                        </div>
                        <h2
                            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-5 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            La différence RachatMaison.ca
                        </h2>
                        <p
                            className={`text-lg text-neutral-600 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            On n&apos;est pas des courtiers. On est des acheteurs. Ça change tout.
                        </p>

                        <div className="space-y-5">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-4 md:gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        }`}
                                    style={{ transitionDelay: `${300 + index * 80}ms` }}
                                >
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm"
                                    >
                                        <advantage.icon className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900 mb-1 font-display">
                                            {advantage.title}
                                        </h4>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Comparison */}
                    <div
                        className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        {/* Traditional Sale */}
                        <div className="p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-neutral-100">
                            <h4 className="font-bold text-neutral-900 mb-6 text-lg font-display">
                                Vente traditionnelle
                            </h4>
                            <ul className="space-y-3.5">
                                {traditionalSale.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-error/10 flex items-center justify-center">
                                            <X className="w-3 h-3 text-error" />
                                        </div>
                                        <span className="text-neutral-600 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Approach */}
                        <div className="relative p-6 md:p-8 rounded-2xl border-2 border-accent-500 overflow-hidden bg-white shadow-lg shadow-accent-500/10">
                            {/* Badge */}
                            <div className="absolute -top-px right-8 px-4 py-1.5 rounded-b-lg text-xs font-semibold text-white bg-accent-500">
                                Notre approche
                            </div>

                            <h4 className="font-bold text-neutral-900 mb-6 text-lg font-display">
                                Avec RachatMaison.ca
                            </h4>
                            <ul className="space-y-3.5">
                                {ourApproach.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-success" />
                                        </div>
                                        <span className="text-neutral-800 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
