<template>
    <div class="px-9 py-4">
        <div>
            <!-- search form  -->
            <SearchInput2 v-if="props.search" :pos="'R'" @search="handleSearch" />
            <!-- search form  -->
        </div>
        <!-- start:Table -->
        <div class="-mx-4 px-4 py-4 overflow-x-auto sm:-mx-8">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal text-gray-500 table-fixed">
                    <thead :class="FnColor">
                        <tr>
                            <th v-for="field in displayedFields"
                                class="px-4 py-3  border-b-2 border-solid border-x-2 border-gray-300  dark:border-gray-600 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider group"
                                :key="field.key" @click="sortTable(field.key)">
                                <slot :name="`head(${field.key})`" :field="field">
                                    {{ field.label }}
                                    <span
                                        class="text-gray-500 mx-3  group-hover:text-gray-700  cursor-pointer dark:text-gray-400"
                                        v-show="field.ordered">
                                        <i
                                            :class="`fa-solid fa-${currentSort.typeSorting === 'desc' && currentSort.column === field.key ? 'arrow-up-z-a' : 'arrow-down-a-z'} fa-lg ${currentSort.column === field.key && (currentSort.typeSorting === 'asc' || currentSort.typeSorting === 'desc') ? 'text-gray-700' : ''}`"></i>
                                    </span>
                                </slot>

                            </th>
                        </tr>
                    </thead>
                    <!-- Start:table body -->
                    <tbody class="bg-white dark:bg-gray-800">
                        <tr v-if="props.loading" class="text-center items-center font-bold p-8 odd:bg-gray-100">
                            <td class="p-4 flex-1 w-full items-center justify-between"
                                :colspan="`${displayedFieldKeys.length}`">

                                <i class="fa-solid fa-spinner relative text-gray-700 animate-spin mr-1"></i>
                                <!-- LOADING -->
                                Loading
                                <!-- {{ $t('globals.loaders.loading') }} -->
                            </td>
                        </tr>
                        <template v-else-if="filteredItems.length > 0">
                            <template v-for="(item, index) in filteredItems" :key="item.name" >
                                <tr :class="{ 'hover:bg-gray-300/50 ': props.hover ,'odd:bg-white even:bg-gray-100': props.stripe }">
                                    <template v-for="key in displayedFieldKeys">
                                        <Component :is="cellElement(key)"
                                            class="px-4 py-3 border-b border-x-2 border-gray-300 dark:border-gray-500   text-sm "
                                            :class="{ 'last:w-1/5 last:text-center': (key === 'action') }">
                                            <slot :name="`cell(${key})`" :value="format(item, (key))" :item="item"
                                                :index="index" :format="(k:any) => format(item, k)" :data="item" :row="getRow(item,index)">
                                                {{ format(item, (key)) }}
                                            </slot>
                                        </Component>
                                    </template>
                                    <!-- Botón o ícono para expandir/cerrar la fila de detalle -->
                                    <!-- <td class="px-4 py-3">
                                        <button @click="toggleDetail(index)"> -->
                                    <!-- <i
                                            :class="`fa-solid fa-${isDetailVisible(index) ? 'minus' : 'plus'}-square fa-lg`"></i> -->
                                    <!-- <font-awesome-icon
                                                :icon="['fas', isDetailVisible(index) ? 'fa-minus-square' : 'fa-plus-square']"
                                                size="lg" />
                                        </button>
                                    </td> -->
                                    <!-- <td class="px-4 py-3">
                                        <button @click="toggleDetail(index)"> -->
                                    <!-- <i
                                                :class="`fa-solid fa-${isDetailVisible(index) ? 'minus' : 'plus'}-square fa-lg`"></i> -->
                                    <!-- <font-awesome-icon
                                                :icon="['fas', isDetailVisible(index) ? 'fa-minus-square' : 'fa-plus-square']"
                                                size="lg" />
                                        </button>
                                    </td>-->
                                </tr>
                                <!-- Sección de detalle oculta -->

                                <!-- <tr v-if="item.detail" class="bg-gray-200">
                                    <td :colspan="displayedFieldKeys.length + 1">
                                        <div class="px-4 py-2"> -->
                                <!-- Slot for custom detail content -->
                                <!-- <slot :name="`detail`" :item="item"> -->
                                <!-- Default detail content -->
                                <!-- <p>Detail content for {{ item.name }}</p>
                                            </slot>
                                        </div>
                                    </td>
                                </tr> -->
                                <tr v-if="item._showDetail" class="bg-gray-200">
                                    <td :colspan="displayedFieldKeys.length + 1">
                                        <div class="px-4 py-2">
                                            <!-- Slot for custom detail content -->
                                            <slot :name="`detail`" :item="item">
                                                <!-- Default detail content -->
                                                <p>Detail content for {{ item.name }}</p>
                                            </slot>
                                        </div>
                                    </td>
                                </tr>
                            </template>

                        </template>

                        <tr v-else class="text-center items-center font-bold p-8 odd:bg-gray-100">
                            <td class="p-4 capitalize" :colspan="`${displayedFieldKeys.length}`">No data</td>
                        </tr>
                    </tbody>
                    <!-- end:table body -->
                </table>
            </div>
        </div>
        {{ props.stripe }}


        <!-- end:Table -->
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import SearchInput from '../Common/SearchInput.vue';
const searchFilter = ref('');
const handleSearch = (search: any) => {
    searchFilter.value = search
}
const emit = defineEmits(['update:modelValue'])
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
    search: {
        type: Boolean,
        required: false,
        default: true
    },
    headColor: {
        type: String,
        required: false,
        default: ''
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    hover: {
        type: Boolean,
        required: false,
    },
    stripe:{
        type: Boolean,
        required: false,
    },
    modelValue: {
        type: Array,
        required: false,
        default() {
            return []
        }
    },
    value: {
        required: false
    },

});
const localRows = ref([]);
watch(() => props.items, (value) => {
    // if (props.items.length > 0) {
    //     console.log("we have data")
    //     for (let index = 0; index < props.items.length; index++) {
    //         const element:any = props.items[index];
    //         element._showDetail = false;
    //         localRows.value.push(element)
    //     }
    //     emit('update:modelValue', localRows.value)
    // }
    // else{
    //     console.log("empty")
    // }
    // PrepareItems()
})
const displayedFields = computed(() => props.fields.filter((i: any) => !i.hidden))

