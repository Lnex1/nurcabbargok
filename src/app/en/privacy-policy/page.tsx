import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "en";

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "introduction", title: "Introduction" },
        { id: "information-collection", title: "Information We Collect" },
        { id: "authentication", title: "Authentication" },
        { id: "advertising", title: "Advertising" },
        { id: "payments", title: "Payments and Subscriptions" },
        { id: "analytics", title: "Analytics" },
        { id: "notifications", title: "Push Notifications" },
        { id: "data-sharing", title: "Data Sharing" },
        { id: "data-retention", title: "Data Retention" },
        { id: "children", title: "Children's Privacy" },
        { id: "your-rights", title: "Your Rights" },
        { id: "changes", title: "Changes to This Policy" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Header */}
            <section className="relative py-16 md:py-24 bg-pastel-purple/30">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            {t("privacy.title", locale)}
                        </h1>
                        <p className="text-neutral-500">
                            {t("privacy.lastUpdated", locale)}: {t("privacy.date", locale)}
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
                                    {t("privacy.toc", locale)}
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
                                <section id="introduction" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Introduction</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a mobile application designed to help users track their daily moods and view aggregated insights. We respect your privacy and are committed to protecting your personal data.
                                    </p>
                                    <p className="text-neutral-600">
                                        This Privacy Policy explains how we collect, use, and protect your information when you use the Zodiac Flow: Mood Tracker mobile application.
                                    </p>
                                </section>

                                {/* Information Collection */}
                                <section id="information-collection" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>

                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">1.1 Personal Information You Provide</h3>
                                    <p className="text-neutral-600 mb-4">When you create an account or use the App, we may collect:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Email address</li>
                                        <li>First name or nickname</li>
                                        <li>Date of birth</li>
                                        <li>Zodiac sign (derived from date of birth)</li>
                                        <li>Mood entries and optional notes you voluntarily submit</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">1.2 Automatically Collected Information</h3>
                                    <p className="text-neutral-600 mb-4">We may automatically collect limited technical information, such as:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Country or region (derived from device settings)</li>
                                        <li>Device and usage information for analytics and performance purposes</li>
                                    </ul>
                                </section>

                                {/* Authentication */}
                                <section id="authentication" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Authentication</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker requires an account to function properly. We support the following sign-in methods:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Email and password</li>
                                        <li>Google Sign-In</li>
                                        <li>Sign in with Apple</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        Guest or anonymous access is not available.
                                    </p>
                                </section>

                                {/* Advertising */}
                                <section id="advertising" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Advertising</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker, the free subscription plan displays ads using Google AdMob.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Ads may be personalized or non-personalized depending on your device settings and consent.</li>
                                        <li>Users with an active premium subscription will not see ads.</li>
                                        <li>Advertising technologies may use device identifiers as required to deliver ads.</li>
                                    </ul>
                                </section>

                                {/* Payments */}
                                <section id="payments" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Payments and Subscriptions</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker offers optional paid subscriptions through Apple In-App Purchases, including:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Monthly and yearly subscription plans</li>
                                        <li>A 7-day free trial for eligible users</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        All payments, renewals, and cancellations are managed by Apple. We do not collect or store payment information.
                                    </p>
                                </section>

                                {/* Analytics */}
                                <section id="analytics" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Analytics</h2>
                                    <p className="text-neutral-600 mb-4">
                                        We use Supabase Analytics to understand how users interact with the App, improve performance, and fix issues.
                                    </p>
                                    <p className="text-neutral-600">
                                        Analytics data is collected in aggregated form and is not used to personally identify users.
                                    </p>
                                </section>

                                {/* Push Notifications */}
                                <section id="notifications" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Push Notifications</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker may send push notifications for reminder purposes, such as encouraging users to log their mood.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Notifications are not used for marketing or advertising.</li>
                                        <li>You can disable notifications at any time through your device settings.</li>
                                    </ul>
                                </section>

                                {/* Data Sharing */}
                                <section id="data-sharing" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Data Sharing</h2>
                                    <p className="text-neutral-600 mb-4">
                                        We do not sell your personal data.
                                    </p>
                                    <p className="text-neutral-600 mb-4">
                                        We may share limited data only with trusted service providers (such as Google and Apple) strictly for:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>App functionality</li>
                                        <li>Authentication</li>
                                        <li>Analytics</li>
                                        <li>Advertising delivery</li>
                                    </ul>
                                </section>

                                {/* Data Retention */}
                                <section id="data-retention" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Data Retention</h2>
                                    <p className="text-neutral-600">
                                        Your personal data is retained only as long as necessary to provide the App&apos;s functionality or until you delete your account.
                                    </p>
                                </section>

                                {/* Children */}
                                <section id="children" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Children&apos;s Privacy</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow is not intended for children under the age of 13.
                                    </p>
                                    <p className="text-neutral-600">
                                        We do not knowingly collect personal data from children under 13. If you believe that a child has provided us with personal information, please contact us so we can delete the data.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section id="your-rights" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Your Rights</h2>
                                    <p className="text-neutral-600 mb-4">Depending on your location, you may have rights to:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Access your personal data</li>
                                        <li>Request correction or deletion of your data</li>
                                        <li>Withdraw consent where applicable</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        Requests can be made by contacting us at the email address below.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Changes to This Policy</h2>
                                    <p className="text-neutral-600">
                                        We may update this Privacy Policy from time to time. Changes will be reflected by updating the &quot;Last updated&quot; date.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Contact</h2>
                                    <p className="text-neutral-600 mb-4">
                                        For questions or concerns about this Privacy Policy, please contact us:
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
