/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scroll-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-99%)" },
        },
        fillBg: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "scroll-right-to-left": "scroll-right-to-left 15s linear infinite",
        fillBg: "fillBg 1s forwards",
      },
    },
    fontFamily: { sans: ["Sans-serif", "Arial"] },
  },
  plugins: [],
};
