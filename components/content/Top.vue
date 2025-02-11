<script setup lang="ts">
const { t } = useI18n();
const viewport = useViewport();

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});

const links = computed(() => {
  return [
    {
      label: t("aboutUs"),
      icon: "i-heroicons-briefcase",
      to: "#",
    },
    {
      label: t("software"),
      icon: "i-heroicons-cog-8-tooth",
      to: "#",
    },
    {
      label: t("engineering"),
      icon: "i-heroicons-command-line",
      to: "#",
    },
    {
      label: t("products"),
      icon: "i-heroicons-sparkles",
      to: "#",
    },
    {
      label: t("career"),
      icon: "i-heroicons-presentation-chart-line",
      to: "#",
    },
  ];
});

const isOpen = ref(false);
</script>

<template>
  <div>
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')">
      <MainContainer>
        <div class="flex justify-between">
          <TypographyHeadline :content="t('schleissheimer')" size="xl" />
          <div class="pt-2 space-x-2">
            <CommonColorThemeSelector />
            <LangSelector />
            <UButton
              :padded="false"
              label="Open"
              @click="isOpen = true"
              variant="ghost"
              class="text-black dark:text-white"
              ><UIcon name="i-heroicons-bars-3" class="h-6 w-6"></UIcon
            ></UButton>
          </div>
        </div>

        <USlideover v-model="isOpen">
          <div class="p-4 flex-1">
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="flex sm:hidden absolute end-5 top-5 z-10"
              square
              padded
              @click="isOpen = false"
            />
            <div class="pt-20">
              <UVerticalNavigation :links="links" />
            </div>
          </div>
        </USlideover>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div v-else>
      <MainContainer>
        <div class="flex justify-between p-2">
          <div class="flex">
            <NuxtImg src="/logo.png" class="object-contain h-10" />
            <TypographyHeadline
              :content="t('schleissheimer')"
              size="xl"
              class="hidden xl:block"
            />
          </div>

          <MainMegamenu />

          <div class="space-x-4 pt-2">
            <CommonColorThemeSelector />
            <LangSelector />
            <UIcon name="i-heroicons-magnifying-glass" class="h-8 w-8"></UIcon>
          </div>
        </div>
      </MainContainer>
    </div>
  </div>
</template>
