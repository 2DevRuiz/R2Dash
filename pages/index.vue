<template>
    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <CardBasic :title="'New Accounts'" :content="'180'" :icon="'users'" @click="handledClick" :iconSite="'left'" />
        <CardColored :title="'PJSIP CONTACTS'" :content="'255'" :icon="'address-book'" @click="handledClick" />
        <CardBackgroundColor />
        <SimpleCardWithFooter />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <div class="">
            <CardData>
                <template #title>
                    <div>Total Refill</div>
                </template>
                <div class="px-6 py-6 ">
                    <div class="flex flex-col space-y-4 ">
                        <div class="w-full h-5 2xl:h-20 bg-red-200  rounded-lg shadow-xl">
                            Hola
                        </div>
                        <div class="w-full h-5 2xl:h-20 bg-red-200  rounded-lg shadow-xl">
                            Hola
                        </div>
                    </div>
                </div>

            </CardData>
        </div>
        <div class=" ">
            <CardData :title="'Call Stats'">
                <template #title>
                    <div>Call Stats</div>
                </template>
                <div class="px-6 py-6">
                    <div class="w-full flex justify-center items-center ">
                        <BarChart v-if="isloaded" :gData="dProducts" />
                    </div>
                </div>

            </CardData>
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <!-- Header -->
            <div class="px-4 py-4 bg-gradient-to-bl from-[#FDB618] to-[#00BBE1] ring-1">
                <h3 class="text-white font-bold text-xl">Hardware Information</h3>
            </div>
            <!-- Cuerpo -->
            <div class="px-4 py-6">
                <!-- Aquí puedes agregar el contenido del cuerpo del card h-[780px] -->
                <div class=" w-full bg-slate-400 rounded-sm overflow-auto shadow">
                    <table class="min-w-full divide-y divide-gray-200 table-auto">
                        <thead class="bg-gray-100 text-start text-black">
                            <tr>
                                <th class="">#</th>
                                <th class="">Account</th>
                                <th class="">Details</th>
                                <th class="">Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr class="">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    Apple Imac 27"</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                    Desktop PC</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    $1999</td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    Apple Imac 27"</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                    Desktop PC</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    $1999</td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    Apple Imac 27"</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                    Desktop PC</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    $1999</td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    Apple Imac 27"</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                    Desktop PC</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                    $1999</td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="px-4 py-4 bg-gray-200">
                <!-- Aquí puedes agregar contenido adicional en el footer del card -->
                <p class="text-gray-600">Footer del card...</p>
            </div>
        </div>
        <!-- another card -->
        <div class="relative flex flex-col min-w-0 rounded-xl break-words border bg-white border-1 border-gray-300">
            <div
                class="flex items-center align-middle px-4 py-4 mb-0 bg-red-200 border-b-1 rounded-t-xl border-gray-300 text-gray-900 ">
                <h3 class="mb-1 font-bold">Title</h3>
            </div>
            <div class="flex-auto p-6 rounded-sm overflow-auto shadow">
                <table class="min-w-full divide-y divide-gray-200 table-auto">
                    <thead class="bg-gray-100 text-start text-black">
                        <tr>
                            <th class="">#</th>
                            <th class="">Account</th>
                            <th class="">Details</th>
                            <th class="">Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                Apple Imac 27"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                Desktop PC</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                $1999</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                Apple Imac 27"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                Desktop PC</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                $1999</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                Apple Imac 27"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                Desktop PC</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                $1999</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                Apple Imac 27"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                Desktop PC</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                $1999</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="py-3 px-6 bg-gray-200 border-t-1 border-gray-300  rounded-b-xl">
                <p class="text-gray-600">Footer...</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

import { nextTick } from 'vue';
import useGData from '~/composables/DataService'
const { gData, fetchData } = useGData()
const dataProducts = ref([])
const dProducts = ref({})
const isloaded = ref(false)
onMounted(async () => {
    await nextTick();
    await fetchData();
    const chartLabels = ref([])
    const chartData = ref([])
    dataProducts.value = gData.value.products
    dataProducts.value.forEach(element => {
        chartLabels.value.push(element.title)
        chartData.value.push(element.rating)
    });
    dProducts.value = {
        labels: chartLabels.value,
        data: chartData.value,
        title: "stats"
    }
    isloaded.value = true
    // console.log(gData.value)
    // setupDarkStyle()
    // console.log(Dark)
})
const handledClick = () => {
    console.log("Se hizo click")
}
</script>