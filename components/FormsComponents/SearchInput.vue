<template>
    <div class='max-w-md '>
        <div class="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> -->
                <font-awesome-icon :icon="['fas', 'search']" />
            </div>

            <input autocomplete="off" class="peer h-full w-full outline-none text-sm text-gray-700 pr-1" type="text" id="search"
                placeholder="Search..." @input="search"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['search']);
const search = (e:any) => {
    emit('search', e.target.value);
}
</script>