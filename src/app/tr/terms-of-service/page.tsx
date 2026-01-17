import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "tr";

export default function TermsOfServicePage() {
    const sections = [
        { id: "eligibility", title: "Uygunluk" },
        { id: "account", title: "Hesap Gereksinimi" },
        { id: "app-usage", title: "Uygulama Kullanımı" },
        { id: "user-content", title: "Kullanıcı İçeriği" },
        { id: "subscriptions", title: "Abonelikler ve Ücretsiz Deneme" },
        { id: "advertising", title: "Reklamcılık" },
        { id: "termination", title: "Fesih" },
        { id: "disclaimer", title: "Sorumluluk Reddi" },
        { id: "limitation", title: "Sorumluluk Sınırlaması" },
        { id: "changes", title: "Koşul Değişiklikleri" },
        { id: "contact", title: "İletişim" },
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
                                        Zodiac Flow: Mood Tracker&apos;ı indirerek, erişerek veya kullanarak bu Kullanım Koşullarını (&quot;Koşullar&quot;) kabul etmiş olursunuz. Kabul etmiyorsanız, lütfen Uygulamayı kullanmayın.
                                    </p>
                                </section>

                                {/* Eligibility */}
                                <section id="eligibility" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Uygunluk</h2>
                                    <p className="text-neutral-600">
                                        Zodiac Flow&apos;u kullanmak için en az 13 yaşında olmalısınız.
                                    </p>
                                </section>

                                {/* Account */}
                                <section id="account" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Hesap Gereksinimi</h2>
                                    <p className="text-neutral-600">
                                        Zodiac Flow: Mood Tracker, temel özelliklere erişmek için kullanıcıların hesap oluşturmasını gerektirir. Hesap bilgilerinizin gizliliğini korumaktan siz sorumlusunuz.
                                    </p>
                                </section>

                                {/* App Usage */}
                                <section id="app-usage" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Uygulama Kullanımı</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker&apos;ı yalnızca yasal amaçlarla ve bu Koşullara uygun olarak kullanmayı kabul edersiniz.
                                    </p>
                                    <p className="text-neutral-600 mb-2">Yapmamanız gerekenler:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Uygulamayı kötüye kullanmak</li>
                                        <li>Diğer kullanıcıların verilerine erişmeye çalışmak</li>
                                        <li>Uygulamanın çalışmasını engellemek</li>
                                    </ul>
                                </section>

                                {/* User Content */}
                                <section id="user-content" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Kullanıcı İçeriği</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Gönderdiğiniz içeriklerin (ruh hali kayıtları ve notlar gibi) mülkiyeti size aittir.
                                    </p>
                                    <p className="text-neutral-600">
                                        İçerik göndererek, Zodiac Flow: Mood Tracker&apos;a yalnızca Uygulama işlevselliğini sağlamak amacıyla bu içeriği saklama ve işleme izni vermiş olursunuz.
                                    </p>
                                </section>

                                {/* Subscriptions */}
                                <section id="subscriptions" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Abonelikler ve Ücretsiz Deneme</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker, Apple Uygulama İçi Satın Almalar aracılığıyla isteğe bağlı ücretli abonelikler sunar.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Abonelikler ücretsiz deneme süresi içerebilir.</li>
                                        <li>Apple hesabınızdan iptal edilmedikçe abonelikler otomatik olarak yenilenir.</li>
                                        <li>Fiyatlandırma ve yenileme koşulları satın alma sırasında görüntülenir.</li>
                                    </ul>
                                </section>

                                {/* Advertising */}
                                <section id="advertising" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Reklamcılık</h2>
                                    <p className="text-neutral-600">
                                        Zodiac Flow: Mood Tracker&apos;ın ücretsiz sürümü reklamlar içerir. Premium aboneler reklamsız deneyim yaşar.
                                    </p>
                                </section>

                                {/* Termination */}
                                <section id="termination" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Fesih</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Bu Koşulları ihlal eden hesapları askıya alma veya sonlandırma hakkını saklı tutarız.
                                    </p>
                                    <p className="text-neutral-600">
                                        Hesabınızı silerek istediğiniz zaman Uygulamayı kullanmayı bırakabilirsiniz.
                                    </p>
                                </section>

                                {/* Disclaimer */}
                                <section id="disclaimer" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Sorumluluk Reddi</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker yalnızca ruh hali takibi ve bilgilendirici içgörüler sağlar.
                                    </p>
                                    <p className="text-neutral-600">
                                        Uygulama tıbbi, psikolojik veya profesyonel tavsiye sunmaz.
                                    </p>
                                </section>

                                {/* Limitation */}
                                <section id="limitation" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Sorumluluk Sınırlaması</h2>
                                    <p className="text-neutral-600">
                                        Yasaların izin verdiği azami ölçüde, Zodiac Flow: Mood Tracker, Uygulamanın kullanımından kaynaklanan dolaylı veya sonuç niteliğindeki zararlardan sorumlu tutulamaz.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Koşul Değişiklikleri</h2>
                                    <p className="text-neutral-600">
                                        Bu Koşulları periyodik olarak güncelleyebiliriz. Değişikliklerden sonra Uygulamayı kullanmaya devam etmeniz, güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. İletişim</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Bu Koşullar hakkında sorularınız için iletişim:
                                    </p>
                                    <div className="card p-6 bg-pastel-purple/30">
                                        <p className="text-neutral-700">
                                            <strong>📧 E-posta:</strong> n.cabbargok@gmail.com
                                        </p>
                                        <Link
                                            href="/tr/support/"
                                            className="inline-block mt-4 text-primary-500 hover:text-primary-600 font-medium"
                                        >
                                            Destek sayfamızı ziyaret edin →
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
