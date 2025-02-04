<script setup lang="ts">
import "~/assets/css/main.css";

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

console.log(items);
</script>

<template>
  <MainContainer>
    <div class="ps-4">
      <TypographyTitle>Our partners</TypographyTitle>
      <TypographyHeadline content="Trusted by many" size="lg" />
    </div>
    <div class="flow-root mt-8 lg:mt-10">
      <div
        v-if="items && items.length > 0"
        class="grid gap-4 md:grid-cols-4 md:gap-8"
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
          <NuxtImg class="h-32" :src="logo.image" />
        </div>
      </div>
    </div>
  </MainContainer>
</template>
