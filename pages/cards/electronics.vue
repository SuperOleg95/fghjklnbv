<script setup lang="ts">
import "~/assets/css/main.css";

let steps: any = [
  {
    image: "/electronics/1.png",
    title: "From Idea to Plan",
    content:
      "Whether you are responding to the digitalization of your industry or seeking to revolutionize the market with a groundbreaking idea, we turn your concept into a concrete plan and guide you through the entire process.",
  },
  {
    image: "/electronics/2.png",
    title: "From Plan to Concrete Concept",
    content:
      "Based on your goals and requirements, we develop the appropriate solution concept. You receive a realistic roadmap that outlines the path to a finished electronic product. Depending on quantity, complexity, and product lifespan, we will provide you with an initial product pricing.\
      Your advantage: You reduce initial development costs by investing primarily in the application rather than the base system, securing a strong, long-term technology partnership.",
  },
  {
    image: "/electronics/3.png",
    title: "From Concept to Product",
    content:
      "Our team of experienced engineers implements your concept using proven software and hardware platforms, thoroughly testing everything. The result: a fully functional, production-ready prototype.",
  },
  {
    image: "/electronics/4.png",
    title: "From Series Start to End-of-Life",
    content:
      "Even after the series start, we stay by your side: We take full responsibility for development, testing, production, and logistics. We continue to maintain and develop the supplier product beyond series production.",
  },
];

function isEven(n: number) {
  return n % 2 === 0;
}

let data = {
  buttons: [
    {
      id: 0,
      type: "page",
      color: "primary",
      variant: "solid",
      label: "Contact us",
    },
  ],
  alignment: "center",
};

const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div class="w-screen">
    <Top />
    <BlockContainer class="max-w-fit">
      <TypographyTitle>Electronics-development</TypographyTitle>
      <TypographyHeadline
        content="Efficient Cost Reduction with Customized Supplier Solutions"
        size="lg"
      />
      <h1 class="xl:text-lg pt-2">
        From idea to finished system – including consultation and design:
        Everything you need to shape the market of the future with
        groundbreaking products. We provide the technical expertise to realize
        your custom electronic solutions. Your vision is the starting point.
        With us, you gain a technology partner that supports your product
        throughout its entire lifecycle – even beyond the start of series
        production. Our expertise spans various industries, including
        automotive, medical technology, special vehicle construction, industrial
        communication, and industrial digital printing. At the same time, we are
        open to new challenges and ready to implement innovative solutions in
        other areas. Through our comprehensive support from idea to series
        production, we help you reduce initial development costs and make your
        product efficient and future-proof."
      </h1>
      <div class="mt-8">
        <template v-for="(step, stepIdx) in steps" :key="stepIdx">
          <div
            v-if="viewport.isLessThan('tablet')"
            v-motion
            :initial="{
              opacity: 0,
              scale: 1,
              x: 0,
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
              'relative p-2 sm:p-6 md:flex md:space-x-8 ring-primary/50 ring-1 rounded-panel max-w-fit',
            ]"
          >
            <div
              v-if="step.image"
              class="flex flex-col justify-center rounded-panel mx-4"
            >
              <NuxtImg
                v-if="step.image"
                :class="
                  step.image === '/electronics/1.png'
                    ? 'rounded-card w-[218px] h-[182px]'
                    : 'rounded-card w-[218px] h-[77px]'
                "
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
                size="sm"
              />
            </div>
          </div>
          <div
            v-else
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
              class="flex flex-col justify-center rounded-panel mx-4"
            >
              <NuxtImg
                v-if="step.image"
                :class="
                  step.image === '/electronics/1.png'
                    ? 'rounded-card w-[218px] h-[182px]'
                    : 'rounded-card w-[218px] h-[77px]'
                "
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
    <BlockContainer class="!pt-0">
      <div
        class="relative overflow-hidden p-8 text-gray-900 border md:px-10 md:py-8 border-primary/50 rounded-panel"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-600"
        ></div>
        <div class="absolute inset-0 opacity-50 grain-bg dark:opacity-20"></div>
        <div
          class="relative md:flex md:items-center md:justify-between md:space-x-4"
        >
          <div>
            <TypographyTitle>Interested?</TypographyTitle>
            <TypographyHeadline content="Messages" class="font-bold" />
            <TypographyProse
              content="We are looking forward to meeting you!"
              class="mt-2"
            />
          </div>
          <div class="flex-shrink-0 mt-4 md:mt-0">
            <BlockButtonGroup :data="data" />
          </div>
        </div>
      </div>
    </BlockContainer>
    <About />
  </div>
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
