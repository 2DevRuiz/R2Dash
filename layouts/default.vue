<template>
    <BasicNotification /> 
    <!-- <div > --><Header @stateMen="toogleSide"/>
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 dark:bg-cyan-900 text-black dark:text-white">
            
            <div class="h-full mt-14 mb-2" :class="[state_menu?'ml-20 md:ml-64':'ml-20 md:ml-10']">
                <slot></slot>
            </div>
        </div>
        
    <ModalTem/>
    <!-- </div> -->
</template>

<script lang="ts" setup>
// import setupDarkStyle from '../composables/styles'
// const Dark = setupDarkStyle()
// const isDark = Dark.isDark
// console.log(isDark)
// watch([isDark],()=>{
//     console.log(isDark)  
// })
const state_menu = ref(true);
const toogleSide = (state:boolean) =>{
    // console.log("state ->12345657")
    state_menu.value = state
}
</script>
