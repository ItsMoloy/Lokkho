import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6C2BD9",
                    dark: "#5B21B6",
                },
                "soft-violet": "#F3EEFF",
                charcoal: "#1A1A2E",
                amber: "#F59E0B",
            },
            fontFamily: {
                serif: ['var(--font-serif)', 'serif'],
                sans: ['var(--font-sans)', 'sans-serif'],
            },
            borderRadius: {
                card: "12px",
                btn: "8px",
            },
            boxShadow: {
                soft: "0 4px 24px rgba(108, 43, 217, 0.10)",
                md: "0 10px 30px -5px rgba(108, 43, 217, 0.15)",
            },
        },
    },
    plugins: [],
};
export default config;
