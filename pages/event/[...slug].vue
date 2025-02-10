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

const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div>
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')" class="p-4">
      <div class="text-xl font-bold text-center pb-4">{{ description }}</div>
      <ContentRenderer v-if="page" :value="page" />
    </div>
    <div v-else>
      <div class="flex bg-white dark:bg-gray-900 h-screen p-4 space-y-2">
        <div class="flex flex-col grow justify-center">
          <MainContainer>
            <div class="text-3xl font-bold text-center">{{ description }}</div>
            <ContentRenderer v-if="page" :value="page" />
            <div class="text-2xl italic text-right">{{ date }}</div>
          </MainContainer>
        </div>
      </div>
    </div>
  </div>
</template>
