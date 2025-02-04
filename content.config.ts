import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    slider: defineCollection({
      type: "page",
      source: "slider/*.md",
    }),
    cards: defineCollection({
      type: "page",
      source: "cards/*.md",
    }),
    partners: defineCollection({
      type: "page",
      source: "partners/*.md",
    }),
  },
});
