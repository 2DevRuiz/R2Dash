<template>
    <div class="flex flex-col flex-auto flex-shrink-0 antialiased mx-5 mt-5">
        <CardData>
            <template #title>
                <div>List Users</div>
            </template>
            <template #tools>
                <div class="float-right">
                    <CommonButtons :buttonText="'Add'" :icon="'circle-plus'" :typeB="'primary'"
                        @click="handleAddUserModal" />
                </div>
            </template>
            <!-- Table -->
            <div class="p-8">
                <!-- Action Tables Header -->
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row  mb-1 sm:mb-0">
                        <!-- select count rows -->
                        <div class="relative">
                            <select @click="isDivRotated = !isDivRotated" @blur="isDivRotated = !isDivRotated"
                                class="h-full rounded-l border block appearance-none w-full bg-white dark:bg-gray-600 border-gray-400 text-gray-700 dark:text-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <div :class="{
                                'rotate-180 duration-100': isDivRotated,
                                'rotate-0 duration-200': !isDivRotated
                            }"
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                <font-awesome-icon :icon="['fas', 'chevron-down']" size="2xs"
                                    class="fill-current h-4 w-4" />
                            </div>
                        </div>
                        <!-- select status -->
                        <div class="relative">
                            <select
                                class=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white dark:bg-gray-600 border-gray-400 text-gray-700 dark:text-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                <font-awesome-icon :icon="['fas', 'chevron-down']" size="2xs"
                                    class="fill-current h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <!-- search -->
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                                class="text-base fill-current text-gray-500 dark:text-gray-200" />
                        </span>
                        <input placeholder="Search"
                            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white dark:bg-gray-600 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                    <!--end Search  -->
                </div>
                <!-- Action Tables Header -->

                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal text-gray-500 dark:text-gray-400">
                            <thead class=" bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                        UserName
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                        Rol
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-600  text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800">
                                <tr v-for="(user, index) in users?.data" :key="index">
                                    <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                                        <div class="flex items-center">
                                            <div class="ml-3">
                                                <p class=" whitespace-no-wrap">
                                                    {{ user.name }}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                                        <p class=" whitespace-no-wrap">
                                            {{ user.email }}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                                        <p class=" whitespace-no-wrap">
                                            {{ user.role }}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                                        <div class="flex gap-2">
                                            <CommonButtons :buttonText="''" :icon="'pencil-alt'" :typeB="'info'"
                                                @click="handleEditUserModal(user)" />
                                            <CommonButtons :buttonText="''" :icon="'trash'" :typeB="'danger'"
                                                @click="handleDeleteUserModal(user)" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CardData>
    </div>
</template>
<script lang="ts" setup>
onMounted(() => {
    
})

function handleEditUserModal(user:any) {
    
}
function handleDeleteUserModal(user:any) {
    
}
function handleCreateUserModal() {
    
}
</script>