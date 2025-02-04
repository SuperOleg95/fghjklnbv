<script setup lang="ts">
const items = [
  { color: "red", description: "loren ipsum" },
  { color: "green", description: "loren ipsum" },
  { color: "orange", description: "loren ipsum" },
  { color: "lime", description: "loren ipsum" },
  { color: "teal", description: "loren ipsum" },
  { color: "violet", description: "loren ipsum" },
  { color: "fuchsia", description: "loren ipsum" },
  { color: "gray", description: "loren ipsum" },
];
</script>

<template>
  <MainContainer>
    <div class="flex flex-col">
      <div class="ps-5">
        <TypographyTitle>Our news</TypographyTitle>
        <TypographyHeadline content="Latest insights" size="lg" />
      </div>

      <UCarousel :items="items" class="w-full mt-6" arrows>
        <template #default="{ item }" class="justify-center">
          <div
            class="h-[500px] w-[335px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-6"
          >
            <div
              :class="`min-h-[60%] bg-${item.color}-500 rounded-t-3xl`"
            ></div>
            <h5 class="text-lg p-5">{{ item.description }}</h5>
          </div>
        </template>

        <template #prev="{ onClick, disabled }">
          <UButton
            class="absolute right-24 -top-14"
            :disabled="disabled"
            @click="onClick"
            variant="outline"
            size="xl"
            >Prev</UButton
          >
        </template>

        <template #next="{ onClick, disabled }">
          <UButton
            class="absolute right-4 -top-14"
            :disabled="disabled"
            @click="onClick"
            variant="outline"
            size="xl"
          >
            Next
          </UButton>
        </template>
      </UCarousel>
    </div>
  </MainContainer>
</template>
