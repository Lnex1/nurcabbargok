"use client";

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple via-white to-pastel-pink opacity-70" />

            {/* Animated gradient orbs - more vibrant */}
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-300/50 to-transparent rounded-full blur-3xl animate-float"
                style={{ animationDuration: "8s" }}
            />
            <div
                className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary-300/50 to-transparent rounded-full blur-3xl animate-float"
                style={{ animationDuration: "10s", animationDelay: "-3s" }}
            />
            <div
                className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-accent-200/40 to-transparent rounded-full blur-3xl animate-float"
                style={{ animationDuration: "12s", animationDelay: "-5s" }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: "linear-gradient(#E879F9 1px, transparent 1px), linear-gradient(90deg, #E879F9 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />
        </div>
    );
}
