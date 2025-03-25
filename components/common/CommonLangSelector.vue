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
  <UButton
    variant="ghost"
    block
    class="text-(--ui-text)"
    @click="
      () => {
        if (store.currentLocale == 'en-US') {
          clickOnLanguage('de-DE');
        } else {
          clickOnLanguage('en-US');
        }
      }
    "
    ><UIcon name="i-heroicons-globe-alt" class="h-5 w-5 xl:h-8 xl:w-8"></UIcon
  ></UButton>
</template>
