/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Prevents Tailwind from overriding Ant Design styles
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths based on your project
  theme: {
    extend: {},
  },
  plugins: [],
};
