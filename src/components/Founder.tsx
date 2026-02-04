"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Founder() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                            {/* Placeholder for Founder Image - Using a professional stock photo for now */}
                            <div className="absolute inset-0 bg-neutral-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                                    alt="Antoine - Fondateur RachatMaison.ca"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-bold text-xl font-display">Antoine</p>
                                <p className="text-white/80 text-sm">Investisseur local & Fondateur</p>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <Quote className="w-12 h-12 text-accent-500 mb-8 opacity-50" />

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 font-display leading-tight">
                            "Je ne suis pas une banque. Je suis votre voisin."
                        </h2>

                        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                            <p>
                                J'ai grandi ici au Québec. J'ai vu des familles se déchirer pour des héritages mal gérés et des propriétaires perdre le sommeil à cause de locataires difficiles.
                            </p>
                            <p>
                                J'ai créé <span className="font-semibold text-primary-600">RachatMaison.ca</span> pour offrir une alternative humaine aux banques et aux courtiers.
                            </p>
                            <p className="font-medium text-neutral-900">
                                Ma promesse est simple :
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-success text-sm font-bold">✓</span>
                                    </div>
                                    <span>
                                        <strong>Aucun jugement.</strong> Votre maison est en désordre ? Il y a des moisissures ? On a vu pire. Ne nettoyez rien. Laissez les clés, on s'occupe du reste.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-success text-sm font-bold">✓</span>
                                    </div>
                                    <span>
                                        <strong>Une parole d'honneur.</strong> Quand je fais une offre, je ferme. Pas de "conditions de financement" qui tombent à la dernière minute.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10 pt-10 border-t border-neutral-100">
                            <p className="font-handwriting text-2xl text-primary-600 -rotate-2">
                                Antoine
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
