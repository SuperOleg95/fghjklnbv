<template>
  <div>
    <div
      class="p-2 space-y-2 lg:flex lg:flex-col h-screen overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-800 // flex flex-col"
    >
      <div class="ring-1 ring-gray-200 dark:ring-gray-600 rounded">
        <StatusBar />
      </div>

      <div
        class="lg:grow lg:min-h-96 lg:flex lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 // flex flex-col grow p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded"
      >
        <div class="flex grow justify-center">
          <slot></slot>
        </div>
      </div>

      <div class="p-2 ring-1 ring-gray-200 dark:ring-gray-600 rounded">
        <Footer />
        <UNotifications />
      </div>
    </div>
  </div>
</template>
