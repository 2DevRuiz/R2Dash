<template>
    <div class="w-full px-4">
        <div class="flex flex-col items-center relative" ref="menu">
            <div class="w-full">
                <!-- <div class="my-2 p-1 flex border border-gray-200 bg-white h-13 overflow-visible ">
                    <div class="flex flex-auto flex-wrap  ">
                        <div v-for="(item, index) in selected" :key="index"
                            class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 border border-teal-300 ">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">{{ item }}</div>
                            <div class="flex flex-auto flex-row-reverse" @click="removeTag(index)">
                                <div>
                                    <font-awesome-icon :icon="['fas', 'xmark']"
                                        class="cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <input placeholder="Please enter a tag" v-model="filter" type="text" @focus="isOpen = true"
                                @keydown.enter="addTag($event)" @keydown.delete="removeLastTag"
                                class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800">
                        </div>
                    </div>
                    <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 ">
                        <button
                            class="cursor-pointer  w-6 h-6 text-gray-600 outline-none focus:outline-none text-center flex justify-center items-center"
                            @click="toogleVisibility">
                            <font-awesome-icon :icon="['fas', 'angle-down']" :class="{ 'rotate-180': isOpen }" />
                        </button>
                    </div>
                </div> -->
                <div class="my-2 p-1 flex border border-gray-200 bg-white rounded shrink-0">
                    <div class="flex flex-auto flex-wrap">
                        <template v-for="(item, index) in selected" :key="index">
                            <div  v-if="index < 2"
                                class="flex justify-center items-center m-0 font-medium py-1 px-2 bg-white rounded-full text-teal-700 border border-teal-300">
                                <div class="text-xs font-normal leading-none max-w-full flex-initial">{{
                                    item }}</div>
                                <div class="flex flex-auto flex-row-reverse" @click="removeTag(index)">
                                    <div>
                                        <font-awesome-icon :icon="['fas', 'xmark']"
                                            class="cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div v-if="selected.length > 2" class="flex-1">
                            <span class="text-xs font-bold">and {{ selected.length - 2 }} more</span>
                        </div>
                        <div class="flex-1">
                            <input placeholder="Please enter a tag" v-model="filter" type="text" @focus="isOpen = true"
                                @keydown.enter="addTag($event)" @keydown.delete="removeLastTag"
                                class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800">
                        </div>
                    </div>
                    <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                        <button
                            class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none text-center flex justify-center items-center"
                            @click="toogleVisibility">
                            <font-awesome-icon :icon="['fas', 'angle-down']" :class="{ 'rotate-180': isOpen }" />
                        </button>
                    </div>
                </div>
            </div>
            <div v-show="isOpen"
                class="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 multiScroll">
                <div class="flex flex-col w-full">
                    <div v-for="(item, index) in filteredData" :key="index"
                        class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                        @click="addTag($event, item)">
                        <div class="flex w-full items-center p-2 pl-2 border-l-2 relative hover:border-teal-400"
                            :class="{ 'border-teal-600': selected.indexOf(typeof item === 'object' ? item.name : item) !== -1 }">
                            <div class="w-full items-center flex justify-between">
                                <div class="mx-2 leading-6">{{ typeof item === 'object' ? item.name : item }}</div>
                                <font-awesome-icon :icon="['fas', 'check']"
                                    v-if="selected.indexOf(typeof item === 'object' ? item.name : item) !== -1"
                                    :class="{ 'text-teal-600': selected.indexOf(typeof item === 'object' ? item.name : item) !== -1 }" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useClickOutside from '@/composables/useClickOutside';
const menu = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const selected = ref<string[]>([]);
const emit = defineEmits(['update:modelValue'])
/**
 * props
 */
const { data } = defineProps({
    data: {
        type: Array,
        required: true
    },
    modelValue: {
        default: null
    }
})
const filter = ref<string>('');
const filteredData: any = computed(() => {
    if (filter.value === '') {
        return data;
    } else {
        if (!isOpen.value) {
            isOpen.value = true;
        }
        return data.filter((item: any) =>
        //  item.name.toLowerCase().includes(filter.value.toLowerCase())
        {
            if (typeof item === 'object') {
                return item.name.toLowerCase().includes(filter.value.toLowerCase());
            } else {
                return item.toLowerCase().includes(filter.value.toLowerCase());
            }
        }
        );
    }
});

/**
 * @param event Event
 * @param item data item
 * 
 */
const addTag = (event: any, item?: any) => {
    if (item) {
        if (selected.value.indexOf(typeof item === 'object' ? item.name : item) === -1) {
            selected.value.push(typeof item === 'object' ? item.name : item);
        } else {
            selected.value.splice(selected.value.indexOf(item.name), 1)
        }
    }
    else {
        event.preventDefault();
        let val = event.target.value.trim();
        if (val.length > 0) {
            if (selected.value.length >= 1) {
                for (let i = 0; i < selected.value.length; i++) {
                    if (selected.value[i] === val) {
                        return false
                    }
                }
            }
            selected.value.push(val);
            event.target.value = "";
            filter.value = "";
        }
    }
    emit('update:modelValue', selected.value)
}
/**
 * 
 */
const removeTag = (index: number) => {
    selected.value.splice(index, 1);
    emit('update:modelValue', selected.value)
}
/**
 * 
 * @param event 
 */
const removeLastTag = (event: any) => {
    if (event.target.value.length === 0) {
        removeTag(selected.value.length - 1);
    }
    emit('update:modelValue', selected.value)
}
/**
 * 
 */
const handleOutsideClick = () => {
    isOpen.value = false
};
/**
 * 
 */
function toogleVisibility() {
    isOpen.value = !isOpen.value
}
/**
 * 
 */
useClickOutside(menu, handleOutsideClick);

</script>
<style scope>
.top-100 {
    top: 100%
}

.bottom-100 {
    bottom: 100%
}

.max-h-select {
    max-height: 300px;
}

/* width */
.multiScroll::-webkit-scrollbar {
    /* width: 8px; */
    @apply w-2;
    /* @apply hidden; */
}

/* Track */
.multiScroll::-webkit-scrollbar-track {
    /* background: #fff;
    border-radius: 10px; */
    @apply bg-white rounded-xl hidden;
}

/* Handle */
.multiScroll::-webkit-scrollbar-thumb {
    /* background: red;
    border-radius: 5px; */
    @apply bg-teal-500 rounded-xl;
}

/* Handle on hover */
.multiScroll::-webkit-scrollbar-thumb:hover {
    /* background: green; */
    @apply bg-teal-800;
}
</style>