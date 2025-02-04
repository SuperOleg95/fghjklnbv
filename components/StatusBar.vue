<script setup lang="ts">
const { t } = useI18n();
const isSidebarOpen = ref(false);

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Second page",
    icon: "i-heroicons-chart-bar",
    to: "/2.second",
  },
  {
    label: "Third page",
    icon: "i-heroicons-command-line",
    to: "/3.third",
  },
  {
    label: "Fourth page",
    icon: "i-heroicons-academic-cap",
    to: "/4.fourth",
  },
  {
    label: "Fifth page",
    icon: "i-heroicons-arrow-down-16-solid",
    to: "/5.fifth",
  },
  {
    label: "Sixth page",
    icon: "i-heroicons-globe-alt-solid",
    to: "/6.sixth",
  },
  {
    label: "Seventh page",
    icon: "i-heroicons-folder-arrow-down-solid",
    to: "/7.seventh",
  },
  {
    label: "Eight page",
    icon: "i-heroicons-identification",
    to: "/8.eight",
  },
  {
    label: "Main page",
    icon: "i-heroicons-document-plus-20-solid",
    to: "/9.main",
  },
];
</script>

<template>
  <USlideover v-model="isSidebarOpen" class="h-full">
    <div class="p-4 flex-1 overflow-auto" @click="isSidebarOpen = false">
      <div class="p-4 ring-1 ring-gray-200 rounded-md max-h-full overflow-auto">
        <div>Here we would have some settings or info</div>
      </div>
    </div>
  </USlideover>

  <div class="flex flex-col h-full w-full">
    <div class="flex items-center lg:px-8">
      <div class="space-x-4 flex text-2xl h-10">
        <UIcon
          name="i-heroicons-code-bracket"
          class="text-4xl text-primary"
        ></UIcon>
        <span class="hidden sm:block"
          >NuxtApp
          <span class="text-primary italic">{{ t("boilerpalate") }}</span></span
        >
        <UBadge color="gray" class="px-3 text-xl hidden sm:block" size="md">
          v0.1</UBadge
        >
      </div>

      <div class="lg:ml-auto space-x-6 flex">
        <UHorizontalNavigation :links="links" class="hidden lg:block">
          <template #default="{ link }">
            <span class="hidden"> {{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
        <div class="flex flex-row items-center space-x-2">
          <ColorThemeSelector />
          <LangSelector />
          <PrimaryColorSelector />
          <UIcon
            name="i-heroicons-cog-6-tooth-solid"
            class="text-2xl text-primary cursor-pointer"
            @click="isSidebarOpen = true"
          />
        </div>

        <div class="flex flex-row items-center !ml-12">
          <Avatar />
        </div>
      </div>
    </div>
    <div class="flex items-center lg:hidden">
      <UHorizontalNavigation
        :links="links"
        class="justify-center overflow-ellipsis"
      >
        <template #default="{ link }">
          <span class="group-hover:text-primary">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </div>
  </div>
</template>
