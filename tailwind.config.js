/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                tertiary: 'var(--tertiary)',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
            },
            backgroundColor: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                tertiary: 'var(--tertiary)',
            },
            textColor: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                tertiary: 'var(--tertiary)',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
            },
            borderColor: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                tertiary: 'var(--tertiary)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-slow-reverse': 'spin-reverse 12s linear infinite',
                'spin-slower': 'spin 15s linear infinite',
            },
            keyframes: {
                'spin-reverse': {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
} 