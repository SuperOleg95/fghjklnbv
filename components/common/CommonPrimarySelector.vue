<script setup lang="ts">
const { t } = useI18n();
const colorMode = useColorMode();

const colorThemeIcons = computed(() => {
  return [
    [
      {
        slot: "green",
      },
    ],
    [
      {
        slot: "red",
      },
    ],
  ];
});

const appConfig = useAppConfig();
</script>

<template>
  <UDropdownMenu size="xl" :items="colorThemeIcons" :ui="{}">
    <UButton variant="ghost" block>
      <template #trailing>
        <UIcon
          name="i-heroicons-swatch"
          class="h-5 w-5 xl:h-8 xl:w-8 text-(--ui-text) cursor-pointer preventShrink"
        />
      </template>
    </UButton>

    <!-- It's intentionally left this way, for some reason it's not rendering good as component -->
    <template #green>
      <div class="flex flex-col">
        <div class="text-left pb-1.5 text-sm">Primary</div>
        <div class="grid grid-cols-3 gap-1.5">
          <button
            @click="appConfig.ui.colors.primary = 'green'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-green-400`"
            ></span>
            <span class="truncate">green</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'lime'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-lime-400`"
            ></span>
            <span class="truncate">lime</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'teal'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-teal-400`"
            ></span>
            <span class="truncate">teal</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'red'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-red-400`"
            ></span>
            <span class="truncate">red</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'orange'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-orange-400`"
            ></span>
            <span class="truncate">orange</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'amber'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-amber-400`"
            ></span>
            <span class="truncate">amber</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'fuchsia'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-fuchsia-400`"
            ></span>
            <span class="truncate">fuchsia</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'indigo'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-indigo-400`"
            ></span>
            <span class="truncate">indigo</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'rose'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-rose-400`"
            ></span>
            <span class="truncate">rose</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'cyan'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-cyan-400`"
            ></span>
            <span class="truncate">cyan</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'sky'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-sky-400`"
            ></span>
            <span class="truncate">sky</span>
          </button>
          <button
            @click="appConfig.ui.colors.primary = 'blue'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <span
              :class="`inline-block size-2.5 rounded-full bg-blue-400`"
            ></span>
            <span class="truncate">blue</span>
          </button>
        </div>
      </div>
    </template>
    <template #red>
      <div class="flex flex-col">
        <div class="text-left pb-1.5 text-sm">Theme</div>
        <div class="grid grid-cols-3 gap-1.5">
          <button
            @click="colorMode.preference = 'system'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <UIcon
              name="i-heroicons-computer-desktop-solid"
              class="shrink-0 size-4"
            ></UIcon>
            <span class="truncate">system</span>
          </button>
          <button
            @click="colorMode.preference = 'dark'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <UIcon
              name="i-heroicons-moon-20-solid"
              class="shrink-0 size-4"
            ></UIcon>
            <span class="truncate">dark</span>
          </button>
          <button
            @click="colorMode.preference = 'light'"
            type="button"
            :class="`w-18 capitalize font-medium inline-flex items-center px-2 py-1 gap-1.5 ring ring-(--ui-ring-custom) rounded-lg text-[9px] hover:bg-(--ui-bg-accented)`"
          >
            <UIcon
              name="i-heroicons-sun-20-solid"
              class="shrink-0 size-4"
            ></UIcon>
            <span class="truncate">light</span>
          </button>
        </div>
      </div>
    </template>
    <template #fuchsia> </template>
    <template #cyan> </template>
  </UDropdownMenu>
</template>
