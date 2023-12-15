<template>
    <Modal :open="showModal" @close="close">
        <template v-slot:modal-title="{ close }">
            <h5>Seleccione los agentes</h5>
        </template>
        <template v-slot:modal-body>
            <div class="w-full">
                <div class=" grid grid-cols-1 md:grid-cols-2 divide-x-2 divide-gray-300 dark:divide-gray-400">
                    <div class="w-full">
                        <div  class="flex flex-row bg-gray-200 h-12 dark:bg-gray-500">
                            <div class="w-full">
                                <div v-show="elements().length > 0" class="flex justify-between items-center flex-wrap flex-grow p-1">
                                    <button type="button"
                                        class=" capitalize text-green-500 cursor-pointer flex justify-between items-center gap-2 bg-gray-50 p-2 rounded hover:bg-gray-300 hover:text-green-700"
                                        @click="selectAll">
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                        Select All 
                                    </button>
                                    <!-- <label for="Search" class="hidden">Search</label>
                                    <div class="relative">
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <font-awesome-icon :icon="['fas', 'search']" />
                                        </span>
                                        <input type="search" name="Search" placeholder="Search..."
                                            class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400">
                                    </div> -->
                                    <SearchInput @search="handleSearch" />
                                </div>
                            </div>
                            <!-- <div class="w-full">

                            </div> -->
                        </div>
                        <div class="flex flex-col mt-2">
                            <!-- <transition-group enter="animate-out" leave="animate-comming"
                                enter-active-class="transition-all duration-500"
                                leave-active-class="transition-all duration-500" tag="div">
                                <div v-for="(item, index) in  elements()" :key="index"
                                    class="w-full p-2 bg-orange-300 border-b-2 border-gray-300">
                                    <div class="w-full flex justify-center items-center cursor-pointer" :class="{
                                        'animate-out': isSelected(item),
                                        'animate-coming': !isSelected(item)
                                    }" @click="addItem(item)">
                                        {{ item.name }}
                                    </div>
                                </div>
                            </transition-group> -->
                            <!-- <transition-group enter="animate-coming" leave="animate-out"
                                enter-active-class="transition-all duration-100"
                                leave-active-class="transition-all duration-400" tag="div">
                                <div v-for="(item, index) in elements()" :key="item.name"
                                    class="w-full p-2 bg-orange-300 border-b-2 border-gray-300">
                                    <div class="w-full flex justify-center items-center cursor-pointer" 
                                    :class="{
                                        'animate-out bg-red-600': isSelected(item),
                                        'animate-coming bg-cyan-600': !isSelected(item)
                                    }" @click="addItem(item)">
                                        {{ item.name }} + {{ isSelected(item) }}
                                    </div>
                                </div>
                            </transition-group> -->
                            <!-- <TransitionGroup name="item" tag="div" enter-from-class="translate-x-[-10%] -z-[999] opacity-0"
                                enter-active-class="duration-700" leave-active-class="duration-700"
                                leave-to-class="translate-x-[-3%] -z-[999] opacity-0">
                                <div v-for="(item, index) in elements()" :key="item.name"
                                    class="w-full p-2  border-b-2 border-gray-300">
                                    <div class="w-full flex justify-center items-center cursor-pointer"
                                        @click="addItem(item)">
                                        {{ item.name }} 
                                    </div>
                                </div>
                            </TransitionGroup> -->
                            <TransitionGroup name="item" tag="div" 
                                enter-from-class="translate-x-[-10%] -z-[999] opacity-0"
                                enter-active-class="duration-700" 
                                leave-active-class="duration-700"
                                leave-to-class="translate-x-[-3%] -z-[999] opacity-0">
                                <div v-for="(item, index) in filteredItems" :key="item.name"
                                    class="w-full p-2  border-b border-gray-300 group hover:bg-slate-100">

                                    <div class="w-full flex flex-row justify-between items-center cursor-pointer group-hover:text-black"
                                        @click="addItem(item)">
                                        <span class="relative mr-2">
                                            {{ item.name }}
                                        </span>
                                        <span class="mr-2 ">
                                            <span class="rounded-full w-5 h-5 flex justify-center items-center  bg-gray-300 dark:bg-gray-500 hover:bg-green-300 dark:hover:bg-green-300 p-3">
                                                <font-awesome-icon :icon="['fas', 'plus']" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </TransitionGroup>
                        </div>
                    </div>
                    <div class="w-full ">
                        <div class="w-full">
                            <div  class="flex h-12 flex-row bg-gray-200 dark:bg-gray-500">
                                <div class="flex justify-between items-center flex-wrap p-1">
                                    <button v-if="selected.length" type="button"
                                    class=" capitalize text-green-500 cursor-pointer flex justify-between items-center gap-2 bg-gray-50 p-2 rounded hover:bg-gray-300 hover:text-green-700"
                                    @click="removeAll">
                                    
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                        Remove All
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col mt-2">
                                <!-- <transition-group enter="animate-coming" leave="animate-out"
                                    enter-active-class="transition-all duration-100"
                                    leave-active-class="transition-all duration-400" tag="div">
                                    <div v-for="(item, index) in selected" :key="index"
                                        class="w-full p-2 bg-orange-300 border-b-2 border-gray-300">

                                        <div class="w-full flex justify-center items-center cursor-pointer" :class="{
                                            'animate-coming bg-red-500': isSelected(item),
                                            'animate-out bg-cyan-300': !isSelected(item)
                                        }" @click="removeItem(item)">
                                            {{ item.name }} + {{ isSelected(item) }}
                                        </div>
                                    </div>
                                </transition-group> -->
                                <TransitionGroup name="item-selected" tag="div"
                                    enter-from-class="translate-x-[-7%] -z-[999] opacity-0"
                                    enter-active-class="duration-700" leave-active-class="duration-700"
                                    leave-to-class="translate-x-[-3%] opacity-0 -z-[999]">
                                    <div v-for="(item, index) in selected" :key="item.name"
                                        class="w-full p-2 border-b border-gray-300 group hover:bg-slate-100">

                                        <div class="w-full flex justify-center items-center cursor-pointer group-hover:text-black"
                                            @click="removeItem(item)">
                                            <div class="w-full flex flex-row justify-between items-center cursor-pointer"
                                                @click="addItem(item)">
                                                <span class="relative mr-2">
                                                    {{ item.name }}
                                                </span>
                                                <span class="mr-2 ">
                                                    <span class="rounded-full w-5 h-5 flex justify-center items-center bg-gray-300 dark:bg-gray-500 hover:bg-red-300 dark:hover:bg-red-300 p-3">
                                                        <font-awesome-icon :icon="['fas', 'minus']" />
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
</template>
<script lang="ts" setup>
import Modal from "@/components/BoostrapModal/Modal.vue";
const { showModal } = defineProps({
    showModal: {
        type: Boolean,
        default: false,
        required: true
    }
})
const items = [
    {
        name: 'Reyes Tránsito',
    },
    {
        name: 'Brook Allison Bennington',
    },
    {
        name: 'Kendall Reyes',
    },
    {
        name: 'Silver Evelyn',
    },
    {
        name: 'Carol Cyan',
    },
    {
        name: 'Kelley Christie',
    },
    {
        name: 'Jordin Lavern',
    },
    {
        name: 'Pedrin Bennington',
    },
]
const allItems = ref([...items])
const selected: any = ref([]);
const filter = ref('');
const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}
const searchFilter = ref('');
const handleSearch = (search: any) => {
    searchFilter.value = search
}
const filteredItems = computed(() => {
    let items = elements();
    console.log(items)
    //return props.items.filter((item: any) => item.maidenName === 'Cole')
    if (searchFilter.value !== '') {
        return items.filter((item: any) => item.name.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()));
        // return items.filter((item: any) => item.name.toLocaleLowerCase().includes(searchFilter.value) || item.name.includes(searchFilter.value));
    }
    return items;
})
const addItem = (item: any) => {
    // console.log(allItems.value)
    selected.value.push(...allItems.value.filter((i: any) => i.name === item.name));
    // allItems.value = allItems.value.filter((i:any) => i.name !== item.name);
    // console.log(selected.value)
    // console.log('add')
}
const removeItem = (item: any) => {
    selected.value = selected.value.filter((i: any) => i.name !== item.name);
    console.log('remove');
}
// const elements  = () =>{
//     console.log(items)
//     // return items.filter((item) => {
//     //     return item.name.toLowerCase().indexOf(selected.value.toLowerCase()) > -1
//     // })
//     return allItems
// }
function isSelected(item: any) {
    console.log(item.name)
    console.log(selected.value.some((selectedItem: any) => selectedItem.name === item.name))
    // return selected.value.includes(item.name);
    return selected.value.some((selectedItem: any) => selectedItem.name === item.name)
}
function elements() {

    let items = allItems.value.filter((item) => {
        const hasAdded = selected.value.some((selectedItem: any) => selectedItem.name === item.name)
        if (!hasAdded) {
            return item.name.toLocaleLowerCase()

        }
    })


    return items
}
const selectAll = () => {
    selected.value = [...allItems.value]
}
const removeAll = () => {
    selected.value = []
}
function beforeLeave(el: any) {
    const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
    );
    // el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
    // el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
    el.style.width = width;
    el.style.height = height;
}
</script>