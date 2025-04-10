<script setup lang="ts">
import { colors_500 } from "#imports";
const { data: news } = await useAsyncData("news", () => {
  return queryCollection("news").all();
});

let items: Array<{
  description: string;
  date: string;
  color: string;
  path: string;
  tag: string;
  estimate: string;
}> = [];

if (news.value) {
  for (let piece of news.value) {
    items.push({
      description: piece.description,
      date: String(piece.meta.date),
      color: String(piece.meta.color),
      path: piece.path,
      tag: String(piece.meta.tag),
      estimate: String(piece.meta.estimate),
    });
  }
}

const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div>
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')" class="!overflow-hidden">
      <MainContainer>
        <div class="text-center">
          <TypographyTitle>Our news</TypographyTitle>
          <TypographyHeadline content="Latest insights" size="sm" />
        </div>

        <div class="flex flex-col">
          <UCarousel
            :items="items"
            class="w-full mt-6"
            loop
            auto-scroll
            :ui="{
              item: 'basis-1/3',
              dots: 'bottom-4',
            }"
          >
            <template #default="{ item }" class="justify-center">
              <NuxtLink
                :to="item.path"
                class="h-[230px] w-[170px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-4"
              >
                <div
                  :data-tone="item.color"
                  :class="colors_500"
                  class="min-h-[60%] rounded-t-3xl"
                ></div>

                <div>
                  <span class="text-sm ps-5 p-2 inline-block"
                    >#{{ item.tag }}</span
                  >
                  <span class="text-sm p-2">{{ item.estimate }}</span>
                </div>
                <h5 class="text-base p-5">{{ item.description }}</h5>

                <h5 class="text-right text-base p-5">{{ item.date }}</h5>
              </NuxtLink>
            </template>
          </UCarousel>
        </div>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div v-else-if="viewport.isLessThan('desktop')" class="!overflow-hidden">
      <MainContainer>
        <div class="flex flex-col px-4 mx-2">
          <div class="ps-5">
            <TypographyTitle>Our news</TypographyTitle>
            <TypographyHeadline content="Latest insights" size="lg" />
          </div>

          <UCarousel
            :items="items"
            class="w-full mt-6"
            loop
            auto-scroll
            :ui="{
              item: 'basis-1/3',
              dots: 'bottom-4',
            }"
          >
            <template #default="{ item }" class="justify-center">
              <NuxtLink
                :to="item.path"
                class="h-[280px] w-[230px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-4"
              >
                <div
                  :data-tone="item.color"
                  :class="colors_500"
                  class="min-h-[60%] rounded-t-3xl"
                ></div>

                <div>
                  <span class="text-lg ps-5 p-2 inline-block"
                    >#{{ item.tag }}</span
                  >
                  <span class="text-lg p-2">{{ item.estimate }}</span>
                </div>
                <h5 class="text-2xl p-5">{{ item.description }}</h5>

                <h5 class="text-right text-base p-5">{{ item.date }}</h5>
              </NuxtLink>
            </template>
          </UCarousel>
        </div>
      </MainContainer>
    </div>
    <!-- laptop window -->
    <div v-else-if="viewport.isLessThan('desktopMedium')">
      <MainContainer>
        <div class="flex flex-col">
          <div class="ps-5">
            <TypographyTitle>Our news</TypographyTitle>
            <TypographyHeadline content="Latest insights" size="lg" />
          </div>

          <UCarousel
            :items="items"
            class="w-full mt-6"
            loop
            auto-scroll
            :ui="{
              item: 'basis-1/3',
              dots: 'bottom-4',
            }"
          >
            <template #default="{ item }" class="justify-center">
              <NuxtLink
                :to="item.path"
                class="h-[400px] w-[290px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-4"
              >
                <div
                  :data-tone="item.color"
                  :class="colors_500"
                  class="min-h-[60%] rounded-t-3xl"
                ></div>

                <div>
                  <span class="text-base ps-5 p-2 inline-block"
                    >#{{ item.tag }}</span
                  >
                  <span class="text-base p-2">{{ item.estimate }}</span>
                </div>
                <h5 class="text-4xl p-5">{{ item.description }}</h5>

                <h5 class="text-right text-base p-1">{{ item.date }}</h5>
              </NuxtLink>
            </template>
          </UCarousel>
        </div>
      </MainContainer>
    </div>
    <div v-else>
      <MainContainer>
        <div class="flex flex-col">
          <div class="ps-5">
            <TypographyTitle>Our news</TypographyTitle>
            <TypographyHeadline content="Latest insights" size="lg" />
          </div>

          <UCarousel
            :items="items"
            class="w-full mt-6"
            loop
            auto-scroll
            :ui="{
              item: 'basis-1/3',
              dots: 'bottom-4',
            }"
          >
            <template #default="{ item }" class="justify-center">
              <NuxtLink
                :to="item.path"
                class="h-[500px] w-[335px] flex flex-col bg-gray-200 dark:bg-gray-600 rounded-3xl mb-2 mx-4"
              >
                <div
                  :data-tone="item.color"
                  :class="colors_500"
                  class="min-h-[60%] rounded-t-3xl"
                ></div>

                <div>
                  <span class="text-base ps-5 p-2 inline-block"
                    >#{{ item.tag }}</span
                  >
                  <span class="text-base p-2">{{ item.estimate }}</span>
                </div>
                <h5 class="text-4xl p-5">{{ item.description }}</h5>

                <h5 class="text-right text-base p-5">{{ item.date }}</h5>
              </NuxtLink>
            </template>
          </UCarousel>
        </div>
      </MainContainer>
    </div>
  </div>
</template>
