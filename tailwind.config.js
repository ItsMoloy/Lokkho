/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          dark: "#1E3A8A",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#EFF6FF",
          light: "#DBEAFE",
        },
        accent: {
          DEFAULT: "#F97316",
          light: "#FB923C",
        },
        charcoal: "#1F2937",
        "gray-light": "#F9FAFB",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(30, 64, 175, 0.10)",
        md: "0 10px 30px -5px rgba(30, 64, 175, 0.15)",
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #1E40AF 0%, #F97316 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
