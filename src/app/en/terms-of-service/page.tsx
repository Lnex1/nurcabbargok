import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "en";

export default function TermsOfServicePage() {
    const sections = [
        { id: "acceptance", title: "Acceptance of Terms" },
        { id: "description", title: "Description of Service" },
        { id: "account", title: "Account Registration" },
        { id: "subscriptions", title: "Subscriptions and Payments" },
        { id: "user-conduct", title: "User Conduct" },
        { id: "intellectual-property", title: "Intellectual Property" },
        { id: "disclaimer", title: "Disclaimer of Warranties" },
        { id: "limitation", title: "Limitation of Liability" },
        { id: "termination", title: "Termination" },
        { id: "governing-law", title: "Governing Law" },
        { id: "contact", title: "Contact Us" },
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
                                {/* Acceptance */}
                                <section id="acceptance" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acceptance of Terms</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with your actual terms of service introduction]
                                    </p>
                                    <p className="text-neutral-600">
                                        By downloading, installing, or using Zodiac Flow (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
                                    </p>
                                </section>

                                {/* Description */}
                                <section id="description" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Description of Service</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual service description]
                                    </p>
                                    <p className="text-neutral-600">
                                        Zodiac Flow is a mood tracking application that allows users to log their daily emotions, receive zodiac-based insights, and connect with a community of like-minded individuals.
                                    </p>
                                </section>

                                {/* Account */}
                                <section id="account" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Account Registration</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual account registration terms]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>You must provide accurate and complete information when creating an account</li>
                                        <li>You are responsible for maintaining the security of your account</li>
                                        <li>You must notify us immediately of any unauthorized access</li>
                                        <li>You must be at least 13 years old to use the App</li>
                                    </ul>
                                </section>

                                {/* Subscriptions */}
                                <section id="subscriptions" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Subscriptions and Payments</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual subscription terms]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Subscriptions are billed through your Apple ID account</li>
                                        <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
                                        <li>You can manage and cancel subscriptions in your App Store account settings</li>
                                        <li>Free trial periods may be offered and will convert to paid subscriptions unless cancelled</li>
                                    </ul>
                                </section>

                                {/* User Conduct */}
                                <section id="user-conduct" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">User Conduct</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual user conduct rules]
                                    </p>
                                    <p className="text-neutral-600">You agree not to:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Use the App for any illegal or unauthorized purpose</li>
                                        <li>Harass, abuse, or harm other users</li>
                                        <li>Upload malicious content or attempt to interfere with the App&apos;s functionality</li>
                                        <li>Impersonate others or provide false information</li>
                                        <li>Violate any applicable laws or regulations</li>
                                    </ul>
                                </section>

                                {/* Intellectual Property */}
                                <section id="intellectual-property" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Intellectual Property</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual IP terms]
                                    </p>
                                    <p className="text-neutral-600">
                                        All content, features, and functionality of the App are owned by Fatma Nur CABBAR GOK and are protected by copyright, trademark, and other intellectual property laws.
                                    </p>
                                </section>

                                {/* Disclaimer */}
                                <section id="disclaimer" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Disclaimer of Warranties</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual disclaimers]
                                    </p>
                                    <p className="text-neutral-600">
                                        THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                                    </p>
                                </section>

                                {/* Limitation */}
                                <section id="limitation" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual liability limitations]
                                    </p>
                                    <p className="text-neutral-600">
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.
                                    </p>
                                </section>

                                {/* Termination */}
                                <section id="termination" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Termination</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual termination terms]
                                    </p>
                                    <p className="text-neutral-600">
                                        We may terminate or suspend your account and access to the App at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users or to us.
                                    </p>
                                </section>

                                {/* Governing Law */}
                                <section id="governing-law" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Governing Law</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Replace with actual governing law details]
                                    </p>
                                    <p className="text-neutral-600">
                                        These Terms shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
                                    <p className="text-neutral-600 mb-4">
                                        If you have any questions about these Terms of Service, please contact us:
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
