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
    news: defineCollection({
      type: "page",
      source: "news/*.md",
    }),
    docs: defineCollection({
      type: "page",
      source: "docs/*.md",
    }),
    event: defineCollection({
      type: "page",
      source: "event/*.md",
    }),
    quote: defineCollection({
      type: "page",
      source: "quote/*.md",
    }),
  },
});
