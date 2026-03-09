'use client';

import React from 'react';
import { useTheme } from '../ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden group ${theme === 'dark'
                    ? 'bg-slate-900 border border-slate-700 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                } ${className}`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-5 h-5">
                {/* Sun icon */}
                <FaSun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark'
                            ? 'opacity-100 rotate-0 scale-100 text-amber-400'
                            : 'opacity-0 rotate-90 scale-50 text-amber-500'
                        }`}
                />
                {/* Moon icon */}
                <FaMoon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'light'
                            ? 'opacity-100 rotate-0 scale-100 text-indigo-500'
                            : 'opacity-0 -rotate-90 scale-50 text-indigo-400'
                        }`}
                />
            </div>
        </button>
    );
};
