<script setup lang="ts">
import type { _padding } from "#tailwind-config/theme";
const { t } = useI18n();
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-900 p-8">
    <div class="flex justify-center gap-8">
      <div class="flex flex-col w-[25%] justify-center gap-4">
        <h1 class="text-4xl text-left font-bold">Products</h1>
        <h1 class="text-xl text-left">what we create</h1>
        <UButton variant="outline" class="text-left w-fit" size="xl"
          >Browse solutions</UButton
        >
      </div>
      <div class="flex flex-col w-[25%] justify-center">
        <div class="grid grid-cols-2 gap-4">
          <NuxtLink><h1 class="text-xl">Software tools</h1></NuxtLink>
          <NuxtLink><h1 class="text-xl">Electronic products</h1></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col w-[25%] justify-center">
        <img src="/main/ce.png" class="max-h-40 object-contain" />
      </div>
    </div>
  </div>
</template>
