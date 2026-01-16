"use client";

import { t } from "@/lib/i18n";
import Accordion from "@/components/Accordion";

const locale = "tr";

export default function SupportPage() {
    const faqs = [
        {
            question: t("support.faq.q1.question", locale),
            answer: t("support.faq.q1.answer", locale)
        },
        {
            question: t("support.faq.q2.question", locale),
            answer: t("support.faq.q2.answer", locale)
        },
        {
            question: t("support.faq.q3.question", locale),
            answer: t("support.faq.q3.answer", locale)
        },
    ];

    const categories = [
        {
            id: "help",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: "bg-blue-50 text-blue-600"
        },
        {
            id: "business",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-purple-50 text-purple-600"
        },
        {
            id: "feedback",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            ),
            color: "bg-rose-50 text-rose-600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBFF] pb-24">
            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 text-sm font-bold text-primary-500 bg-primary-50 rounded-full mb-6 uppercase tracking-widest">
                            {t("support.title", locale)}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 mb-6 tracking-tight">
                            {t("support.subtitle", locale)}
                        </h1>
                        <p className="text-xl text-neutral-500 leading-relaxed">
                            {t("support.description", locale)}
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Card Grid */}
            <section className="container-custom pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-soft hover:border-primary-100 transition-all duration-300">
                            <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                {t(`support.categories.${cat.id}.title`, locale)}
                            </h3>
                            <p className="text-neutral-500 leading-relaxed text-sm">
                                {t(`support.categories.${cat.id}.description`, locale)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact & FAQ Grid */}
            <section className="container-custom pt-8">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Side: Contact Form/Details */}
                    <div className="lg:w-5/12">
                        <div className="bg-white rounded-[3rem] p-10 md:p-12 border border-neutral-100 shadow-soft h-full hover:border-primary-100 transition-all">
                            <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t("support.contactTitle", locale)}</h2>
                            <p className="text-neutral-500 mb-10 text-lg">{t("support.contactDescription", locale)}</p>

                            <div className="space-y-10">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400 font-bold mb-1 uppercase tracking-widest leading-none">E-posta</p>
                                        <p className="text-lg font-semibold text-neutral-800 tracking-tight">{t("support.email", locale)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary-50 flex items-center justify-center flex-shrink-0 text-secondary-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400 font-bold mb-1 uppercase tracking-widest leading-none">{t("support.responseTitle", locale)}</p>
                                        <p className="text-lg font-semibold text-neutral-800 tracking-tight">{t("support.responseTime", locale)}</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`mailto:${t("support.email", locale)}`}
                                className="mt-12 btn btn-primary w-full py-5 text-lg"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {t("support.emailButton", locale)}
                            </a>
                        </div>
                    </div>

                    {/* Right Side: FAQ */}
                    <div className="lg:w-7/12 py-4">
                        <div className="mb-10">
                            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">{t("support.faq.title", locale)}</h2>
                        </div>
                        <Accordion items={faqs} />
                    </div>
                </div>
            </section>

            {/* Privacy Section Box */}
            <section className="container-custom mt-24">
                <div className="bg-white rounded-[3.5rem] p-10 md:p-16 border border-neutral-100 shadow-soft text-center group">
                    <div className="w-20 h-20 bg-neutral-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-50 transition-colors duration-500">
                        <svg className="w-10 h-10 text-neutral-400 group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">{t("support.dataRequest.title", locale)}</h2>
                    <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto">{t("support.dataRequest.description", locale)}</p>

                    <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
                        <a
                            href={`mailto:${t("support.email", locale)}?subject=Data Deletion Request`}
                            className="flex-1 flex items-center justify-between p-6 bg-white border border-neutral-100 rounded-3xl hover:border-rose-200 hover:bg-rose-50/30 transition-all group/item"
                        >
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center group-hover/item:bg-rose-500 group-hover/item:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </span>
                                <span className="font-bold text-neutral-800">{t("support.dataRequest.deleteRequest", locale)}</span>
                            </div>
                            <svg className="w-5 h-5 text-neutral-300 group-hover/item:text-rose-500 transform group-hover/item:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>

                        <a
                            href={`mailto:${t("support.email", locale)}?subject=Data Export Request`}
                            className="flex-1 flex items-center justify-between p-6 bg-white border border-neutral-100 rounded-3xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group/item"
                        >
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="font-bold text-neutral-800">{t("support.dataRequest.exportRequest", locale)}</span>
                            </div>
                            <svg className="w-5 h-5 text-neutral-300 group-hover/item:text-blue-500 transform group-hover/item:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
