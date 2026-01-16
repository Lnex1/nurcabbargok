"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ScreenshotCarouselProps {
    screenshots: string[];
}

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Auto scroll functionality
    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        let scrollAmount = 0;
        const speed = 0.3; // Çok daha yavaş ve sakin
        let animationId: number;
        let isHovered = false;

        const animate = () => {
            if (!isHovered) {
                scrollAmount += speed;
                // İçerik iki katına çıkarıldığı için, toplam genişliğin yarısına gelince başa sar
                if (scrollAmount >= track.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                // Sub-pixel rendering için translate3d kullanıyoruz (daha smooth)
                track.style.transform = `translate3d(-${scrollAmount}px, 0, 0)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => { isHovered = true; };
        const handleMouseLeave = () => { isHovered = false; };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [screenshots]); // screenshots değişirse yeniden başlat

    const openLightbox = (src: string) => setSelectedImage(src);
    const closeLightbox = () => setSelectedImage(null);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = screenshots.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % screenshots.length;
        setSelectedImage(screenshots[nextIndex]);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = screenshots.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
        setSelectedImage(screenshots[prevIndex]);
    };

    const displayScreenshots = [...screenshots, ...screenshots];

    return (
        <div className="w-full relative py-10 overflow-hidden" ref={containerRef}>
            {/* Scroll Track */}
            <div
                ref={trackRef}
                className="flex gap-12 w-max px-4 cursor-pointer will-change-transform"
            >
                {displayScreenshots.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className="flex-shrink-0 w-64 h-[500px] relative rounded-[2rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-neutral-900 bg-neutral-900"
                        onClick={() => openLightbox(src)}
                    >


                        <div className="w-full h-full relative">
                            <Image
                                src={src}
                                alt={`App Screenshot ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-sm h-[80vh] rounded-[2.5rem] overflow-hidden border-8 border-neutral-800 bg-neutral-900 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Screenshot detail"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
