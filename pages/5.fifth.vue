<script setup lang="ts">
let data = {
  buttons: [
    {
      id: 0,
      type: "page",
      color: "primary",
      variant: "solid",
      label: "Press me",
    },
  ],
  alignment: "center",
};
</script>

<template>
  <BlockContainer>
    <div
      class="relative overflow-hidden p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"
      ></div>
      <div class="absolute inset-0 opacity-50 grain-bg dark:opacity-20"></div>
      <div
        class="relative md:flex md:items-center md:justify-between md:space-x-4"
      >
        <div>
          <TypographyTitle>Contact us</TypographyTitle>
          <TypographyHeadline content="Messages" class="font-bold" />
          <TypographyProse
            content="Just press this fancy button"
            class="mt-2"
          />
        </div>
        <div class="flex-shrink-0 mt-4 md:mt-0">
          <BlockButtonGroup :data="data" />
        </div>
      </div>
    </div>
  </BlockContainer>
</template>

<style>
.grain-bg {
  background-image: url("~~/assets/noise.png");
}
</style>
