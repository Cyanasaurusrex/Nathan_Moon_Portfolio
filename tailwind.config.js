/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -40px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        brand: {
          primary: "#030712",
          secondary: "#1f2937",
          teriary: '#374151',
          gamma: '#515a69',
          accent: "#06b6d4",
          textBody: "#d1d5db",
          textHeader: "#ffffff",
          textHover: "#f9fafb",
          textActive: "#0891b2",
          textHightlight: "#f97316",
          
        },
      },
      fontFamily: {
        primary: ["var(--font-archivo)"],
        secondary: ["var(--font-opensans)"],
        third: ["var(--font-brush-script-mt)"],
      },
    },
  },
  plugins: [],
};
