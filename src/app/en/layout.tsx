import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export const metadata: Metadata = {
    title: "Fatma Nur CABBAR GOK | Indie App Developer",
    description: "Discover beautiful mobile apps crafted with love. Zodiac Flow - Your daily mood tracker with zodiac insights.",
};

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalBackground />
            <Header locale="en" />
            <main className="min-h-screen pt-16 md:pt-20">{children}</main>
            <Footer locale="en" />
        </>
    );
}
