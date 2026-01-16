"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { t, getLocalizedPath } from "@/lib/i18n";

const locale = "tr";
const basePath = "/nurcabbargok";

export default function AboutPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: "Swift & SwiftUI", level: 90 },
        { name: "iOS Development", level: 95 },
        { name: "UI/UX Design", level: 85 },
        { name: "React & Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
    ];

    const timeline = [
        {
            year: "2024",
            title: "Zodiac Flow Lansmanı",
            description: "İlk iOS uygulamamı App Store'da yayınladım.",
            icon: "🚀"
        },
        {
            year: "2023",
            title: "Indie Dev Yolculuğu",
            description: "Bağımsız uygulama geliştirmeye odaklanmaya karar verdim.",
            icon: "💡"
        },
        {
            year: "2022",
            title: "iOS Geliştirme",
            description: "Swift ve SwiftUI öğrenmeye başladım.",
            icon: "📱"
        },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple via-white to-pastel-pink opacity-60" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-300/30 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-300/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
            </div>

            {/* Hero Section */}
            <section className="relative py-24 md:py-32">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            {/* Profile Image */}
                            <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-30 scale-110" />
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-xl border-4 border-white">
                                    <Image
                                        src={`${basePath}/brand/developer-logo.png`}
                                        alt="Nur CABBAR GÖK"
                                        width={240}
                                        height={240}
                                        className="object-contain p-1 animate-heartbeat"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "100ms" }}>
                                <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                                    👋 Merhaba, ben
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                                    <span className="text-gradient">Nur CABBAR GÖK</span>
                                </h1>
                                <p className="text-xl text-neutral-600 mb-6">
                                    Bağımsız iOS Uygulama Geliştiricisi
                                </p>
                                <p className="text-neutral-500 leading-relaxed mb-8">
                                    Türkiye'den bir indie developer olarak, insanların günlük yaşamlarını
                                    kolaylaştıran ve güzelleştiren mobil uygulamalar geliştiriyorum.
                                    Zarif tasarım ve anlamlı işlevselliği bir araya getirmeye tutkuyla bağlıyım.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Link href={getLocalizedPath("/apps", locale)} className="btn btn-primary">
                                        Projelerimi Gör
                                    </Link>
                                    <Link href={getLocalizedPath("/support", locale)} className="btn btn-secondary">
                                        İletişime Geç
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium text-secondary-600 bg-secondary-50 rounded-full mb-4">
                                💻 Yetenekler
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                                Teknoloji Yığınım
                            </h2>
                        </div>

                        <div className="card p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-neutral-700 group-hover:text-primary-500 transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-neutral-500 text-sm">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${index * 100}ms`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative py-20 bg-gradient-to-b from-transparent via-pastel-purple/20 to-transparent">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-4">
                                📅 Yolculuk
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                                Geliştirici Hikayem
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300 transform md:-translate-x-1/2" />

                            <div className="space-y-12">
                                {timeline.map((item, index) => (
                                    <div
                                        key={item.year}
                                        className={`relative flex items-center gap-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-primary-400 rounded-full transform -translate-x-1/2 z-10" />

                                        {/* Content */}
                                        <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                            <div className="card p-6 hover:shadow-glow transition-shadow">
                                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                                <span className="text-sm font-medium text-primary-500">{item.year}</span>
                                                <h3 className="text-xl font-bold text-neutral-800 mt-1 mb-2">{item.title}</h3>
                                                <p className="text-neutral-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                                ✨ Değerler
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                                Neye İnanıyorum
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "🎨",
                                    title: "Tasarım Öncelikli",
                                    description: "Güzel ve kullanıcı dostu arayüzler yaratmak en büyük önceliğim."
                                },
                                {
                                    icon: "🔒",
                                    title: "Gizlilik Odaklı",
                                    description: "Kullanıcı verilerini korumak ve şeffaflık vazgeçilmezim."
                                },
                                {
                                    icon: "💪",
                                    title: "Sürekli Gelişim",
                                    description: "Her gün yeni şeyler öğrenmek ve kendimi geliştirmek için çalışıyorum."
                                }
                            ].map((value, index) => (
                                <div
                                    key={value.title}
                                    className="card p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-8"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <span className="text-4xl mb-4 block">{value.icon}</span>
                                    <h3 className="text-lg font-bold text-neutral-800 mb-2">{value.title}</h3>
                                    <p className="text-neutral-600 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Birlikte Çalışalım
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            Bir proje fikriniz mi var? Ya da sadece merhaba demek mi istiyorsunuz?
                            Her zaman yeni bağlantılar kurmaktan mutluluk duyarım.
                        </p>
                        <Link href={getLocalizedPath("/support", locale)} className="btn btn-primary px-10 py-4 text-lg">
                            Bana Ulaşın
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
