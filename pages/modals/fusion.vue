<template>
    <div class="w-full h-screen bg-cyan-500 flex justify-center items-center">
        <button class="bg-white p-4 rounded-2xl felx flex-col gap-6" @click="openModal">
            openModal
        </button>
    </div>

    <transition name="fade" enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <!-- <div class="vue-modal" v-show="open"> -->
        <div class="block fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-40 z-[1000]  items-center rounded-md"
            v-show="open">
            <!-- <div v-show="open" class="modal block  fixed top-0 left-0 w-full h-full outline-none fade"
        id="exampleModalTwo" tabindex="-1" role="dialog"> -->

            <transition name="drop-in" enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-[-250px]"
                leave-to-class="opacity-0 translate-y-[-250px]">
                <!-- <div class="vue-modal-inner" v-show="open"> -->
                <div class="relative max-w-lg w-auto mx-auto my-8 bg-orange-200" v-show="open">
                <!-- <div class="relative w-auto  max-w-lg my-8 mx-auto px-4 sm:px-0 bg-lime-200" v-show="open"> -->
                    <!-- <div class="vue-modal-content"> -->
                    <!-- <div
                        class="relative  w-full bg-white dark:bg-gray-800  border border-gray-300  dark:border-gray-600 bg-clip-padding rounded p-0"> -->
                    <div
                        class="relative flex flex-col w-full pointer-events-auto bg-white border border-gray-300 rounded-lg">
                        <!-- Header Section -->
                        <!-- <div
                            class="relative top-0 p-2 mb-1 dark:bg-gray-700 rounde-t border-b border-gray-300 dark:border-gray-500 flex items-center justify-between"> -->
                        <div class="flex items-start justify-between p-4 border-b border-gray-300 rounded-t">

                            <!-- <slot name="header">
                                <div class="text-gray-900 text-xl lg:text-xl font-semibold dark:text-white">
                                    Terms of Service
                                </div>
                            </slot> -->
                            <h5 class="mb-0 text-lg leading-normal">Modal title</h5>
                            <button @click="close" type="button" class="close" data-dismiss="modal">&times;</button>
                            <!-- <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="close">
                                <font-awesome-icon :icon="['fas', 'xmark']" class="w-5 h-5" />
                            </button> -->
                        </div>
                        <!-- Header Section -->
                        <!-- Body Section -->
                        <div class="relative top-0 p-3 mb-1  rounded-xl">
                            <!-- <slot /> -->
                            <slot name="body">
                            </slot>
                        </div>
                        <!-- Body Section -->
                        <!-- Footer Section -->
                        <div
                            class="relative top-0 p-3 rounded-b-xl flex justify-end gap-2 items-end border-t border-gray-300">
                           
                                <button type="button" @click="close"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">Close</button>
                           
                        </div>
                        <!-- Footer Section -->
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script lang="ts" setup>
const open = ref(false);
const openModal = () => {
    open.value = true
    console.log("Se abrio el modal")
}
const close = () => {
    console.log("Se cerro el modal")
    open.value = false
}
</script>