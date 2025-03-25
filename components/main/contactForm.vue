<script setup lang="ts">
let data = {
  buttons: [
    {
      id: 0,
      type: "page",
      color: "primary",
      variant: "solid",
      label: "Contact us",
    },
  ],
  alignment: "center",
};
</script>

<template>
  <div
    class="relative overflow-hidden mt-12 p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel rounded-lg"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"
    ></div>
    <div class="absolute inset-0 opacity-50 grain-bg dark:opacity-20"></div>
    <div
      class="relative md:flex md:items-center md:justify-between md:space-x-4"
    >
      <div>
        <TypographyTitle>Interested?</TypographyTitle>
        <TypographyHeadline content="Messages" class="font-bold" />
        <TypographyProse
          content="We are looking forward to meeting you!"
          class="mt-2 text-white"
        />
      </div>
      <div class="flex-shrink-0 mt-4 md:mt-0">
        <BlockButtonGroup :data="data" />
      </div>
    </div>
  </div>
</template>

<style>
.grain-bg {
  background-image: url("~~/assets/noise.png");
}
</style>
