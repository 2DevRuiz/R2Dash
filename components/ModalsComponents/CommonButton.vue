<template>
    <!-- <button
        class="outline-none text-2xl rounded-lg w-max h-16 flex justify-center items-center py-0 px-8 transition-all duration-300 ease-in-out text-gray-200 border border-green-500 border-opacity-100  hover:bg-[#ffffff1a] group/button"
        :class="{ 'text-white bg-green-500 bg-opacity-100 group-hover/button:bg-green-500 group-hover/button:bg-opacity-20': props.primary, 'opacity-70 group-hover/button:cursor-not-allowed': props.disabled,'hover:cursor-pointer':!props.disabled }"> 
       /////////////posible solicion para el problema del button 
    <button type="button"
                    class="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
                    disabled>
                    <div class="flex items-center justify-center m-[10px]">
                        <div
                            class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4">
                        </div>
                        <div class="ml-2"> Processing... </div>
                    </div>
                </button>
    -->
    <!-- <button
        class="outline-none text-2xl rounded-lg w-max h-16 flex justify-center items-center py-0 px-8 transition-all duration-300 ease-in-out text-gray-200 border border-green-500 border-opacity-100 hover:bg-[#ffffff1a] group/button"
        :class="{
            'text-white bg-green-500 bg-opacity-100 group-hover/button:bg-green-500 group-hover/button:bg-opacity-20': props.primary,
            'opacity-70 group-hover/button:cursor-not-allowed': props.disabled,
            'hover:cursor-pointer': !props.disabled
        }">
        <span v-if="props.loading"
            class="w-8 h-8 rounded-full border-2 border-transparent border-r-2 border-r-green-500 mr-5 animate-spin"
            :class="{ 'border-r-white': props.primary }"></span>
        <div v-else class="text-gray-300 mr-2 flex items-center justify-center">
            <slot></slot>
        </div>
        <span class="common-button-text">
            {{ props.buttonText }}
        </span>
    </button> -->
    <!-- <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Purple to blue
        </span>
    </button> -->
    <button class="btn-primary">
        Save changes
    </button>
    <!-- <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cyan to blue
        </span>
    </button> -->
    <button class="btn-outline">
        Save changes outLine
    </button>
</template>
<script lang="ts" setup>
interface commonButton {
    buttonText: string;
    primary?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

const props = withDefaults(defineProps<commonButton>(), {
    primary: false,
    disabled: false,
    loading: false,
});
</script>