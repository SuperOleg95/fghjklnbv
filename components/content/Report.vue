<script setup lang="ts">
const { data: event } = await useAsyncData("event", () => {
  return queryCollection("event").first();
});

const description = event?.value?.description || "";
const path = event?.value?.path;
const meta = event?.value?.meta;
const button = meta?.button;
const color = "bg-" + String(meta?.color) + "-400";

const viewport = useViewport();

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div>
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')">
      <MainContainer>
        <NuxtLink to="#">
          <div
            class="h-[400px] lg:h-[600px] rounded-xl bg-gray-200 dark:bg-gray-700 flex flex-col"
          >
            <div class="pt-14 p-4 text-base">
              <TypographyTitle>Event</TypographyTitle>
              <TypographyHeadline :content="description" size="md" />

              <UButton
                :to="path"
                class="w-fit mt-4"
                size="xl"
                variant="outline"
                >{{ button }}</UButton
              >
            </div>
            <div :class="`h-full ${color} rounded-b-xl`"></div>
          </div>
        </NuxtLink>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div v-else>
      <MainContainer>
        <div class="flex grow">
          <div
            class="w-1/2 flex lg:grow-0 flex-col bg-gray-200 dark:bg-gray-700 rounded-l-3xl justify-center px-4"
          >
            <TypographyTitle>Event</TypographyTitle>
            <TypographyHeadline :content="description" size="lg" />

            <UButton
              :to="path"
              class="w-fit mt-4"
              size="xl"
              variant="outline"
              >{{ button }}</UButton
            >
          </div>

          <div
            :class="`w-1/2 ${color} h-[350px] rounded-r-3xl hidden md:block`"
          ></div>
        </div>
      </MainContainer>
    </div>
  </div>
</template>
