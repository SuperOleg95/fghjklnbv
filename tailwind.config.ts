import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {},
  plugins: [],
  content: [],
};
