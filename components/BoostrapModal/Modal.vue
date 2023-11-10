<template>
    <transition name="fade"
        enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500"
        enter-class="opacity-0"
        leave-class="opacity-0"
    >
        <!-- <div class="vue-modal" v-show="open"> -->
        <div class=" fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-40 z-[1000]"
            v-show="open">

            <transition name="drop-in">
                <!-- <div class="vue-modal-inner" v-show="open"> -->
                <div class="max-w-lg mx-auto my-8" v-show="open">
                    <!-- <div class="vue-modal-content"> -->
                    <div class="relative bg-white border border-gray-300 bg-clip-padding rounded p-4">
                        <slot />
                        <button type="button" @click="close">Close</button>
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
  