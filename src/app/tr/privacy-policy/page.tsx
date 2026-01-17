import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "tr";

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "introduction", title: "Giriş" },
        { id: "information-collection", title: "Topladığımız Bilgiler" },
        { id: "authentication", title: "Kimlik Doğrulama" },
        { id: "advertising", title: "Reklamcılık" },
        { id: "payments", title: "Ödemeler ve Abonelikler" },
        { id: "analytics", title: "Analitik" },
        { id: "notifications", title: "Bildirimler" },
        { id: "data-sharing", title: "Veri Paylaşımı" },
        { id: "data-retention", title: "Veri Saklama" },
        { id: "children", title: "Çocukların Gizliliği" },
        { id: "your-rights", title: "Haklarınız" },
        { id: "changes", title: "Politika Değişiklikleri" },
        { id: "contact", title: "İletişim" },
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
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Giriş</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker (&quot;Uygulama&quot;, &quot;biz&quot;, &quot;bizim&quot; veya &quot;bize&quot;) kullanıcıların günlük ruh hallerini takip etmelerine ve toplu içgörüleri görüntülemelerine yardımcı olmak için tasarlanmış bir mobil uygulamadır. Gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz.
                                    </p>
                                    <p className="text-neutral-600">
                                        Bu Gizlilik Politikası, Zodiac Flow: Mood Tracker mobil uygulamasını kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
                                    </p>
                                </section>

                                {/* Information Collection */}
                                <section id="information-collection" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Topladığımız Bilgiler</h2>

                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">1.1 Sağladığınız Kişisel Bilgiler</h3>
                                    <p className="text-neutral-600 mb-4">Hesap oluşturduğunuzda veya Uygulamayı kullandığınızda aşağıdaki bilgileri toplayabiliriz:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>E-posta adresi</li>
                                        <li>Ad veya takma ad</li>
                                        <li>Doğum tarihi</li>
                                        <li>Burç işareti (doğum tarihinden türetilir)</li>
                                        <li>Ruh hali kayıtları ve gönüllü olarak gönderdiğiniz isteğe bağlı notlar</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">1.2 Otomatik Olarak Toplanan Bilgiler</h3>
                                    <p className="text-neutral-600 mb-4">Aşağıdaki sınırlı teknik bilgileri otomatik olarak toplayabiliriz:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Ülke veya bölge (cihaz ayarlarından türetilir)</li>
                                        <li>Analiz ve performans amaçlı cihaz ve kullanım bilgileri</li>
                                    </ul>
                                </section>

                                {/* Authentication */}
                                <section id="authentication" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Kimlik Doğrulama</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker düzgün çalışabilmesi için hesap oluşturmanızı gerektirir. Desteklediğimiz giriş yöntemleri:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>E-posta ve şifre</li>
                                        <li>Google ile Giriş</li>
                                        <li>Apple ile Giriş</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        Misafir veya anonim erişim mevcut değildir.
                                    </p>
                                </section>

                                {/* Advertising */}
                                <section id="advertising" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Reklamcılık</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker ücretsiz abonelik planında Google AdMob kullanarak reklamlar görüntüler.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Reklamlar, cihaz ayarlarınıza ve onayınıza bağlı olarak kişiselleştirilmiş veya kişiselleştirilmemiş olabilir.</li>
                                        <li>Aktif premium aboneliği olan kullanıcılar reklam görmez.</li>
                                        <li>Reklam teknolojileri, reklamları sunmak için gerektiğinde cihaz tanımlayıcılarını kullanabilir.</li>
                                    </ul>
                                </section>

                                {/* Payments */}
                                <section id="payments" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Ödemeler ve Abonelikler</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker, Apple Uygulama İçi Satın Almalar aracılığıyla isteğe bağlı ücretli abonelikler sunar:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Aylık ve yıllık abonelik planları</li>
                                        <li>Uygun kullanıcılar için 7 günlük ücretsiz deneme</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        Tüm ödemeler, yenilemeler ve iptaller Apple tarafından yönetilir. Ödeme bilgilerini toplamıyor veya saklamıyoruz.
                                    </p>
                                </section>

                                {/* Analytics */}
                                <section id="analytics" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Analitik</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Kullanıcıların Uygulama ile nasıl etkileşime girdiğini anlamak, performansı iyileştirmek ve sorunları gidermek için Supabase Analytics kullanıyoruz.
                                    </p>
                                    <p className="text-neutral-600">
                                        Analitik verileri toplu biçimde toplanır ve kullanıcıları kişisel olarak tanımlamak için kullanılmaz.
                                    </p>
                                </section>

                                {/* Push Notifications */}
                                <section id="notifications" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Bildirimler</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow: Mood Tracker, kullanıcıları ruh hallerini kaydetmeye teşvik etmek gibi hatırlatma amaçlı push bildirimleri gönderebilir.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Bildirimler pazarlama veya reklamcılık için kullanılmaz.</li>
                                        <li>Bildirimleri istediğiniz zaman cihaz ayarlarınızdan devre dışı bırakabilirsiniz.</li>
                                    </ul>
                                </section>

                                {/* Data Sharing */}
                                <section id="data-sharing" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Veri Paylaşımı</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Kişisel verilerinizi satmıyoruz.
                                    </p>
                                    <p className="text-neutral-600 mb-4">
                                        Sınırlı verileri yalnızca güvenilir hizmet sağlayıcılarla (Google ve Apple gibi) aşağıdaki amaçlarla paylaşabiliriz:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Uygulama işlevselliği</li>
                                        <li>Kimlik doğrulama</li>
                                        <li>Analitik</li>
                                        <li>Reklam sunumu</li>
                                    </ul>
                                </section>

                                {/* Data Retention */}
                                <section id="data-retention" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Veri Saklama</h2>
                                    <p className="text-neutral-600">
                                        Kişisel verileriniz yalnızca Uygulamanın işlevselliğini sağlamak için gerekli olduğu sürece veya hesabınızı silene kadar saklanır.
                                    </p>
                                </section>

                                {/* Children */}
                                <section id="children" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Çocukların Gizliliği</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Zodiac Flow 13 yaşın altındaki çocuklara yönelik değildir.
                                    </p>
                                    <p className="text-neutral-600">
                                        13 yaşın altındaki çocuklardan bilerek kişisel veri toplamıyoruz. Bir çocuğun bize kişisel bilgi sağladığına inanıyorsanız, verileri silebilmemiz için lütfen bizimle iletişime geçin.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section id="your-rights" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Haklarınız</h2>
                                    <p className="text-neutral-600 mb-4">Konumunuza bağlı olarak aşağıdaki haklara sahip olabilirsiniz:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Kişisel verilerinize erişim</li>
                                        <li>Verilerinizin düzeltilmesini veya silinmesini talep etme</li>
                                        <li>Uygun olduğunda onayı geri çekme</li>
                                    </ul>
                                    <p className="text-neutral-600 mt-4">
                                        Talepler aşağıdaki e-posta adresinden bizimle iletişime geçilerek yapılabilir.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Politika Değişiklikleri</h2>
                                    <p className="text-neutral-600">
                                        Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler &quot;Son güncelleme&quot; tarihi güncellenerek yansıtılacaktır.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. İletişim</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz için lütfen bizimle iletişime geçin:
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
