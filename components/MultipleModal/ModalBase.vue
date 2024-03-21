<template>
    <!-- Render inside our `<div id="modals"></div>` in index.html -->
    <!-- <Teleport to="#modals"> -->
    <Teleport to="body">
        <Transition name="fade" enter-active-class="transition-opacity duration-250 ease-out"
            leave-active-class="transition-opacity duration-250 ease-out" enter-from-class="opacity-0"
            leave-to-class="opacity-0">

            <!-- Show / hide the modal -->
            <div v-if="isVisible"
                class="fixed left-0 top-0 z-[500] w-screen h-screen bg-black bg-opacity-30 grid items-center ">
                <!-- The backdrop -->
                <!-- <div class="fixed inset-0 bg-gray-900 opacity-40"></div> -->

                <!-- Where the actual content goes -->
                <div class="fixed inset-0 flex items-center justify-center" @click.stop.self="$emit('close', false)">
                    <div class="bg-white text-black rounded-lg " :class="`${ArrayWidth[props.modalWidth]}`">
                        <slot></slot>
                    </div>
                </div>
            </div>

        </transition>
    </Teleport>
</template>

<script setup lang="ts">
const isVisible = ref(false)
const ArrayWidth : any = {
    //    ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    'sm': 'w-1/4',
    'md': 'w-3/6',
    'lg': 'w-1/2',
    'xl': 'w-4/5'
}
const props = defineProps({
    modalWidth: {
        type: String,
        required: false,
        default: 'md'
    }
})
const emit = defineEmits(['close'])
const open = () => {
    isVisible.value = true
    console.log("value of class", ArrayWidth[props.modalWidth])
}
const close = () => {
    isVisible.value = false
}
defineExpose({ open, close })
</script>