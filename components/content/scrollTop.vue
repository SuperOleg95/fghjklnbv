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
    class="rounded-2xl fixed right-1 bottom-1 lg:right-4 lg:bottom-4 px-3.5"
    @click="topFunction"
    variant="subtle"
    icon="i-heroicons-chevron-double-up"
  ></UButton>
</template>
