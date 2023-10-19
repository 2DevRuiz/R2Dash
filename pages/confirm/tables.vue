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
                                    <input type="checkbox" class="mr-2">
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <template v-for="(item,index) in items" :key="index">
                                <tr @click="toggleDetails(index)">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ item.nombre }}</td>
                                </tr>
                                <tr v-if="showDetails[index]">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

</template>
  
<script setup lang="ts">
import { ref } from 'vue';

interface Item {
    nombre: string;
    detalles: string[];
}

const items: Item[] = [
    {
        nombre: 'Item 1',
        detalles: ['Detalle 1 del Item 1', 'Detalle 2 del Item 1']
    },
    {
        nombre: 'Item 2',
        detalles: ['Detalle 1 del Item 2', 'Detalle 2 del Item 2']
    },
    // Agrega más elementos y detalles según tus necesidades
];
const showDetails = ref<boolean[]>(Array(items.length).fill(false));
const selectedItems = ref<boolean[][]>(Array(items.length).fill([]).map(() => []));

function toggleDetails(index: number) {
    showDetails.value[index] = !showDetails.value[index];
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