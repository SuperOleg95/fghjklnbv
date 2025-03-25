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

const items = computed(() => {
  return [
    {
      label: t("aboutUs"),
      icon: "i-lucide-book-open",
      to: "#",
      children: [
        {
          label: "Company",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: "i-lucide-house",
        },
        {
          label: "Partner",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: "i-mdi-account-group",
        },
        {
          label: "Philosphy",
          icon: "i-lucide-smile",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          label: "Competencies",
          icon: "i-lucide-swatch-book",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          label: "Compliance",
          icon: "i-lucide-cog",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
    {
      label: t("software"),
      icon: "i-lucide-database",
      to: "#",
      children: [
        {
          label: "Automotive Software-Engineering",
          icon: "i-lucide-file-text",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          to: "/composables/define-shortcuts",
        },
        {
          label: "Medical System & Software Engineering",
          icon: "i-lucide-file-text",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          to: "/composables/use-overlay",
        },
        {
          label: "Cyber Security",
          icon: "i-lucide-file-text",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          to: "/composables/use-toast",
        },
      ],
    },
    {
      label: t("engineering"),
      icon: "i-lucide-box",
      to: "#",
      active: true,
      children: [
        {
          label: "Efficient Cost Reduction with Customized Supplier Solutions",
          icon: "i-lucide-file-text",
          description: "Use NuxtLink with superpowers.",
          to: "/components/link",
        },
        {
          label: "Measuring and Test Equipment",
          icon: "i-lucide-file-text",
          description: "Display a modal within your application.",
          to: "/components/modal",
        },
        {
          label: "Micro HiL Cluster",
          icon: "i-lucide-file-text",
          description: "Display a list of links.",
          to: "/components/navigation-menu",
        },
      ],
    },
    {
      label: "Products",
      icon: "i-heroicons-bars-3",
      to: "#",
    },
    {
      label: "Career",
      icon: "i-heroicons-globe-europe-africa",
      badge: "10",
      to: "#",
    },
  ];
});
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

            <USlideover
              v-model="isOpen"
              title="Menu"
              close-icon="i-lucide-arrow-right"
            >
              <UButton
                :padded="false"
                label="Open"
                @click="isOpen = true"
                variant="ghost"
                class="text-black dark:text-white"
                ><UIcon name="i-heroicons-bars-3" class="h-5 w-5"></UIcon
              ></UButton>
              <template #body>
                <div class="p-4 flex-1">
                  <UNavigationMenu orientation="vertical" :items="items" />
                  <CommonMiniSearch />
                </div>
              </template>
            </USlideover>
          </div>
        </div>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div
      v-else-if="viewport.isLessThan('desktop')"
      @mouseleave="megaMenuDispatch(megaMenu.Closed)"
    >
      <MainContainer class="border-b-1 border-(--ui-border-muted)">
        <div class="flex justify-between p-2">
          <div class="flex">
            <NuxtImg src="/logo.png" class="object-contain h-10" />
            <TypographyHeadline
              :content="t('schleissheimer')"
              size="lg"
              class="hidden xl:block"
            />
          </div>

          <UNavigationMenu :items="items" class="w-full justify-center" />

          <div class="space-x-1 pc:space-x-2 pt-2 w-40">
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
    <!-- desktop window -->
    <div v-else>
      <MainContainer class="border-b-1 border-(--ui-border-muted) z-10">
        <div class="flex justify-between p-2 z-10">
          <div class="flex">
            <NuxtImg src="/logo.png" class="object-contain h-10" />
            <TypographyHeadline
              :content="t('schleissheimer')"
              size="lg"
              class="hidden xl:block"
            />
          </div>

          <UNavigationMenu :items="items" class="w-full justify-center" />

          <div class="space-x-1 pc:space-x-2 pt-2 flex">
            <CommonPrimarySelector />
            <CommonLangSelector />
            <UButton
              variant="ghost"
              block
              class="text-(--ui-text)"
              :class="[{ invisible: isSearchOpened }]"
            >
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="h-5 w-5 xl:h-8 xl:w-8"
                @click="megaMenuDispatch(megaMenu.Search)"
              ></UIcon>
            </UButton>
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
        class="absolute top-18 z-10 w-full bg-white dark:bg-gray-900"
      >
        <CommonMiniSearch @search:close="isSearchOpened = false" />
      </div>
    </div>
  </div>
</template>
