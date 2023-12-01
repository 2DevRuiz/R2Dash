<template>
    <div class="p-8">
        <!-- Action Tables Header -->
        <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">

            </div>
            <SearchForms @search="handleSearch" />
        </div>
        <!-- Action Tables Header -->
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
                    <tr v-for="(user, index) in filteredItems" :key="index">
                        <td class="px-5 py-5 border-b border-gray-200 dark:border-gray-500  text-sm">
                            <div class="flex items-center">
                                <div class="ml-3">
                                    <p class=" whitespace-no-wrap">
                                        {{ user.maidenName }}
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
                                {{ user.age }}
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
</template>
<script lang="ts" setup>
const searchFilter = ref('');
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
        required: true
    }
})
const filteredItems = computed(() => {
    //return props.items.filter((item: any) => item.maidenName === 'Cole')
    if (searchFilter.value !== '') {
        return props.items.filter((item: any) => item.maidenName.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()) || item.email.toLocaleLowerCase().includes(searchFilter.value.toLocaleLowerCase()));
    }
    return props.items
})
const handleSearch = (search: any) => {
    searchFilter.value = search
}
const handleEditUserModal = (user: any) => {

}
const handleDeleteUserModal = (user: any) => {

}
</script>