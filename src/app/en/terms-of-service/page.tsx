import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "en";

export default function TermsOfServicePage() {
    const sections = [
        { id: "eligibility", title: "Eligibility" },
        { id: "account", title: "Account Requirement" },
        { id: "app-usage", title: "App Usage" },
        { id: "user-content", title: "User Content" },
        { id: "subscriptions", title: "Subscriptions and Free Trial" },
        { id: "advertising", title: "Advertising" },
        { id: "termination", title: "Termination" },
        { id: "disclaimer", title: "Disclaimer" },
        { id: "limitation", title: "Limitation of Liability" },
        { id: "changes", title: "Changes to These Terms" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Header */}
            <section className="relative py-16 md:py-24 bg-pastel-purple/30">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            {t("terms.title", locale)}
                        </h1>
                        <p className="text-neutral-500">
                            {t("terms.lastUpdated", locale)}: {t("terms.date", locale)}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-12 pb-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        {/* Table of Contents - Sidebar */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="sticky top-24 card p-6">
                                <h3 className="font-semibold text-neutral-900 mb-4">
                                    {t("terms.toc", locale)}
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block text-sm text-neutral-600 hover:text-primary-500 transition-colors py-1"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="prose prose-neutral max-w-none">
                                {/* Introduction */}
                                <section className="mb-12">
                                    <p className="text-neutral-600">
                                        By downloading, accessing, or using Zodiac Flow: Mood Tracker, you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the App.
                                    </p>
                                </section>

                                {/* Eligibility */}
                                <section id="eligibility" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Eligibility</h2>
                                    <p className="text-neutral-600">
                                        You must be at least 13 years old to use Zodiac Flow.
                                    </p>
                                </section>

                                {/* Account */}
                                <section id="account" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Account Requirement</h2>
                                    <p className="text-neutral-600">
                                        Zodiac Flow: Mood Tracker requires users to create an account to access core features. You are responsible for maintaining the confidentiality of your account credentials.
                                    </p>
                                </section>

                                {/* App Usage */}
                                <section id="app-usage" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. App Usage</h2>
                                    <p className="text-neutral-600 mb-4">
                                        You agree to use Zodiac Flow: Mood Tracker only for lawful purposes and in accordance with these Terms.
                                    </p>
                                    <p className="text-neutral-600 mb-2">You must not:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Misuse the App</li>
                                        <li>Attempt to access other users&apos; data</li>
                                        <li>Interfere with the App&apos;s operation</li>
                                    </ul>
                                </section>

                                {/* User Content */}
                                <section id="user-content" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. User Content</h2>
                                    <p className="text-neutral-600 mb-4">
                                        You retain ownership of the content you submit (such as mood entries and notes).
                                    </p>
                                    <p className="text-neutral-600">
                                        By submitting content, you grant Zodiac Flow: Mood Tracker permission to store and process it solely for providing App functionality.
                                    </p>
                                </section>

                                {/* Subscriptions */}
                                <section id="subscriptions" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Subscriptions and Free Trial</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker offers optional paid subscriptions via Apple In-App Purchases.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Subscriptions may include a free trial period.</li>
                                        <li>Subscriptions automatically renew unless canceled through your Apple account.</li>
                                        <li>Pricing and renewal terms are displayed at the time of purchase.</li>
                                    </ul>
                                </section>

                                {/* Advertising */}
                                <section id="advertising" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Advertising</h2>
                                    <p className="text-neutral-600">
                                        The free version of Zodiac Flow: Mood Tracker includes advertisements. Premium subscribers receive an ad-free experience.
                                    </p>
                                </section>

                                {/* Termination */}
                                <section id="termination" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Termination</h2>
                                    <p className="text-neutral-600 mb-4">
                                        We reserve the right to suspend or terminate accounts that violate these Terms.
                                    </p>
                                    <p className="text-neutral-600">
                                        You may stop using the App at any time by deleting your account.
                                    </p>
                                </section>

                                {/* Disclaimer */}
                                <section id="disclaimer" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Disclaimer</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker provides mood tracking and informational insights only.
                                    </p>
                                    <p className="text-neutral-600">
                                        The App does not provide medical, psychological, or professional advice.
                                    </p>
                                </section>

                                {/* Limitation */}
                                <section id="limitation" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Limitation of Liability</h2>
                                    <p className="text-neutral-600">
                                        To the maximum extent permitted by law, Zodiac Flow: Mood Tracker shall not be liable for any indirect or consequential damages arising from the use of the App.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Changes to These Terms</h2>
                                    <p className="text-neutral-600">
                                        We may update these Terms periodically. Continued use of the App after changes means you accept the updated Terms.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Contact</h2>
                                    <p className="text-neutral-600 mb-4">
                                        For questions regarding these Terms, contact:
                                    </p>
                                    <div className="card p-6 bg-pastel-purple/30">
                                        <p className="text-neutral-700">
                                            <strong>📧 Email:</strong> n.cabbargok@gmail.com
                                        </p>
                                        <Link
                                            href="/en/support/"
                                            className="inline-block mt-4 text-primary-500 hover:text-primary-600 font-medium"
                                        >
                                            Visit our Support page →
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
