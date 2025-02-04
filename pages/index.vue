<script setup lang="ts">
import { MainContainer } from "#components";
</script>

<template>
  <div
    class="pt-2 h-screen scroll-hidden bg-white dark:bg-gray-900 space-y-20 // flex flex-col"
  >
    <MainHeader />

    <MainSwiper />

    <MainQuote />

    <MainCollection />

    <MainRefs />

    <MainReport />

    <MainInsights />

    <MainFooter />
  </div>
</template>
