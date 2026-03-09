'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    icon?: React.ReactNode;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    icon,
    isLoading = false,
    className,
    disabled,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 overflow-hidden relative group';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:border-primary-400 hover:-translate-y-0.5 border border-primary-500/50',
        secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-white shadow-[0_0_15px_rgba(176,38,255,0.15)] hover:shadow-[0_0_25px_rgba(176,38,255,0.4)] hover:border-secondary-400 hover:-translate-y-0.5 border border-secondary-500/50',
        outline: 'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] bg-slate-900/50 backdrop-blur-sm',
        ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/80',
        neon: 'bg-slate-900 text-white border border-neon-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.3),inset_0_0_10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6),inset_0_0_15px_rgba(0,240,255,0.5)] hover:-translate-y-1'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    // Add inner glow/gradients purely for visual effect on colored buttons
    const showInnerGlow = variant === 'primary' || variant === 'secondary' || variant === 'neon';

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {showInnerGlow && (
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}

            {/* Adding a subtle scanning line effect for the neon variant */}
            {variant === 'neon' && (
                <div className="absolute top-0 bottom-0 left-[-100%] w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
            )}

            <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Loading...</span>
                    </>
                ) : (
                    <>
                        {icon && <span>{icon}</span>}
                        {children}
                    </>
                )}
            </span>
        </button>
    );
};
