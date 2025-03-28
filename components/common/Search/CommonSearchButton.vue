<script setup>
const emit = defineEmits(["search:open"]);
</script>

<template>
  <UButton
    block
    label="Open"
    variant="ghost"
    class="text-(--ui-text)"
    @click="emit('search:open')"
    ><UIcon
      name="i-heroicons-magnifying-glass"
      class="h-5 w-5 xl:h-8 xl:w-8"
    ></UIcon
  ></UButton>
</template>
