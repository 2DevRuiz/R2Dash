<template>
    <div class="h-screen w-full bg-slate-400 flex justify-center items-center">
        <!-- <div class="flex justify-center">
            <nav class="bg-gray-200 rounded-full px-4 py-2">
                <ul class="flex text-gray-600 gap-4 font-medium py-2">
                    <li>
                        <a href="#" class="rounded-full px-4 py-2 bg-white text-gray-600">1</a>
                    </li>
                    <li>
                        <a href="#"
                            class="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">2</a>
                    </li>
                    <li>
                        <a href="#"
                            class="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">3</a>
                    </li>
                    <li>
                        <a href="#"
                            class="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">4</a>
                    </li>
                    <li>
                        <a href="#"
                            class="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">5</a>
                    </li>
                </ul>
            </nav>
        </div> -->
        <!-- <nav aria-label="Page Navigation" class="mx-auto my-10 flex max-w-md justify-between space-x-2 rounded-md bg-white py-2">
  <a class="flex items-center space-x-1 font-medium text-gray-400" aria-label="Previous Page" tabindex="-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
    </svg>
  </a>
  <ul class="flex">
    <li><a href="#" class="rounded-md border-2 border-blue-600 px-2 text-lg font-medium text-blue-600 sm:px-3">1</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">2</a></li>
    <li><span class="text-gray-400" aria-hidden="true">...</span><span class="sr-only">Skipping Pages</span></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">22</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">23</a></li>
  </ul>
  <a class="flex items-center space-x-1 font-medium hover:text-blue-600" href="#" aria-label="Next Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
    </svg>
  </a>
</nav> -->

<nav aria-label="Page Navigation" class="mx-auto my-10 flex max-w-md justify-between space-x-2 rounded-md bg-white py-2">
  <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Previous Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
    </svg>
  </a>
  <a href="#" class="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Previous Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
    </svg>
  </a>
  <ul class="flex">
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">1</a></li>
    <li><span class="text-gray-400" aria-hidden="true">...</span><span class="sr-only">Skipping Pages</span></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">8</a></li>
    <li><a href="#" class="rounded-md border-2 border-blue-600 px-2 text-lg font-medium text-blue-600 sm:px-3">9</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">10</a></li>
    <li><span class="text-gray-400" aria-hidden="true">...</span><span class="sr-only">Skipping Pages</span></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">23</a></li>
  </ul>
  <a class="flex items-center space-x-1 font-medium hover:text-blue-600" href="#" aria-label="Next Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
    </svg>
  </a>
  <a class="flex items-center space-x-1 font-medium hover:text-blue-600" href="#" aria-label="Next Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
    </svg>
  </a>
</nav>

        <!-- <nav aria-label="Page Navigation"
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
        </nav> -->

    </div>
</template>
<script lang="ts" setup>
</script>