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
        mybutton.style.left = "!0px";
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
    srt
    class="rounded-2xl fixed bottom-1 lg:bottom-4 px-3.5 left-[95%]"
    @click="topFunction"
    variant="subtle"
    icon="i-heroicons-chevron-double-up"
    style="left: 1px !important"
  ></UButton>
</template>
