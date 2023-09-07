<template>
    <div class="flex flex-col flex-auto flex-shrink-0 antialiased mx-5 pb-6">
        <div class="grid grid-cols-1 gap-2">
            <div class="p-3">
                <div class="float-right justify-end items-end">
                    <button @click="addRow"
                        class=" bg-green-400 p-2 rounded-md text-white justify-center items-center dark:bg-green-600 dark:text-gray-200 hover:bg-green-800 dark:hover:bg-green-500 dark:hover:text-white">
                        <font-awesome-icon :icon="['fas', 'font']" class="text-lg mr-1" />
                        Add Row
                    </button>
                </div>

            </div>
            <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
                        <tr class="">
                            <th class="p-2 whitespace-nowrap ">
                                <div class="font-semibold text-center">Row Number</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Name</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Age</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-300">

                        <tr v-for="(tableData, index) in tableRows" :key="index">
                            <td class="p-2 whitespace-nowrap text-center">
                                {{ tableData }}
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <input type="text" class="w-full bg-gray-200 rounded p-2" placeholder="text"/>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                                <input type="number" class="w-full bg-gray-200 rounded p-2" placeholder="text"/>
                            </td>
                            <td class="p-2 whitespace-nowrap flex justify-center">
                                <button @click=""
                                    class=" bg-blue-400 p-2 rounded-md text-white flex justify-center text-center items-center dark:bg-green-600 dark:text-gray-200 hover:bg-green-800 dark:hover:bg-green-500 dark:hover:text-white">
                                    <font-awesome-icon :icon="['fas', 'trash']" class="text-lg mr-1" />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    </div>



    <!-- <table>
    <thead>
        <tr>
            <th>Row Number</th>
            <th>Name</th>
            <th>Number</th>
        </tr>
    </thead>
    <tr v-for="(tableData, index) in tableRows" :key="index">
        <td>{{ tableData }}</td>
        <td><input type="text" /></td>
        <td><input type="number" /></td>
    </tr>
</table> -->
</template>
<script lang="ts" setup>
const tableRows = ref<string[]>([])
const counter = ref(0)
const addRow = () => {
    counter.value++;
    tableRows.value.push("Row " + counter.value);
}


</script>



<!-- https://phpforever.com/vuejs/add-or-remove-table-row-dynamically-using-vuejs/ -->