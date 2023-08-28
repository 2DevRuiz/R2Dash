<template>
    <div >
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 dark:bg-cyan-900 text-black dark:text-white">
            <Header />
            <SideBar />
            <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import setupDarkStyle from '../composables/styles'
// const Dark = setupDarkStyle()
// const isDark = Dark.isDark
// console.log(isDark)
// watch([isDark],()=>{
//     console.log(isDark)  
// })

</script>
