import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple via-white to-pastel-pink opacity-60" />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary-300/30 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-secondary-300/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
            </div>

            <div className="container-custom text-center px-4">
                {/* 404 Number */}
                <div className="relative inline-block mb-8">
                    <span className="text-[150px] md:text-[200px] font-bold text-gradient leading-none">
                        404
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl -z-10" />
                </div>

                {/* Message */}
                <h1 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
                    Sayfa Bulunamadı
                </h1>
                <p className="text-neutral-500 text-lg max-w-md mx-auto mb-10">
                    Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/nurcabbargok/tr/"
                        className="btn btn-primary px-8"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        href="/nurcabbargok/tr/support/"
                        className="btn btn-secondary px-8"
                    >
                        Yardım Al
                    </Link>
                </div>

                {/* Fun element */}
                <div className="mt-16 text-neutral-400 text-sm">
                    <p>Kaybolmuş gibi hissediyorsanız endişelenmeyin,</p>
                    <p>en iyi keşifler bazen yanlış yollarda başlar. ✨</p>
                </div>
            </div>
        </div>
    );
}
