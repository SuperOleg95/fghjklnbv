<script setup lang="ts">
const viewport = useViewport();

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
});
</script>

<template>
  <div>
    <!-- Should render only on mobile -->
    <div v-if="viewport.isLessThan('tablet')">
      <div class="flex flex-col gap-5 bg-gray-200 dark:bg-gray-700 p-4 text-sm">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <div class="flex flex-col gap-1">
              <h5 class="text-base text-(--ui-primary)">Solutions</h5>
              <NuxtLink to="#" class="flex"
                >Electronics Development
                <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
              ></NuxtLink>
              <NuxtLink to="#" class="flex"
                >Software Engineering
                <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
              ></NuxtLink>

              <h5 class="text-base text-(--ui-primary)">Follow us</h5>
              <div class="flex">
                <NuxtLink to="#" class="flex">
                  <UIcon name="i-mdi-linkedin" class="text-3xl"></UIcon
                ></NuxtLink>
                <NuxtLink to="#" class="flex"
                  ><UIcon name="i-mdi-xing" class="text-3xl"></UIcon
                ></NuxtLink>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h5 class="text-base text-(--ui-primary)">About us</h5>
            <NuxtLink to="#" class="flex -mt-3"
              >Company <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
            ></NuxtLink>
            <NuxtLink to="#" class="flex"
              >Competencies<UIcon
                name="i-mdi-chevron-right"
                class="mt-1"
              ></UIcon
            ></NuxtLink>
            <NuxtLink to="#" class="flex"
              >Philosophy<UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
            ></NuxtLink>
            <NuxtLink to="#" class="flex"
              >Contact<UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
            ></NuxtLink>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="entry clearfix">
            <h5 class="text-base text-(--ui-primary)">Contact</h5>
            <p>
              Schleissheimer Soft- und Hardwareentwicklung GmbH<br />
              Am Kalkofen 10<br />
              61206 Nieder-Wöllstadt<br />
              Germany
            </p>
            <p>
              +49 6034/9148-0<br /><a
                href="#"
                data-mailto-token="nbjmup+jogpAtdimfjttifjnfs/ef"
                data-mailto-vector="1"
                >info(at)schleissheimer.de</a
              >
            </p>
            <p>
              <a href="#">Terms &amp; Conditions</a>
              | <a href="#">Imprint</a> |
              <a href="#">Data protection</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Tablet window -->
    <div v-else>
      <div class="flex justify-center gap-20 bg-gray-200 dark:bg-gray-700 p-10">
        <div class="flex flex-col gap-3">
          <h5 class="text-lg text-(--ui-primary)">Solutions</h5>
          <NuxtLink to="#" class="flex -mt-3"
            >Electronics Development
            <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
          <NuxtLink to="#" class="flex"
            >Software Engineering
            <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
        </div>
        <div class="flex flex-col gap-3">
          <h5 class="text-lg text-(--ui-primary)">About us</h5>
          <NuxtLink to="#" class="flex -mt-3"
            >Company <UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
          <NuxtLink to="#" class="flex"
            >Competencies<UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
          <NuxtLink to="#" class="flex"
            >Philosophy<UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
          <NuxtLink to="#" class="flex"
            >Contact<UIcon name="i-mdi-chevron-right" class="mt-1"></UIcon
          ></NuxtLink>
        </div>

        <div class="flex flex-col">
          <div class="entry clearfix">
            <h5 class="text-lg text-(--ui-primary)">Contact</h5>
            <p>
              Schleissheimer Soft- und Hardwareentwicklung GmbH<br />
              Am Kalkofen 10<br />
              61206 Nieder-Wöllstadt<br />
              Germany
            </p>
            <p>
              +49 6034/9148-0<br /><a
                href="#"
                data-mailto-token="nbjmup+jogpAtdimfjttifjnfs/ef"
                data-mailto-vector="1"
                >info(at)schleissheimer.de</a
              >
            </p>
            <p>
              <a href="#">Terms &amp; Conditions</a>
              | <a href="#">Imprint</a> |
              <a href="#">Data protection</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h5 class="text-lg text-(--ui-primary)">Follow us</h5>
          <div class="flex">
            <NuxtLink to="#" class="flex">
              <UIcon name="i-mdi-linkedin" class="text-3xl"></UIcon
            ></NuxtLink>
            <NuxtLink to="#" class="flex"
              ><UIcon name="i-mdi-xing" class="text-3xl"></UIcon
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
