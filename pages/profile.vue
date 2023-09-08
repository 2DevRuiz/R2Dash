<template>
    <div class="flex flex-col flex-auto flex-shrink-0 antialiased mx-5">
        <div class="grid grid-cols-1 gap-4 pt-5">
            <!--  Start:inputs and toggles  -->
            <div class="">
                <!-- <div class="w-full h-10"> -->
                <CardData title="User Profile">
                    <template #title>
                        <div>Form</div>
                    </template>
                    <div class="px-6 py-6">
                        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div class="">
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <span
                                        class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                        <font-awesome-icon :icon="['fas', 'font']" class="text-lg" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <!-- <input id="txt_username" name="txt_username" type="text" 
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label> -->
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                    <label for="UserEmail"
                                        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                        <input type="email" id="UserEmail" placeholder="Email"
                                            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                                        <span
                                            class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                            Email
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="">
                                <div class="relative">
                                    <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                                        <path
                                            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                            fill="#648299" fill-rule="nonzero" />
                                    </svg>
                                    <select
                                        class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full">
                                        <option>Choose a color</option>
                                        <option>Red</option>
                                        <option>Blue</option>
                                        <option>Yellow</option>
                                        <option>Black</option>
                                        <option>Orange</option>
                                        <option>Purple</option>
                                        <option>Gray</option>
                                        <option>White</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid grid-flow-col">
                                <div class="relative mb-6">
                                    <label for="Toggle1"
                                        class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                        <span>Left</span>
                                        <span class="relative">
                                            <input id="Toggle1" type="checkbox" class="hidden peer" />
                                            <div
                                                class="w-10 h-6 rounded-full shadow-inner bg-slate-400 dark:bg-gray-400 peer-checked:dark:bg-violet-400 peer-checked:bg-sky-500">
                                            </div>
                                            <div
                                                class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-gray-300 shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                            </div>
                                        </span>
                                        <span>Right</span>
                                    </label>
                                </div>
                                <div>
                                    <label for="Toggle2"
                                        class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                        <span>This</span>
                                        <span class="relative">
                                            <input id="Toggle2" type="checkbox" class="hidden peer" />
                                            <div
                                                class="w-10 h-4 rounded-full shadow bg-gray-400 peer-checked:bg-sky-500 dark:bg-gray-600 peer-checked:dark:bg-violet-400">
                                            </div>
                                            <div
                                                class="absolute left-0 w-6 h-6 rounded-full bg-slate-500 shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400">
                                            </div>
                                        </span>
                                        <span>That</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                            <div>
                                <div class="relative mb-6">
                                    <input id="txt_username" name="txt_username" type="text"
                                        class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        placeholder="Username" />
                                    <label for="txt_username"
                                        class="absolute left-2 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                    <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </CardData>
                <!-- </div> -->
            </div>
            <!--  End:inputs and toggles  -->
            <!--Start:tabs -->
            <div class="">
                <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
         -->
                <!-- <div> -->
                <!-- <div class="w-full h-10"> -->
                <CardData title="User Profile">
                    <template #title>
                        <div
                            class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                                :class="{ 'text-gray-700 border-transparent dark:text-white': openTab !== 1, 'text-blue-600 border-blue-500  dark:border-blue-400 dark:text-blue-300': openTab === 1 }"
                                @click="toggleTabs(1)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Profile </span>
                            </button>

                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                                :class="{ 'text-gray-700 border-transparent dark:text-white': openTab !== 2, 'text-blue-600 border-blue-500  dark:border-blue-400 dark:text-blue-300': openTab === 2 }"
                                @click="toggleTabs(2)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Account </span>
                            </button>

                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                                :class="{ 'text-gray-700 border-transparent dark:text-white': openTab !== 3, 'text-blue-600 border-blue-500  dark:border-blue-400 dark:text-blue-300': openTab === 3 }"
                                @click="toggleTabs(3)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                            <button
                                class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base"> Notification </span>
                            </button>
                        </div>
                    </template>
                    <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 rounded">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                    <p>
                                        tab 1
                                        <br />
                                        Collaboratively administrate empowered markets via plug-and-play
                                        networks. Dynamically procrastinate B2C users after installed
                                        base benefits.
                                        <br />
                                        <br />
                                        Dramatically visualize customer directed convergence without
                                        revolutionary ROI.
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                    <p>
                                        tab 2
                                        <br />
                                        Completely synergize resource taxing relationships via premier
                                        niche markets. Professionally cultivate one-to-one customer
                                        service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for
                                        state of the art customer service.
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                                    <p>
                                        tab 3
                                        <br />
                                        Efficiently unleash cross-media information without cross-media
                                        value. Quickly maximize timely deliverables for real-time
                                        schemas.
                                        <br />
                                        <br />
                                        Dramatically maintain clicks-and-mortar solutions without
                                        functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardData>
                <!-- </div> -->
            </div>
            <!--End:tabs -->
            <!-- Start:Table Dynamic -->
            <div class="">
                <!-- <div class="w-full h-10"> -->
                <CardData title="User Profile">
                    <template #title>
                        <div>table Dinamic</div>
                    </template>
                    <DynamicTable />
                </CardData>
                <!-- </div> -->
            </div>
            <!-- End:Table Dynamic -->
            <button type="button" @click="tenants" class="bg-sky-400 p-2"> Tenants List</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTenant } from '~/store/tenants';
definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
const openTab = ref(1)

const toggleTabs = (tabNumber: number) => {
    openTab.value = tabNumber
}
const { getTenants } = useTenant();
const tok = useCookie('token'); 
console.log(tok.value)
const tenants_var = ref({

    name: "test4",

    description: "test create tenant tenant 2",

    domain: "192.168.31.24",

    default: 0,
    token: (tok.value)?tok.value: ""

})

const tenants = async () => {
    // if (user.value.username && user.value.password) {
    //     console.log("LLeno")
    // } else {
    //     console.log('Empty')
    // }
    await getTenants(tenants_var.value); // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    // if(errors && errors.value !== null){
    //     console.log(errors.value.data.message )
    // }

    // if (status.value) {
    //     console.log("loading.....")
    // }
    // else {
       // router.push('/');
    
    // }

};

</script>