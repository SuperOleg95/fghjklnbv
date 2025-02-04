// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  devtools: { enabled: false },

  modules: [
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/content",
  ],

  icon: {
    componentName: "NuxtIcon",
    serverBundle: {
      collections: ["mdi"], // <!--- this
    },
  },

  tailwindcss: {
    quiet: true,
  },

  i18n: {
    defaultLocale: "en-US",
    locales: [
      {
        code: "en-US",
        file: "lang/en-US.ts",
      },
      {
        code: "de-DE",
        file: "lang/de-DE.ts",
      },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },

  compatibilityDate: "2025-01-18",
});
