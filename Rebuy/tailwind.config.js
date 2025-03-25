/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Prevents Tailwind from overriding Ant Design styles
  },
content: ["./index.html", "./src/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary :"#40513B"
      }
    },
  },
  plugins: [],
};
