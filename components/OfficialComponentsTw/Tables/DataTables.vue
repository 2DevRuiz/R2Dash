<template>
    <div class="tw-p-0">
        <div>
            <!-- search form  -->
            <SearchComponent v-if="props.search" :pos="'R'" @search="handleSearch" />
            <!-- search form  -->
        </div>
        <!-- start:Table -->
        <div class="-tw-mx-4 tw-px-4 tw-py-4 tw-overflow-x-auto sm:-tw-mx-8">
            <div class="tw-inline-block tw-min-w-full tw-shadow tw-rounded-lg tw-overflow-hidden">
                <table class="tw-min-w-full tw-leading-normal tw-text-gray-500 table-fixed">
                    <thead :class="FnColor">
                        <tr>
                            <th v-for="field in displayedFields"
                                class="tw-px-4 tw-py-3  tw-border-b-2 tw-border-solid tw-border-x-2 tw-border-gray-200  dark:tw-border-gray-600 tw-text-left tw-text-xs tw-font-semibold tw-text-gray-600 dark:tw-text-gray-400 tw-uppercase tw-tracking-wider tw-group"
                                :key="field.key" @click="sortTable(field.key)">
                                <slot :name="`head(${field.key})`" :field="field">
                                    {{ field.label }}
                                    <span
                                        class="tw-text-gray-500 tw-mx-3  group-hover:tw-text-gray-700  tw-cursor-pointer dark:tw-text-gray-400"
                                        v-show="field.ordered">
                                        <i
                                            :class="`fa-solid fa-${currentSort.typeSorting === 'desc' && currentSort.column === field.key ? 'arrow-up-z-a' : 'arrow-down-a-z'} fa-lg ${currentSort.column === field.key && (currentSort.typeSorting === 'asc' || currentSort.typeSorting === 'desc') ? 'tw-text-gray-700' : ''}`"></i>
                                    </span>
                                </slot>
                            </th>
                        </tr>
                    </thead>
                    <!-- Start:table body -->
                    <tbody class="tw-bg-white dark:tw-bg-gray-800">
                        <tr v-for="(item, index) in filteredItems" :key="item.name" class="odd:tw-bg-gray-100">
                            <template v-for="key in displayedFieldKeys">
                                <Component :is="cellElement(key)"
                                    class="tw-px-4 tw-py-3 tw-border-b tw-border-x-2 tw-border-gray-200 dark:tw-border-gray-500   tw-text-sm "
                                    :class="{ 'last:tw-w-1/5 last:tw-text-center': (key === 'action') }">
                                    <slot :name="`cell(${key})`" :value="format(item, (key))" :item="item" :index="index"
                                        :format="(k) => format(item, k)">
                                        {{ format(item, (key)) }}
                                    </slot>
                                </Component>
                            </template>
                        </tr>
                    </tbody>
                    <!-- end:table body -->
                </table>
            </div>
        </div>



        <!-- end:Table -->
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import SearchComponent from '../common/SearchComponent.vue'
const searchFilter = ref('');
const handleSearch = (search) => {
    searchFilter.value = search
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
    search: {
        type: Boolean,
        required: false,
        default: true
    },
    headColor: {
        type: String,
        required: false,
        default: ''
    }

});

const displayedFields = computed(() => props.fields.filter((i) => !i.hidden))

const displayedFieldKeys = computed(() => {
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
        return filteredArray.sort((a, b) => compareData(a, b, currentSort.value.column));
    }
    console.log(props.items.sort((a, b) => compareData(a, b, currentSort.value.column)))
    return props.items.sort((a, b) => compareData(a, b, currentSort.value.column));
})
const FnColor = computed(() => {

    switch (props.headColor) {
        case 'primary':
            return 'tw-bg-[#bde3ff]';
        case 'secondary':
            return 'tw-bg-[#6c757d]';
        case 'info':
            return 'tw-bg-[#0dcaf0]';
        case 'success':
            return 'tw-bg-[#25c279]';
        case 'danger':
            return 'tw-bg-[#ec474f]';
        case 'warning':
            return 'tw-bg-[#e29400]';
        default:
            if (props.headColor.trim() === '') {
                return 'tw-bg-gray-50'
            }

            return 'props.headColor';
    }
});
</script>