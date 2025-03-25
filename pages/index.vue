<script setup lang="ts">
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("docs").first();
});
</script>

<template>
  <div
    class="bg-(--ui-bg) space-y-5 xl:space-y-36 // flex flex-col w-full p-10"
  >
    <!-- <ContentRenderer v-if="page" :value="page" class="space-y-10" /> -->

    <!-- <Top /> -->

    <Swiper />
    <!-- 

    <Quote />

    <Collection />

    <Refs />

    <Report />

    <Insights />

    <About />

    <ScrollTop /> -->
  </div>
</template>
