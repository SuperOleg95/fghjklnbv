<script setup lang="ts">
import "~/assets/css/main.css";

let steps: any = [
  {
    image: "/test.jpg",
    title: "Discovery & Research",
    content:
      "This is where our journey begins. We deep-dive into understanding your brand, its core values, target audience, and competitive landscape. This phase ensures that our subsequent actions are grounded in data and genuine insights.",
  },
  {
    image: "/test.jpg",
    title: "Development & Execution",
    content:
      "Our developers and strategists take the lead in this phase. Leveraging the latest tools and technologies, we bring the conceptualized designs to life, ensuring optimal performance and responsiveness across all devices and platforms.",
  },
];

function isEven(n: number) {
  return n % 2 === 0;
}
</script>

<template>
  <BlockContainer>
    <TypographyTitle>Our Process</TypographyTitle>
    <TypographyHeadline content="Refined over tons of projects" size="lg" />
    <div class="mt-8">
      <template v-for="(step, stepIdx) in steps" :key="stepIdx">
        <div
          v-motion
          :initial="{
            opacity: 0,
            scale: 1,
            x: isEven(stepIdx) ? -200 : 200,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 1000,
            },
          }"
          :delay="300"
          :class="[
            {
              'mr-8 md:mr-24': isEven(stepIdx),
              'ml-8 md:ml-24': !isEven(stepIdx),
            },
            {
              'md:flex-row': isEven(stepIdx),
              'md:flex-row-reverse md:space-x-reverse': !isEven(stepIdx),
            },
            'relative p-6 md:flex md:space-x-8 ring-primary/50 ring-1 rounded-panel',
          ]"
        >
          <div
            v-if="step.image"
            class="flex-shrink-0 dark:bg-white dark:brightness-90 rounded-panel"
          >
            <NuxtImg
              v-if="step.image"
              class="object-cover w-full h-32 rounded-card md:w-48 md:h-full"
              :src="step.image"
            />
          </div>

          <div class="w-full mt-4 text-left md:mt-0">
            <TypographyTitle v-if="step"
              >Step {{ stepIdx + 1 }}</TypographyTitle
            >
            <TypographyHeadline
              v-if="step.title"
              :content="step.title"
              size="sm"
            />
            <TypographyProse
              v-if="step.content"
              :content="step.content"
              class="mt-4"
            />
            <!-- <BlocksButtonGroup v-if="step.button_group" :data="step.button_group as BlockButtonGroup" class="mt-4" /> -->
          </div>
        </div>
        <svg
          v-if="stepIdx !== steps.length - 1"
          class="h-16 m-0 mx-auto stroke-current text-primary md:h-20 steps-animation"
          viewBox="0 0 60 200"
        >
          <line
            class="path"
            x1="15"
            x2="15"
            y1="0"
            y2="200"
            stroke-width="8"
            stroke-linecap="square"
          />
        </svg>
      </template>
    </div>
  </BlockContainer>
</template>

<style>
.steps-animation .path {
  stroke-dasharray: 1, 30;
  -webkit-animation: dash 5s linear both infinite;
  animation: dash 5s linear both infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -15rem;
  }
}
</style>
