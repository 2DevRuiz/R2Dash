<template>
    <Modal @close="closeM" ref="PopBase">
        <!-- Header Section -->
        <div
            class="bg-blue-500 text-lg font-semibold leading-normal flex items-start justify-between p-3 border-b-2 border-gray-300 rounded-t ">
            <div class="mb-0 text-white">
                <h5>Seleccione los agentes</h5>
            </div>

            <button type="button"
                class="text-gray-200 bg-transparent hover:bg-red-500 hover:text-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                @click="closeM">
                <font-awesome-icon :icon="['fas', 'xmark']" class="w-5 h-5" />
            </button>
        </div>
        <!-- Header Section -->
        <!-- Body Section -->
        <div class="relative top-0  rounded-xl">

            <div class="w-full">
                <div class=" grid grid-cols-1 md:grid-cols-2  divide-x-2 divide-gray-300 dark:divide-gray-400">
                    <div class="w-full">
                        <div class="flex flex-row bg-gray-200 h-12 dark:bg-gray-500">
                            <div class="w-full">
                                <div v-show="elements().length > 0"
                                    class="flex justify-between items-center flex-wrap flex-grow p-1">
                                    <button type="button"
                                        class=" capitalize text-green-500 cursor-pointer flex justify-between items-center gap-2 bg-gray-50 p-2 rounded hover:bg-gray-300 hover:text-green-700"
                                        @click="selectAll">
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                        Select All
                                    </button>
                                    <SearchInput @search="handleSearch" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col mt-2">
                            <TransitionGroup name="item" tag="div"
                                enter-from-class="translate-x-[-10%] -z-[999] opacity-0"
                                enter-active-class="duration-700" leave-active-class="duration-700"
                                leave-to-class="translate-x-[-3%] -z-[999] opacity-0">
                                <div v-for="(item, index) in filteredItems" :key="item.name"
                                    class="w-full p-2  border-b border-gray-300 group hover:bg-green-200">
                                    <div class="w-full flex flex-row justify-between items-center cursor-pointer group-hover:text-black"
                                        @click="addItem(item)">
                                        <span class="relative mx-2 capitalize">
                                            {{ item.name }}
                                        </span>
                                        <span class="mr-2 ">
                                            <span
                                                class="rounded-full w-5 h-5 flex justify-center items-center  bg-gray-300 dark:bg-gray-500 hover:bg-green-300 dark:hover:bg-green-300 p-3">
                                                <font-awesome-icon :icon="['fas', 'plus']" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </TransitionGroup>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="flex h-12 flex-row bg-gray-200 dark:bg-gray-500">
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
                            <TransitionGroup name="item-selected" tag="div"
                                enter-from-class="translate-x-[-7%] -z-[999] opacity-0"
                                enter-active-class="duration-700" leave-active-class="duration-700"
                                leave-to-class="translate-x-[-3%] opacity-0 -z-[999]">
                                <div v-for="(item, index) in selected" :key="item.name"
                                    class="w-full p-2 border-b border-gray-300 group hover:bg-slate-100">

                                    <div class="w-full flex justify-between items-center cursor-pointer  group-hover:text-black"
                                        @click="removeItem(item)">
                                        <!-- <div
                                            class="w-full flex flex-row justify-between items-center cursor-pointer "> -->
                                        <span class="relative mr-2 capitalize">
                                            {{ item.name }}
                                        </span>
                                        <span class="mr-2 ">
                                            <span
                                                class="rounded-full w-5 h-5 flex justify-center items-center bg-gray-300 dark:bg-gray-500 hover:bg-red-300 dark:hover:bg-red-300 p-3">
                                                <font-awesome-icon :icon="['fas', 'minus']" />
                                            </span>
                                        </span>
                                        <!-- </div> -->
                                    </div>
                                </div>
                            </TransitionGroup>
                        </div>
                    </div>
                    <!-- <div class="w-full ">
                        
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Body Section -->
        <!-- Footer Section -->
        <div class="relative top-0 p-3 rounded-b-xl flex justify-end gap-2 items-end border-t border-gray-300">
            <button type="button" @click.stop.self="closeM"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg capitalize">ok</button>
        </div>
        <!-- Footer Section -->
    </Modal>
