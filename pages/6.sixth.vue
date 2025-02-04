<script setup lang="ts">
import "~/assets/css/main.css";

let logos = [
  {
    id: "tailwind",
    image: "/tailwind.png",
  },
  {
    id: "nuxt",
    image: "/nuxt.svg",
  },
];
</script>

<template>
  <BlockContainer>
    <TypographyTitle>Tech stack</TypographyTitle>
    <TypographyHeadline content="we have it here!" size="lg" />
    <div class="flow-root mt-8 lg:mt-10">
      <div
        v-if="logos && logos.length > 0"
        class="grid gap-4 md:grid-cols-4 md:gap-8"
      >
        <div
          v-for="(logo, fileIdx) in logos"
          :key="logo.id"
          v-motion
          :initial="{
            opacity: 0,
            y: 150,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
          }"
          :delay="250 + 200 * fileIdx"
          class="flex items-center justify-center p-2 border rounded-card dark:border-gray-700 dark:bg-gray-800"
        >
          <NuxtImg class="h-12" :src="logo.image" />
        </div>
      </div>
    </div>
  </BlockContainer>
</template>
