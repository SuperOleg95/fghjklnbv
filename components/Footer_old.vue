<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-800">
    <div
      class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-around"
    >
      <span class="text-xl text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024
        <a href="https://www.schleissheimer.de/" class="hover:underline"
          >Schleissheimer Soft- und Hardwareentwicklung GmbH</a
        >
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-6"
      >
        <li>
          <ULink
            to="/#"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            About
          </ULink>
        </li>
        <li>
          <ULink
            to="/#"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Docs
          </ULink>
        </li>
        <li>
          <ULink
            to="/#"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Contacts
          </ULink>
        </li>
      </ul>
    </div>
  </footer>
</template>
