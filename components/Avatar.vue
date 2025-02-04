<script setup>
let items = [
  [
    {
      label: "example@mail.com",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
      link: "/login",
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      link: "/login",
    },
  ],
];
</script>

<template>
  <UDropdown :items="items" mode="hover">
    <UAvatar alt="A V" class="border-2 border-primary" />

    <template #account="{ item }">
      <div class="text-left">
        <h1 class="mb-2">Hello, <span class="font-bold">Username</span>!</h1>
        <p>Signed in as</p>
        <p class="truncate text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <ULink :to="item.link" class="w-full justify-between">
        <span class="">{{ item.label }}</span>

        <UIcon :name="item.icon" class="ms-24" />
      </ULink>
    </template>
  </UDropdown>
</template>
