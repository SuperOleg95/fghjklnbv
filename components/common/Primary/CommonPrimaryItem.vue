<script setup lang="ts">
const appConfig = useAppConfig();

const props = defineProps<{
  itemColor: string;
}>();
</script>

<template>
  <button
    @click="appConfig.ui.colors.primary = props.itemColor"
    type="button"
    :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
  >
    <span
      :class="`inline-block size-2.5 rounded-full bg-${props.itemColor}-400`"
    ></span>
    <span class="truncate">{{ props.itemColor }}</span>
  </button>
</template>
