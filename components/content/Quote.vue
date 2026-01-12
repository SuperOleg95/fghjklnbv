<script setup lang="ts">
const { data: quote } = await useAsyncData("quote", () => {
  return queryCollection("quote").first();
});
</script>

<template>
  <MainContainer>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 750,
        },
      }"
      class="relative"
    >
      <TypographyTitle>{{ quote?.title }}</TypographyTitle>
      <div
        class="relative text-xl lg:text-3xl italic leading-tight text-gray-900 font-display md:leading-tight dark:text-gray-100 md:text-4xl text-wrap-[balance] dark:drop-shadow"
      >
        <div>{{ quote?.description }}</div>
      </div>
      <UIcon
        name="i-heroicons-paper-clip"
        class="absolute w-20 h-20 rotate-180 -left-8 text-(--ui-primary) -top-8 opacity-20"
      />
    </div>

    <div
      class="w-full mt-4 text-sm font-semibold tracking-wider uppercase word-spacing-tight lg:text-lg font-display"
    >
      <p class="text-(--ui-primary)">{{ quote?.meta.name }}</p>
      <p class="">{{ quote?.meta.position }}</p>
    </div>
  </MainContainer>
</template>
