<template>
  <MainContainer>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 500,
        },
      }"
      class="relative"
    >
      <TypographyTitle
        >We are the technology partner for innovative companies</TypographyTitle
      >
      <div
        class="relative text-3xl italic leading-tight text-gray-900 font-display md:leading-tight dark:text-gray-100 md:text-4xl text-wrap-[balance] dark:drop-shadow"
      >
        For over 25 years, we have been helping shape digitization in the
        automotive industry. Let us help you
      </div>
      <UIcon
        name="i-heroicons-paper-clip"
        class="absolute w-20 h-20 rotate-180 -left-8 text-primary/20 -top-8"
      />
    </div>

    <div
      class="w-full mt-4 text-sm font-semibold tracking-wider uppercase word-spacing-tight lg:text-lg font-display"
    >
      <p class="text-primary">John Doe</p>
      <p class="dark:text-white">SEO</p>
    </div>
  </MainContainer>
</template>
