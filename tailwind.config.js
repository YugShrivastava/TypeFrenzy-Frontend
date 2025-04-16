// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust path if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        leckerli: ["Leckerli One", "cursive"],
        rajghani: ["Rajdhani", "cursive"],
      },
    },
  },
  plugins: [],
};
