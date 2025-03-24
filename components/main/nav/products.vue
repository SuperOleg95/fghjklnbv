<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="w-full flex justify-center bg-(--ui-bg-muted) p-8">
    <div class="flex justify-evenly gap-8 w-[1180px]">
      <div class="flex flex-col w-[50%] justify-center gap-4">
        <h1 class="text-4xl text-left font-bold">Products</h1>
        <h1 class="text-xl text-left">what we create</h1>
        <UButton variant="outline" class="text-left w-fit" size="xl"
          >Browse solutions</UButton
        >
      </div>
      <div class="flex flex-col w-[50%] justify-center">
        <div class="grid grid-cols-2 gap-4">
          <NuxtLink><h1 class="text-xl">Software tools</h1></NuxtLink>
          <NuxtLink><h1 class="text-xl">Electronic products</h1></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col w-[25%] justify-center">
        <MainCardSmall
          heading=""
          description="Product or event"
          color="yellow"
          link="#"
        />
      </div>
    </div>
  </div>
</template>
