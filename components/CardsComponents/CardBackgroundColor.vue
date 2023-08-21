<template>
    <div class="max-w-7xl  items-center">
        <div class="relative group  w-full">
            <div
                class="absolute -inset-1 bg-gradient-to-bl from-[#00BBE1] to-[#FDB618] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <!-- <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                    </path>
                </svg> -->
                <span>
                    <font-awesome-icon :icon="['fas', 'users']"  class=" text-2xl stroke-current text-blue-800 dark:text-purple-800 transform transition-transform duration-500 ease-in-out"/>
                </span>
                <div class="space-y-2 min-w-full">
                    <p class="text-slate-800 w-full">LATEST NEWS</p>
                    <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                        class="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                        target="_blank">Read Article →</a>
                </div>
            </div>
        </div>
    </div>
</template>