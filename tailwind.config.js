/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /(bg|from|to|via|border|text)-white\/(5|10|20|30|40|50)/ },
    "backdrop-blur", "backdrop-blur-sm", "backdrop-blur-md", "backdrop-blur-lg"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "80rem" } // ~1280px max-w-7xl
    },
    extend: {
      colors: {
        graphite: {
          950:"#0B0C0E",
          900:"#0E1013",
          800:"#111317",
          700:"#16181D",
          600:"#1B1F26",
          500:"#222733",
          400:"#2A2E37"
        },
        primary: { DEFAULT:"#7C3AED", foreground:"#FFFFFF" },
      },
      boxShadow: {
        card: "0 16px 60px rgba(0,0,0,.50), 0 0 24px rgba(124,58,237,.22)",
        cardHover: "0 20px 80px rgba(0,0,0,.55), 0 0 36px rgba(124,58,237,.38)",
        header: "0 6px 24px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        'xl3': "20px",
      },
      fontSize: {
        'hero': 'clamp(3.2rem, 6vw, 5.2rem)',
        'section': 'clamp(2.2rem, 3.5vw, 3rem)',
        'card-title': 'clamp(1.5rem, 2vw, 1.6rem)',
        'body': 'clamp(1rem, 1.2vw, 17px)',
        'lead': 'clamp(1.125rem, 1.5vw, 1.375rem)',
      },
    },
  },
  plugins: [],
};