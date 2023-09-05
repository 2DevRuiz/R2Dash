<template>
  <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
    <!-- -->
    <div class="flex justify-between items-center w-full h-14 bg-slate-600 dark:bg-gray-800 header-right">
      <!-- <div class="flex justify-between items-center w-full h-14 bg-blue-800 dark:bg-gradient-to- from-[#FDB618] to-[#00BBE1] via-[#BDBCBD] header-right"> -->
      <!-- <div class="relative flex items-center"> -->
        <!-- <font-awesome-icon :icon="['fas', 'bars']" size="xl" class="ml-3" /> -->
      <!-- </div> -->
      <Logos @stateMenu="toogleMenu"/>
      <Search />
      <ToolBarRight />
    </div>
  </div>
  <SideBar :menu_state="state_menu"/>
</template>
<script lang="ts" setup>
const state_menu = ref(true)
const emits = defineEmits();
const toogleMenu = (state:boolean)=>{
  state_menu.value = state;
  // console.log(state_menu.value);
  emits('stateMen', state_menu.value)
  // console.log(state_menu.value)
}
</script>