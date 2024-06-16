/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "blue-primary": "#002347",
      "blue-secondary": "#003366",
      "blue-tertiary": "#003f7d",
      "orange-primary": "#ff8e00",
      "orange-secondary": "#fd7702",
      "orange-tertiary": "#ff5003",
      "blue": "#1fb6ff",
      "red": "#ff0000",
      "purple": "#7e5bef",
      "pink": "#ff49db",
      "orange": "#ff7849",
      "green-light": "#1f9d55",
      "green": "#13ce66",
      "green-dark": "#0f9f4f",
      "yellow": "#ffc82c",
      "gray-dark": "#1d2833",
      "gray-darker": "#131d25",
      "gray": "#8492a6",
      "gray-light": "#fbfbfb",
      "sable": "#62331f",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      "0": "0px",
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
      "7": "96px",
    },
  },
  plugins: [],
};
