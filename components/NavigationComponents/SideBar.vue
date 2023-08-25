<template>
  <!-- Sidebar -->
  <div
    class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-slate-700 h-full text-white transition-all duration-300 border-none z-10 sidebar">
    <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul class="flex flex-col py-4 space-y-1">
        <template v-for="item in mainNavigation" :key="item.title">
          <li v-if="item.HeaderTitle" class="px-5 hidden md:block">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-400 uppercase">{{ item.title }}</div>
            </div>
          </li>
          <li v-else @click="item.submenu && handleClick()">
            <!-- <a href="#"
              class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <font-awesome-icon class=" text-lg"
                  :icon="['fas', (item.icon && item.icon !== '') ? item.icon : defaultIcon]" />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">{{ item.title }}</span>
              <span class="inline-flex justify-end items-center ml-4">
                <font-awesome-icon v-if="item.submenu && open" :icon="['fas', 'chevron-down']"
                  class="h-6 w-6  transition duration-300" :class="subMenuOpen ? 'rotate-180' : ''"
                  @click.stop="handleClick()" />
              </span>
            </a> -->
            <a href="#"
              class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
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
          <ul v-if="(item.submenu && subMenuOpen && open)" class="flex flex-col py-4 space-y-1 ml-4">
            <li v-for="(submenuItem, index) in item.submenuItems" :key="index">
              <a href="#"
                class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
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
  </div>
  <!-- ./Sidebar -->
</template>

<script lang="ts" setup>
const open = ref(true);
const lisubmenu = ref(true);
const subMenuOpen = ref(false);
const search = ref('text');
const defaultIcon = 'fa-layer-group';
const handleClick = () => {
  subMenuOpen.value = !subMenuOpen.value
}
const handleClick2 = () => {
  console.log("click 2")
  subMenuOpen.value = !subMenuOpen.value
  console.log(subMenuOpen.value)
}
const mainNavigation = [
  { title: 'Main', HeaderTitle: true },

  { title: 'Dashboard', icon: 'layer-group' },
  { title: 'Extensions', icon: 'tty' },
  { title: 'Media', spacing: false, icon: 'sliders' },
  {
    title: 'Customers', submenu: true, spacing: false, icon: 'chalkboard-user',
    submenuItems: [
      { title: "Submenu 1", icon: 'comments' },//<font-awesome-icon :icon="['fab', 'stack-overflow']" />
      { title: "Submenu 2", icon: 'landmark' },
      { title: "Submenu 3", icon: 'newspaper' },
    ]
  },
  // { title: 'Settings', HeaderTitle: true },
  // { title: 'Analitycs' },
  // { title: 'Inbox' },
  // { title: 'Prafile', spacing: true },
  // { title: 'Setting' },
  // { title: 'Logout' }

]
</script>