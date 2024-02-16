
<template>
    <div class="tw-w-full tw-flex  tw-items-end " :class="{ 'md:tw-justify-end': position(props.pos) === 'end', 'md:tw-justify-start': position(props.pos) === 'start', 'md:tw-justify-center': position(props.pos) === 'center', 'md:tw-justify-start': position(props.pos) !== 'end' && position(props.pos) !== 'start' && position(props.pos) !== 'center' }">
        <div class="tw-relative tw-flex tw-items-center tw-mt-3 md:tw-mt-0">
            <span class="tw-absolute">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-5 tw-h-5 tw-mx-3 tw-text-gray-400 dark:tw-text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg> -->
                <i class="fa-regular fa-magnifying-glass tw-w-5 tw-h-5 tw-mx-3 tw-text-gray-400 dark:tw-text-gray-600"></i>
            </span>
            
            <input type="text" placeholder="Search" @input="search"
                class="tw-block tw-w-full tw-py-1.5 tw-pr-5 tw-text-gray-700 tw-bg-white tw-border tw-border-gray-400 tw-rounded-lg md:tw-w-80 tw-placeholder-gray-500/70 tw-pl-11 rtl:tw-pr-11 rtl:tw-pl-5 dark:tw-bg-gray-900 dark:tw-text-gray-300 dark:tw-border-gray-600 focus:tw-border-blue-400 dark:tw-focus:border-blue-300 focus:tw-ring-blue-300 focus:tw-outline-none focus:tw-ring focus:tw-ring-opacity-40">
        </div>
        
    </div>
    
</template>
<script setup>

const props = defineProps({
    pos: {
        type: String,
        required: false,
        default: () => 'left',

    }
})
const position = (position) => {
    switch (position) {
        case 'R':
            return "end"
        case 'L':
            return "start"
        case 'C':
            return "center"
        default:
            return "start"
    }
}
const emit = defineEmits(['search']);
const search = (e) => {
    emit('search', e.target.value);
}
</script>