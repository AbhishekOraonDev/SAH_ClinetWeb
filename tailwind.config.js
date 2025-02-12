/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head1: ["Inter", "serif"],
        head2: ["Bricolage Grotesque", "serif"]
      }
    },
  },
  plugins: [],
}

