<script setup lang="ts">
onMounted(() => {
  window.onscroll = function () {
    scrollFunction();
  };
  let mybutton = document.getElementById("myBtn");

  function scrollFunction() {
    if (mybutton) {
      console.log("button exist!");
      if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

<template>
  <UButton
    id="myBtn"
    size="xl"
    class="rounded-2xl fixed right-1 bottom-1 lg:right-4 lg:bottom-4"
    @click="topFunction"
    ><UIcon
      name="i-heroicons-chevron-double-up"
      class="h-4 w-4 lg:h-6 lg:w-6"
    ></UIcon
  ></UButton>
</template>
