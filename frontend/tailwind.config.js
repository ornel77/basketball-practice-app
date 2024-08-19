/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        success: "#36AC3A",
        green: "#0F7173",
        purple: "#411530",
        failure: "#C23636",
        red: "#CA4725",
        pink: {
          100: "#EFE0D9",
          200: "#F3BD9A"
        },
        yellow: "#EEBA12",
        slate: {
          700: "#414141",
          800: "#171A20"
        }


      }
    },
  },
  plugins: [],
}

