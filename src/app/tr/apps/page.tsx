import { t } from "@/lib/i18n";
import { apps } from "@/data/apps";
import AppCard from "@/components/AppCard";

const locale = "tr";

export default function AppsPage() {
    const availableApps = apps.filter((app) => app.status === "available");
    const comingSoonApps = apps.filter((app) => app.status === "coming-soon");

    return (
        <div className="relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />

            {/* Header */}
            <section className="relative py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            <span className="text-gradient">{t("apps.title", locale)}</span>
                        </h1>
                        <p className="text-neutral-500 text-lg">
                            {t("apps.subtitle", locale)}
                        </p>
                    </div>
                </div>
            </section>

            {/* Available Apps */}
            <section className="relative py-12">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {availableApps.map((app) => (
                            <AppCard key={app.id} app={app} locale={locale} featured />
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            {comingSoonApps.length > 0 && (
                <section className="relative py-12 pb-24">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                                {t("comingSoon.title", locale)}
                            </h2>
                            <p className="text-neutral-500">
                                {t("comingSoon.subtitle", locale)}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {comingSoonApps.map((app) => (
                                <AppCard key={app.id} app={app} locale={locale} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
