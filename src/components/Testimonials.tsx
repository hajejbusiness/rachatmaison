"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "J'ai hérité de la maison de ma tante à Laval. C'était rempli d'objets du sol au plafond. Je paniquais. Antoine m'a dit : 'Laisse tout là, prends juste les photos de famille'. J'ai reçu mon chèque chez le notaire 2 semaines plus tard. Un poids énorme en moins.",
        author: "Michel D.",
        situation: "Succession & Accumulation",
        location: "Laval-des-Rapides",
        initials: "MD",
    },
    {
        quote: "Je devais vendre vite pour payer des dettes urgentes. Les courtiers me parlaient de '3 à 6 mois'. RachatMaison.ca m'a fait une offre le lendemain de mon appel. J'ai pu tout régler avant la date limite. Sérieux et discret.",
        author: "Sophie G.",
        situation: "Urgence financière",
        location: "Longueuil",
        initials: "SG",
    },
    {
        quote: "J'avais un duplex avec un locataire qui ne payait plus depuis 8 mois. Je n'en dormais plus. Ils ont acheté l'immeuble AVEC le problème. Je n'ai même pas eu à parler au locataire. Merci mille fois.",
        author: "Robert P.",
        situation: "Locataires difficiles",
        location: "Montréal-Nord",
        initials: "RP",
    },
    {
        quote: "Ma maison avait besoin de 50 000$ de rénos (toiture, fenêtres). Je n'avais pas l'argent. Ils l'ont achetée 'telle quelle'. Le prix était juste considérant les travaux que je n'ai pas eu à faire.",
        author: "Jean-François L.",
        situation: "Rénovations majeures",
        location: "Québec",
        initials: "JL",
    },
    {
        quote: "En plein divorce, on voulait juste que ce soit fini. Pas de visites, pas de pancarte 'À Vendre' devant la maison pour que les voisins jasent. C'était réglé en 9 jours. Efficacité totale.",
        author: "Isabelle & Marc",
        situation: "Divorce",
        location: "Sherbrooke",
        initials: "IM",
    },
    {
        quote: "Je pensais que c'était 'trop beau pour être vrai'. J'ai fait lire l'offre par mon notaire. Il m'a confirmé que tout était béton. L'argent a été déposé dans mon compte le jour prévu.",
        author: "André B.",
        situation: "Sceptique confondu",
        location: "Trois-Rivières",
        initials: "AB",
    },
];

export default function Testimonials() {
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
        <section ref={sectionRef} id="temoignages" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <span className="section-badge mb-6">Témoignages</span>
                    </div>
                    <h2
                        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-5 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Ils nous ont fait confiance
                    </h2>
                    <p
                        className={`text-lg text-neutral-600 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Des vraies personnes, des vraies histoires.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-2xl transition-all duration-700 bg-neutral-50 hover:bg-white card-hover flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: `${200 + index * 80}ms`,
                                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            }}
                        >
                            {/* Top Content (Stars + Quote) */}
                            <div className="flex-1">
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 opacity-10">
                                    <Quote className="w-8 h-8 text-primary-500" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-neutral-700 leading-relaxed mb-6 text-[15px]">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </div>

                            {/* Author (Footer) */}
                            <div className="flex items-center gap-4 pt-5 border-t border-neutral-200 mt-auto">
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-primary-500 to-primary-700 flex-shrink-0"
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900 text-sm">{testimonial.author}</p>
                                    <p className="text-xs text-neutral-500 line-clamp-1">
                                        {testimonial.situation} • {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
