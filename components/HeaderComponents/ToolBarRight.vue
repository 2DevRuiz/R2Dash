<template>
    <ul class="flex items-center mr-3">
        <li>
            <button aria-hidden="true" @click="Dark.toggleTheme"
                class="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none">
                <svg v-show="isDark" width="24" height="24"
                    class="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg v-show="!isDark" width="24" height="24"
                    class="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
        </li>
        <li>
            <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
        </li>
        <li>
            <div class="relative ">
                <!-- Profile Picture -->
                <!-- Profile Picture -->
                <img class="h-10 w-10 rounded-full cursor-pointer object-cover"
                    src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Profile Picture" @click.stop="toggleDropdown" id="img-user" />

                <!-- Dropdown Content -->
                <div v-if="open2"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <div class=" mt-2 pl-6 pr-4 py-4 flex items-center justify-between">
                            <div class="flex items-center">
                                <div
                                    class="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
                                    <img class="rounded-full"
                                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                        alt="" />
                                </div>
                                <div class="flex flex-col pl-3">
                                    <div class="text-sm text-gray-600">User</div>
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
                        <div class="px-6 pt-1">
                            <hr class="border-gray-00" />
                        </div>
                        <!-- separator -->
                        <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <!-- Icon -->
                            <i class="fas fa-user-circle mr-2"></i>
                            My Profile
                        </a>
                        <!-- separator -->
                        <div class="px-6 pt-1">
                            <hr class="border-gray-00" />
                        </div>
                        <!-- separator -->
                        <a href="/"  @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <!-- Icon -->
                            <i class="fas fa-user-circle mr-2"></i>
                            LogOut
                        </a>
                        <!-- Add more dropdown items as needed -->
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
        </li>
    </ul>
</template>
<script lang="ts" setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const Dark = setupDarkStyle()
const open2 = ref(false)
const isDark = Dark.isDark
const closeDropdown = (event: Event) => {
  if (!dropdownContainerRef.value?.contains(event.target as Node)) {
    open2.value = false;
  }
};
const toggleDropdown = () => {
  console.log("click image")
  open2.value = !open2.value;
};
const dropdownContainerRef = ref<HTMLElement | null>(null);

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