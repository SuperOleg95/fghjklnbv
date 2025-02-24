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
      <BackBtn />
    </div>
    <div v-else>
      <div
        class="h-screen flex flex-col justify-between bg-white dark:bg-gray-900"
      >
        <Top />
        <div class="flex p-4 space-y-2">
          <div class="flex flex-col grow justify-center">
            <MainContainer>
              <div class="text-3xl font-bold text-center">
                {{ description }}
              </div>
              <UBadge size="lg">#{{ tag }}</UBadge>
              <UBadge size="lg" class="ms-2">{{ estimate }}</UBadge>
              <ContentRenderer v-if="page" :value="page" />
              <div class="text-2xl italic text-right">{{ date }}</div>
              <BackBtn />
            </MainContainer>
          </div>
        </div>
        <About />
      </div>
    </div>
  </div>
</template>
