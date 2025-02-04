<script setup lang="ts">
import type { _padding } from "#tailwind-config/theme";

const items = [
  [
    {
      label: "ben@example.com",
    },
  ],
];
</script>

<template>
  <nav
    class="flex bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"
  >
    <MainNavAbout />
    <MainNavSoftware />
    <UButton
      color="white"
      label="Engineering"
      icon="i-heroicons-cog-8-tooth"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    ></UButton>
    <UButton
      color="white"
      label="Products"
      icon="i-heroicons-sparkles"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    ></UButton>
    <UButton
      color="white"
      label="Career"
      icon="i-heroicons-presentation-chart-line"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    ></UButton>
  </nav>
</template>

<style>
.z-20 {
  transform: translate(0px, 55px) !important;
}
</style>
