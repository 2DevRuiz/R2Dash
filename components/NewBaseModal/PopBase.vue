<template>
    <!-- Render inside our `<div id="modals"></div>` in index.html -->
    <!-- <Teleport to="#modals"> -->
    <Teleport to="body">
        <Transition name="fade"
         enter-active-class="transition-opacity duration-250 ease-out"
         leave-active-class="transition-opacity duration-250 ease-out" 
         enter-from-class="opacity-0"
         leave-to-class="opacity-0">
            
            <!-- Show / hide the modal -->
            <div v-if="isVisible" class="fixed left-0 top-0 z-[500] w-screen h-screen bg-black bg-opacity-30 grid items-center ">
                <!-- The backdrop -->
                <!-- <div class="fixed inset-0 bg-gray-900 opacity-40"></div> -->

                <!-- Where the actual content goes -->
                <div class="fixed inset-0 flex items-center justify-center">
                    <div class="bg-white text-black rounded-lg w-1/4">
                        <slot></slot>
                    </div>
                </div>
            </div>

        </transition>
    </Teleport>
</template>

<script setup lang="ts">
const  isVisible = ref(false)

const open = () =>{
    isVisible.value = true
}
const close = () =>{
    isVisible.value = false
}
</script>