// Supported locales
export type Locale = "en" | "tr";

export const locales: Locale[] = ["en", "tr"];
export const defaultLocale: Locale = "en";

// Route paths
export interface AppRoute {
    path: string;
    key: string;
}

export const routes: Record<string, AppRoute> = {
    home: { path: "/", key: "home" },
    apps: { path: "/apps", key: "apps" },
    zodiacFlow: { path: "/zodiac-flow", key: "zodiacFlow" },
    privacyPolicy: { path: "/privacy-policy", key: "privacyPolicy" },
    termsOfService: { path: "/terms-of-service", key: "termsOfService" },
    support: { path: "/support", key: "support" },
};

// App data structure
export interface AppData {
    id: string;
    name: string;
    tagline: string;
    description: string;
    icon: string;
    appStoreUrl: string;
    status: "available" | "coming-soon";
    features: string[];
    useI18n?: boolean;
}

// Navigation item
export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

// Pricing plan
export interface PricingPlan {
    id: string;
    title: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    isPopular?: boolean;
    badge?: string;
}

// FAQ item
export interface FAQItem {
    question: string;
    answer: string;
}

// Screenshot item
export interface Screenshot {
    src: string;
    alt: string;
}
