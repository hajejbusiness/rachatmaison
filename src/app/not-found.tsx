import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
            <div className="text-center max-w-xl mx-auto">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-50 mb-8 border border-primary-100">
                    <span className="text-4xl font-bold text-primary-500 font-display">404</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display">
                    Oups! Cette page a déménagé.
                </h1>

                <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                    Il semblerait que cette page n&apos;existe plus. Mais ne vous inquiétez pas, contrairement à une vente immobilière traditionnelle, régler ce problème est très simple.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto btn btn-primary px-8 py-3.5"
                    >
                        <Home className="w-5 h-5" />
                        <span>Retour à l&apos;accueil</span>
                    </Link>
                    <a
                        href="javascript:history.back()"
                        className="w-full sm:w-auto btn bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 px-8 py-3.5"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Page précédente</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
