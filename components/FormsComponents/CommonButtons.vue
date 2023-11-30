<template>
    <button type="button" :disabled="props.disabled"
        class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-full group  hover:text-white dark:text-white"
        :class="[bgClass, props.disabled ? 'cursor-not-allowed opacity-50' : '']">
        <span class="relative  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0" 
            :class="[(props.buttonText === '')?'px-1.5 py-1':'px-5 py-2.5']"
        >
            <font-awesome-icon v-if="props.loading" :icon="['fas', 'spinner']" size="lg" class="inline w-4 h-4 mr-3 group-hover:text-gray-100 text-gray-600 animate-spin"/>
            <font-awesome-icon v-else-if="props.icon !== ''" :icon="['fas', props.icon]" size="lg" class="w-4 h-4" :class="{'mr-3': props.buttonText !== ''}"/>
            <span v-if="props.buttonText !== ''" class="font-semibold">
                {{ props.buttonText }}
            </span>
        </span>
    </button>
</template>
<script lang="ts" setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    typeB: {
        type: String,
        validator(value: string) {
            return ["primary","secondary","info", "success", "danger", "warning"].includes(value);
        },
        default: 'info',
    },
    buttonText: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    }
});

const bgClass = computed(() => {
    switch (props.typeB) {
        case 'primary':
            return 'bg-gradient-to-br from-[#00BBE1] to-blue-900 ';
        case 'secondary':
            return 'bg-gradient-to-br from-[#BDBCBD] to-gray-500 ';
        case 'info':
            return 'bg-gradient-to-br from-cyan-500 to-blue-500 ';
        case 'success':
            return 'bg-gradient-to-br from-green-500 to-green-900';
        case 'danger':
            return 'bg-gradient-to-br from-red-700 to-red-400';
        case 'warning':
            return 'bg-gradient-to-br from-yellow-600 via-amber-500 to-red-200';
        default:
            return 'bg-gradient-to-br from-cyan-500 to-blue-500';
    }
});
</script>
