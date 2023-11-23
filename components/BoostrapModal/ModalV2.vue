<template>
    <transition name="fade" enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <!-- backdrop -->
        <div class="block fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-40 z-[1000] items-center rounded-md"
            v-show="open">
            <!-- backdrop -->
            <transition name="drop-in" enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 translate-y-[-80%]"
                leave-to-class="opacity-0 translate-y-[-80%]">
                <!-- modal -->
                <div class="relative max-w-lg w-auto mx-auto top-1/2 transform -translate-y-1/2 rounded-md" v-show="open">
                    <div
                        class="relative flex flex-col w-full pointer-events-auto bg-white border border-gray-300 rounded-lg">
                        <!-- Header Section -->
                        <div class="flex items-start justify-between p-3 border-b border-gray-300 rounded-t">

                            <slot name="header">
                                <h5 class="mb-0 text-lg leading-normal">Modal title</h5>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="close">
                                    <font-awesome-icon :icon="['fas', 'xmark']" class="w-5 h-5" />
                                </button>
                            </slot>
                        </div>
                        <!-- Header Section -->
                        <!-- Body Section -->
                        <div class="relative top-0 p-3 mb-1  rounded-xl">
                            
                            <slot name="body">
                                .....
                            </slot>
                        </div>
                        <!-- Body Section -->
                        <!-- Footer Section -->
                        <div
                            class="relative top-0 p-3 rounded-b-xl flex justify-end gap-2 items-end border-t border-gray-300">
                            <slot name="footer">
                                <button type="button" @click="close"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">Close</button>
                            </slot>
                        </div>
                        <!-- Footer Section -->
                    </div>
                </div>
                <!-- modal -->
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
  