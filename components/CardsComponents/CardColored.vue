<template>
    <div  class="bg-gradient-to-bl from-[#FDB618] to-[#00BBE1]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <template v-if="iconSite === 'left'">
            <div
                class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-[1.2]">
                <font-awesome-icon :icon="['fas', icon]"
                    class=" text-2xl stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out" />
            </div>
        </template>
        <div class="text-left">
            <p class="text-2xl">{{ content }}</p> <!-- Content Props -->
            <p>{{ title }}</p> <!-- title -->
        </div>
        <template v-if="iconSite === 'right'">
            <div
                class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-[1.2]">
                <font-awesome-icon :icon="['fas', icon]"
                    class=" text-2xl stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out" />
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
const { title, content, icon, iconSite } = defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: 'phone-flip'
    },
    iconSite: {
        type: String,
        default: 'right'
    }
})

</script>