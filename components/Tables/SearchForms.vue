
import { emit } from 'process';

import { Input } from 'postcss';
<template>
    <div class="block relative">
        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                class="text-base fill-current text-gray-500 dark:text-gray-200" />
        </span>
        <input placeholder="Search" type="text" @input="search"
            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white dark:bg-gray-600 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['search']);
const search = (e:any) => {
    emit('search', e.target.value);
    console.log(e.target.value);
}
</script>