"use client";

import {useTheme} from "next-themes";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "@heroui/react";
import {siteConfig} from "@/config/site";

// --- Icons (Inlined to avoid import errors) ---

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="5"/>
        <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
);

// --- Component ---

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    // Use a ref to prevent sound playing on the very first initial page load
    const initialRender = useRef(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    // Audio Logic
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        if (theme === "light" || theme === "dark") {
            const audioPath = theme === "light"
                ? siteConfig.audio.light
                : siteConfig.audio.dark;

            const audio = new Audio(audioPath);
            audio.play().catch(err => {
                // Browsers often block audio until the user interacts with the page
                console.warn("Audio playback blocked until user interaction:", err);
            });
        }
    }, [theme]);

    if (!mounted) return null;

    return (
        <div className="absolute top-4 right-4 z-50">
            <Button
                isIconOnly
                variant="light"
                aria-label="Toggle Dark Mode"
                onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-900 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
            >
                {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
            </Button>
        </div>
    );
}