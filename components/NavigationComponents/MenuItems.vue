<template>
    <!-- <div class="Menu-item">
        <div class="label" @click="toogleMenu">
            <span v-if="icon"><font-awesome-icon class="text-lg"
                    :icon="['fas', icon]" /></span>
            <span>{{ label }}</span>
        </div>
        <div v-show="showChildren" class="items-container">
            <MenuItems v-for="(item, index) in items" 
            :key="index"
            :label="item.label"
            :icon="item.icon"
            :depth="depth + 1"
            :data="item.children" />
        </div>
    </div> -->
    <li :class="[(showChildren && items && items.length > 0) ? 'bg-slate-600' : '']" @click="toogleMenu">
        <nuxt-link :to="(to)" 
            class="relative rounded-md flex flex-row items-center h-11 focus:outline-none hover:bg-slate-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
                <font-awesome-icon class="text-lg" :icon="['fas', icon]" />
            </span>
            <span class="flex-grow ml-2 text-sm tracking-wide truncate">{{ label }}</span>
            <span class="inline-flex justify-end items-center">
                <font-awesome-icon v-if="items && items.length > 0" :icon="['fas', 'chevron-down']"
                    class="h-6 w-6 transition duration-300" :class="showChildren ? 'rotate-180' : ''"
                    @click.stop="toogleMenu()" />
            </span>
        </nuxt-link>
    </li>
    <ul v-if="items && items.length > 0" v-show="showChildren" class="flex flex-col py-2 space-y-1 ml-4">
        <MenuItems v-for="(item, index) in items" :key="index" :label="item.label" :icon="item.icon" :depth="depth + 1"
            :items="item.children" :to="item.to" />
    </ul>
</template>
<script lang="ts" setup>

const { label, icon, depth, items, to } = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: 'javascript:void(0)'
    },
    depth: {
        type: Number,
        required: true
    },
    items: {
        type: Array as PropType<any>
    }
});
const showChildren = ref(false);
function toogleMenu() {
    showChildren.value = !showChildren.value;
}
</script>