/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Custom colors based on the "Rota 361" theme
                sidebar: "#02121c", // Very dark blue from sidebar
                header: "#02121c", // Matching header
                background: "#081a26", // Slightly lighter content background
                primary: "#ebf2f7", // Text
                accent: "#0ea5e9", // Blue highlights
                card: "#112231", // Table/Card bg
                success: "#10b981",
                warning: "#f59e0b",
                danger: "#ef4444",
                border: "#1E2D3D", // Custom border color for dark theme
            }
        },
    },
    plugins: [],
}
