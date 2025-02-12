<script setup lang="ts">
import { UButton } from "#components";
const viewport = useViewport();

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
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div class="!px-0 !mt-0">
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')">
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg !mt-0 mb-10"
        indicators
      >
        <div :class="`bg-${item.color}-500 w-full h-[480px] relative`">
          <div class="absolute left-[7%] top-[50%] space-y-2">
            <h1 class="text-2xl font-bold">{{ item.title }}</h1>
            <div class="h-1 w-40 bg-black"></div>
            <h5 class="text-base">{{ item.descr }}</h5>
            <UButton size="lg">{{ item.button }}</UButton>
          </div>
        </div>
      </UCarousel>
    </div>
    <!-- Tablet window -->
    <div v-else>
      <UCarousel
        :items="items"
        :ui="{
          item: 'basis-full',
        }"
        :prev-button="{
          class: '!bg-transparent ',
        }"
        :next-button="{
          class: '!bg-transparent ',
        }"
        class="rounded-lg"
        arrows
        indicators
      >
        <template #default="{ item }">
          <div :class="`bg-${item.color}-500 w-full h-[780px] relative`">
            <div class="absolute left-[7%] top-[50%] space-y-2">
              <h1 class="text-4xl font-bold">{{ item.title }}</h1>
              <div class="h-1 w-40 bg-black"></div>
              <h5 class="text-2xl">{{ item.descr }}</h5>
              <UButton size="xl">{{ item.button }}</UButton>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>
  </div>
</template>

<style>
.i-heroicons-chevron-left-20-solid {
  height: 5rem !important;
  width: 5rem !important;
}

.i-heroicons-chevron-right-20-solid {
  height: 5rem !important;
  width: 5rem !important;
}
</style>
