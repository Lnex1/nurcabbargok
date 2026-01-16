import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export const metadata: Metadata = {
    title: "Fatma Nur CABBAR GÖK | Bağımsız Uygulama Geliştiricisi",
    description: "Sevgiyle tasarlanmış güzel mobil uygulamaları keşfedin. Zodiac Flow - Burç içgörüleriyle günlük ruh hali takipçiniz.",
};

export default function TrLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalBackground />
            <Header locale="tr" />
            <main className="min-h-screen pt-16 md:pt-20">{children}</main>
            <Footer locale="tr" />
        </>
    );
}
