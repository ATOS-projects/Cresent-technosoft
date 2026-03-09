'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    strongGlass?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hover = true,
    glass = true,
    strongGlass = false,
    style,
    ...props
}) => {
    return (
        <div
            className={cn(
                'rounded-2xl p-6 transition-all duration-300 overflow-hidden relative group',
                glass && !strongGlass && 'glass',
                strongGlass && 'glass-strong',
                !glass && !strongGlass && 'theme-bg-card theme-border border',
                hover && 'hover-lift hover-glow cursor-pointer',
                className
            )}
            style={style}
            {...props}
        >
            {/* Subtle glow orb inside the card, becomes visible on hover if hover=true */}
            {hover && (
                <div className="absolute -inset-1/2 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-tr from-primary-500 to-secondary-500 pointer-events-none z-0"></div>
            )}

            {/* Content container needing relative z-index so it sits above the background orb */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
