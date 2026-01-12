<script setup lang="ts">
import { MainContainer } from "#components";

const route = useRoute();
//TODO: very temporary solution
const col = route.path.slice(1, 5);

let { data: page } = await useAsyncData(route.path, () => {
  console.log(route.path);
  return queryCollection("slider").path(route.path).first();
});

const description = page?.value?.description;
const title = page?.value?.title;
const meta = page?.value?.meta;

const button = meta?.button;
const color = meta?.color;

const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div class="h-screen flex flex-col justify-between bg-white dark:bg-gray-900">
    <div class="flex p-4 space-y-2">
      <div class="flex flex-col grow justify-center">
        <MainContainer>
          <div class="text-3xl font-bold">Title: {{ title }}</div>
          <div class="text-3xl font-bold">Description: {{ description }}</div>
          <div class="text-3xl font-bold">Button: {{ button }}</div>
          <div class="text-3xl font-bold">color: {{ color }}</div>

          <!-- <ContentRenderer v-if="page" :value="page" /> -->
          <BackBtn />
        </MainContainer>
      </div>
    </div>
  </div>
</template>
