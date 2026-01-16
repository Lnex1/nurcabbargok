"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale, t, getLocalizedPath, getOppositeLocale } from "@/lib/i18n";

interface HeaderProps {
    locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const basePath = "/nurcabbargok";

    const navItems = [
        { key: "home", href: getLocalizedPath("/", locale) },
        { key: "about", href: getLocalizedPath("/about", locale) },
        { key: "apps", href: getLocalizedPath("/apps", locale) },
        { key: "support", href: getLocalizedPath("/support", locale) },
    ];

    const oppositeLocale = getOppositeLocale(locale);
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    const languageSwitchHref = getLocalizedPath(currentPath, oppositeLocale);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container-custom">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href={getLocalizedPath("/", locale)}
                        className="flex items-center gap-3 hover-lift"
                    >
                        <Image
                            src={`${basePath}/brand/developer-logo.png`}
                            alt="NC Logo"
                            width={44}
                            height={44}
                            className="w-11 h-11 rounded-lg"
                        />
                        <div className="hidden sm:flex flex-col">
                            <span className="font-semibold text-neutral-800 text-sm leading-tight">
                                {locale === "tr" ? "Nur CABBAR GÖK" : "Nur CABBAR GOK"}
                            </span>
                            <span className="text-xs text-neutral-500">
                                Indie Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                            return (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                        ? "bg-primary-500 text-white shadow-md"
                                        : "text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
                                        }`}
                                >
                                    {t(`nav.${item.key}`, locale)}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Language Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <Link
                            href={languageSwitchHref}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-600 bg-white/60 rounded-full border border-neutral-200 hover:border-primary-300 hover:text-primary-500 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            {t("nav.language", locale)}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-neutral-100 animate-fade-in-down">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${pathname === item.href
                                        ? "text-primary-500 bg-primary-50"
                                        : "text-neutral-600 hover:bg-neutral-50"
                                        }`}
                                >
                                    {t(`nav.${item.key}`, locale)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
