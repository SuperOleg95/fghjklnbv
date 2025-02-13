<script setup lang="ts">
import "~/assets/css/main.css";

const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});

let data = {
  rows: [
    {
      id: 0,
      headline: "Prototypes",
      content:
        "We build prototypes of electronic assemblies in series of up to 1000 pieces on our own production line. If required, we also put the prototypes into operation and test them in every possible situation.",
      image: "/measuring/three.jpg",
      image_position: "right",
    },
    {
      id: 1,
      headline: "Measuring and Testing Equipment",
      content:
        "We design and build testing equipment for the development and production of ECUs. Often, this equipment is built to specific customer requirements.",
      image: "/measuring/four.jpg",
      image_position: "left",
    },
    {
      id: 2,
      headline: "Test Boxes",
      content:
        "We develop and build test boxes for software and hardware development, repair or initiation, and testing batch-produced circuit boards. That way, you ensure realistic testing conditions.",
      image: "/measuring/five.jpg",
      image_position: "right",
    },
    {
      id: 3,
      headline: "Repair Stands",
      content:
        "Using one of our respair stands, you can quickly and safely switch circuit boards for the repair of electronic assemblies. Testing contacts provide the boards with all required signals.",
      image: "/measuring/six.jpg",
      image_position: "left",
    },
    {
      id: 4,
      headline: "Analysis Stands",
      content:
        "For testing electronic control units, we produce analysis stands and upgrade them with audit and test software, for example LabVIEW or TestStand.",
      image: "/measuring/seven.jpg",
      image_position: "right",
    },
    {
      id: 5,
      headline: "Electronic Assembly Rework",
      content:
        "In an Electrostatic Protective Area (EPA), we repair and test devices before series production. We exclusively use certified material and measuring equipment. On request, we manually rework faulty or incorrectly populated assemblies to new requirements.",
      image: "/measuring/eight.jpg",
      image_position: "left",
    },
  ],
};
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 space-y-5 xl:space-y-10 // flex flex-col w-full"
  >
    <Top />
    <BlockContainer>
      <TypographyTitle>Measuring and test equipment</TypographyTitle>
      <TypographyHeadline content="Customized electronic solutions" />
      <h1 class="xl:text-lg pt-2">
        In the context of advancing digitalization, robust hardware is
        essential. At Schleissheimer, we know that specific testing is becoming
        more important due to the increasing complexity of systems. Therefore,
        we offer customized hardware solutions specifically designed for our
        clients' testing infrastructure needs. Our devices enable efficient
        product validation and help optimize internal capacities.
      </h1>
      <div class="mt-12 space-y-5 xl:space-y-10">
        <div
          v-for="row in data?.rows"
          :key="row?.id"
          class="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-24 ring-primary/50 ring-1 rounded-panel p-4 rounded-xl"
        >
          <div class="my-auto lg:col-span-2">
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
              height="200"
              width="200"
              class="object-cover object-center bg-gray-100 rounded-card dark:brightness-90 rounded-md"
            />
          </div>
        </div>
      </div>
      <MainContactForm />
    </BlockContainer>
    <About />
  </div>
</template>
