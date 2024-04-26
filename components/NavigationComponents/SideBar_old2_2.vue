<template>
    <!-- Sidebar w-14 hover:w-64 md:w-64 -->
    <div class="fixed flex flex-col top-14 left-0  bg-[#328199] dark:bg-slate-700 h-full text-white transition-all duration-300 border-none z-10 sidebar group/MainMenu"
      :class="[menu_state ? 'w-14 hover:w-64 md:w-64' : 'w-0']">
  
  
      <div class="overflow-x-hidden flex flex-col justify-between flex-grow">
  
        <ul class="flex flex-col py-4 space-y-1">
          <template v-for="item in mainNavigation" :key="item.title">
            <li v-if="item.HeaderTitle" class="px-5 hover:block" :class="[menu_state ? 'md:block' : 'hidden group-hover/MainMenu:block']">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">{{ item.title }}</div>
              </div>
            </li>
            <li v-else @click="item.submenu && handleClick()" :class="(item.submenu && subMenuOpen && !menu_state)? 'bg-slate-600' : ''" >
              <a :href="(item.href) ? item.href : 'javascript:void(0)'"
                class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-slate-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6" >
                <span class="inline-flex justify-center items-center ml-4">
                  <font-awesome-icon class="text-lg"
                    :icon="['fas', (item.icon && item.icon !== '') ? item.icon : defaultIcon]" />
                </span>
                <span class="flex-grow ml-2 text-sm tracking-wide truncate">{{ item.title }}</span>
                <span class="inline-flex justify-end items-center">
                  <font-awesome-icon v-if="item.submenu && open" :icon="['fas', 'chevron-down']"
                    class="h-6 w-6 transition duration-300" :class="subMenuOpen ? 'rotate-180' : ''"
                    @click.stop="handleClick()" />
                </span>
              </a>
            </li>
            <ul v-if="(item.submenu && subMenuOpen && open)" class="flex flex-col py-2 space-y-1 " :class="(item.submenu && subMenuOpen && !open)?' ml-4':'ml-8'">
              <li v-for="(submenuItem, index) in item.submenuItems" :key="index">
                <a href="#"
                  class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span class="inline-flex justify-center items-center " :class="(item.submenu && subMenuOpen && !open)?' ml-4':'ml-1'">
                    <font-awesome-icon class=" text-lg"
                      :icon="['fas', (submenuItem.icon && submenuItem.icon !== '') ? submenuItem.icon : defaultIcon]" />
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">{{ submenuItem.title }}</span>
                </a>
              </li>
            </ul>
          </template>
        </ul>
  
      </div>
      <!-- separator -->
      <div class="px-3 pb-2 bottom-0">
        <hr class="border-gray-400 dark:border-gray-400 mb-2" />
      </div>
      <!-- separator -->
      <!-- user information --> 
      <div class=" mb-16 pl-6 pr-4 py-4 bg-[#232529]  items-center justify-between hidden md:flex md:pl-3" :class="[menu_state?'w-full ':'w-14 group-hover/MainMenu:w-full rounded-r-xl group-hover/MainMenu:rounded-none']">
        <div class="flex items-center">
          <div class=" relative w-10 h-10 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
            <img class="rounded-full h-10 w-10 object-cover"
              :src="userAvatar"
              alt="" />
          </div>
          <div class="" :class="[menu_state ? 'md:block' : 'hidden group-hover/MainMenu:block group-hover/MainMenu:transition-all group-hover/MainMenu:ease-in group-hover/MainMenu:delay-150 group-hover/MainMenu:duration-300']">
          <!-- <div class="hidden md:block"> -->
            <div class="flex flex-col pl-3">
              <div class="text-sm text-gray-50">{{user}}</div>
              <span class="text-base text-[#acacb0] font-light tracking-tight">
                Administrador
              </span>
            </div>
          </div>
  
        </div>
        <button
          class="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white" :class="[menu_state?'md:block':'hidden group-hover/MainMenu:block group-hover/MainMenu:transition-all group-hover/MainMenu:ease-linear group-hover/MainMenu:duration-200 ']"
          @click.stop="handleUserMenu()">
          <font-awesome-icon :icon="['fas', 'sort-down']" class="h-6 w-6 transition duration-300"
            :class="user_menu ? 'rotate-180' : ''" />
        </button>
      </div>
      <!-- user Information -->
      <!-- dropdown -->
      <!-- Dropdown Content -->
      <div v-if="user_menu"
        class="origin-bottom-right absolute bottom-9 right-3 mb-24 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
          <a href="javascript:void(0)"
            class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600"
            role="menuitem">
            <!-- Icon -->
            <font-awesome-icon :icon="['fas', 'user']"
              class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
            My Profile
          </a>
          <a href="javascript:void(0)"
            class="group block px-4 py-2 text-sm  hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600"
            role="menuitem" @click="sDark.toggleTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <!-- Icon -->
            <font-awesome-icon v-if="$colorMode.value == 'light'" :icon="['fas', 'moon']"
              class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
            <font-awesome-icon v-if="$colorMode.value == 'dark'" :icon="['fas', 'sun']"
              class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
            <span class="text-gray-700 dark:text-gray-200 dark:hover:text-gray-700"> Theme</span>
          </a>
          <a href="/"
            class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-sky-600"
            role="menuitem">
            <!-- Icon -->
            <font-awesome-icon :icon="['fas', 'sliders']"
              class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-sky-500 " />
            Settings
          </a>
          <!-- separator -->
          <div class="px-3 pt-1">
            <hr class="border-gray-400 dark:border-gray-400 mb-2" />
          </div>
          <!-- separator -->
          <a href="javascript:void(0)" @click="logout()"
            class="group block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-gray-700 hover:bg-gray-100 border-r-4 border-transparent hover:border-red-600"
            role="menuitem">
            <!-- Icon -->
            <font-awesome-icon :icon="['fas', 'right-from-bracket']"
              class="mr-2 fill-current text-gray-700 dark:text-gray-200 group-hover:text-red-500 " />
            LogOut
          </a>
        </div>
      </div>
      <!-- dropdown -->
    </div>
    <!-- ./Sidebar -->
  </template>
  
  <script lang="ts" setup>
  import { useAuthStore } from '~/store/auth';
  const sDark = setupDarkStyle()
  const open = ref(true);
  const user_menu = ref(false);
  const subMenuOpen = ref(false);
  const search = ref('text');
  const defaultIcon = 'fa-layer-group'; 
  const { user,userAvatar,logUserOut } =useAuthStore();
  const { menu_state } = defineProps({
    menu_state: {
      type: Boolean,
      default: true
    }
  })
  const handleClick = () => {
    subMenuOpen.value = !subMenuOpen.value
  }
  const handleUserMenu = () => {
    user_menu.value = !user_menu.value
  }
  const router = useRouter();
  const logout = () => {
      logUserOut();
      router.push('/login');
  };
  
  // modules of sideBar
  /**
   * DETAILS OF OBJECT ARRAY
   * object {
   * title : module name
   * icon : icon representing the module
   * href : routing route
   * sub menu : if it has a subdirectory, its array
   * }
  */
  const mainNavigation = [
    { title: 'Main', HeaderTitle: true },
  
    { title: 'Dashboard', icon: 'layer-group', href: '/' },
    { title: 'Extensions', icon: 'tty' },
    { title: 'Media',  icon: 'sliders', href: 'profile' },
    {
      title: 'Customers', submenu: true,  icon: 'chalkboard-user',
      submenuItems: [
        { title: "SIP Profile", icon: 'square-phone' },
        { title: "Customers", icon: 'user-group' },
        { title: "IP Setting", icon: 'network-wired' },
      ]
    },
  
  ]
  </script>