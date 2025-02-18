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

let personsLeft = [
  {
    image: "/test.jpg",
    name: "Hans-Joachim Schleißheimer",
    job_title: "CEO",
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
  },
  {
    image: "/test.jpg",
    name: "Natalia Natesova",
    job_title: "CEO",
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
  },
  {
    image: "/test.jpg",
    name: "Ralph Illing",
    job_title: "Head of Software-Engineering",
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
  },
];

let personsRight = [
  {
    image: "/test.jpg",
    name: "Antje Illing",
    job_title: "Back-Office, Human Resources",
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
  },
  {
    image: "/test.jpg",
    name: "Sabine Künze",
    job_title: "Human Resources",
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
  },
  {
    image: "/test.jpg",
    name: "Felix Dombrowsky",
    job_title: "Marketing & Sales",
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
  },
];

let duration_slow = "40s";
let duration_fast = "20s";
</script>

<template>
  <div class="bg-white dark:bg-gray-900 space-y-5// flex flex-col w-full">
    <Top />
    <BlockContainer>
      <div class="flex flex-col mx-auto lg:flex-row">
        <!-- Text -->
        <div class="flex flex-col pr-4 lg:w-3/5">
          <TypographyTitle>Our team!</TypographyTitle>
          <TypographyHeadline content="We are your contact persons" size="lg" />
          <TypographyProse content="Some text here" class="mt-4" />
        </div>

        <!-- Team -->
        <div
          ref="target"
          class="w-full relative grid h-[35rem] max-h-[60vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 border-t-4 border-t-primary border-b-4 border-b-gray-500 mt-8 lg:mt-0"
        >
          <!-- Left Col -->
          <div
            ref="leftCol"
            :class="[
              { 'animate-marquee': true },
              'space-y-10 py-4 mt-[530px] md:max-w-[320px] ',
            ]"
            :style="{
              '--marquee-duration': duration_slow,
            }"
          >
            <div v-for="person in personsLeft">
              <TeamCard :person="person" />
            </div>
          </div>
          <!-- Right Col -->
          <div
            ref="rightCol"
            :class="[
              { 'animate-marquee': true },
              'space-y-10 py-4 mt-[530px] md:max-w-[320px]',
            ]"
            :style="{
              '--marquee-duration': duration_fast,
            }"
          >
            <div v-for="person in personsRight">
              <TeamCard :person="person" />
            </div>
          </div>
        </div>
      </div>
    </BlockContainer>
    <About />
  </div>
</template>

<style>
.animate-marquee {
  animation: marquee var(--marquee-duration) linear infinite forwards;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-180%));
  }
}
</style>
