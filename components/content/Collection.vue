<script setup lang="ts">
const { data: cards } = await useAsyncData("cards", () => {
  return queryCollection("cards").all();
});

let items: any = [];

if (cards.value) {
  for (let card of cards.value) {
    items.push({
      title: card.title,
      descr: card.description,
      link: card.meta.link,
      color: card.meta.color,
    });
  }
}
</script>

<template>
  <MainContainer>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
      <div v-for="item in items">
        <MainCard
          :heading="item.title"
          :description="item.descr"
          :color="item.color"
          :link="item.link"
        />
      </div>
    </div>
  </MainContainer>
</template>
