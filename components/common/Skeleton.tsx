import React from 'react';

interface SkeletonProps {
    className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
    return (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
    );
};

export const ProductSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-secondary/10 shadow-sm">
            <Skeleton className="aspect-[4/5] w-full" />
            <div className="p-6 space-y-3 flex flex-col items-center">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-6 w-1/4 mt-2" />
            </div>
        </div>
    );
};

export const CategorySkeleton: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Skeleton className="aspect-[4/5] w-full rounded-md" />
            <Skeleton className="h-5 w-2/3 mt-4" />
        </div>
    );
};

export default Skeleton;
