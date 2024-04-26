<template>
    <div class="p-2">
        <!-- Action Tables Header -->
        <div class="grid grid-cols-2">
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row  mb-1 sm:mb-0" v-if="props.numberItems">
                    <!-- select count rows -->
                    <div class="relative">
                        <select
                            class="h-full rounded-l border block appearance-none w-full bg-white dark:bg-gray-600 border-gray-400 text-gray-700 dark:text-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                            <option>500</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                            <font-awesome-icon :icon="['fas', 'chevron-down']" size="2xs" class="fill-current h-4 w-4" />
                        </div>
                    </div>
                    <!-- select status -->
                    <!-- <div class="relative">
                        <select
                            class=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white dark:bg-gray-600 border-gray-400 text-gray-700 dark:text-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                            <font-awesome-icon :icon="['fas', 'chevron-down']" size="2xs" class="fill-current h-4 w-4" />
                        </div>
                    </div> -->
                </div>
                <!-- search -->
                <!-- <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                            class="text-base fill-current text-gray-500 dark:text-gray-200" />
                    </span>
                    <input placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white dark:bg-gray-600 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div> -->
                <SearchForms @search="handleSearch" />
                <!--end Search  -->
                <!-- <CommonButtons class="ml-auto my-0" :button-text=" 'Add New' " :typeB="'success'" :icon="'fa-plus'"></CommonButtons> -->
                <!-- <button class="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Botón</button> -->
            </div>
            <div class="text-right">
                <slot name="actionsRigth" />
            </div>
        </div>
        <!-- <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">

            </div>
            <SearchForms @search="handleSearch" />
        </div> -->
        <!-- Action Tables Header -->
        <!-- Table -->
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal text-gray-500 dark:text-gray-400">
                    <thead class=" bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th v-for="field in displayedFields"
                                class="px-5 py-3 border-b-2 border-gre-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider group/tableHeader"
                                :key="field.key" @click="sortTable(field.key)">
                                <slot :name="`head(${field.key})`" :field="field">
                                    {{ field.label }}
                                    <span
                                        class="text-gray-200 mx-3  group-hover/tableHeader:text-gray-500  cursor-pointer dark:text-gray-400"
                                        v-show="field.ordered"><!--esto se cambia que pueda mostar si la columna es ordenable-->
                                        <!-- v-show="field.key !== 'action'"> esto es para validar si la columna tiene como nombre action  -->
                                        <!-- <font-awesome-icon :icon="['fas',(currentSort.typeSorting === 'asc')?'caret-up':'caret-down']"  size="xl" :class="{'text-gray-500': currentSort.column === field.key}"/> -->
                                        <!-- <font-awesome-icon v-if="currentSort.typeSorting === 'asc'" :icon="['fas', 'caret-up']"  size="xl" :class="{'text-gray-500': currentSort.column === field.key}"/>
                                        <font-awesome-icon v-else :icon="['fas', 'caret-down']"  size="xl"/> -->
                                        <!-- {{ currentSort.typeSorting === 'asc' ? '▲' : '▼' }} -->
                                        <!-- <font-awesome-icon  :icon="['fas', 'caret-up']"  size="xl" :class="{'text-gray-500': currentSort.column === field.key}"/>
                                        <font-awesome-icon  :icon="['fas', 'caret-down']"  size="xl"/> 
                                     <i
                                            :class="`fa-solid fa-${currentSort.typeSorting === 'desc' && currentSort.column === field.key ? 'arrow-up-z-a' : 'arrow-down-a-z'} fa-lg ${currentSort.column === field.key && (currentSort.typeSorting === 'asc' || currentSort.typeSorting === 'desc') ? 'tw-text-gray-500' : ''}`"></i>
                                    
                                    -->
                                        <font-awesome-icon :icon="['fas', 'caret-up']" size="lg"
                                            style="position: relative; top: -3px;"
                                            :class="{ 'text-gray-500': currentSort.column === field.key && currentSort.typeSorting === 'asc' }" />
                                        <font-awesome-icon :icon="['fas', 'caret-down']" size="lg"
                                            style="position: relative; top: 3px;"
                                            :class="{ 'text-gray-500': currentSort.column === field.key && currentSort.typeSorting === 'desc' }" />
                                    </span>
                                </slot>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800">
                        <tr v-for="item in filteredItems" :key="item.name">
                            <template v-for="key in displayedFieldKeys">
                                <Component :is="cellElement(key as string)"
                                    class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                                    <slot :name="`cell(${key})`" :value="format(item, (key as string))" :item="item"
                                        :format="(k: string) => format(item, k)">
                                        {{ format(item, (key as string)) }}
                                    </slot>
                                </Component>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Table -->
    </div>
