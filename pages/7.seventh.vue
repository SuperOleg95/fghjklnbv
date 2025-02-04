<script setup lang="ts">
import "~/assets/css/main.css";

const currentItemIdx = ref(0);

let testimonials = [
  {
    id: 0,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image: "/face.png",
    title: "Nikita",
    subtitle: "dev",
    company: "EmSo",
  },
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image: "/face.png",
    title: "Maxim",
    subtitle: "Pirate",
    company: "EmSo",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image: "/face.png",
    title: "Markus",
    subtitle: "RND Head",
    company: "Schleissheimer",
  },
];

function handleIndicatorButton(index: number) {}
function handleNavButton(direction: "left" | "right") {}
function handleScrollDebounced(e: Event) {}
</script>

<template>
  <BlockContainer class="relative overflow-hidden" full-width>
    <div
      class="absolute inset-0 bg-gradient-to-l from-white via-gray-300 to-primary dark:from-gray-700 dark:via-gray-900 dark:to-primary max-h-100"
    />
    <div class="absolute inset-0 opacity-50 grain-bg dark:opacity-10" />

    <div class="relative text-center">
      <TypographyTitle>Clients say</TypographyTitle>
      <TypographyHeadline content="Trusted by many" size="lg" />
    </div>

    <div v-if="testimonials.length > 0" class="relative mt-4">
      <div class="flex items-center justify-end px-6 space-x-8 lg:px-16">
        <div class="inline-flex space-x-2">
          <button
            v-for="(item, itemIdx) in testimonials"
            :key="item.id"
            :class="[
              {
                'bg-primary': itemIdx === currentItemIdx,
                'bg-gray-500 bg-opacity-50 dark:bg-gray-900 ':
                  itemIdx !== currentItemIdx,
              },
            ]"
            class="flex items-center justify-center w-12 h-3 rounded-button hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
            @click="handleIndicatorButton(itemIdx)"
          />
        </div>
        <div class="flex gap-2 justify-self-end">
          <UButton
            :disabled="currentItemIdx === 0"
            icon="i-heroicons-arrow-left-20-solid"
            size="lg"
            square
            @click="handleNavButton('left')"
          />
          <UButton
            :disabled="currentItemIdx === testimonials.length - 1"
            icon="i-heroicons-arrow-right-20-solid"
            size="lg"
            square
            @click="handleNavButton('right')"
          />
        </div>
      </div>
      <div
        ref="testimonialContainer"
        class="flex w-full px-4 py-6 space-x-6 overflow-x-auto md:px-6 lg:px-16 scrollbar-hide md:pt-8 snap-x scroll-smooth"
        @scroll="handleScrollDebounced"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          ref="testimonialRefs"
          :class="['snap-center']"
          class="relative w-[350px] md:w[450px] lg:w-[600px] flex flex-col justify-between flex-shrink-0 p-8 bg-white dark:bg-gray-900 shadow-md rounded-card overflow-hidden"
        >
          <UIcon
            name="i-heroicons-cpu-chip"
            class="absolute w-20 h-20 rotate-180 left-2 text-primary/20 top-2"
          />
          <TypographyProse
            :content="testimonial?.content"
            size="lg"
            class="relative"
          />
          <div
            class="flex pt-6 mt-4 space-x-2 border-t border-gray-300 dark:border-gray-700"
          >
            <!-- Person Image -->
            <NuxtImg
              class="inline-block w-16 h-16 border rounded-button"
              :src="testimonial?.image"
            />
            <div class="relative">
              <p
                v-if="testimonial.title"
                class="font-semibold text-primary font-display lg:text-2xl"
              >
                {{ testimonial.title }}
              </p>
              <p class="text-sm text-gray-700 lg:text-lg dark:text-gray-300">
                {{ testimonial.subtitle }} at {{ testimonial.company }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlockContainer>
</template>
