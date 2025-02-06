<script setup lang="ts">
import { MainContainer } from "#components";

const route = useRoute();
//TODO: very temporary solution
const col = route.path.slice(1, 5);

let { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("event").path(route.path).first();
});

const description = page?.value?.description;
const meta = page?.value?.meta;
const date = meta?.date;
</script>

<template>
  <div class="flex bg-white dark:bg-gray-900 min-h-screen p-4 space-y-2">
    <div class="flex flex-col grow justify-center">
      <MainContainer>
        <div class="text-3xl font-bold text-center">{{ description }}</div>
        <ContentRenderer v-if="page" :value="page" />
        <div class="text-2xl italic text-right">{{ date }}</div>
      </MainContainer>
    </div>
  </div>
</template>
