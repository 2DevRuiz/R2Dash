<script lang="ts" setup>
definePageMeta({
  layout: 'login',
  middleware: ['login']
})
interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string,
    last: string,
    next?: string;
    previous?: string;
  };
  meta: {
    current_page: number
  }
}
interface Tenant {
  uuid: string;
  name: string;
  domain: string;
  description: string;
  // permission:string
}
const { data: tenants } = await useApiFetch<PaginatedResponse<Tenant>>('/api/v1/tenants')



console.log(tenants.value?.data)
</script>

<template>
  <div class="w-full bg-light-cyan text-black p-3  justify-center my-10">
    <div class="w-full flex justify-center my-5">
      Page: List Of Tenants
    </div>
    <div class="w-full  bg-red-500 ">
      <button class="bg-blue-500 mb-5 text-white p-2 rounded-md float-right">Add Tenant</button>
    </div>
    <div class="overflow-x-auto w-full mb-5 flex">

      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Domain
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <!-- <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Permision
            </th> -->
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr class="odd:bg-gray-50 " v-for="(tenant, index) in tenants?.data" :key="index">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              {{ tenant.name }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
              {{ tenant.domain }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
              {{ tenant.description }}
            </td>
            <!-- <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{user.permission}}</td> -->
          </tr>


        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
