<template>
    <!-- pagination initial layout -->
    <!-- <div class="w-2/3">
        <nav aria-label="Page Navigation"
            class="mx-auto my-10 flex max-w-xs justify-between space-x-2 rounded-md bg-white py-2">
            <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="First Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                    <path fill-rule="evenodd"
                        d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Previous Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                    <path fill-rule="evenodd"
                        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <ul class="flex items-center">
                <li><a href="#" class="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600"
                        aria-label="Page 8">8</a></li>
                <li><a href="#" class="rounded-md px-2 text-2xl font-medium text-blue-600 sm:px-3"
                        aria-label="Current Page">9</a></li>
                <li><a href="#" class="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600"
                        aria-label="Page 10">10</a></li>
            </ul>
            <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Next Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                    <path fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Last Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                    <path fill-rule="evenodd"
                        d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </nav>

    </div> -->
    <!-- style2 -->
    <!-- <div class="bg-white shadow-md rounded-lg p-4">
        <div class="flex items-center justify-between">
            <button class="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                </svg>
            </button>
            <span class="text-gray-700 font-medium">Page 1 of 10</span>
            <button class="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        <div class="flex items-center justify-between mt-4">
            <button
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                1
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                2
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                3
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                4
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                ...
            </button>
            <button
                class="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">
                10
            </button>
        </div>
    </div> -->
    <nav aria-label="Page navigation example">
  <ul class="list-style-none flex">
    <li>
      <button
        class="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </li>
    <li>
      <a
        class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
        href="#"
        >1</a
      >
    </li>
    <li>
      <a
        class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
        href="#"
        >2</a
      >
    </li>
    <li>
      <a
        class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
        href="#"
        >3</a
      >
    </li>
    <li>
      <button
        class="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </li>
  </ul>
</nav>
</template>
<script lang="ts" setup>
</script>