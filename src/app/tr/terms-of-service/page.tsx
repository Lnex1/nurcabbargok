import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "tr";

export default function TermsOfServicePage() {
    const sections = [
        { id: "acceptance", title: "Koşulların Kabulü" },
        { id: "description", title: "Hizmet Açıklaması" },
        { id: "account", title: "Hesap Kaydı" },
        { id: "subscriptions", title: "Abonelikler ve Ödemeler" },
        { id: "user-conduct", title: "Kullanıcı Davranışları" },
        { id: "intellectual-property", title: "Fikri Mülkiyet" },
        { id: "disclaimer", title: "Garanti Reddi" },
        { id: "limitation", title: "Sorumluluk Sınırlaması" },
        { id: "termination", title: "Fesih" },
        { id: "governing-law", title: "Geçerli Hukuk" },
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
                                {/* Acceptance */}
                                <section id="acceptance" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Koşulların Kabulü</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek kullanım koşulları girişi ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Zodiac Flow&apos;u (&quot;Uygulama&quot;) indirerek, yükleyerek veya kullanarak bu Kullanım Koşullarına bağlı olmayı kabul edersiniz. Bu koşulları kabul etmiyorsanız, lütfen Uygulamayı kullanmayın.
                                    </p>
                                </section>

                                {/* Description */}
                                <section id="description" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Hizmet Açıklaması</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek hizmet açıklaması ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Zodiac Flow, kullanıcıların günlük duygularını kaydetmelerine, burç tabanlı içgörüler almalarına ve benzer düşünen bireylerden oluşan bir toplulukla bağlantı kurmalarına olanak tanıyan bir ruh hali takip uygulamasıdır.
                                    </p>
                                </section>

                                {/* Account */}
                                <section id="account" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Hesap Kaydı</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek hesap kayıt koşulları ile değiştirin]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Hesap oluştururken doğru ve eksiksiz bilgi sağlamalısınız</li>
                                        <li>Hesabınızın güvenliğini korumaktan siz sorumlusunuz</li>
                                        <li>Herhangi bir yetkisiz erişimi derhal bize bildirmelisiniz</li>
                                        <li>Uygulamayı kullanmak için en az 13 yaşında olmalısınız</li>
                                    </ul>
                                </section>

                                {/* Subscriptions */}
                                <section id="subscriptions" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Abonelikler ve Ödemeler</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek abonelik koşulları ile değiştirin]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Abonelikler Apple ID hesabınız üzerinden faturalandırılır</li>
                                        <li>Mevcut dönemin bitiminden en az 24 saat önce iptal edilmedikçe abonelikler otomatik olarak yenilenir</li>
                                        <li>Abonelikleri App Store hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz</li>
                                        <li>Ücretsiz deneme süreleri sunulabilir ve iptal edilmediği takdirde ücretli aboneliklere dönüşür</li>
                                    </ul>
                                </section>

                                {/* User Conduct */}
                                <section id="user-conduct" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Kullanıcı Davranışları</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek kullanıcı davranış kuralları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">Şunları yapmamayı kabul edersiniz:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Uygulamayı yasadışı veya yetkisiz herhangi bir amaç için kullanmak</li>
                                        <li>Diğer kullanıcıları taciz etmek, kötüye kullanmak veya zarar vermek</li>
                                        <li>Kötü amaçlı içerik yüklemek veya Uygulamanın işlevselliğini bozmaya çalışmak</li>
                                        <li>Başkalarını taklit etmek veya yanlış bilgi sağlamak</li>
                                        <li>Geçerli yasa veya düzenlemeleri ihlal etmek</li>
                                    </ul>
                                </section>

                                {/* Intellectual Property */}
                                <section id="intellectual-property" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Fikri Mülkiyet</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek fikri mülkiyet koşulları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Uygulamanın tüm içeriği, özellikleri ve işlevselliği Fatma Nur CABBAR GÖK&apos;e aittir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları tarafından korunmaktadır.
                                    </p>
                                </section>

                                {/* Disclaimer */}
                                <section id="disclaimer" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Garanti Reddi</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek garanti reddi ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        UYGULAMA HERHANGİ BİR TÜRDE, AÇIK VEYA ZIMNİ GARANTİ OLMAKSIZIN &quot;OLDUĞU GİBİ&quot; VE &quot;MEVCUT OLDUĞU ŞEKİLDE&quot; SAĞLANMAKTADIR. UYGULAMANIN KESİNTİSİZ, HATASIZ VEYA GÜVENLİ OLACAĞINI GARANTİ ETMİYORUZ.
                                    </p>
                                </section>

                                {/* Limitation */}
                                <section id="limitation" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Sorumluluk Sınırlaması</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek sorumluluk sınırlamaları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        YASALARIN İZİN VERDİĞİ AZAMİ ÖLÇÜDE, UYGULAMAYI KULLANIMINIZDAN KAYNAKLANAN VEYA BUNUNLA BAĞLANTILI HİÇBİR DOLAYLI, ARIZİ, ÖZEL VEYA SONUÇ NİTELİĞİNDEKİ ZARARLARDAN SORUMLU DEĞİLİZ.
                                    </p>
                                </section>

                                {/* Termination */}
                                <section id="termination" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Fesih</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek fesih koşulları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Bu Kullanım Koşullarını ihlal ettiğine veya diğer kullanıcılara ya da bize zararlı olduğuna inandığımız davranışlar için hesabınızı ve Uygulamaya erişiminizi önceden haber vermeksizin her zaman askıya alabilir veya feshedebiliriz.
                                    </p>
                                </section>

                                {/* Governing Law */}
                                <section id="governing-law" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Geçerli Hukuk</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek geçerli hukuk detayları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Bu Koşullar, hukuk uyuşmazlığı hükümleri dikkate alınmaksızın Türkiye Cumhuriyeti yasalarına tabi olacak ve bunlara göre yorumlanacaktır.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">İletişim</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Bu Kullanım Koşulları hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
                                    </p>
                                    <div className="card p-6 bg-pastel-purple/30">
                                        <p className="text-neutral-700">
                                            <strong>E-posta:</strong> nurcabbargok@gmail.com
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