const displayedFieldKeys = computed(() => {
    // PrepareItems()
    const obj = Object.entries(displayedFields.value).map(([_key, value]) => value.key);
    return obj
})
const initialSortField = computed(() => {
    const orderedField = props.fields.find((field) => field.sort);
    return orderedField ? orderedField.key : null;
});
const currentSort = ref({
    column: initialSortField.value,
    typeSorting: 'asc'
})
const toggleDetail = (index :any) => {
    const item :any= filteredItems.value[index];
    console.log(filteredItems.value[index])
    item._showDetail = !item._showDetail;
}
const isDetailVisible = (index) => {
    return filteredItems.value[index]._showDetail;
}
const cellElement = (key) => {
    const field = props.fields.find((f) => f.key === key)
    return field && field.header ? 'th' : 'td'
}

const format = (item, key) => {
    const field = props.fields.find((f) => f.key === key)
    return field && field.format ? field.format(item[key]) : item[key]
}

const sortTable = (columnName) => {
    if (currentSort.value.column === columnName) {
        currentSort.value.typeSorting = currentSort.value.typeSorting === 'asc' ? 'desc' : 'asc';
        console.log("1")
    }
    else {
        currentSort.value.column = columnName;
        currentSort.value.typeSorting = currentSort.value.typeSorting === 'asc' ? 'desc' : 'asc';
        console.log("2")
    }
    console.log(columnName)
}

const compareData = (a, b, columnName) => {
    const valueA = a[columnName];
    const valueB = b[columnName];

    if (typeof valueA === 'string') {
        return currentSort.value.typeSorting === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
        return currentSort.value.typeSorting === 'asc' ? valueA - valueB : valueB - valueA;
    }
}

const filteredItems = computed(() => {
    // console.log("message")
    const keys = displayedFieldKeys.value;
    let dataReturn = null;
    if (searchFilter.value !== '') {

        const filteredArray = props.items.filter((item) => {
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
        dataReturn = filteredArray.sort((a, b) => compareData(a, b, currentSort.value.column));
        console.log(dataReturn)
        PrepareItems(dataReturn)
        return dataReturn;
    }
    dataReturn = props.items.sort((a, b) => compareData(a, b, currentSort.value.column));
    PrepareItems(dataReturn)

    return dataReturn
})
watch(filteredItems, (newValue, oldValue) => {
    console.log(newValue)
    // PrepareItems()
});
const FnColor = computed(() => {

    switch (props.headColor) {
        case 'primary':
            return 'bg-[#bde3ff]';
        case 'secondary':
            return 'bg-[#6c757d]';
        case 'info':
            return 'bg-[#0dcaf0]';
        case 'success':
            return 'bg-[#25c279]';
        case 'danger':
            return 'bg-[#ec474f]';
        case 'warning':
            return 'bg-[#e29400]';
        default:
            if (props.headColor.trim() === '') {
                return 'bg-gray-50'
            }

            return 'props.headColor';
    }
});

function PrepareItems(data: any = []) {
    console.log(data)
    if (data.length > 0) {
        console.log("we have data")
        for (let index = 0; index < data.length; index++) {
            const element: any = data[index];
            element._showDetail = false;
            localRows.value.push(element)
        }
        emit('update:modelValue', localRows.value)
    }
    else {
        console.log("empty")
    }
}
function getRow(item:any,index:any) {
    const Row :any = {};
    Row.field = displayedFields.value[index]
    Row.item = item
    Row.index = index
    Row.toggleDetails = () => toggleDetail(index)
    console.log(typeof Row.toggleDetails)
    return Row
}
</script>