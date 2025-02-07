<script setup>
const props = defineProps({
  img: String,
});
</script>

<template>
  <div class="float-right">
    <img :src="props.img" class="min-h-40 min-w-40" />
  </div>
</template>
