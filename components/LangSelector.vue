<script setup lang="ts">
const { t, setLocale, locale } = useI18n();
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const store = useWebsiteStore();
const toast = useToast();

const compSelectLanguageItem = computed(() => {
  return selectLanguageItems.filter((i) => i[0].code !== store.currentLocale);
});

onMounted(() => {
  store.currentLocale = locale.value;
});

const selectLanguageItems = [
  [
    {
      label: "English",
      code: "en-US",
      pic: "/us.svg",
    },
  ],
  [
    {
      label: "Deutsch",
      code: "de-DE",
      pic: "/de.svg",
    },
  ],
];

function clickOnLanguage(code: string) {
  setLocale(code);
  switchLocalePath(code);
  setTimeout(() => {
    toast.add({
      title: t("welcome"),
      color: "green",
      icon: "i-heroicons-globe-europe-africa",
      timeout: 3000,
    });
  }, 10);
}
</script>

<template>
  <UDropdown
    :items="compSelectLanguageItem"
    :popper="{ placement: 'bottom-end' }"
  >
    <UIcon
      name="i-heroicons-globe-alt"
      class="text-2xl text-primary hover:text-primary-200 preventShrink"
    ></UIcon>
    <template template #item="{ item }">
      <div class="flex grow" @click="clickOnLanguage(item.code)">
        <span class="truncate font-bold text-primary">{{ item.label }}</span>
        <UAvatar :src="item.pic" class="ms-auto" size="xs" />
      </div>
    </template>
  </UDropdown>
</template>
