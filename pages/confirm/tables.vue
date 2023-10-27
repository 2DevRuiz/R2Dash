<template>
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Administrator Access
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" >
                    <div
                      class="w-11 h-6 bg-gray-200 rounded-full  peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                  </label>
                <!-- <label class="relative inline-block w-16 h-9 rounded-full">
                  <input type="checkbox" class="peer opacity-0 w-0 h-0">
                  <span class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full
                before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-blue-500"></span>
                </label> -->
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <template v-for="(item, index) in items" :key="index">

              <tr class="" @click="toggleDetails(index)">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  {{ item.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only perName peer" :value="item.name" v-model="form.permissions">
                    <div
                      class="w-11 h-6 bg-gray-200 rounded-full peer-[.perName]:peer-focus:ring-4 peer-[.perName]:peer-focus:ring-blue-300 dark:peer-[.perName]:peer-focus:ring-blue-800 dark:bg-gray-700 peer-[.perName]:peer-checked:after:translate-x-full peer-[.perName]:peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-[.perName]:peer-checked:bg-blue-600">
                    </div>
                  </label> -->
                  <label class="relative inline-block w-10 h-6 rounded-full">
                    <input type="checkbox" class="peer opacity-0 w-0 h-0" :value="item.name" v-model="form.selected">
                    <span
                      class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-1 before:left-1 before:rounded-full
                                before:bg-white before:duration-300 peer-checked:before:translate-x-4 peer-checked:bg-blue-500"></span>
                  </label>
                </td>
              </tr>

              <tr class="" v-if="showDetails[index]">
                <td colspan="2" class="text-center">
                  <div class="m-4 space-x-14">
                    <!-- <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer permissions">
                      <div
                        class="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white before:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                      </div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Read</span>
                    </label> -->
                    <label class="relative inline-flex items-center w-10 h-6 rounded-full">
                      <input type="checkbox" class="sr-only peer opacity-0 w-0 h-0" value="index,show" v-model="form.selected">
                      <span
                        class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-1 before:left-1 before:rounded-full
                                before:bg-white before:duration-300 peer-checked:before:translate-x-4 peer-checked:bg-blue-500"></span>
                      <span class="relative  ml-12 text-sm font-medium text-gray-900 dark:text-gray-300">Read</span>
                    </label>
                    <label class="relative inline-flex items-center w-10 h-6 rounded-full">
                      <input type="checkbox" class="sr-only peer opacity-0 w-0 h-0" value="create" v-model="form.selected">
                      <span
                        class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-1 before:left-1 before:rounded-full
                                before:bg-white before:duration-300 peer-checked:before:translate-x-4 peer-checked:bg-blue-500"></span>
                      <span class="relative  ml-12 text-sm font-medium text-gray-900 dark:text-gray-300">Create</span>
                    </label>
                    <label class="relative inline-flex items-center w-10 h-6 rounded-full">
                      <input type="checkbox" class="sr-only peer opacity-0 w-0 h-0" value="update" v-model="form.selected">
                      <span
                        class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-4 before:h-4 before:bottom-1 before:left-1 before:rounded-full
                                before:bg-white before:duration-300 peer-checked:before:translate-x-4 peer-checked:bg-blue-500"></span>
                      <span class="relative  ml-12 text-sm font-medium text-gray-900 dark:text-gray-300">Update</span>
                    </label>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="Guardar">Guardar</button>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
const form = ref({
  name: "",
  permissions: [],
  selected: [] as any,
});
interface Item {
  name: string;
  detalles: string[];
}

const items: Item[] = [
  {
    name: 'Item 1',
    detalles: ['Detalle 1 del Item 1', 'Detalle 2 del Item 1']
  },
  {
    name: 'Item 2',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
  {
    name: 'Item 3',
    detalles: ['Detalle 1 del Item 1', 'Detalle 2 del Item 1']
  },
  {
    name: 'Item ',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
  {
    name: 'Item ',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
  {
    name: 'Item ',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
  {
    name: 'Item ',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
  {
    name: 'Item ',
    detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
  },
];
const showDetails = ref<boolean[]>(Array(items.length).fill(false));
const selectedItems = ref<boolean[][]>(Array(items.length).fill([]).map(() => []));

function toggleDetails(index: number) {
  showDetails.value[index] = !showDetails.value[index];
}
function Guardar() {
  console.log(form.value);
}
</script>

<!-- <script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    {
        id: "id1",
        name: "John Doe",
        email: "email@example.com"
    },
    {
        id: "id2",
        name: "Jone Doe",
        email: "email2@example.com"
    }
]);
const selected = ref([]);
const selectAll = ref(false);

function select() {
    selected.value = [];
    if (!selectAll.value) {
        for (let i in items.value) {
            selected.value.push(items.value[i].id);
        }
    }
}
</script>

<template>
    <div id="app">
        <div id="app">
            <div class="text-uppercase text-bold">id selected: {{ selected }}</div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <label class="form-checkbox">
                                <input type="checkbox" v-model="selectAll" @click="select">
                                <i class="form-icon"></i>
                            </label>
                        </th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in items">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox" :value="i.id" v-model="selected">
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{ i.id }}</td>
                        <td>{{ i.name }}</td>
                        <td>{{ i.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template> -->
<!-- <template>
  <div id="app">
    <div id="app">
      <div class="text-uppercase text-bold">id selected: {{ selected }}</div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <label class="form-checkbox">
                <input type="checkbox" :checked="allSelected" @click="select">
                <i class="form-icon"></i>
              </label>
            </th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in items" :key="i.id">
            <td>
              <label class="form-checkbox">
                <input type="checkbox" :value="i.id" v-model="selected">
                <i class="form-icon"></i>
              </label>
            </td>
            <td>{{ i.id }}</td>
            <td>{{ i.name }}</td>
            <td>{{ i.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const items = ref([
  {
    id: "id1",
    name: "John Doe",
    email: "email@example.com"
  },
  {
    id: "id2",
    name: "Jone Doe",
    email: "email2@example.com"
  }
]);
const selected = ref<any>([]);

const allSelected = computed(() => selected.value.length === items.value.length);

function select() {
  if (!allSelected.value) {
    selected.value = items.value.map((item) => item.id);
  } else {
    selected.value = [];
  }
}
</script> -->