</template>
  
<script lang="ts" setup>
// import { computed, PropType } from 'vue';

interface TableField {
    key: string
    label: string
    format?: Function
    hidden?: boolean
    header?: boolean
}

interface TableItem {
    id: number
    [key: string]: unknown
}

const props = defineProps({
    fields: {
        type: Array,
        default: () => []
    },
    items: {
        type: Array,
        default: () => []
    },
    numberItems: {
        type: Boolean,
        required: false,
        default: false
    },
    caption: {
        type: String,
        default: null
    }
});
const initialSortField = computed(() => {
    const orderedField: any = props.fields.find((field: any) => field.ordered);
    console.log(orderedField)
    return orderedField ? orderedField.key : null;
});
// const currentSort = ref({
//     column: null,
//     typeSorting: 'asc'
// })
const currentSort = ref({
    column: initialSortField.value,
    typeSorting: 'asc'
})
const searchFilter = ref('');

const displayedFields: any = computed(() => props.fields.filter((i: any) => !i.hidden))

const displayedFieldKeys = computed(() => {
    const obj = Object.entries(displayedFields.value).map(([_key, value]: any) => value.key);
    return obj
})

const cellElement = (key: string) => {
    const field: any = props.fields.find((f: any) => f.key === key)
    return field && field.header ? 'th' : 'td'
}

const format = (item: any, key: string) => {
    const field: any = props.fields.find((f: any) => f.key === key)
    return field && field.format ? field.format(item[key]) : item[key]
}

const handleSearch = (search: string) => {
    searchFilter.value = search
}

const sortTable = (columnName: any) => {
    console.log(columnName)
    if (currentSort.value.column === columnName) {
        console.log("true")
        currentSort.value.typeSorting =
            currentSort.value.typeSorting === 'asc' ? 'desc' : 'asc';
    }
    else {
        console.log("false")
        currentSort.value.column = columnName;
        currentSort.value.typeSorting = 'asc'
    }
}

const compareData = (a: any, b: any, columnName: any) => {
    const valueA = a[columnName];
    const valueB = b[columnName];

    if (typeof valueA === 'string') {
        return currentSort.value.typeSorting === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
        return currentSort.value.typeSorting === 'asc' ? valueA - valueB : valueB - valueA;
    }
}

const filteredItems: any = computed(() => {
    const keys = displayedFieldKeys.value;
    //return props.items.filter((item: any) => item.maidenName === 'Cole')
    if (searchFilter.value !== '') {
        // const filteredArray = props.items.filter((item: any) => {
        //     keys.forEach((key) => {
        //         if (item[key] !== undefined && typeof item[key] === 'string') {
        //             console.log("1")
        //             if (item[key] && item[key].toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase())) {
        //                 console.log("found")
        //                 return true;
        //             }
        //             else {
        //                 console.log("notfound",item[key].toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()))
        //             }
        //         } else if (typeof item[key] === 'number') {
        //             console.log("2")
        //             if (item[key] && item[key].toString().includes(searchFilter.value.toLocaleLowerCase())) {
        //                 console.log("foundnumber")
        //                 return true;
        //             }
        //             else {
        //                 console.log("notfoundnumber")
        //             }
        //         }

        //     });
        //     // console.log(found)
        //     // return false;
        // });
        const filteredArray = props.items.filter((item: any) => {
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (item[key] !== undefined && typeof item[key] === 'string') {
                    if (item[key] && item[key].toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase())) {
                        return true;
                    }
                } else if (typeof item[key] === 'number') {
                    if (item[key] && item[key].toString().includes(searchFilter.value.toLocaleLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        });
        // const datosCopiados = [...props.items];
        // return datosCopiados.sort((a, b) => compareData(a, b, currentSort.value.column));
        return filteredArray.sort((a, b) => compareData(a, b, currentSort.value.column));
        // const keys = ['maidenName', 'email', 'age', 'action'];
        // return props.items.filter((item: any) => keys.some((key: string) => {
        //     console.log(item[key] === searchFilter.value.toLocaleLowerCase())
        //     return item[key] === searchFilter.value.toLocaleLowerCase()
        // }));
        // console.log(keys)
        // return props.items.filter((item: any) => {
        //     // console.log(Object.keys(item))
        //     return Object.keys(item).some((key: string) => keys.includes(key) && item[key] === searchFilter);
        // });
        // return props.items.filter((item: any) => item.maidenName.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()) || item.email.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()));
    }
    // const datosCopiados = [...props.items];
    // return datosCopiados.sort((a, b) => compareData(a, b, currentSort.value.column));
    return props.items.sort((a, b) => compareData(a, b, currentSort.value.column));
})
</script>