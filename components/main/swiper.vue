<script setup lang="ts">
import { UButton } from "#components";

const { data: slider } = await useAsyncData("slides", () => {
  return queryCollection("slider").all();
});

let items: any = [];

if (slider.value) {
  for (let slide of slider.value) {
    items.push({
      button: slide.meta.button,
      color: slide.meta.color,
      title: slide.title,
      descr: slide.description,
    });
  }
}
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg !mt-0"
    arrows
    indicators
  >
    <div :class="`bg-${item.color}-500 w-full h-[780px] relative`">
      <div class="absolute left-[7%] top-[50%] space-y-2">
        <h1 class="text-4xl font-bold">{{ item.title }}</h1>
        <div class="h-1 w-40 bg-black"></div>
        <h5 class="text-2xl">{{ item.descr }}</h5>
        <UButton size="xl">{{ item.button }}</UButton>
      </div>
    </div>
  </UCarousel>
</template>
