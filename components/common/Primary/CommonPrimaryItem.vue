<script setup lang="ts">
import { colors_500 } from "#imports";
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
      :data-tone="props.itemColor"
      :class="colors_500"
      class="inline-block size-2.5 rounded-full"
    ></span>
    <span class="truncate">{{ props.itemColor }}</span>
  </button>
</template>
