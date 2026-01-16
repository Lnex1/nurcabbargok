import Link from "next/link";
import Image from "next/image";
import { AppData } from "@/types";
import { Locale, t, getLocalizedPath } from "@/lib/i18n";

interface AppCardProps {
    app: AppData;
    locale: Locale;
    featured?: boolean;
}

export default function AppCard({ app, locale, featured = false }: AppCardProps) {
    const basePath = "/nurcabbargok";
    const isComingSoon = app.status === "coming-soon";

    return (
        <div
            className={`card hover-lift relative overflow-hidden ${featured ? "p-8" : "p-6"
                } ${isComingSoon ? "opacity-70" : ""}`}
        >
            {/* Coming Soon Badge */}
            {isComingSoon && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                    {t("apps.comingSoon", locale)}
                </div>
            )}

            {/* App Icon */}
            <div
                className={`${featured ? "w-20 h-20" : "w-16 h-16"
                    } rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mb-4 overflow-hidden`}
            >
                {app.id === "zodiac-flow" ? (
                    <Image
                        src={`${basePath}/brand/icon.png`}
                        alt={app.name}
                        width={featured ? 80 : 64}
                        height={featured ? 80 : 64}
                        className="object-cover rounded-xl"
                    />
                ) : (
                    <svg
                        className={`${featured ? "w-10 h-10" : "w-8 h-8"} text-primary-400`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                )}
            </div>

            {/* App Info */}
            <h3
                className={`font-semibold text-neutral-800 ${featured ? "text-2xl mb-2" : "text-lg mb-1"
                    }`}
            >
                {app.name}
            </h3>
            <p
                className={`text-neutral-500 ${featured ? "text-base mb-4" : "text-sm mb-3"}`}
            >
                {app.tagline}
            </p>

            {/* Features (for featured cards) */}
            {featured && app.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                    {app.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                            <svg
                                className="w-4 h-4 text-primary-500 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}

            {/* Actions */}
            {!isComingSoon && (
                <div className={`flex gap-3 ${featured ? "flex-row" : "flex-col"}`}>
                    <a
                        href={app.appStoreUrl}
                        className="btn btn-primary text-sm flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                        </svg>
                        {t("featuredApp.downloadAppStore", locale)}
                    </a>
                    <Link
                        href={getLocalizedPath("/zodiac-flow", locale)}
                        className="btn btn-secondary text-sm"
                    >
                        {t("apps.viewDetails", locale)}
                    </Link>
                </div>
            )}
        </div>
    );
}
