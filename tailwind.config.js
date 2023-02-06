/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-yellow-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-red-200",
    "text-yellow-600",
    "text-blue-600",
    "text-green-600",
    "text-red-600",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
  ],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