</template>
<script lang="ts" setup>

import Modal from "@/components/BoostrapModal/Modal.vue";

/**
 * Start:Variable Declaration
 */
const PopBase: any = ref(null)
const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
        required: true
    },
    modelValue: {
        type: Array,
        required: false,
        default: []
    },
    source: {
        type: String,
        required: true,
    },
    returnObject: {
        type: Boolean,
        default: false
    },
});
const selected: any = ref([...props.modelValue]);
const emit = defineEmits(['close', 'update:modelValue'])
const searchFilter = ref('');
const items_queues = [
    {
        name: 'Reyes Tránsito queues',
        description: "descripction 1"
    },
    {
        name: 'Brook Allison Bennington queues',
        description: "descripction 2"
    },
    {
        name: 'Kendall Reyes queues',
        description: "descripction 3"
    },
    {
        name: 'Silver Evelyn queues',
        description: "descripction 4"
    },
    {
        name: 'Carol Cyan queues',
        description: "descripction 5"
    },
    {
        name: 'Kelley Christie queues',
        description: "descripction 6"
    },
    {
        name: 'Jordin Lavern queues',
        description: "descripction 7"
    },
    {
        name: 'Pedrin Bennington queues',
        description: "descripction 8"
    },
]
const items_agents = [
    {
        name: 'Reyes Tránsito agents',
    },
    {
        name: 'Brook Allison Bennington agents',
    },
    {
        name: 'Kendall Reyes agents',
    },
    {
        name: 'Silver Evelyn agents',
    },
    {
        name: 'Carol Cyan agents',
    },
    {
        name: 'Kelley Christie agents',
    },
    {
        name: 'Jordin Lavern agents',
    },
    {
        name: 'Pedrin Bennington agents',
    },
]
const allItems = ref(props.source === 'queues' ? [...items_queues] : [...items_agents])
/**
 * End:Variable Declaration
 */
/**
 * start:Watcher For Modal
 */
// watch(() => props.showModal, (newValue, oldValue) => {
//     // console.log('newValue', newValue, 'oldValue', oldValue)
//     if (newValue) {
//         console.log("its open")
//         PopBase.value?.open()
//     } else {
//         console.log("its close")
//         PopBase.value?.close()
//     }
// });
watchEffect(() => {
    // props.showModal = product.value.quantity * 10;
    if (props.showModal) {
        console.log("its open")
        PopBase.value?.open({
            width: 'md'
        })
    }
    else {
        console.log("its close")
        PopBase.value?.close()
    }
});
/**
 * End:Watcher For Modal
 */

// start:watcher for Selected value change
watch(() => selected.value, (newVal) => {
    emit('update:modelValue', newVal);
});
// end:watcher for Selected value change
/**
 * start:watcher for Selected value change
 */
// watch(() => props.modelValue, (newVal) => {
//     selected.value = newVal;
//     console.log("newVal Selected", newVal)
//     console.log("SelectedValue", selected.value)
//     // emit('update:modelValue', newVal);
// });
/**
 * end:watcher for Selected value change
 */
// start: function declaration
const closeM = (state: any) => {
    console.log("close", state)
    PopBase.value?.close()
    emit('close', false)
}
const handleSearch = (search: any) => {
    searchFilter.value = search
}
const filteredItems = computed(() => {
    let items = elements();
    if (searchFilter.value !== '') {
        return items.filter((item: any) => item.name.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()));
    }
    return items;
})
const addItem = (item: any) => {
    selected.value = [...selected.value, ...allItems.value.filter((i: any) => i.name === item.name)];
}
const removeItem = (item: any) => {
    selected.value = selected.value.filter((i: any) => i.name !== item.name);
}
function elements() {
    let items = allItems.value.filter((item) => {
        const hasAdded = selected.value.some((selectedItem: any) => selectedItem.name === item.name)
        if (!hasAdded) {
            return item.name.toLocaleLowerCase();
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

</script>