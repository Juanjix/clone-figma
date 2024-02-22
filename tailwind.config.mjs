/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ff",
      gray: "#9CA6AB",
      black: "#27",
      red: "#7B9AA8",
      blue: "#128DD3",
      yellow: "#FFE700",
      teal10: "#F0F3F4",
      teal20: "#C0CDD3",
      teal30: "#7B9AA8",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    fontFamily: {},
  },
  plugins: [],
};
