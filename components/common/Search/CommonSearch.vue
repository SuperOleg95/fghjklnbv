<script setup>
import MiniSearch from "minisearch";

const query = ref("");
const { data } = await useAsyncData("search", () =>
  queryCollectionSearchSections("news")
);

const miniSearch = new MiniSearch({
  fields: ["title", "content"],
  storeFields: ["title", "content"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
});

const items = [
  [
    {
      label: "ben@example.com",
    },
  ],
];

const emit = defineEmits(["search:close"]);

function closeClick() {
  query.value = "";
  emit("search:close");
}

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(data.value));
const result = computed(() => miniSearch.search(toValue(query)));
</script>

<template>
  <UContainer class="p-4">
    <div class="flex justify-center">
      <UInput v-model="query" class="grow" placeholder="Search..." />
      <UButton variant="ghost" @click="closeClick()">
        <UIcon
          name="i-heroicons-x-mark-20-solid"
          class="h-5 w-5 xl:h-6 xl:w-6"
        ></UIcon
      ></UButton>
    </div>

    <ul>
      <li v-for="link of result" :key="link.id" class="mt-2">
        <NuxtLink :to="link.id">{{ link.title }}</NuxtLink>
        <p class="text-gray-500 text-xs">{{ link.content }}</p>
      </li>
    </ul>
  </UContainer>
</template>
