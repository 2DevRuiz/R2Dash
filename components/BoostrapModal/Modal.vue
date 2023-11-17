<template>
    <transition name="fade" enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <!-- <div class="vue-modal" v-show="open"> -->
        <div class=" fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-40 z-[1000] flex items-center rounded-md"
            v-show="open">

            <transition name="drop-in" enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 translate-y-[-250px]"
                leave-to-class="opacity-0 translate-y-[-250px]">
                <!-- <div class="vue-modal-inner" v-show="open"> -->
                <div class="max-w-lg mx-auto my-8" v-show="open">
                    <!-- <div class="vue-modal-content"> -->
                    <div
                        class="relative bg-white dark:bg-gray-800  border border-gray-300  dark:border-gray-600 bg-clip-padding rounded p-0">
                        <!-- Header Section -->
                        <div
                            class="relative top-0 p-2 mb-1 dark:bg-gray-700 rounde-t border-b border-gray-300 dark:border-gray-500 flex items-center justify-between">

                            <slot name="header">
                                <div class="text-gray-900 text-xl lg:text-xl font-semibold dark:text-white">
                                    Terms of Service
                                </div>
                            </slot>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="close">
                                <!-- <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg> -->
                                <font-awesome-icon :icon="['fas', 'xmark']" class="w-5 h-5" />
                            </button>
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
                        <div class="relative top-0 p-3 rounded-b-xl flex justify-end gap-2 items-end border-t border-gray-300">
                            <slot name="footer">
                                <button type="button" @click="close"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">Close</button>
                            </slot>
                        </div>
                        <!-- Footer Section -->
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
  
<script lang="ts">
import { onMounted, onUnmounted } from "vue";

export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
    setup(_, { emit }) {
        const close = () => {
            emit("close");
        };

        const handleKeyup = (event: any) => {
            if (event.keyCode === 27) {
                close();
            }
        };

        onMounted(() => document.addEventListener("keyup", handleKeyup));
        onUnmounted(() => document.removeEventListener("keyup", handleKeyup));

        return { close };
    },
};
</script>
  