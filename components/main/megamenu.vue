<script setup lang="ts">
import type { _padding } from "#tailwind-config/theme";

const { t } = useI18n();
const emit = defineEmits([
  "nav:about:open",
  "nav:software:open",
  "nav:engineering:open",
  "nav:products:open",
]);
</script>

<template>
  <nav
    class="flex bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"
  >
    <UButton
      color="white"
      :label="t('aboutUs')"
      icon="i-heroicons-briefcase"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
      @mouseover="emit('nav:about:open')"
    />
    <UButton
      color="white"
      :label="t('software')"
      icon="i-heroicons-code-bracket"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
      @mouseover="emit('nav:software:open')"
    />
    <UButton
      color="white"
      :label="t('engineering')"
      icon="i-heroicons-cog-8-tooth"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
      @mouseover="emit('nav:engineering:open')"
    ></UButton>
    <UButton
      color="white"
      :label="t('products')"
      icon="i-heroicons-sparkles"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
      @mouseover="emit('nav:products:open')"
    ></UButton>
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
