<script setup lang="ts">
import { MainNavAbout } from "#components";

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

const isAboutOpened = ref(false);
const isSoftwareOpened = ref(false);
const isEngineeringOpened = ref(false);
const isProductsOpened = ref(false);
const isSearchOpened = ref(false);

const isOpen = ref(false);

enum megaMenu {
  Search = "Search",
  About = "About",
  Software = "Software",
  Engineering = "Engineering",
  Products = "Products",
  Closed = "Closed",
}

function megaMenuDispatch(item: megaMenu) {
  let refList = [
    isAboutOpened,
    isSoftwareOpened,
    isEngineeringOpened,
    isProductsOpened,
    isSearchOpened,
  ];
  let refListCopy: globalThis.Ref<boolean, boolean>[] = refList;

  switch (item) {
    case megaMenu.About:
      refListCopy.splice(refListCopy.indexOf(isAboutOpened), 1);
      isAboutOpened.value = true;
      break;

    case megaMenu.Software:
      refListCopy.splice(refListCopy.indexOf(isSoftwareOpened), 1);
      isSoftwareOpened.value = true;
      break;

    case megaMenu.Engineering:
      refListCopy.splice(refListCopy.indexOf(isEngineeringOpened), 1);
      isEngineeringOpened.value = true;
      break;

    case megaMenu.Products:
      refListCopy.splice(refListCopy.indexOf(isProductsOpened), 1);
      isProductsOpened.value = true;
      break;

    case megaMenu.Search:
      refListCopy.splice(refListCopy.indexOf(isSearchOpened), 1);
      isSearchOpened.value = true;
      break;

    case megaMenu.Closed:
      // close all
      break;
  }

  for (let ref of refListCopy) {
    ref.value = false;
  }
}
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
            <CommonLangSelector />
            <UButton
              :padded="false"
              label="Open"
              @click="isOpen = true"
              variant="ghost"
              class="text-black dark:text-white"
              ><UIcon name="i-heroicons-bars-3" class="h-5 w-5"></UIcon
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
              <!-- <UVerticalNavigation :links="links" /> -->
              <CommonMiniSearch />
            </div>
          </div>
        </USlideover>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div v-else @mouseleave="megaMenuDispatch(megaMenu.Closed)">
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

          <nav
            class="flex bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"
          >
            <UButton
              color="white"
              :label="t('aboutUs')"
              icon="i-heroicons-briefcase"
              variant="ghost"
              class="opacity-60 hover:opacity-100"
              size="xl"
              @mouseover="megaMenuDispatch(megaMenu.About)"
            />
            <UButton
              color="white"
              :label="t('software')"
              icon="i-heroicons-code-bracket"
              variant="ghost"
              class="opacity-60 hover:opacity-100"
              size="xl"
              @mouseover="megaMenuDispatch(megaMenu.Software)"
            />
            <UButton
              color="white"
              :label="t('engineering')"
              icon="i-heroicons-cog-8-tooth"
              variant="ghost"
              class="opacity-60 hover:opacity-100"
              size="xl"
              @mouseover="megaMenuDispatch(megaMenu.Engineering)"
            ></UButton>
            <UButton
              color="white"
              :label="t('products')"
              icon="i-heroicons-sparkles"
              variant="ghost"
              class="opacity-60 hover:opacity-100"
              size="xl"
              @mouseover="megaMenuDispatch(megaMenu.Products)"
            ></UButton>
            <UButton
              color="white"
              :label="t('career')"
              icon="i-heroicons-presentation-chart-line"
              variant="ghost"
              class="opacity-60 hover:opacity-100"
              size="xl"
            ></UButton>
          </nav>

          <div class="space-x-1 pc:space-x-4 pt-2">
            <CommonColorThemeSelector />
            <CommonLangSelector />
            <UIcon
              name="i-heroicons-magnifying-glass"
              :class="[{ invisible: isSearchOpened }]"
              class="h-5 w-5 xl:h-8 xl:w-8"
              @mouseover="megaMenuDispatch(megaMenu.Search)"
            ></UIcon>
          </div>
        </div>
      </MainContainer>

      <div v-if="isAboutOpened" class="absolute top-18 z-10 w-screen">
        <MainNavAbout />
      </div>
      <div v-else-if="isSoftwareOpened" class="absolute top-18 z-10 w-screen">
        <MainNavSoftware />
      </div>
      <div
        v-else-if="isEngineeringOpened"
        class="absolute top-18 z-10 w-screen"
      >
        <MainNavEngineering />
      </div>
      <div v-else-if="isProductsOpened" class="absolute top-18 z-10 w-screen">
        <MainNavProducts />
      </div>
      <div
        v-else-if="isSearchOpened"
        class="absolute top-18 z-10 w-screen bg-white dark:bg-gray-900"
      >
        <CommonMiniSearch @search:close="isSearchOpened = false" />
      </div>
    </div>
  </div>
</template>
