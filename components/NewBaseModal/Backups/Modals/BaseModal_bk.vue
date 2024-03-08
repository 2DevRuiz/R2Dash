<template>
    <!-- <teleport  to="body"> -->
        <Transition name="fade" enter-active-class="tw-transition-opacity tw-duration-250 tw-ease-out"
            leave-active-class="tw-transition-opacity tw-duration-250 tw-ease-out" enter-from-class="tw-opacity-0"
            leave-to-class="tw-opacity-0">
            <!-- start:Show/ hide the Modal -->
            <div v-if="isVisible" class="tw-fixed tw-left-0  tw-top-0 tw-z-[999] tw-w-screen tw-h-screen tw-bg-black tw-bg-opacity-30 tw-grid tw-items-center" @keyup.esc="esc()" @click="$emit('close')">
                <!-- start:modal content -->
                <div class="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center">
                    <div class="tw-bg-white tw-text-black tw-rounded-lg tw-w-1/4" >
                        <slot></slot>
                    </div>
                </div>
                <!-- end:modal content -->
            </div>
            <!-- end:Show/ hide the Modal -->

        </Transition>
    <!-- </teleport> -->
</template>
<script setup>
import { ref } from 'vue';
const  isVisible = ref(false)

const open = () =>{
    isVisible.value = true
}
const close = () =>{
    isVisible.value = false
}
defineExpose({ open, close })
</script>
