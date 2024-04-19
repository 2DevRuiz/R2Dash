<template>
    <!-- <teleport  to="body"> -->
    <transition name="backdrop" enter-active-class="transition-opacity duration-250 ease-out"
        leave-active-class="transition-opacity duration-250 ease-out" enter-from-class="opacity-0"
        leave-to-class="opacity-0">
        <!-- start:Show/ hide the Modal -->
        <div id="divParent" v-if="isVisible"
            class="fixed left-0  top-0 right-0 bottom-0 z-[999] w-screen h-screen bg-black bg-opacity-30 grid items-center">
            <!-- <div class="fixed inset-0 bg-gray-900 opacity-40"  ></div> -->
            <!-- start:modal content -->

            <div class="fixed inset-0 flex items-center justify-center"
                @click.stop.self="$emit('close', false)" v-on:keydown.esc="$emit('close', false)">
                <!-- <div class="fixed bg-slate-400 top-0 right-0 bottom-0 left-0 flex items-center justify-center"  > -->
                <div class="bg-white text-black rounded-lg " :class="`${ArrayWidth[modalOptions.width]}`">
                    <slot></slot>
                </div>
            </div>
            <!-- end:modal content -->
        </div>
        <!-- end:Show/ hide the Modal -->

    </transition>
    <!-- </teleport> -->
</template>
<script lang="ts" setup>
// create a function to calculate a sum 


// const { open } = defineProps({
//     open: {
//         type: Boolean,
//         required: true
//     }
// })
// const emit = defineEmits(['close'])
// const close = () => {
//     emit('close')
// }
//--------------------------------------------------------------------------------------------
const isVisible = ref(false)
const modalOptions : any = ref({
    width: 'md'
});
const ArrayWidth :any= {
    //    ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    'sm': 'w-1/4',
    'md': 'w-2/5',
    'lg': 'w-3/5',
    'xl': 'w-4/5'
}
// const props = defineProps({
//     modalWidth: {
//         type: String,
//         required: false,
//         default: 'md'
//     }
// })
const emit = defineEmits(['close'])
const open = (opt : any= {}) => {
    if (opt.width) {
        modalOptions.value.width = opt.width
    }
    isVisible.value = true
    console.log("Open modal component",isVisible.value)
}
const close = () => {
    console.log("close modal component",isVisible.value)
    isVisible.value = false
}
const CloseModal = () => {
    // console.log("closeM modal component", isVisible.value)
    // isVisible.value = false
    emit('close', false)
}
defineExpose({ open, close })
</script>
