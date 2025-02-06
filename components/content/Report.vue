<script setup lang="ts">
const { data: event } = await useAsyncData("event", () => {
  return queryCollection("event").first();
});

const description = event?.value?.description || "";
const path = event?.value?.path;
const meta = event?.value?.meta;
const button = meta?.button;
const color = meta?.color;
</script>

<template>
  <MainContainer>
    <div class="flex grow">
      <div
        class="flex flex-col w-1/2 bg-gray-200 dark:bg-gray-700 rounded-l-3xl justify-center px-4"
      >
        <TypographyTitle>Event</TypographyTitle>
        <TypographyHeadline :content="description" size="lg" />

        <UButton :to="path" class="w-fit mt-4" size="xl" variant="outline">{{
          button
        }}</UButton>
      </div>

      <div :class="`w-1/2 bg-${color}-500 h-[350px] rounded-r-3xl`"></div>
    </div>
  </MainContainer>
</template>
