import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
    return (
        <div className="flex flex-row h-[100vh] w-full">
            {/* SIDEBAR SKELETON */}
            <div
                className="hidden md:flex flex-col border-r bg-white"
                style={{ width: "280px", padding: "20px" }}
            >
                {/* Logo / Title */}
                <Skeleton className="w-[140px] h-[32px] rounded-md bg-gray-300" />

                <div className="mt-6 space-y-4">
                    {/* Menu skeletons */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-3 w-[80%] bg-gray-300" />
                            <Skeleton className="h-3 w-[60%] bg-gray-300" />
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col bg-white">
                {/* HEADER SKELETON */}
                <div className="border-b p-4 flex items-center justify-between">
                    <Skeleton className="w-[40px] h-[28px] rounded-md bg-gray-300 skeleton-shimmer" />
                    <Skeleton className="w-[100px] h-[28px] rounded-md bg-gray-300 skeleton-shimmer" />
                </div>

                {/* CONTENT */}
                <div className="flex-1 p-6 max-w-6xl mx-auto w-full space-y-6">
                    {/* GRID OF LOADING CARDS */}
                    <div className="border p-6 bg-white shadow-sm space-y-4">
                        <Skeleton className="h-5 w-28 bg-gray-300 rounded-md skeleton-shimmer" />

                        <div className="h-[260px] w-full bg-gray-200 rounded-md skeleton-shimmer" />
                    </div>

                    {/* TABLE-SHAPED SKELETON */}
                    <div className="border p-6 bg-white shadow-sm space-y-3">
                        <Skeleton className="h-5 w-40 bg-gray-300 rounded-md skeleton-shimmer" />

                        {Array.from({ length: 8 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-4 w-full bg-gray-300 skeleton-shimmer"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
