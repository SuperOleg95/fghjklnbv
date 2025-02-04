import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [],
  theme: {
    screens: {
      pagShrink: { max: "1100px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
} satisfies Config;
