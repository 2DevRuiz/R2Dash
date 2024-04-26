<template>
    <div class="w-full flex  items-end "
        :class="{ 'md:justify-end': position(props.pos) === 'end', 'md:justify-start': position(props.pos) === 'start', 'md:justify-center': position(props.pos) === 'center', 'md:justify-start': position(props.pos) !== 'end' && position(props.pos) !== 'start' && position(props.pos) !== 'center' }">
        <div class="relative flex items-center mt-3 md:mt-0">
            <span class="absolute">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg> -->
                <i class="fa-regular fa-magnifying-glass w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"></i>
            </span>

            <input type="text" placeholder="Search" @input="search"
                class="placeholder:capitalize block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-400 rounded-lg md:w-80 placeholder-gray-500/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
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