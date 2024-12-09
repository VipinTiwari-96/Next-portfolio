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
          "0%": { transform: "translateX(100%)" }, // Start off-screen to the right
          "100%": { transform: "translateX(-99%)" }, // Move completely off-screen to the left
        },
      },
      animation: {
        "scroll-right-to-left": "scroll-right-to-left 15s linear infinite",
      },
    },
    fontFamily: { sans: ["Sans-serif", "Arial"] },
  },
  plugins: [],
};
