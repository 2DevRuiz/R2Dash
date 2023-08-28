<template>
    <div class="flex items-center mr-3">
        <div class="relative ">
            <!-- Profile Picture -->
            <!-- Profile Picture -->
            <div class="h-11 w-11 bg-transparent hover:bg-sky-600 rounded-full p-[0.1875rem] flex justify-center items-center">
                <img class="h-10 w-10 rounded-full cursor-pointer object-cover"
                    src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Profile Picture" @click.stop="toggleDropdown" id="img-user" />
            </div>


            <!-- Dropdown Content -->
            <div v-if="open"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <div class=" mt-2 pl-6 pr-4 py-4 flex items-center justify-between bg-gray-300 dark:bg-gray-100">
                        <div class="flex items-center">
                            <div
                                class="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
                                <img class="rounded-full"
                                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                    alt="" />
                            </div>
                            <div class="flex flex-col pl-3">
                                <div class="text-sm text-gray-600 dark:text-gray-400">User</div>
                                <span class="text-base text-[#acacb0] font-light tracking-tight">
                                    Administrador
                                </span>
                            </div>
                        </div>
                        <!-- <button
                class="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
            </button> -->
                    </div>
                    <!-- separator -->
                    <div class="px-3 pt-1">
                        <hr class="border-gray-400 dark:border-gray-400 mb-2" />
                    </div>
                    <!-- separator -->
                    <a href="javascript:void(0)" class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600" role="menuitem">
                        <!-- Icon -->
                        <!-- <i class="fas fa-user-circle mr-2"></i> -->
                        <font-awesome-icon :icon="['fas', 'user']"
                            class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
                        My Profile
                    </a>
                    <!-- separator -->
                    <!-- <div class="px-6 pt-1">
                        <hr class="border-gray-00" />
                    </div> -->
                    <!-- separator -->
                    <a href="javascript:void(0)" class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600"
                        role="menuitem" @click="sDark.toggleTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                        <!-- Icon -->
                        <font-awesome-icon v-if="$colorMode.value == 'light'" :icon="['fas', 'sun']"
                        class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
                        <font-awesome-icon v-if="$colorMode.value == 'dark'" :icon="['fas', 'moon']"
                        class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
                        Theme
                    </a>
                    <!-- separator -->
                    <!-- <div class="px-6 pt-1">
                        <hr class="border-gray-00" />
                    </div> -->
                    <!-- separator -->
                    <a href="/" class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600" role="menuitem">
                        <!-- Icon -->
                        <!-- <i class="fas fa-user-circle mr-2"></i> -->
                        <font-awesome-icon :icon="['fas', 'sliders']"
                        class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
                        Settings
                    </a>
                    <!-- separator -->
                    <div class="px-3 pt-1">
                        <hr class="border-gray-400 dark:border-gray-400 mb-2" />
                    </div>
                    <!-- separator -->
                    <a href="/" @click="logout" class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-red-600"
                        role="menuitem">
                        <!-- Icon -->
                        <!-- <i class="fas fa-user-circle mr-2"></i> -->
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']"
                            class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-red-500 " />
                        LogOut
                    </a>
                    <!-- Add more dropdown items as needed -->
                </div>
            </div>
        </div>
    </div>

    <!-- <a href="#" class="flex items-center mr-4 hover:text-blue-100">
                <span class="inline-flex mr-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                    </svg>
                </span>
                Logout
            </a> -->
    <!-- </li>
    </ul> -->
</template>
<script lang="ts" setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const open = ref(false)
const sDark = setupDarkStyle()
const toggleDropdown = () => {
    open.value = !open.value;
};

const dropdownContainerRef = ref<HTMLElement | null>(null);
const closeDropdown = (event: Event) => {
    const clickedOutsideMenu = !dropdownContainerRef.value?.contains(event.target as Node);
    const clickedInsideMenu = dropdownContainerRef.value?.contains(event.target as Node);
    
    if (clickedOutsideMenu && !clickedInsideMenu) {
        // console.log(clickedInsideMenu)
        open.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener("click", closeDropdown);
});

const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
    logUserOut();
    router.push('/login');
};

</script>