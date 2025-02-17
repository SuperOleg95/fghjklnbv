<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="w-full flex justify-center bg-white dark:bg-gray-900">
    <div class="flex justify-evenly gap-8 max-w-[1280px] py-8">
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
            ><h1 class="text-xl">Automotive Software-Engineering</h1></NuxtLink
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
        <img src="/main/sw.jpg" class="max-h-40 object-contain" />
      </div>
    </div>
  </div>
</template>
