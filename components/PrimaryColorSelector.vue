<script setup lang="ts">
let appConfig = useAppConfig();
const { t } = useI18n();

const colorThemeColors = computed(() => {
  return colorThemeIcons.value.filter(
    (i) => i[0].name !== appConfig.ui.primary
  );
});

const colorThemeIcons = computed(() => {
  return [
    [
      {
        label: t("green"),
        name: "green",
      },
    ],
    [
      {
        label: t("teal"),
        name: "teal",
      },
    ],
    [
      {
        label: t("violet"),
        name: "violet",
      },
    ],
    [
      {
        label: t("amber"),
        name: "amber",
      },
    ],
  ];
});
</script>

<template>
  <UDropdown :items="colorThemeColors">
    <UIcon
      name="i-heroicons-swatch"
      class="text-2xl text-primary hover:text-primary-200 preventShrink"
    ></UIcon>
    <template template #item="{ item }">
      <div class="flex grow" @click="appConfig.ui.primary = item.name">
        <UBadge size="md" :color="item.name" class="mx-auto w-36">{{
          item.label
        }}</UBadge>
      </div>
    </template>
  </UDropdown>
</template>
