'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hover = true,
    glass = true
}) => {
    return (
        <div
            className={cn(
                'rounded-xl p-6 transition-all duration-300',
                glass && 'glass',
                hover && 'hover-lift hover-glow cursor-pointer',
                className
            )}
        >
            {children}
        </div>
    );
};
