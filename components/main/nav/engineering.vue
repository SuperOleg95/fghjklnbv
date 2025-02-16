<script setup lang="ts">
import type { _padding } from "#tailwind-config/theme";
const { t } = useI18n();
</script>

<template>
  <div class="bg-white dark:bg-gray-900 p-8">
    <div class="flex justify-evenly gap-8">
      <div class="flex flex-col w-[25%] justify-center gap-4">
        <h1 class="text-4xl text-left font-bold">Engineering and services</h1>
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
