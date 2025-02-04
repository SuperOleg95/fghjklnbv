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
  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
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
        label="Software"
        icon="i-heroicons-code-bracket"
        variant="ghost"
        class="opacity-60 hover:opacity-100"
        size="xl"
      />
      <template #item="{ item }">
        <div class="w-full bg-white dark:bg-gray-900 p-8">
          <div class="flex justify-center gap-8">
            <div class="flex flex-col w-[25%] justify-center gap-4">
              <h1 class="text-4xl text-left font-bold">Software engineering</h1>
              <h1 class="text-xl text-left">is a big deal</h1>
              <UButton variant="outline" class="text-left w-fit" size="xl"
                >Browse solutions</UButton
              >
            </div>
            <div class="flex flex-col w-[25%] justify-center">
              <div class="grid grid-cols-2 gap-4">
                <NuxtLink
                  ><h1 class="text-xl">
                    Automotive Software-Engineering
                  </h1></NuxtLink
                >
                <NuxtLink
                  ><h1 class="text-xl">
                    Medical System & Software Engineering
                  </h1></NuxtLink
                >
                <NuxtLink><h1 class="text-xl">Cyber Security</h1></NuxtLink>
              </div>
            </div>
            <div class="flex flex-col w-[25%] justify-center">
              <img src="/main/sw.jpg" />
            </div>
          </div>
        </div>
      </template>
    </UDropdown>
  </nav>
</template>
