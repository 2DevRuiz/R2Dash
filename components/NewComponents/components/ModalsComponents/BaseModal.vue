<template>
    <Teleport to="#modal">
        <Transition name="fade" enter-active-class="transition-opacity duration-250 ease-out"
            leave-active-class="transition-opacity duration-250 ease-out" enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <!-- start:Show/ hide the Modal -->
            <div id="divParent" v-if="isVisible"
                class="fixed left-0  top-0 right-0 bottom-0 z-[999] w-screen h-screen bg-black bg-opacity-30 grid items-center">
                <!-- <div class="fixed inset-0 bg-gray-900 opacity-40"  ></div> -->
                <!-- start:modal content -->
                <div class="fixed inset-0 flex items-center justify-center" @click.stop.self="$emit('_close', false)"
                    v-on:keydown.esc="$emit('_close', false)">
                    <!-- <div class="fixed bg-slate-400 top-0 right-0 bottom-0 left-0 flex items-center justify-center"  > -->
                    <div class="bg-white text-black rounded-xl  border-t-4 " :class="`${ArrayWidth[modalOptions.width]} ${borderClass}`">
                    <slot></slot>
                    </div>
                </div>
                <!-- end:modal content -->
            </div>
            <!-- end:Show/ hide the Modal -->

        </Transition>
    </Teleport>
</template>
<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue';
const isVisible = ref(false)
const emits = defineEmits(['_close'])
const ConfirmType = ref('')
const modalOptions = ref({
    width: 'md'
});
const ArrayWidth: any = {
    //    ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    'sm': 'w-1/4',
    'md': 'w-2/5',
    'lg': 'w-3/5',
    'xl': 'w-4/5'
}

const open = (opt: any = {}) => {
    if (opt.width) {
        modalOptions.value.width = opt.width
    }
    if (opt.type) {
        ConfirmType.value = opt.type
    }
    isVisible.value = true
}
const close = () => {
    isVisible.value = false
}
const borderClass = computed(() => {
    switch (ConfirmType.value) {
        case 'primary':
            return 'border-blue-300 ';
        case 'secondary':
            return 'border-gray-300 ';
        case 'info':
            return 'border-cyan-300 ';
        case 'success':
            return 'border-green-600';
        case 'danger':
            return 'border-red-300 ';
        case 'warning':
            return 'border-amber-200 ';
        default:
            return 'border-white ';
    }
});
defineExpose({ open, close })
</script>