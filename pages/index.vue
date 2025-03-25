<script setup lang="ts">
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("docs").first();
});
</script>

<template>
  <div class="bg-(--ui-bg) space-y-5 // flex flex-col w-full">
    <!-- <ContentRenderer v-if="page" :value="page" class="space-y-10" /> -->

    <Top class="sticky top-0 bg-(--ui-bg) z-20" />

    <Swiper />

    <Quote />

    <Collection />

    <Refs />

    <Report />

    <Insights />

    <About class="mb-0!" />

    <ScrollTop />
  </div>
</template>
