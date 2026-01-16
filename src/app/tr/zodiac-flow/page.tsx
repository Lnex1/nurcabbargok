"use client";

import Image from "next/image";
import Link from "next/link";
import { t } from "@/lib/i18n";
import Accordion from "@/components/Accordion";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

const locale = "tr";
const basePath = "/nurcabbargok";

export default function ZodiacFlowPage() {
    const screenshots = [
        `${basePath}/screenshots/screen-home.jpg`,
        `${basePath}/screenshots/screen-analysis.jpg`,
        `${basePath}/screenshots/screen-stats.jpg`,
        `${basePath}/screenshots/screen-friends.jpg`,
        `${basePath}/screenshots/screen-profile.jpg`
    ];

    const features = [
        { key: "moodTracking", icon: "📊" },
        { key: "zodiacInsights", icon: "✨" },
        { key: "analytics", icon: "📈" },
        { key: "community", icon: "👥" },
        { key: "notifications", icon: "🔔" },
        { key: "privacy", icon: "🔒" },
    ];

    const faqs = [
        { key: "q1" },
        { key: "q2" },
        { key: "q3" },
        { key: "q4" },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />

            {/* Hero Section */}
            <section className="relative pt-20 pb-10 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Image
                                src={`${basePath}/brand/icon.png`}
                                alt="Zodiac Flow Icon"
                                width={80}
                                height={80}
                                className="rounded-2xl shadow-soft-lg"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                            {t("zodiacFlowPage.title", locale)}
                        </h1>
                        <p className="text-xl text-primary-500 font-medium mb-6">
                            {t("zodiacFlowPage.subtitle", locale)}
                        </p>
                        <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
                            {t("zodiacFlowPage.heroDescription", locale)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#"
                                className="btn btn-primary text-base px-8 py-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                </svg>
                                {t("zodiacFlowPage.downloadNow", locale)}
                            </a>
                            <a href="#features" className="btn btn-secondary text-base px-8 py-4">
                                {t("zodiacFlowPage.learnMore", locale)}
                            </a>
                        </div>
                    </div>

                    {/* App Screenshots Carousel */}
                    <div className="w-full">
                        <ScreenshotCarousel screenshots={screenshots} />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative py-20 bg-pastel-purple/30">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            {t("zodiacFlowPage.features.title", locale)}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div key={feature.key} className="card p-6 hover-lift">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                    {t(`zodiacFlowPage.features.${feature.key}.title`, locale)}
                                </h3>
                                <p className="text-neutral-600">
                                    {t(`zodiacFlowPage.features.${feature.key}.description`, locale)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="relative py-20 bg-pastel-pink/30">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            {t("zodiacFlowPage.pricing.title", locale)}
                        </h2>
                        <p className="text-neutral-500 text-lg">
                            {t("zodiacFlowPage.pricing.subtitle", locale)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Free Plan */}
                        <div className="card p-6">
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                {t("zodiacFlowPage.pricing.free.title", locale)}
                            </h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-neutral-900">
                                    {t("zodiacFlowPage.pricing.free.price", locale)}
                                </span>
                                <span className="text-neutral-500 text-sm ml-1">
                                    {t("zodiacFlowPage.pricing.free.period", locale)}
                                </span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {["1", "2", "3"].map((num) => (
                                    <li key={num} className="flex items-center gap-2 text-sm text-neutral-600">
                                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {t(`zodiacFlowPage.pricing.free.features.${num}`, locale)}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Monthly Plan */}
                        <div className="card p-6 border-2 border-primary-300 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                                Popüler
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                {t("zodiacFlowPage.pricing.monthly.title", locale)}
                            </h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-neutral-900">
                                    {t("zodiacFlowPage.pricing.monthly.price", locale)}
                                </span>
                                <span className="text-neutral-500 text-sm ml-1">
                                    {t("zodiacFlowPage.pricing.monthly.period", locale)}
                                </span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {["1", "2", "3", "4", "5"].map((num) => (
                                    <li key={num} className="flex items-center gap-2 text-sm text-neutral-600">
                                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {t(`zodiacFlowPage.pricing.monthly.features.${num}`, locale)}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Yearly Plan */}
                        <div className="card p-6 relative">
                            <div className="absolute -top-3 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                                {t("zodiacFlowPage.pricing.yearly.badge", locale)}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                {t("zodiacFlowPage.pricing.yearly.title", locale)}
                            </h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-neutral-900">
                                    {t("zodiacFlowPage.pricing.yearly.price", locale)}
                                </span>
                                <span className="text-neutral-500 text-sm ml-1">
                                    {t("zodiacFlowPage.pricing.yearly.period", locale)}
                                </span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {["1", "2", "3"].map((num) => (
                                    <li key={num} className="flex items-center gap-2 text-sm text-neutral-600">
                                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {t(`zodiacFlowPage.pricing.yearly.features.${num}`, locale)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 space-y-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Abonelikler uygulama içinden yönetilir
                        </div>
                        <p className="text-neutral-500 text-sm">
                            {t("zodiacFlowPage.pricing.trialNote", locale)}
                        </p>
                        <p className="text-neutral-400 text-xs">
                            {t("zodiacFlowPage.pricing.appleNote", locale)}
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                            ❓ SSS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            {t("zodiacFlowPage.faq.title", locale)}
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion
                            items={faqs.map((faq) => ({
                                question: t(`zodiacFlowPage.faq.${faq.key}.question`, locale),
                                answer: t(`zodiacFlowPage.faq.${faq.key}.answer`, locale),
                            }))}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
