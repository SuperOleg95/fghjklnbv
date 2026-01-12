<script setup lang="ts">
const { t, setLocale } = useI18n();
const toast = useToast();

useSeoMeta({
  title: "Example Web UI",
  description: "Description",
});
</script>

<template>
  <div
    class="p-2 space-y-2 lg:flex lg:flex-col h-screen overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-800 // flex flex-col"
  >
    <div class="ring-1 ring-gray-200 dark:ring-gray-600 rounded">
      <StatusBar />
    </div>
    <div
      class="flex max-sm:flex-col max-sm:space-y-4 sm:flex-row space-x-2 min-h-24"
    >
      <div
        class="flex-1 p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
      ></div>
      <div
        class="flex-1 p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
      ></div>
    </div>
    <div
      class="lg:grow lg:min-h-96 lg:flex lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 // flex flex-col grow"
    >
      <div
        class="lg:basis-1/3 p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
      ></div>
      <div class="lg:basis-1/3 lg:flex lg:flex-col space-y-2">
        <div
          class="lg:grow lg:min-h-0 p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
        ></div>
        <div
          class="p-2 ring-1 h-1/2 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
        ></div>
      </div>
      <div class="lg:basis-1/3 lg:flex lg:flex-col space-y-2">
        <div
          class="lg:grow lg:min-h-0 p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
        ></div>
        <div
          class="p-2 ring-1 h-1/3 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
        ></div>
        <div
          class="p-2 ring-1 h-1/3 ring-gray-200 dark:ring-gray-600 rounded-md shadow-md"
        ></div>
      </div>
    </div>
    <div class="p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded">
      <Footer />
      <UNotifications />
    </div>
  </div>
</template>
