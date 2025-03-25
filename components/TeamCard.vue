<script setup lang="ts">
const props = defineProps<{
  person: any;
}>();

const flipped = ref(false);
</script>
<template>
  <div
    class="opacity-100 cursor-pointer select-none animate-fade-in"
    @click="flipped = !flipped"
  >
    <div class="relative w-full aspect-square overflow-hidden group">
      <!-- Front of Team Card -->
      <!-- <NuxtImg
        v-if="props.person.image"
        width="400"
        height="400"
        class="object-cover w-full h-full grayscale group-hover:grayscale-0"
        :src="props.person.image"
      /> -->

      <div
        class="w-[300px] h-[230px] xl:w-[400px] xl:h-[300px] bg-(--ui-primary) opacity-50"
      ></div>

      <!-- Back of Team Card -->
      <Motionable
        v-motion
        name="team"
        :show="flipped"
        class="absolute inset-0 p-2 -m-2 overflow-hidden bg-primary/20 backdrop-blur-sm"
        :initial="{
          opacity: 0,
          y: 25,
          x: 200,
          scale: 0.9,
        }"
        :enter="{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        }"
        :leave="{
          opacity: 0,
          scale: 0.9,
          x: 200,
          y: 25,
        }"
      >
        <div class="relative p-4 space-y-2">
          <TypographyHeadline content="Links" />
          <NuxtLink
            v-for="link in props.person.social_media"
            :key="link?.service"
            class="inline-flex w-full border border-gray-900 hover:border-white hover:text-white"
            :href="link?.url"
            target="_blank"
          >
            <div class="flex items-center justify-center flex-none w-14">
              <UIcon class="w-8 h-8" name="i-heroicons-light-bulb" />
            </div>
            <p
              class="flex flex-col justify-center py-2 pb-1 pl-3 pr-2 overflow-hidden text-lg font-semibold leading-none tracking-tight capitalize truncate md:py-3 text-bold font-display word-spacing-tight"
            >
              {{ link?.service }}
            </p>
          </NuxtLink>
        </div>
      </Motionable>

      <div class="absolute z-10 bottom-4 left-7 right-7">
        <TypographyHeadline
          v-if="props.person.name"
          :content="props.person.name"
          size="sm"
          class="text-white drop-shadow"
        >
          {{ person?.name }}
        </TypographyHeadline>
        <TypographyTitle v-if="props.person.job_title" class="text-white/50">
          {{ person?.job_title }}
        </TypographyTitle>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black h-1/3 opacity-80"
      ></div>
    </div>
  </div>
</template>
