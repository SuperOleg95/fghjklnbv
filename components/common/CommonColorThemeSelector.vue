<script setup lang="ts">
const colorMode = useColorMode();
let appConfig = useAppConfig();
const { t } = useI18n();

const compColorThemeIcons = computed(() => {
  return colorThemeIcons.value.filter(
    (i) => i[0].name !== colorMode.preference
  );
});

const colorThemeIcons = computed(() => {
  return [
    [
      {
        name: "system",
        icon: "i-heroicons-computer-desktop-solid",
        label: t("colormodeSystem"),
        color: "green",
      },
    ],
    [
      {
        name: "dark",
        icon: "i-heroicons-moon-20-solid",
        label: t("colormodeDark"),
        color: "fuchsia",
      },
    ],
    [
      {
        name: "light",
        icon: "i-heroicons-sun-20-solid",
        label: t("colormodeLight"),
        color: "blue",
      },
    ],
  ];
});

const statusBarThemeIcon = computed(() => {
  switch (colorMode.value) {
    case "light":
      return "i-heroicons-sun-20-solid";
    case "dark":
      return "i-heroicons-moon-20-solid";
    default:
      return "i-heroicons-computer-desktop-solid";
  }
});
</script>

<template>
  <UButton
    variant="ghost"
    class="p-0 text-black dark:text-white"
    @click="
      () => {
        if (colorMode.preference === 'light') {
          colorMode.preference = 'dark';
        } else {
          colorMode.preference = 'light';
        }
      }
    "
    ><UIcon :name="statusBarThemeIcon" class="h-5 w-5 xl:h-8 xl:w-8"></UIcon
  ></UButton>
</template>
