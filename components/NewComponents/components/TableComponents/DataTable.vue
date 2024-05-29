<template>
  <div class="flex flex-col ">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class=" inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg ">
        <!-- start:table -->
        <table class="min-w-full">
          <!-- start:thead -->
          <thead>
            <tr>
              <th v-for="field in displayedFields"
                class=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                :key="field.key" @click="sortTable(field.key)">
                <slot :name="`head(${field.key})`" :field="field">
                  {{ field.label }}
                  <span class="text-gray-300 mx-3  group-hover:text-gray-700  cursor-pointer" v-show="field.ordered">
                    <i
                      :class="`fa-solid fa-${currentSort.typeSorting === 'desc' && currentSort.column === field.key ? 'arrow-up-z-a' : 'arrow-down-a-z'} fa-lg ${currentSort.column === field.key && (currentSort.typeSorting === 'asc' || currentSort.typeSorting === 'desc') ? 'text-gray-500' : ''}`"></i>
                  </span>
                </slot>
              </th>

            </tr>
          </thead>
          <!-- end:thead -->
          <!-- start:tbody -->
          <tbody class="bg-white">
            <tr v-if="props.loading" class="text-center items-center font-bold p-8 odd:bg-gray-300">
              <td class="p-4 flex-1 w-full items-center justify-between" :colspan="`${displayedFieldKeys.length}`">
                <i class="fa-solid fa-spinner relative text-gray-700 animate-spin mr-1"></i>
                <span class="text-gray-500">
                  Loading...
                </span>
              </td>
            </tr>
            <template v-else-if="filteredItems.length > 0">
              <tr v-for="(item, index) in filteredItems" :key="item.name" class="odd:bg-gray-200">
                <template v-for="key in displayedFieldKeys">
                  <Component :is="cellElement(key)" class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    :class="{ 'last:w-1/5 last:text-center': (key === 'action') }">
                    <slot :name="`cell(${key})`" :value="format(item, (key))" :item="item" :index="index"
                      :format="(k: any) => format(item, k)">
                      {{ format(item, (key)) }}
                    </slot>
                  </Component>
                </template>
              </tr>
            </template>
            <tr v-else class="text-center items-center font-bold p-8 odd:bg-gray-100">
              <td class="p-4 capitalize" :colspan="`${displayedFieldKeys.length}`">{{ "no data " }}</td>
            </tr>
          </tbody>
          <!-- end:tbody -->
        </table>
        <!-- end:table -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
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
  stripe: {
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
  value: Array

});
//start: variables
const searchFilter = ref('');
const initialSortField = computed(() => {
  const orderedField: any = props.fields.find((field: any) => field.sort);
  return orderedField ? orderedField.key : null;
});
const currentSort = ref({
  column: initialSortField.value,
  typeSorting: 'asc'
})
/**
 * declaracion de funciones
 * 
 */
//start:declaracion de campos de header
const displayedFields: any = computed(() => {
  if (props.fields.length === 0) {
    const items = [...props.items];
    const allKeys: any = items.reduce((keys: any, obj: any) => {
      return keys.concat(Object.keys(obj));
    }, []);
    return Array.from(new Set(allKeys)).map(key => ({ key, label: key }));
  }
  else {
    return props.fields.filter((i: any) => !i.hidden)
  }
})
const displayedFieldKeys = computed(() => {
  const obj = Object.entries(displayedFields.value).map(([_key, value]: any) => value.key);
  return obj
})
//end:declaracion de campos de header
//start: funciones 
const cellElement = (key: any) => {
  const field: any = props.fields.find((f: any) => f.key === key)
  return field && field.header ? 'th' : 'td'
}
const format = (item: any, key: any) => {
  const field: any = props.fields.find((f: any) => f.key === key)
  return field && field.format ? field.format(item[key]) : item[key]
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
const sortTable = (columnName: string) => {
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
//end: funciones
//start:body
const filteredItems: any = computed(() => {
  const keys: Array<any> = displayedFieldKeys.value
  if (searchFilter.value !== '') {
    const filteredArray = props.items.filter((item: any) => {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (item[key] !== undefined && typeof item[key] === 'string') {
          if (item[key] && item[key].toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase())) {
            return true;
          }
        }
        else if (item[key] !== undefined && typeof item[key] === 'number') {
          if (item[key] && item[key].toString().toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase())) {
            return true;
          }
        }
      }
      return false;
    })
    return filteredArray.sort((a, b) => compareData(a, b, currentSort.value.column));
  }
  return props.items.sort((a, b) => compareData(a, b, currentSort.value.column));
})
//end:body
</script>