<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="w-full bg-(--ui-bg-muted) flex justify-center">
    <div class="w-[1280px] p-8">
      <div class="flex justify-evenly gap-8 max-w-[1280px]">
        <div class="flex flex-col w-[40%] justify-center gap-4">
          <h1 class="text-4xl text-left font-bold">About us</h1>
          <h1 class="text-xl text-left">Our corporate slogan here</h1>
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
