import { AppData } from "@/types";

export const apps: AppData[] = [
    {
        id: "zodiac-flow",
        name: "Zodiac Flow",
        tagline: "Mood Tracker & Zodiac Insights",
        description: "Track your daily emotions, discover patterns, and connect with the cosmic energy of your zodiac sign.",
        icon: "/brand/zodiac-flow-icon.svg",
        appStoreUrl: "#",
        status: "available",
        features: [
            "Daily mood tracking",
            "Zodiac-based insights",
            "Emotion analytics",
            "Community features",
            "Personalized notifications",
        ],
    },
    {
        id: "coming-soon-1",
        name: "comingSoon.placeholder1.title",
        tagline: "comingSoon.placeholder1.description",
        description: "A new thoughtful app is in development. Stay tuned for updates!",
        icon: "/brand/placeholder-icon.svg",
        appStoreUrl: "#",
        status: "coming-soon",
        features: [],
        useI18n: true,
    },
    {
        id: "coming-soon-2",
        name: "comingSoon.placeholder2.title",
        tagline: "comingSoon.placeholder2.description",
        description: "More exciting projects are on the way.",
        icon: "/brand/placeholder-icon.svg",
        appStoreUrl: "#",
        status: "coming-soon",
        features: [],
        useI18n: true,
    },
];

export function getAppById(id: string): AppData | undefined {
    return apps.find((app) => app.id === id);
}

export function getAvailableApps(): AppData[] {
    return apps.filter((app) => app.status === "available");
}

export function getComingSoonApps(): AppData[] {
    return apps.filter((app) => app.status === "coming-soon");
}
