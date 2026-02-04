"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

const trustMetrics = [
    { value: "150", suffix: "+", label: "Propriétés achetées" },
    { value: "4.9", suffix: "/5", label: "Satisfaction Client" },
    { value: "24", suffix: "h", label: "Délai d'offre" },
];

const features = [
    { icon: CheckCircle, text: "0$ de commission" },
    { icon: Shield, text: "Tout état accepté" },
    { icon: Clock, text: "Fermeture en 7 jours" },
];

const propertyTypes = [
    { value: "maison", label: "Maison unifamiliale" },
    { value: "condo", label: "Condo / Appartement" },
    { value: "duplex", label: "Duplex" },
    { value: "triplex", label: "Triplex / Multiplex" },
    { value: "terrain", label: "Terrain" },
    { value: "commercial", label: "Commercial" },
];

const situations = [
    { value: "vente-rapide", label: "Je veux vendre rapidement" },
    { value: "succession", label: "Succession / Héritage" },
    { value: "divorce", label: "Divorce / Séparation" },
    { value: "relocation", label: "Déménagement / Relocalisation" },
    { value: "dette", label: "Difficultés financières" },
    { value: "fatigue", label: "Fatigué d'être propriétaire" },
];

export default function Hero() {
    const [formData, setFormData] = useState({
        propertyType: "",
        city: "",
        situation: "",
        name: "",
        phone: "",
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, source: "hero" }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi");
            }

            setIsSubmitting(false);
            setIsSubmitted(true);
            // Reset form (optional, but keeps data for user reference usually)
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    const formatPhone = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length <= 3) return cleaned ? `(${cleaned}` : "";
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };

    return (
        <section className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200" />

            {/* Decorative gradient orbs */}
            <div
                className={`absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : ''}`}
                style={{
                    background: 'radial-gradient(circle, rgba(201, 169, 98, 0.08) 0%, transparent 70%)',
                }}
            />
            <div
                className={`absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-0 transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : ''}`}
                style={{
                    background: 'radial-gradient(circle, rgba(26, 77, 92, 0.06) 0%, transparent 70%)',
                }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content - 7 columns */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-700 bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Offre garantie en 24h</span>
                        </div>

                        {/* Title */}
                        <h1
                            className={`text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] tracking-tight transition-all duration-700 delay-100 font-display ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            On rachète votre propriété.
                            <br />
                            <span className="text-gradient">Cash. En 7 jours.</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={`text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            Pas de commission. Pas de visites. Pas de stress.
                            <br className="hidden md:block" />
                            Recevez une offre ferme en 24h. On achète "tel quel", sans conditions.
                        </p>

                        {/* Features */}
                        <div
                            className={`flex flex-wrap gap-x-8 gap-y-3 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                                        <feature.icon className="w-3 h-3 text-success" />
                                    </div>
                                    <span className="font-medium text-neutral-800">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div
                            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <a
                                href="#contact"
                                className="w-full sm:w-auto group btn btn-primary px-8 py-4 text-lg rounded-2xl shadow-xl shadow-primary-900/10 hover:shadow-2xl hover:shadow-primary-900/20"
                            >
                                <span>Recevoir mon offre</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <p className="text-sm text-neutral-500 font-medium">
                                Sans engagement • Réponse en 24h
                            </p>
                        </div>

                        {/* Trust Metrics */}
                        <div
                            className={`flex items-center gap-10 pt-6 border-t border-neutral-200 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            {trustMetrics.map((metric, index) => (
                                <div key={index} className="flex flex-col">
                                    <div className="flex items-baseline gap-0.5">
                                        <span className="text-3xl lg:text-4xl font-bold text-primary-500 font-display">
                                            {metric.value}
                                        </span>
                                        <span className="text-xl lg:text-2xl font-bold text-primary-500 font-display">
                                            {metric.suffix}
                                        </span>
                                    </div>
                                    <span className="text-sm text-neutral-500 mt-1">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form - 5 columns */}
                    <div
                        className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 translate-x-8'}`}
                    >
                        <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
                            {/* Accent line */}
                            <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-accent-500 to-primary-500" />

                            {!isSubmitted ? (
                                <>
                                    <div className="text-center mb-8 pt-2">
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">
                                            Estimation gratuite en 2 minutes
                                        </h3>
                                        <p className="text-sm text-neutral-500">Aucun engagement requis</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Property Type */}
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

                                        {/* City */}
                                        <div>
                                            <label className="input-label">Ville / Région</label>
                                            <input
                                                type="text"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                placeholder="Ex: Montréal, Laval, Longueuil..."
                                                className="input-field"
                                                required
                                            />
                                        </div>

                                        {/* Situation */}
                                        <div>
                                            <label className="input-label">Votre situation</label>
                                            <select
                                                value={formData.situation}
                                                onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                                                className="input-field"
                                                required
                                            >
                                                <option value="">Sélectionnez...</option>
                                                {situations.map((sit) => (
                                                    <option key={sit.value} value={sit.value}>{sit.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Name & Phone */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="input-label">Votre nom</label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Prénom Nom"
                                                    className="input-field"
                                                    required
                                                />
                                            </div>
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
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn btn-primary py-4 text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Recevoir mon offre</span>
                                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>

                                        {/* Disclaimer */}
                                        <p className="flex items-center justify-center gap-2 text-xs text-neutral-500 text-center">
                                            <Shield className="w-4 h-4 text-neutral-400" />
                                            <span>Vos informations sont confidentielles</span>
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-2">
                                        <CheckCircle className="w-10 h-10 text-success" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 font-display">
                                        Merci {formData.name.split(' ')[0]}!
                                    </h3>
                                    <p className="text-neutral-600 text-lg max-w-xs mx-auto">
                                        Votre demande a été reçue avec succès.
                                    </p>
                                    <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-sm text-primary-800">
                                        Un membre de notre équipe analysera votre propriété et vous contactera dans les <strong>prochaines 24h</strong>.
                                    </div>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-sm font-medium text-neutral-400 hover:text-primary-500 underline underline-offset-4 transition-colors"
                                    >
                                        Faire une autre demande
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
