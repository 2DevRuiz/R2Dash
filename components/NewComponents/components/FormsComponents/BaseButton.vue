<template>

    <button :disabled="disabled"
        class="flex items-center  transition ease-in duration-200 uppercase rounded-full  hover:text-white border border-gray-400 focus:outline-none"
        :class="getWidth, bgClass, { 'cursor-not-allowed opacity-50': disabled }" @click="emit('click', $event)">
       
        <i v-if="icon !== ''" :class="icon" class=" text-xl h-5 w-5"></i>
        <span :class="icon !== '' ? 'ml-3' : ''" v-if="label !== ''"> {{ label }}</span>
        <span class="pl-2">
            <slot name="content"></slot>
        </span>
    </button>

</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'submit'
    },
    label: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: 'medium'
    },
    bgColor: {
        type: String,
        default: 'secondary'
    }
})
const arrayWidth: any = ref({
    'small': 'px-2 py-1 text-sm',
    'medium': 'px-4 py-2 text-base',
    'large': 'px-6 py-3 text-lg',
    'icon': 'p-4'
})
const emit = defineEmits(['click'])




const getWidth = computed(() => {
    if (props.label === '') {
        console.log(arrayWidth.value['icon'])
        return arrayWidth.value['icon']
    }
    return arrayWidth.value[props.width]
    // return (props.label !== '')?arrayWidth.value[props.width] : arrayWidth.value['icon']

})
const bgClass = computed(() => {
    switch (props.bgColor) {
        case 'primary':
            return 'bg-blue-300 hover:bg-blue-800';
        case 'secondary':
            return 'bg-gray-300 hover:bg-gray-800';
        case 'info':
            return 'bg-cyan-300 hover:bg-cyan-800';
        case 'success':
            return 'bg-green-300 hover:bg-green-800';
        case 'danger':
            return 'bg-red-300 hover:bg-red-800';
        case 'warning':
            return 'bg-amber-200 hover:bg-amber-800';
        default:
            return 'bg-indigo-300 hover:bg-indigo-800';
    }
});
</script>