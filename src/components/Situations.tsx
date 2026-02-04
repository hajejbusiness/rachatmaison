"use client";

import { useEffect, useRef, useState } from "react";
import { Home, HeartCrack, TrendingDown, Wrench, Users, Plane } from "lucide-react";

const situations = [
    {
        icon: Home,
        title: "Succession",
        description: "Gérer une propriété héritée peut être lourd. On s'occupe de tout pour que vous puissiez tourner la page.",
        color: "text-primary-500",
        bg: "bg-primary-50",
    },
    {
        icon: HeartCrack,
        title: "Divorce",
        description: "Une vente rapide pour tourner la page. On vous permet de régler ça vite et de passer à autre chose.",
        color: "text-accent-600",
        bg: "bg-accent-50",
    },
    {
        icon: TrendingDown,
        title: "Difficultés financières",
        description: "Évitez la saisie. On peut fermer rapidement et vous donner le cash dont vous avez besoin.",
        color: "text-primary-500",
        bg: "bg-primary-50",
    },
    {
        icon: Wrench,
        title: "Réparations majeures",
        description: "Fondations, toiture, moisissures? On achète dans n'importe quel état. Zéro rénovation requise.",
        color: "text-accent-600",
        bg: "bg-accent-50",
    },
    {
        icon: Users,
        title: "Locataires difficiles",
        description: "Tanné de la gestion? On reprend vos locataires et vous, vous reprenez votre liberté.",
        color: "text-primary-500",
        bg: "bg-primary-50",
    },
    {
        icon: Plane,
        title: "Relocalisation",
        description: "Nouveau travail ailleurs? On ferme à votre calendrier pour que vous partiez l'esprit tranquille.",
        color: "text-accent-600",
        bg: "bg-accent-50",
    },
];

export default function Situations() {
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
        <section ref={sectionRef} id="situations" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-cream-100 to-transparent opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20">
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <span className="section-badge mb-6">On comprend votre situation</span>
                    </div>
                    <h2
                        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-5 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Chaque situation mérite une solution
                    </h2>
                    <p
                        className={`text-lg text-neutral-600 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Peu importe ce qui vous amène à vendre, on est là pour vous aider.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {situations.map((situation, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-700 bg-neutral-50 hover:bg-white card-hover flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Border accent on hover */}
                            <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-accent-500 to-primary-500" />

                            <div className="relative">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md ${situation.bg}`}
                                >
                                    <situation.icon
                                        className={`w-7 h-7 transition-colors duration-300 ${situation.color}`}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors duration-300 font-display">
                                    {situation.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {situation.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
