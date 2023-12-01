<template>
    <div class="p-8">
        <!-- Action Tables Header -->
        <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">

            </div>
            <SearchForms @search="handleSearch" />
        </div>
        <!-- Action Tables Header -->
        <!-- Table -->
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal text-gray-500 dark:text-gray-400">
                <thead class=" bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th v-for="field in displayedFields"
                            class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                            <slot :name="`head(${field.key})`" :field="field">
                                {{ field.label }}
                            </slot>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                    <tr v-for="item in filteredItems" :key="item.name">

                        <template v-for="key in displayedFieldKeys">
                            
                                <Component :is="cellElement(key as string)" class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
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
    caption: {
        type: String,
        default: null
    }
})
const searchFilter = ref('');

const displayedFields = computed(() => props.fields.filter((i:any) => !i.hidden))

const displayedFieldKeys = computed(() => {
    const obj = Object.entries(displayedFields.value).map(([_key, value]) => value.key);
    return obj
})

const cellElement = (key: string) => {
    const field:any = props.fields.find((f : any) => f.key === key)
    return field && field.header ? 'th' : 'td'
}

const format = (item: any, key: string) => {
    const field = props.fields.find((f) => f.key === key)
    return field && field.format ? field.format(item[key]) : item[key]
}

const handleSearch = (search: string) => {
    searchFilter.value = search
}
const filteredItems = computed(() => {
    const keys = displayedFieldKeys.value;
    //return props.items.filter((item: any) => item.maidenName === 'Cole')
    if (searchFilter.value !== '') {
        // const keys = ['maidenName', 'email', 'age', 'action'];
        return props.items.filter((item: any) => keys.some((key: string) => {
            console.log(item[key] === searchFilter.value.toLocaleLowerCase())
            return item[key] === searchFilter.value.toLocaleLowerCase()
        }));
        // return props.items.filter((item: any) => item.maidenName.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()) || item.email.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()));
    }
    return props.items
})
</script>