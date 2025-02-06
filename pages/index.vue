<script setup lang="ts">
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("docs").first();
});
</script>

<template>
  <div
    class="pt-2 scroll-hidden bg-white dark:bg-gray-900 space-y-20 // flex flex-col"
  >
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
