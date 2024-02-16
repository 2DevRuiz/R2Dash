<template>
    <button type="button" :disabled="props.disabled"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group  hover:text-white dark:text-white "
        :class="[ bgClass, props.disabled ? 'cursor-not-allowed opacity-50' : '']">
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            <!-- <span v-if="props.loading"
                class="inline-flex w-4 h-4 bg-red-500 rounded-full border-2 border-transparent border-r-2 border-r-green-500 mr-3 animate-spin">

            </span> -->
            <font-awesome-icon v-if="props.loading" :icon="['fas', 'spinner']" size="lg" class="inline w-4 h-4 mr-3 group-hover:text-gray-100 text-gray-600 animate-spin"/>
             <!-- <span v-if="props.loading" class="inline-flex w-4 h-4 rounded-full border-2 border-transparent border-r-2 border-r-green-500 mr-5 mt- animate-spin"></span> -->
            <!-- <span aria-hidden="true" v-if="props.loading"
                class="inline w-8 h-8 rounded-full border-2 border-transparent border-r-2 border-r-blue-900 mr-3 animate-spin bg-red-500"
                :class="{ 'border-r-white': props.typeB }"></span> -->
            <font-awesome-icon v-else-if="props.icon !== ''" :icon="['fas', props.icon]" size="lg" class="w-4 h-4" :class="{'mr-3': props.buttonText !== ''}"/>
            <span v-if="props.buttonText !== ''" class="">
                {{ props.buttonText }}
            </span>
            
        </span>
    </button>  
    
    <!-- Posible button  -->
    <!-- `${FnBorderColor} hover:${FnColor} hover:${FnHoverBorderColor}` -->
    <!-- <button class="tw-inline-flex  tw-items-center tw-border-e tw-p-3 tw-rounded tw-bg-green-500 tw-text-blue-700 hover:tw-bg-green-700 focus:tw-relative" title="Edit Product">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="tw-h-4 tw-w-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            <span class="tw-ml-2">Send</span>
        </button> -->
        <!-- posible button -->
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
            // return ["info", "success", "danger", "warning"].includes(value);
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
