/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "pin": "#6316DE",
        "magenta": "#FF005A",
        "purpl": "#A62FFF",
        "orang": "#FF8800",
        "purple-deep": "#AC008F",
        "yello": "#FBB60B"
      },
      fontFamily: {
          maison: ["Maison Neue", "Helvetica"],
          media: ["Media Sans", "Helvetica"]
      }
    },
  },
  plugins: [],
}

