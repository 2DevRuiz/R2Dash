<template>

    <div class="container mx-auto mt-5 ">
        <div class="w-full h-10">
            <CardData title="User Profile">
                <template #title>
                    <div>Form</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="">
                            <div class="relative mb-6">
                                <input id="txt_username" name="txt_username" type="text"
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'font']" class="text-lg  " />
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
                                    class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none  w-full">
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
                                        <input id="Toggle1" type="checkbox" class="hidden peer">
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
                                        <input id="Toggle2" type="checkbox" class="hidden peer">
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardData>
        </div>
    </div>
    <div class="container mx-auto mt-80 mb-56">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
         -->
        <!-- <div> -->
        <div class="w-full h-10">
            <CardData title="User Profile">
                <template #title>
                    <div>Form</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="">
                            <div class="relative mb-6">
                                <input id="txt_username" name="txt_username" type="text"
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'font']" class="text-lg  " />
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
                                    class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none  w-full">
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
                                        <input id="Toggle1" type="checkbox" class="hidden peer">
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
                                        <input id="Toggle2" type="checkbox" class="hidden peer">
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardData>
        </div>
    </div>
    <div class="container mx-auto mt-80 mb-56">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
         -->
        <!-- <div> -->
        <div class="w-full h-10">
            <CardData title="User Profile">
                <template #title>
                    <div>Form</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="">
                            <div class="relative mb-6">
                                <input id="txt_username" name="txt_username" type="text"
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'font']" class="text-lg  " />
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
                                    class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none  w-full">
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
                                        <input id="Toggle1" type="checkbox" class="hidden peer">
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
                                        <input id="Toggle2" type="checkbox" class="hidden peer">
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardData>
        </div>
    </div>
    <div class="container mx-auto mt-80 mb-56">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
         -->
        <!-- <div> -->
        <div class="w-full h-10">
            <CardData title="User Profile">
                <template #title>
                    <div>Form</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="">
                            <div class="relative mb-6">
                                <input id="txt_username" name="txt_username" type="text"
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'font']" class="text-lg  " />
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
                                    class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none  w-full">
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
                                        <input id="Toggle1" type="checkbox" class="hidden peer">
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
                                        <input id="Toggle2" type="checkbox" class="hidden peer">
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardData>
        </div>
    </div>
    <div class="container mx-auto mt-80 mb-80">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
         -->
        <!-- <div> -->
        <div class="w-full h-10">
            <CardData title="User Profile">
                <template #title>
                    <div>Form</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="">
                            <div class="relative mb-6">
                                <input id="txt_username" name="txt_username" type="text"
                                    class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 border-r border-l border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                    placeholder="Username" />
                                <label for="txt_username"
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'font']" class="text-lg  " />
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
                                    class="border border-gray-300 rounded text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none  w-full">
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
                                        <input id="Toggle1" type="checkbox" class="hidden peer">
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
                                        <input id="Toggle2" type="checkbox" class="hidden peer">
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
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
                                    class="absolute left-2 -top-4  text-gray-500 text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-gray-500 peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Campo</label>
                                <!-- <span
                                    class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                                    <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                                </span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </CardData>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})
// const 
</script>