import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "en";

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "introduction", title: "Introduction" },
        { id: "information-collection", title: "Information We Collect" },
        { id: "information-use", title: "How We Use Your Information" },
        { id: "data-storage", title: "Data Storage and Security" },
        { id: "third-party", title: "Third-Party Services" },
        { id: "your-rights", title: "Your Rights" },
        { id: "children", title: "Children's Privacy" },
        { id: "changes", title: "Changes to This Policy" },
        { id: "contact", title: "Contact Us" },
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
                                        [PLACEHOLDER: Replace with your actual privacy policy introduction]
                                    </p>
                                    <p className="text-neutral-600">
                                        This Privacy Policy describes how Fatma Nur CABBAR GOK (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information about you when you use our mobile application Zodiac Flow (&quot;the App&quot;).
                                    </p>
                                </section>

                                {/* Information Collection */}
                                <section id="information-collection" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual information about data collection]
                                    </p>
                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Information You Provide</h3>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Account information (email address, name, date of birth)</li>
                                        <li>Mood entries and personal notes</li>
                                        <li>Profile preferences and settings</li>
                                    </ul>
                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Automatically Collected Information</h3>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Device information and identifiers</li>
                                        <li>Usage data and analytics</li>
                                        <li>Log data</li>
                                    </ul>
                                </section>

                                {/* Information Use */}
                                <section id="information-use" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual information use details]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>To provide and improve our services</li>
                                        <li>To personalize your experience</li>
                                        <li>To communicate with you about updates and features</li>
                                        <li>To ensure security and prevent fraud</li>
                                    </ul>
                                </section>

                                {/* Data Storage */}
                                <section id="data-storage" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Storage and Security</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual data storage and security information]
                                    </p>
                                    <p className="text-neutral-600">
                                        We use industry-standard security measures to protect your personal information. Your data is stored securely using Supabase cloud infrastructure with encryption at rest and in transit.
                                    </p>
                                </section>

                                {/* Third Party */}
                                <section id="third-party" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Services</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual third-party services information]
                                    </p>
                                    <p className="text-neutral-600">
                                        Our app may use third-party services that collect information used to identify you. These include:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Apple App Store (for app distribution and in-app purchases)</li>
                                        <li>RevenueCat (for subscription management)</li>
                                        <li>Supabase (for backend services)</li>
                                    </ul>
                                </section>

                                {/* Your Rights */}
                                <section id="your-rights" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual user rights information]
                                    </p>
                                    <p className="text-neutral-600">You have the right to:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Access the personal data we hold about you</li>
                                        <li>Request correction of incorrect data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Export your data</li>
                                        <li>Withdraw consent at any time</li>
                                    </ul>
                                </section>

                                {/* Children */}
                                <section id="children" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Children&apos;s Privacy</h2>
                                    <p className="text-neutral-600">
                                        [PLACEHOLDER: Replace with actual children&apos;s privacy policy]
                                    </p>
                                    <p className="text-neutral-600 mt-4">
                                        Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to This Policy</h2>
                                    <p className="text-neutral-600">
                                        [PLACEHOLDER: Replace with actual policy change notification details]
                                    </p>
                                    <p className="text-neutral-600 mt-4">
                                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
                                    <p className="text-neutral-600 mb-4">
                                        If you have any questions about this Privacy Policy, please contact us:
                                    </p>
                                    <div className="card p-6 bg-pastel-purple/30">
                                        <p className="text-neutral-700">
                                            <strong>Email:</strong> nurcabbargok@gmail.com
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
