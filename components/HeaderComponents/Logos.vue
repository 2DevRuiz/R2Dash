<template>
  <!-- <div class="flex items-center justify-start pl-3 w-14 h-14 bg-blue-800 dark:bg-gray-800 md:justify-center md:w-64"> -->
  <div class="flex items-center justify-start pl-3 w-14 h-14 00 md:justify-center md:w-64">

    <font-awesome-icon :icon="['fas', 'bars']" size="xl" class="ml-3 mr-3 mt-2 cursor-pointer " @click="toogleMenu()" />
    <img class=" md:hidden w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden md:object-cover"
      src="~/assets/images/logos/logo_icon/256x256.png" />
    <img class=" h-16 mr-2 overflow-hidden md:object-cover md:block hidden" src="~/assets/images/logos/R2A_WB.png" />
    <!-- <span class="hidden md:block">Ring2All</span> -->
  </div>
  <!-- <div
    class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
    <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
      src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
    <span class="hidden md:block">Ring2All</span>
  </div> -->
</template>
<script lang="ts" setup>
const state_menu = ref(true)
const emits = defineEmits();
const toogleMenu = () => {
  state_menu.value = !state_menu.value
  emits('stateMenu', state_menu.value)
}
</script>