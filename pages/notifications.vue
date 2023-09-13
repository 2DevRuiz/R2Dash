<template>
    <div class="h-screen w-full bg-cyan-700 p-8 text-black flex justify-center items-center space-x-3"
    :class="{

    }">
        <button @click="addToast('info')"
            class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-300 rounded-lg hover:bg-blue-500 focus:outline-none ">
            <font-awesome-icon :icon="['fas', 'exclamation']" class="mx-1 w-5 h-5" />
            <span class="mx-1">Info Notification!</span>
        </button>
        <button @click="addToast('success')"
            class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-300 rounded-lg hover:bg-blue-500 focus:outline-none ">
            <font-awesome-icon :icon="['fas', 'exclamation']" class="mx-1 w-5 h-5" />
            <span class="mx-1">Success Notification!</span>
        </button>
        <button @click="addToast('warning')"
            class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-200 rounded-lg hover:bg-blue-500 focus:outline-none ">
            <font-awesome-icon :icon="['fas', 'exclamation']" class="mx-1 w-5 h-5" />
            <span class="mx-1">Warning Notification!</span>
        </button>
        <button @click="addToast('danger')"
            class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-300 rounded-lg hover:bg-blue-500 focus:outline-none ">
            <font-awesome-icon :icon="['fas', 'exclamation']" class="mx-1 w-5 h-5" />
            <span class="mx-1">Danger Notification!</span>
        </button>
    </div>
    <!-- <BasicNotification /> -->
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import {useToastStore} from '~/store/useToast';
const { addToast:add } = useToastStore();
const { items } = storeToRefs(useToastStore());
function addToast(type:string) {
    add({
        title:'Hello from Page 425',
        duration:5600,
        type:type,
        content:'Ha Ocurrido un error'
    })
}
function addToast2() {
    add({
        title:'Hello from Page 425',
        // duration:1000
    })
}
</script>