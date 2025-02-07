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
      placement: 'top',
    }"
    :ui="{
      width: '',
      padding: 'p-0',
      item: {
        padding: 'px-0 py-0',
      },
    }"
  >
    <UButton
      color="white"
      :label="t('aboutUs')"
      icon="i-heroicons-briefcase"
      variant="ghost"
      class="opacity-60 hover:opacity-100"
      size="xl"
    />
    <template #item="{ item }">
      <div class="w-full flex bg-white dark:bg-gray-900 justify-center">
        <div class="w-[1280px] bg-white dark:bg-gray-900 p-8">
          <div class="flex justify-evenly gap-8 max-w-[1280px]">
            <div class="flex flex-col w-[40%] justify-center gap-4">
              <h1 class="text-4xl text-left font-bold">About us</h1>
              <h1 class="text-xl text-left">our corporate slogan</h1>
              <UButton variant="outline" class="text-left w-fit" size="xl"
                >Overview</UButton
              >
            </div>
            <div class="flex flex-col w-[40%] justify-center">
              <div class="grid grid-cols-2 gap-4">
                <NuxtLink><h1 class="text-xl">Company</h1></NuxtLink>
                <NuxtLink><h1 class="text-xl">Partner</h1></NuxtLink>
                <NuxtLink><h1 class="text-xl">Partner</h1></NuxtLink>
                <NuxtLink><h1 class="text-xl">Competencies</h1></NuxtLink>
                <NuxtLink><h1 class="text-xl">Philosophy</h1></NuxtLink>
                <NuxtLink><h1 class="text-xl">Compliance</h1></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UDropdown>
</template>
