<script setup lang="ts">
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("docs").first();
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 space-y-5 xl:space-y-10 // flex flex-col w-full"
  >
    <ContentRenderer v-if="page" :value="page" class="space-y-10" />

    <!-- <Top />

    <Swiper />

    <Quote />

    <Collection />

    <Refs />

    <Report />

    <Insights />

    <About />

    <ScrollTop /> -->
  </div>
</template>
