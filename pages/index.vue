<script setup lang="ts">
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("docs").first();
});
</script>

<template>
  <div
    class="p-2 bg-white dark:bg-gray-900 space-y-5 xl:space-y-10 // flex flex-col w-full"
  >
    <!-- <ContentRenderer v-if="page" :value="page" /> -->
    <!-- 
    <div class="w-screen h-10 bg-black"></div> -->

    <Top />

    <Swiper />

    <Quote />

    <Collection />

    <Refs />

    <Report />

    <Insights />

    <About />
  </div>
</template>
