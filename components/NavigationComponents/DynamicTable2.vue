<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        #
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Items
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Quantity
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Amount
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Total
                    </th>
                    <!-- <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Role
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Salary
        </th> -->
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 text-center">
                <tr v-if="items.length > 0" v-for="(item, index) in items" :key="index" class="">
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{ index + 1 }}</td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="text" v-model="item.name"
                            class="w-full bg-gray-100 p-2 outline-none rounded-md text-gray-600 text-sm" />
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="number" v-model="item.quantity"
                            class="w-full bg-gray-100 p-2 outline-none rounded-md text-gray-600 text-sm" />
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="number" v-model="item.amount"
                            class="w-full bg-gray-100 p-2 outline-none rounded-md text-gray-600 text-sm" />
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <input type="number" v-model="item.total"
                            class="w-full bg-gray-100 p-2 outline-none rounded-md text-gray-600 text-sm" />
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <button class="bg-light-cyan p-2 rounded-md" type="button" @click="removeItem(index)">
                            Remove
                        </button>
                        <!-- <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a> -->
                    </td>
                </tr>

                <!-- <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr> -->
            </tbody>
        </table>
    </div>
    <!-- <table class="table-auto w-full">
        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
            <th>
                <tr>
                    <th class="p-3 whitespace-nowrap w-7">#</th>
                    <th class="p-3 whitespace-nowrap w-7">Items</th>
                    <th class="p-3 whitespace-nowrap w-7">Quantity</th>
                    <th class="p-3 whitespace-nowrap w-7">Amount</th>
                    <th class="p-3 whitespace-nowrap w-7">Total</th>
                    <th class="p-3 whitespace-nowrap w-7">Action</th>
                </tr>
            </th>
        </thead>
        <tbody>
            <tr v-if="items.length > 0" v-for="(item, index) in items" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                    <input type="text" v-model="item.name" />
                </td>
                <td>
                    <input type="number" v-model="item.quantity" />
                </td>
                <td>
                    <input type="number" v-model="item.amount" />
                </td>
                <td><input type="number" v-model="item.total" /></td>
                <td>
                    <button type="button" @click="removeItem">
                        Remove
                    </button>
                </td>
            </tr>
        </tbody>
    </table> -->
    <div class="flex justify-center my-6">
        <button type="button" class="bg-light-cyan hover:bg-blue-600 p-2 rounded-lg" @click="AddItem">Add new row</button>
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:items'])
interface iItems {
    name: string;
    quantity: number;
    amount: number;
    total: number;
}
const selected = ref(0)
const items = ref<iItems[]>([
    {
        name: '',
        quantity: 0,
        amount: 0,
        total: 0
    }
])
const AddItem = () => {
    items.value.push({
        name: '',
        quantity: 0,
        amount: 0,
        total: 0
    })
    // selected.value++;
}
const removeItem = (index: number) => {
    items.value.splice(index, 1)
}
// watch: {
//     'items': {
//       handler (newValue, oldValue) {
//         newValue.forEach((item) => {
//           item.total = item.quantity * item.amount
//         })
//       },
//       deep: true
//     }
//   }
watch(items, (newVal, oldVal) => {
    emit('update:items',items.value)
    // console.log("update")
}, {deep: true})
watch(selected, ( newValue, oldValue ) => {
    console.log("hello")
},)
</script>