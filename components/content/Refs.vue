<script setup lang="ts">
import "~/assets/css/main.css";
const viewport = useViewport();

const { data: partners } = await useAsyncData("partners", () => {
  return queryCollection("partners").all();
});

let items: any = [];

if (partners.value) {
  for (let card of partners.value) {
    items.push({
      id: card.id,
      image: card.meta.image,
    });
  }
}

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div v-if="viewport.isLessThan('tablet')">
    <MainContainer>
      <div class="text-center">
        <TypographyTitle>Our partners</TypographyTitle>
        <TypographyHeadline content="Trusted by many" size="sm" />
      </div>

      <div
        v-if="items && items.length > 0"
        class="grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-8"
      >
        <div
          v-for="(logo, fileIdx) in items"
          :key="logo.id"
          v-motion
          :initial="{
            opacity: 0,
            y: 150,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
          }"
          :delay="250 + 200 * fileIdx"
          class="flex items-center justify-center"
        >
          <NuxtImg class="h-14 lg:h-32" :src="logo.image" />
        </div>
      </div>
    </MainContainer>
  </div>
  <div v-else>
    <MainContainer>
      <div>
        <TypographyTitle>Our partners</TypographyTitle>
        <TypographyHeadline content="Trusted by many" size="sm" />
      </div>

      <div
        v-if="items && items.length > 0"
        class="grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-8"
      >
        <div
          v-for="(logo, fileIdx) in items"
          :key="logo.id"
          v-motion
          :initial="{
            opacity: 0,
            y: 150,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
          }"
          :delay="250 + 200 * fileIdx"
          class="flex items-center justify-center"
        >
          <NuxtImg class="h-14 lg:h-32" :src="logo.image" />
        </div>
      </div>
    </MainContainer>
  </div>
</template>
