<script setup lang="ts">
const props = defineProps({
  description: String,
  color: String,
  link: String,
});
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="h-[190px] w-[190px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-2 lg:mx-4"
  >
    <div :class="`min-h-[60%] bg-${props.color}-500 rounded-t-3xl`"></div>

    <h5 class="text-sm p-2 lg:p-5">{{ props.description }}</h5>
  </NuxtLink>
</template>
