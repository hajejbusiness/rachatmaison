import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
    navigation: [
        { href: "#comment-ca-marche", label: "Comment ça marche" },
        { href: "#avantages", label: "Pourquoi nous" },
        { href: "#temoignages", label: "Témoignages" },
        { href: "#faq", label: "FAQ" },
    ],
    situations: [
        { href: "#situations", label: "Succession" },
        { href: "#situations", label: "Divorce" },
        { href: "#situations", label: "Difficultés financières" },
        { href: "#situations", label: "Propriétaire fatigué" },
    ],
    legal: [
        { href: "#", label: "Politique de confidentialité" },
        { href: "#", label: "Conditions d'utilisation" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-primary-800 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand - 4 columns */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl font-display">
                                RachatMaison.ca
                            </span>
                        </Link>
                        <p className="text-primary-100 text-sm leading-relaxed mb-6 max-w-xs">
                            On achète votre propriété. Vous gardez votre paix d&apos;esprit. Service professionnel et humain partout au Québec.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:+15146000078"
                                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                <span>(514) 600-0078</span>
                            </a>
                            <a
                                href="mailto:contact@rachatmaison.ca"
                                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                            >
                                <Mail className="w-4 h-4" />
                                <span>contact@rachatmaison.ca</span>
                            </a>
                            <div className="flex items-center gap-3 text-primary-200 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>Montréal, Québec</span>
                            </div>
                        </div>
                    </div>

                    {/* Links - 8 columns */}
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
                        {/* Navigation */}
                        <div>
                            <h4 className="font-semibold !text-white mb-5 font-display">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.navigation.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Situations */}
                        <div>
                            <h4 className="font-semibold !text-white mb-5 font-display">
                                Situations
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.situations.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-semibold !text-white mb-5 font-display">
                                Légal
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-700">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-primary-300 text-sm">
                            © {new Date().getFullYear()} RachatMaison.ca. Tous droits réservés.
                        </p>
                        <p className="text-primary-300/60 text-xs text-center md:text-right">
                            Nous sommes des investisseurs immobiliers, pas des courtiers. Toutes les transactions sont effectuées devant notaire.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
