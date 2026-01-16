"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { t, getLocalizedPath } from "@/lib/i18n";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";

const locale = "en";
const basePath = "/nurcabbargok";

export default function HomePage() {
    const zodiacFlow = apps.find((app) => app.id === "zodiac-flow");
    const comingSoonApps = apps.filter((app) => app.status === "coming-soon");

    // Scroll animation refs
    const heroRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const comingSoonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 md:py-40">
                <div className="container-custom">
                    <div
                        ref={heroRef}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <p className="text-primary-500 font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            {t("hero.greeting", locale)}
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <span className="text-gradient">{t("hero.name", locale)}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            {t("hero.tagline", locale)}
                        </p>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            {t("hero.subtitle", locale)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
                            <Link
                                href={getLocalizedPath("/apps", locale)}
                                className="btn btn-primary text-base px-8 py-4 group"
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                {t("hero.ctaPrimary", locale)}
                            </Link>
                            <Link
                                href={getLocalizedPath("/support", locale)}
                                className="btn btn-secondary text-base px-8 py-4"
                            >
                                {t("hero.ctaSecondary", locale)}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Featured App Section */}
            <section className="relative py-24">
                <div className="container-custom">
                    <div
                        ref={featuredRef}
                        className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                    >
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                                ✨ {t("featuredApp.title", locale)}
                            </span>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="card p-8 md:p-12 bg-gradient-to-br from-white to-pastel-purple/30 border-primary-100">
                                <div className="flex flex-col lg:flex-row gap-10 items-center">
                                    {/* App Icon with glow effect */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl blur-xl opacity-30 scale-110" />
                                        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center overflow-hidden shadow-xl">
                                            <Image
                                                src={`${basePath}/brand/icon.png`}
                                                alt="Zodiac Flow"
                                                width={140}
                                                height={140}
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    {/* App Info */}
                                    <div className="flex-1 text-center lg:text-left">
                                        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                                            {t("featuredApp.zodiacFlowName", locale)}
                                        </h3>
                                        <p className="text-primary-500 font-medium mb-4 text-lg">
                                            {t("featuredApp.zodiacFlowSubtitle", locale)}
                                        </p>
                                        <p className="text-neutral-600 mb-8 text-lg">
                                            {t("featuredApp.zodiacFlowDescription", locale)}
                                        </p>

                                        {/* Features */}
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {Object.entries({
                                                moodTracking: t("featuredApp.features.moodTracking", locale),
                                                zodiacInsights: t("featuredApp.features.zodiacInsights", locale),
                                                analytics: t("featuredApp.features.analytics", locale),
                                                community: t("featuredApp.features.community", locale),
                                            }).map(([key, value]) => (
                                                <li key={key} className="flex items-center gap-3 text-neutral-600">
                                                    <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    {value}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <a
                                                href="#"
                                                className="btn btn-primary px-6"
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
                                                className="btn btn-secondary px-6"
                                            >
                                                {t("apps.viewDetails", locale)}
                                            </Link>
                                        </div>

                                        {/* Legal links */}
                                        <div className="mt-6 flex gap-4 text-sm text-neutral-500 justify-center lg:justify-start">
                                            <Link href={getLocalizedPath("/privacy-policy", locale)} className="hover:text-primary-500 transition-colors">
                                                {t("featuredApp.viewPrivacy", locale)}
                                            </Link>
                                            <span>•</span>
                                            <Link href={getLocalizedPath("/terms-of-service", locale)} className="hover:text-primary-500 transition-colors">
                                                {t("featuredApp.viewTerms", locale)}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="relative py-24 bg-gradient-to-b from-transparent via-pastel-purple/20 to-transparent">
                <div className="container-custom">
                    <div
                        ref={comingSoonRef}
                        className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                    >
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium text-secondary-600 bg-secondary-50 rounded-full mb-4">
                                🚀 {t("comingSoon.title", locale)}
                            </span>
                            <p className="text-neutral-500 text-lg">
                                {t("comingSoon.subtitle", locale)}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {comingSoonApps.map((app, index) => (
                                <div
                                    key={app.id}
                                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <AppCard app={app} locale={locale} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
