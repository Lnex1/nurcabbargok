import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://lnex1.github.io/nurcabbargok";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/apps",
        "/zodiac-flow",
        "/support",
        "/privacy-policy",
        "/terms-of-service",
    ];

    const locales = ["en", "tr"];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Add entries for each locale
    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}/`,
                lastModified: new Date(),
                changeFrequency: route === "" ? "weekly" : "monthly",
                priority: route === "" ? 1 : route === "/zodiac-flow" ? 0.9 : 0.7,
            });
        });
    });

    return sitemapEntries;
}
