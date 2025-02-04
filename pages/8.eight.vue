<script setup lang="ts">
let data = {
  rows: [
    {
      id: 0,
      title: "Good Product",
      headline: "choose us",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      image: "/test.jpg",
      image_position: "right",
    },
    {
      id: 1,
      title: "Best Product",
      headline: "hey there",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      image: "/test.jpg",
      image_position: "left",
    },
  ],
};
</script>

<template>
  <BlockContainer>
    <div class="text-center">
      <TypographyTitle>Products</TypographyTitle>
      <TypographyHeadline content="We want to help you" />
    </div>
    <div class="mt-12 space-y-16">
      <div
        v-for="row in data?.rows"
        :key="row?.id"
        class="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24"
      >
        <div class="my-auto">
          <TypographyTitle v-if="row?.title">{{ row?.title }}</TypographyTitle>
          <TypographyHeadline v-if="row?.headline" :content="row?.headline" />
          <TypographyProse
            v-if="row?.content"
            :content="row?.content"
            class="mt-4"
          />
        </div>
        <div
          v-if="row.image"
          v-motion
          class="order-first block w-full h-full overflow-hidden rounded-card"
          :initial="{ opacity: 0, scale: 0.5, y: 0 }"
          :visibleOnce="{ opacity: 1, scale: 1, y: 0 }"
          :duration="1000"
          :delay="250"
          :class="[
            {
              'lg:order-last': row?.image_position === 'right',
              'lg:order-first': row?.image_position === 'left',
            },
          ]"
        >
          <NuxtImg
            :src="row.image"
            height="300"
            width="300"
            class="object-cover object-center bg-gray-100 rounded-card dark:brightness-90"
          />
        </div>
      </div>
    </div>
  </BlockContainer>
</template>
