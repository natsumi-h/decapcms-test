/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    screens,
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // }
    // space 4 === 1rem ==== 16px
    fontSize,
    // fontSize: {
    //   ...fontSize,
    //   base: ["1.25rem", "1.5"],
    // },
    extend: {},
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ["20rem", theme("screens.lg")],
    }),
    colors: {
      green: "#145740",
      green2: "#6FB460",
      green3: "#6FB460",
      orange: "#F1592B",
      text: "#000000",
      beige: "#F1EEE9",
      white: "#FFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      // arimo: ["Arimo", "sans-serif"],
      arimo: ["Arimo Variable", "sans-serif"],
    },
  },
  plugins: [fluid],
};
