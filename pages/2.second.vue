<script setup lang="ts">
let MyPerson = {
  image: "/test.jpg",
  name: "Vasua",
  job_title: "Developer",
  social_media: [
    {
      service: "LinkedIn",
      url: "#",
    },
    {
      service: "Twitter",
      url: "#",
    },
  ],
};

let duration = "10s";
</script>

<template>
  <BlockContainer>
    <div class="flex flex-col mx-auto lg:flex-row">
      <!-- Text -->
      <div class="flex flex-col pr-4 lg:w-3/5">
        <TypographyTitle>Our team!</TypographyTitle>
        <TypographyHeadline content="blallabllbal" size="lg" />
        <TypographyProse content="blallabllbal" class="mt-4" />
      </div>

      <!-- Team -->
      <div
        ref="target"
        class="w-full relative grid h-[40rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0"
      >
        <!-- Left Col -->
        <div
          ref="leftCol"
          :class="[
            { 'animate-marquee': true },
            'space-y-10 py-4 -mt-10 md:max-w-[320px] ',
          ]"
          :style="{
            '--marquee-duration': duration,
          }"
        >
          <TeamCard :person="MyPerson" />
          <TeamCard :person="MyPerson" />
          <TeamCard :person="MyPerson" />
        </div>
        <!-- Right Col -->
        <div
          ref="rightCol"
          :class="[
            { 'animate-marquee': true },
            'space-y-10 py-4 md:max-w-[320px]',
          ]"
          :style="{
            '--marquee-duration': duration,
          }"
        >
          <TeamCard :person="MyPerson" />
          <TeamCard :person="MyPerson" />
          <TeamCard :person="MyPerson" />
        </div>
      </div>
    </div>
  </BlockContainer>
</template>

<style>
.animate-marquee {
  animation: marquee var(--marquee-duration) linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee {
  0% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(calc(-50%));
  }
  100% {
    transform: translateY(0);
  }
}
</style>
