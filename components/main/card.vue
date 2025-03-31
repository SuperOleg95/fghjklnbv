<script setup lang="ts">
import { colors_500 } from "#imports";
const props = defineProps({
  heading: String,
  description: String,
  color: String,
  link: String,
});
</script>

<template>
  <NuxtLink :to="props.link">
    <div
      class="h-[400px] xl:h-[600px] rounded-xl bg-gray-200 dark:bg-gray-700 flex flex-col"
    >
      <div
        :data-tone="props.color"
        :class="colors_500"
        class="min-h-[60%] rounded-t-xl"
      ></div>
      <div class="pt-14 p-4 2xl:text-3xl">
        <div class="flex">
          <h5>{{ props.heading }}</h5>
          <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon>
        </div>
        <h5 class="text-lg">{{ props.description }}</h5>
      </div>
    </div>
  </NuxtLink>
</template>
