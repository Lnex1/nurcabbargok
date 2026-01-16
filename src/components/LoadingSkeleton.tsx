export default function LoadingSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-white/80 backdrop-blur-sm">
                <div className="container-custom h-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-200" />
                        <div className="hidden sm:block space-y-1">
                            <div className="h-4 w-32 bg-neutral-200 rounded" />
                            <div className="h-3 w-20 bg-neutral-100 rounded" />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="h-8 w-20 bg-neutral-100 rounded-full" />
                        <div className="h-8 w-24 bg-neutral-100 rounded-full" />
                        <div className="h-8 w-16 bg-neutral-100 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Hero skeleton */}
            <div className="pt-32 md:pt-48 pb-20">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <div className="h-4 w-24 bg-primary-100 rounded-full mx-auto" />
                        <div className="h-12 md:h-16 w-3/4 bg-neutral-200 rounded-xl mx-auto" />
                        <div className="h-6 w-1/2 bg-neutral-100 rounded-lg mx-auto" />
                        <div className="h-4 w-2/3 bg-neutral-100 rounded mx-auto" />
                        <div className="flex gap-4 justify-center pt-4">
                            <div className="h-12 w-40 bg-primary-200 rounded-full" />
                            <div className="h-12 w-32 bg-neutral-200 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content skeleton */}
            <div className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="h-8 w-48 bg-neutral-200 rounded-lg mx-auto mb-12" />
                        <div className="card p-8 space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-2xl bg-neutral-200" />
                                <div className="flex-1 space-y-3">
                                    <div className="h-6 w-40 bg-neutral-200 rounded" />
                                    <div className="h-4 w-32 bg-neutral-100 rounded" />
                                    <div className="h-4 w-full bg-neutral-100 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
