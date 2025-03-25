<script setup lang="ts">
const viewport = useViewport();

const { data: slider } = await useAsyncData("slides", () => {
  return queryCollection("slider").all();
});

let items: Array<{
  button: string;
  color: string;
  title: string;
  descr: string;
}> = [];

if (slider.value) {
  for (let slide of slider.value) {
    items.push({
      button: String(slide.meta.button),
      color: String(slide.meta.color),
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
    <UCarousel
      v-slot="{ item }"
      :items="items"
      loop
      dots
      fade
      :autoplay="{ delay: 4000 }"
      :ui="{
        item: 'basis-full',
        dots: 'bottom-4',
      }"
    >
      <div :class="`w-full h-[600px] bg-${item.color}-400 rounded-lg relative`">
        <div class="absolute left-[7%] top-[50%] space-y-2">
          <h1 class="text-2xl font-bold">{{ item.title }}</h1>
          <div class="h-1 w-40 bg-black"></div>
          <h5 class="text-base">{{ item.descr }}</h5>
          <UButton size="lg">{{ item.button }}</UButton>
        </div>
      </div>
    </UCarousel>
  </div>
</template>
