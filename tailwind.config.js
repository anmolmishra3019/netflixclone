/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        netflixRed: '#e50914',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(180deg, transparent, rgba(17,17,17,0.6), #111)',
      }
    },
  },
  plugins: [],
};
