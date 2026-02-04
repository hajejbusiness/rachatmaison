"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Est-ce une arnaque? C'est légal?",
        answer: "C'est 100% légal et encadré. La transaction passe obligatoirement par un notaire certifié au Québec (le vôtre ou le nôtre, à votre choix). L'argent est déposé dans le compte en fidéicommis du notaire avant d'être transféré à vous. C'est la même sécurité qu'une vente traditionnelle.",
    },
    {
        question: "Allez-vous me faire une offre ridicule (lowball)?",
        answer: "Non. Notre modèle est transparent : Valeur Marchande - Réparations Nécessaires - Notre Marge. On ne paie pas le plein prix de détail (puisqu'on assume tous les risques et travaux), mais on offre un prix équitable pour une vente rapide, garantie et sans commission.",
    },
    {
        question: "Suis-je obligé d'accepter votre offre?",
        answer: "Jamais. L'offre est gratuite et sans engagement. Vous pouvez dire non, ou prendre 2 semaines pour y penser. On ne vous mettra jamais de pression.",
    },
    {
        question: "Ma maison est en très mauvais état (insalubre/bazar).",
        answer: "C'est notre quotidien. On a vu des maisons remplies du sol au plafond, des dégâts d'eau, des fondations brisées. Ça ne nous fait pas peur. Et surtout : vous n'avez RIEN à nettoyer ou vider.",
    },
    {
        question: "Qu'est-ce que ça veut dire \"sans garantie légale\"?",
        answer: "Ça veut dire que vous dormez tranquille. Une fois vendu, c'est vendu. Si le toit coule le lendemain, c'est NOTRE problème, pas le vôtre. Vous n'aurez jamais de poursuite pour vice caché.",
    },
    {
        question: "En combien de temps j'ai l'argent?",
        answer: "Aussi vite que 7 jours si le notaire a les documents. Mais si vous avez besoin de 3 mois pour déménager, on attend. C'est vous qui choisissez la date.",
    },
    {
        question: "Qui paie le notaire?",
        answer: "Dans la majorité des cas, nous payons les frais de notaire pour l'acte de vente. C'est un autre 1500$+ que vous économisez.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        <section ref={sectionRef} id="faq" className="py-24 lg:py-32 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <span className="section-badge mb-6">
                            <HelpCircle className="w-4 h-4" />
                            <span>Questions fréquentes</span>
                        </span>
                    </div>
                    <h2
                        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 leading-tight transition-all duration-700 delay-100 font-display ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        On répond à vos questions
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                } ${openIndex === index ? 'shadow-lg bg-white' : 'bg-neutral-50 shadow-sm'}`}
                            style={{ transitionDelay: `${200 + index * 50}ms` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-white"
                            >
                                <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary-500 rotate-180' : 'bg-neutral-200'
                                        }`}
                                >
                                    <ChevronDown
                                        className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-neutral-500'
                                            }`}
                                    />
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-neutral-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
