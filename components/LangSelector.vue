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
    class="p-0 text-black dark:text-white"
    @click="
      () => {
        if (store.currentLocale == 'en-US') {
          clickOnLanguage('de-DE');
        } else {
          clickOnLanguage('en-US');
        }
      }
    "
    ><UIcon name="i-heroicons-globe-alt" class="h-6 w-6 lg:h-8 lg:w-8"></UIcon
  ></UButton>
</template>
