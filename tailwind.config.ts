import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            padding: { common: "var(--padding)" },
            fontFamily: { "neue-montreal": ["Neue Montreal", "sans-serif"] },
            animation: {
                typewriter: "typewriter 2s steps(11) forwards",
                caret: "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
            },
            keyframes: {
                typewriter: {
                    to: { left: "100%" },
                },
                blink: {
                    "0%": { opacity: "0" },
                    "0.1%": { opacity: "1" },
                    "50%": { opacity: "1" },
                    "50.1%": { opacity: "0" },
                    "100%": { opacity: "0" },
                },
            }
        }
    },
    plugins: [],
} satisfies Config;
