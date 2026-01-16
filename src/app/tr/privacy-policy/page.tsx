import { t } from "@/lib/i18n";
import Link from "next/link";

const locale = "tr";

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "introduction", title: "Giriş" },
        { id: "information-collection", title: "Topladığımız Bilgiler" },
        { id: "information-use", title: "Bilgilerinizi Nasıl Kullanıyoruz" },
        { id: "data-storage", title: "Veri Saklama ve Güvenlik" },
        { id: "third-party", title: "Üçüncü Taraf Hizmetleri" },
        { id: "your-rights", title: "Haklarınız" },
        { id: "children", title: "Çocukların Gizliliği" },
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
                                        [PLACEHOLDER: Gerçek gizlilik politikası giriş metni ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Bu Gizlilik Politikası, Fatma Nur CABBAR GÖK (&quot;biz&quot;, &quot;bize&quot; veya &quot;bizim&quot;) mobil uygulamamız Zodiac Flow&apos;u (&quot;Uygulama&quot;) kullandığınızda sizin hakkınızda bilgi toplama, kullanma ve paylaşma şeklimizi açıklar.
                                    </p>
                                </section>

                                {/* Information Collection */}
                                <section id="information-collection" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Topladığımız Bilgiler</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Veri toplama hakkında gerçek bilgilerle değiştirin]
                                    </p>
                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Sağladığınız Bilgiler</h3>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Hesap bilgileri (e-posta adresi, ad, doğum tarihi)</li>
                                        <li>Ruh hali kayıtları ve kişisel notlar</li>
                                        <li>Profil tercihleri ve ayarlar</li>
                                    </ul>
                                    <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">Otomatik Olarak Toplanan Bilgiler</h3>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Cihaz bilgileri ve tanımlayıcılar</li>
                                        <li>Kullanım verileri ve analizler</li>
                                        <li>Günlük verileri</li>
                                    </ul>
                                </section>

                                {/* Information Use */}
                                <section id="information-use" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Bilgilerinizi Nasıl Kullanıyoruz</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek bilgi kullanım detayları ile değiştirin]
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2">
                                        <li>Hizmetlerimizi sağlamak ve geliştirmek için</li>
                                        <li>Deneyiminizi kişiselleştirmek için</li>
                                        <li>Güncellemeler ve özellikler hakkında sizinle iletişim kurmak için</li>
                                        <li>Güvenliği sağlamak ve dolandırıcılığı önlemek için</li>
                                    </ul>
                                </section>

                                {/* Data Storage */}
                                <section id="data-storage" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Veri Saklama ve Güvenlik</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek veri saklama ve güvenlik bilgileri ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Kişisel bilgilerinizi korumak için sektör standardı güvenlik önlemleri kullanıyoruz. Verileriniz, durağan ve aktarım halinde şifreleme ile Supabase bulut altyapısı kullanılarak güvenli bir şekilde saklanmaktadır.
                                    </p>
                                </section>

                                {/* Third Party */}
                                <section id="third-party" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Üçüncü Taraf Hizmetleri</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek üçüncü taraf hizmetleri bilgileri ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">
                                        Uygulamamız, sizi tanımlamak için kullanılan bilgileri toplayan üçüncü taraf hizmetleri kullanabilir. Bunlar:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Apple App Store (uygulama dağıtımı ve uygulama içi satın almalar için)</li>
                                        <li>RevenueCat (abonelik yönetimi için)</li>
                                        <li>Supabase (arka uç hizmetleri için)</li>
                                    </ul>
                                </section>

                                {/* Your Rights */}
                                <section id="your-rights" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Haklarınız</h2>
                                    <p className="text-neutral-600 mb-4">
                                        [PLACEHOLDER: Gerçek kullanıcı hakları bilgileri ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600">Şu haklara sahipsiniz:</p>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mt-4">
                                        <li>Hakkınızda tuttuğumuz kişisel verilere erişim</li>
                                        <li>Yanlış verilerin düzeltilmesini talep etme</li>
                                        <li>Verilerinizin silinmesini talep etme</li>
                                        <li>Verilerinizi dışa aktarma</li>
                                        <li>İstediğiniz zaman onayı geri çekme</li>
                                    </ul>
                                </section>

                                {/* Children */}
                                <section id="children" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Çocukların Gizliliği</h2>
                                    <p className="text-neutral-600">
                                        [PLACEHOLDER: Gerçek çocuk gizliliği politikası ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600 mt-4">
                                        Hizmetimiz 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz.
                                    </p>
                                </section>

                                {/* Changes */}
                                <section id="changes" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Politika Değişiklikleri</h2>
                                    <p className="text-neutral-600">
                                        [PLACEHOLDER: Gerçek politika değişikliği bildirim detayları ile değiştirin]
                                    </p>
                                    <p className="text-neutral-600 mt-4">
                                        Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişikliği, yeni Gizlilik Politikasını bu sayfada yayınlayarak ve &quot;Son güncelleme&quot; tarihini güncelleyerek size bildireceğiz.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section id="contact" className="mb-12">
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">İletişim</h2>
                                    <p className="text-neutral-600 mb-4">
                                        Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
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
