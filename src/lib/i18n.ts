import { Locale, locales, defaultLocale } from "@/types";
import enMessages from "../../locales/en.json";
import trMessages from "../../locales/tr.json";

// Type for nested translation keys
type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<typeof enMessages>;

const messages: Record<Locale, typeof enMessages> = {
    en: enMessages,
    tr: trMessages,
};

/**
 * Get translation for a given key and locale
 */
export function t(key: string, locale: Locale): string {
    const keys = key.split(".");
    let value: unknown = messages[locale];

    for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
            value = (value as Record<string, unknown>)[k];
        } else {
            console.warn(`Translation key not found: ${key} for locale: ${locale}`);
            return key;
        }
    }

    return typeof value === "string" ? value : key;
}

/**
 * Get all translations for a locale
 */
export function getMessages(locale: Locale) {
    return messages[locale] || messages[defaultLocale];
}

/**
 * Check if locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}

/**
 * Get localized path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
    // Remove any existing locale prefix
    const cleanPath = path.replace(/^\/(en|tr)/, "");
    return `/${locale}${cleanPath || "/"}`;
}

/**
 * Get the opposite locale for language switching
 */
export function getOppositeLocale(locale: Locale): Locale {
    return locale === "en" ? "tr" : "en";
}

/**
 * Extract locale from pathname
 */
export function getLocaleFromPath(pathname: string): Locale {
    const segments = pathname.split("/").filter(Boolean);
    const potentialLocale = segments[0];

    if (isValidLocale(potentialLocale)) {
        return potentialLocale;
    }

    return defaultLocale;
}

export { locales, defaultLocale };
export type { Locale };
