<script setup lang="ts">
import { MainNavAbout } from "#components";

const { t } = useI18n();
const viewport = useViewport();

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});

// search pane
const isSearchOpened = ref(false);

// mobile slideover
const isOpen = ref(false);

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
          <NuxtLink to="/">
            <TypographyHeadline :content="t('schleissheimer')" size="xl" />
          </NuxtLink>
          <div class="pt-2 space-x-2 flex">
            <CommonPrimarySelector />
            <CommonLangSelector />

            <USlideover
              v-model="isOpen"
              title="Menu"
              close-icon="i-lucide-arrow-right"
            >
              <UButton
                block
                label="Open"
                @click="isOpen = true"
                variant="ghost"
                class="text-(--ui-text)"
                ><UIcon name="i-heroicons-bars-3" class="h-5 w-5"></UIcon
              ></UButton>
              <template #body>
                <div class="p-4 flex-1">
                  <UNavigationMenu orientation="vertical" :items="items" />
                  <CommonSearch class="!p-0 !mt-4" />
                </div>
              </template>
            </USlideover>
          </div>
        </div>
      </MainContainer>
    </div>
    <!-- Tablet window -->
    <div v-else-if="viewport.isLessThan('desktop')">
      <MainContainer class="border-b-1 border-(--ui-border-muted)">
        <div class="flex justify-between p-2">
          <NuxtLink class="flex" to="/">
            <NuxtImg src="/logo.png" class="object-contain h-10" />
            <TypographyHeadline
              :content="t('schleissheimer')"
              size="lg"
              class="hidden xl:block"
            />
          </NuxtLink>

          <UNavigationMenu :items="items" class="w-full justify-center" />

          <div class="space-x-1 pc:space-x-2 pt-2 flex">
            <CommonPrimarySelector />
            <CommonLangSelector />
            <CommonSearchButton
              @search:open="isSearchOpened = true"
              :class="[{ invisible: isSearchOpened }]"
            />
          </div>
        </div>
      </MainContainer>

      <div v-if="isSearchOpened">
        <CommonSearch @search:close="isSearchOpened = false" />
      </div>
    </div>
    <!-- desktop window -->
    <div v-else>
      <MainContainer class="border-b-1 border-(--ui-border-muted) z-10">
        <div class="flex justify-between p-2 z-10">
          <NuxtLink class="flex" to="/">
            <NuxtImg src="/logo.png" class="object-contain h-10" />
            <TypographyHeadline
              :content="t('schleissheimer')"
              size="lg"
              class="hidden xl:block"
            />
          </NuxtLink>

          <UNavigationMenu :items="items" class="w-full justify-center" />

          <div class="space-x-1 pc:space-x-2 pt-2 flex">
            <CommonPrimarySelector />
            <CommonLangSelector />

            <CommonSearchButton
              @search:open="isSearchOpened = true"
              :class="[{ invisible: isSearchOpened }]"
            />
          </div>
        </div>
      </MainContainer>

      <div v-if="isSearchOpened">
        <CommonSearch @search:close="isSearchOpened = false" />
      </div>
    </div>
  </div>
</template>
