<template>
    <Modal :open="showModal" @close="close">
        <template v-slot:modal-title="{ close }">
            <h5>Seleccione los agentes</h5>
        </template>
        <template v-slot:modal-body>
            <div class="w-full">
                <div class="bg-[#d2d3d4] grid grid-cols-1 md:grid-cols-2 divide-x-2 divide-x-gray-900">
                    <div class="w-full  bg-orange-500">
                        <div class="flex flex-row">
                            <div class="w-full">
                                <div class="flex justify-between items-center flex-wrap p-1">
                                    <span
                                        class=" capitalize text-green-500 cursor-pointer flex justify-between items-center gap-2 bg-slate-50 p-2 rounded hover:bg-slate-200">
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                        Select All
                                    </span>
                                    <label for="Search" class="hidden">Search</label>
                                    <div class="relative">
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                            <font-awesome-icon :icon="['fas', 'search']" />
                                        </span>
                                        <input type="search" name="Search" placeholder="Search..."
                                            class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="w-full">

                            </div> -->
                        </div>
                    </div>
                    <div class="w-full h-4 ">
                        <div class="w-full">
                            <div class="flex flex-col">
                                <div class="flex justify-between items-center flex-wrap p-1">
                                    <span
                                        class=" capitalize text-green-500 cursor-pointer flex justify-between items-center gap-2 bg-slate-50 p-2 rounded hover:bg-slate-200">
                                        <font-awesome-icon :icon="['fas', 'plus']" />
                                        Remove All
                                    </span>
                                </div>
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
const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}
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
]
console.log(showModal)
</script>