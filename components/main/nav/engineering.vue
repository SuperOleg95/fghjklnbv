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
  <UDropdown
    :items="items"
    :popper="{
      placement: 'bottom-start',
    }"
    :ui="{
      width: ' w-full',
      padding: 'p-0',
      item: {
        padding: 'px-0 py-0',
      },
    }"
  >
    <UButton
      color="white"
      :label="t('Engineering')"
      icon="i-heroicons-cog-8-tooth"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    ></UButton>
    <template #item="{ item }">
      <div class="w-full bg-white dark:bg-gray-900 p-8">
        <div class="flex justify-center gap-8">
          <div class="flex flex-col w-[25%] justify-center gap-4">
            <h1 class="text-4xl text-left font-bold">
              Engineering and services
            </h1>
            <h1 class="text-xl text-left">
              Efficient Cost Reduction with Customized Supplier Solutions
            </h1>
            <UButton variant="outline" class="text-left w-fit" size="xl"
              >Browse solutions</UButton
            >
          </div>
          <div class="flex flex-col w-[25%] justify-center">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink
                ><h1 class="text-xl">
                  Efficient Cost Reduction with Customized Supplier Solutions
                </h1></NuxtLink
              >
              <NuxtLink
                ><h1 class="text-xl">Measuring and Test Equipment</h1></NuxtLink
              >
              <NuxtLink><h1 class="text-xl">Micro HiL Cluster</h1></NuxtLink>
            </div>
          </div>
          <div class="flex flex-col w-[25%] justify-center">
            <img src="/main/eng.jpg" class="max-h-40 object-contain" />
          </div>
        </div>
      </div>
    </template>
  </UDropdown>
</template>
