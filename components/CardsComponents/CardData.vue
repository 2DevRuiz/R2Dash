<template>
    <div
        class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-white dark:bg-gray-800 w-full shadow-lg rounded ">
        <div class="rounded-t mb-0 px-0 border-0">
            <div class="flex flex-wrap items-center px-4 py-2 border-b ">
                <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">
                        <slot name="title" />
                    </h3>
                </div>
                <!-- <div class="relative w-full max-w-full flex-grow flex-1 justify-end items-end py-1 px-2" > -->
                <div class="relative w-full max-w-full flex-grow flex-1 justify-end items-end py-1 px-2 ">
                    <div class="float-right">
                        <slot name="tools"></slot>
                    </div>
                </div>
            </div>
            <div class="block w-full overflow-x-auto">
                <slot />
            </div>
            <div class="flex flex-wrap items-center px-4 border-t ">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { tools } = defineProps({
    tools: {
        type: String,
        default: ''
    }
})

</script>