<script lang="ts" setup>
import {useAuthStore} from "~/store/useAuthStore";
definePageMeta({
  layout: 'login',
  middleware: ['login']
})
interface PaginatedResponse<T> {
 data: T[];
 nextPageUrl?: string;
 previousPageUrl?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role:string;
  permission:string
}
const {data:users,error} = await useApiFetch<PaginatedResponse<User>>("/api/v1/users")
console.log(users?.value?.data)
</script>

<template>
  <div class="w-full bg-light-cyan text-black p-3  justify-center my-10">
    <div class="w-full flex justify-center my-5">
      Page: List Of Users
    </div>
    <div class="overflow-x-auto w-full mb-5">
      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Email
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Role
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Permision
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr class="odd:bg-gray-50 " v-for="(user, index) in users?.data" :key="index">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
              {{ user.name }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
              {{ user.email }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
              {{ user.role }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{{user.permission}}</td>
          </tr>

          
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
