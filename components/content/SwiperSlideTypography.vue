<script setup lang="ts">
const props = defineProps<{
  obj: {
    button: string;
    color: string;
    title: string;
    descr: string;
  };
}>();
</script>

<template>
  <div class="relative left-[7%] top-[50%] space-y-2">
    <h1 class="2xl:text-2xl font-bold">{{ obj.title }}</h1>
    <div class="h-1 w-40 bg-black"></div>
    <h5 class="text-base">{{ obj.descr }}</h5>
    <UButton size="lg">{{ obj.button }}</UButton>
  </div>
</template>
