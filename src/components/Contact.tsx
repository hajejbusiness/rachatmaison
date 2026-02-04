"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone, MessageCircle, Shield, CheckCircle, Clock, Send } from "lucide-react";

const propertyTypes = [
    { value: "maison", label: "Maison unifamiliale" },
    { value: "condo", label: "Condo / Appartement" },
    { value: "duplex", label: "Duplex" },
    { value: "triplex", label: "Triplex / Multiplex" },
    { value: "terrain", label: "Terrain" },
    { value: "commercial", label: "Commercial" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        propertyType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
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

    const formatPhone = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length <= 3) return cleaned ? `(${cleaned}` : "";
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, source: "contact" }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi");
            }

            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    const features = [
        { icon: Clock, text: "Réponse garantie en 24h" },
        { icon: CheckCircle, text: "Aucun engagement" },
        { icon: Shield, text: "100% confidentiel" },
    ];

    return (
        <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-cream-50 to-cream-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left Content */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 leading-tight font-display"
                        >
                            Prêt à vous libérer?
                        </h2>
                        <p className="text-xl text-neutral-600 mb-10">
                            Obtenez une offre gratuite en 24h. Sans engagement, sans pression.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-12">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        }`}
                                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                                        <feature.icon className="w-4 h-4 text-success" />
                                    </div>
                                    <span className="font-medium text-neutral-800">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Direct Contact */}
                        <div
                            className={`pt-8 border-t border-neutral-200 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <p className="text-sm text-neutral-500 mb-4">Préférez-vous parler directement?</p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="tel:+15146000078"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-primary-600 bg-white transition-all duration-300 hover:shadow-md border border-neutral-100"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>(514) 600-0078</span>
                                </a>
                                <a
                                    href="https://wa.me/15146000078"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-whatsapp transition-all duration-300 hover:shadow-md hover:brightness-110"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Écrire sur WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <div
                            className="relative bg-white rounded-3xl p-6 lg:p-10 shadow-lg shadow-neutral-900/5 min-h-[400px] flex flex-col justify-center"
                        >
                            {/* Accent line */}
                            <div
                                className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                            />

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                                    <div>
                                        <label className="input-label">Votre nom complet</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Prénom Nom"
                                            className="input-field"
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="input-label">Téléphone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                                                placeholder="(514) 000-0000"
                                                className="input-field"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="input-label">Courriel (optionnel)</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="vous@email.com"
                                                className="input-field"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="input-label">Adresse de la propriété</label>
                                        <input
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            placeholder="123 rue Exemple, Ville"
                                            className="input-field"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">Type de propriété</label>
                                        <select
                                            value={formData.propertyType}
                                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                            className="input-field"
                                            required
                                        >
                                            <option value="">Sélectionnez...</option>
                                            {propertyTypes.map((type) => (
                                                <option key={type.value} value={type.value}>{type.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="input-label">Parlez-nous de votre situation (optionnel)</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Décrivez brièvement votre situation ou vos besoins..."
                                            rows={3}
                                            className="input-field resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn btn-primary py-4 text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Recevoir mon offre gratuite</span>
                                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </button>

                                    <p className="flex items-center justify-center gap-2 text-xs text-neutral-500 text-center">
                                        <Shield className="w-4 h-4 text-neutral-400" />
                                        <span>Vos informations restent confidentielles. On vous contacte en 24h maximum.</span>
                                    </p>
                                </form>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-2">
                                        <CheckCircle className="w-10 h-10 text-success" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 font-display">
                                        Demande envoyée!
                                    </h3>
                                    <p className="text-neutral-600 text-lg max-w-xs mx-auto">
                                        Merci de nous avoir contactés, {formData.name.split(' ')[0]}.
                                    </p>
                                    <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-sm text-primary-800">
                                        Nous vous contacterons très bientôt pour discuter de votre propriété.
                                    </div>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-sm font-medium text-neutral-400 hover:text-primary-500 underline underline-offset-4 transition-colors"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
