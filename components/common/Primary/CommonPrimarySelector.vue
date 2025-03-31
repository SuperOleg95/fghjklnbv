<script setup lang="ts">
const colorMode = useColorMode();

const colorThemeIcons = computed(() => {
  return [
    [
      {
        slot: "primary",
      },
    ],
    [
      {
        slot: "theme",
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

    <template #primary>
      <div class="flex flex-col">
        <div class="text-left pb-1.5 text-sm">Primary</div>
        <div class="grid grid-cols-3 gap-1.5">
          <CommonPrimaryItem itemColor="green" />
          <CommonPrimaryItem itemColor="lime" />
          <CommonPrimaryItem itemColor="teal" />

          <CommonPrimaryItem itemColor="red" />
          <CommonPrimaryItem itemColor="orange" />
          <CommonPrimaryItem itemColor="amber" />

          <CommonPrimaryItem itemColor="fuchsia" />
          <CommonPrimaryItem itemColor="indigo" />
          <CommonPrimaryItem itemColor="rose" />

          <CommonPrimaryItem itemColor="cyan" />
          <CommonPrimaryItem itemColor="sky" />
          <CommonPrimaryItem itemColor="blue" />
        </div>
      </div>
    </template>
    <template #theme>
      <div class="flex flex-col">
        <div class="text-left pb-1.5 text-sm">Theme</div>
        <div class="grid grid-cols-3 gap-1.5">
          <button
            @click="colorMode.preference = 'auto'"
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
  </UDropdownMenu>
</template>
