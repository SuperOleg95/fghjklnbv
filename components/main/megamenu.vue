<script setup lang="ts">
import type { _padding } from "#tailwind-config/theme";

const items = [
  [
    {
      label: "ben@example.com",
    },
  ],
];
const { t } = useI18n();
</script>

<template>
  <nav
    class="flex bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"
  >
    <MainNavAbout />
    <MainNavSoftware />
    <MainNavEngineering />
    <MainNavProducts />
    <UButton
      color="white"
      :label="t('career')"
      icon="i-heroicons-presentation-chart-line"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    ></UButton>
  </nav>
</template>

<style>
#headlessui-menu-button-v-0 {
  --tw-ring-shadow: 0 !important;
}
</style>
