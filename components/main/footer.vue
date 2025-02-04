<script setup lang="ts"></script>

<template>
  <div class="flex justify-center gap-20 bg-gray-200 dark:bg-gray-700 p-10">
    <div class="flex flex-col gap-3">
      <h5 class="text-lg text-primary">Solutions</h5>
      <NuxtLink to="#" class="flex -mt-3"
        >Electronics Development
        <Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
      <NuxtLink to="#" class="flex"
        >Software Engineering <Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
    </div>
    <div class="flex flex-col gap-3">
      <h5 class="text-lg text-primary">About us</h5>
      <NuxtLink to="#" class="flex -mt-3"
        >Company <Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
      <NuxtLink to="#" class="flex"
        >Competencies<Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
      <NuxtLink to="#" class="flex"
        >Philosophy<Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
      <NuxtLink to="#" class="flex"
        >Contact<Icon name="mdi:chevron-right" class="mt-1"></Icon
      ></NuxtLink>
    </div>

    <div class="flex flex-col">
      <div class="entry clearfix">
        <h5 class="text-lg text-primary">Contact</h5>
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
          <a href="/en/contact/general-terms-and-conditions"
            >Terms &amp; Conditions</a
          >
          | <a href="/en/contact/imprint">Imprint</a> |
          <a href="/en/contact/data-protection">Data protection</a>
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h5 class="text-lg text-primary">Follow us</h5>
      <div class="flex">
        <NuxtLink to="#" class="flex">
          <Icon name="mdi:linkedin" class="text-3xl"></Icon
        ></NuxtLink>
        <NuxtLink to="#" class="flex"
          ><Icon name="mdi:xing" class="text-3xl"></Icon
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
