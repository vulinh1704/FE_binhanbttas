/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-serif", "Georgia"],
        mono: ["Menlo", "ui-monospace", "SFMono-Regular"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        linear: "linear-gradient(43deg, #3D5BF7 -38.75%, #29D3F8 100%)",
        "linear-2": "linear-gradient(270deg, #262A8E 0%, #121354 100%)",
      },
      colors: {
        primary: "#2081E2",
        secondary: { 1: "#656565", 2: "#AEB5C3" },
        line: "#D6DBE2",
        surface: {
          1: "#101126",
          2: "#F0F0F0",
        },
        red: "#FA000F",
        green: "#4EAC76",
        yellow: "#FFB239",
        purple: "#8247E5",
        bg: "#F4F6FA",
        blue: { DEFAULT: "#D1D0F9", 2: "#3DBDF8" },
      },
      screens: {
        sm: "640.98px",
        md: "768.98px",
        lg: "1024.98px",
        xl: "1280.98px",
        "2xl": "1536.98px",
      },
    },
  },
  plugins: [],
};
