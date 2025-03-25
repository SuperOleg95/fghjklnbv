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

let items_color: any = ref([]);

if (slider.value) {
  for (let slide of slider.value) {
    items_color.value.push(String(slide.meta.color));
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

function functionFindCorrectObject(name: string) {
  const found = items.find((el) => el.color === name);
  return found;
}
</script>

<template>
  <div class="!px-0 !mt-0">
    <UCarousel
      v-slot="{ item }"
      :items="items_color"
      loop
      dots
      auto-scroll
      :ui="{
        item: 'basis-full',
        dots: 'bottom-4',
      }"
    >
      <div :class="`w-full h-[600px] bg-${item}-400 rounded-lg relative`">
        <SwiperSlideTypography
          :obj="functionFindCorrectObject(String(item))!"
        />
      </div>
    </UCarousel>
  </div>
</template>
