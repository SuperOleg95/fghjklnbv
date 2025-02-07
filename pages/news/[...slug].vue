<script setup lang="ts">
import { MainContainer } from "#components";

const route = useRoute();
//TODO: very temporary solution
const col = route.path.slice(1, 5);

let { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("news").path(route.path).first();
});

const description = page?.value?.description;
const meta = page?.value?.meta;
const date = meta?.date;
const estimate = meta?.estimate;
const tag = meta?.tag;
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <Top />
    <div class="flex bg-white dark:bg-gray-900 p-4 space-y-2">
      <div class="flex flex-col grow justify-center">
        <MainContainer>
          <div class="text-3xl font-bold text-center">{{ description }}</div>
          <UBadge size="lg">#{{ tag }}</UBadge>
          <UBadge size="lg" class="ms-2">{{ estimate }}</UBadge>
          <ContentRenderer v-if="page" :value="page" />
          <div class="text-2xl italic text-right">{{ date }}</div>
        </MainContainer>
      </div>
    </div>
    <About />
  </div>
</template>
