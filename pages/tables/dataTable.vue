<template>
    <div class="flex flex-col flex-auto flex-shrink-0 antialiased mx-5 mt-5">
        <CardData>
            <template #title>
                <div>List Users</div>
            </template>
            <template #tools>
                gg
            </template>
            <DataTables2 :fields="headerTable" :items="users">
                <template #cell(action)="{ value, item }">
                    <div class="flex gap-2 items-center">
                        <CommonButtons :button-text="''" :icon="'pencil'"></CommonButtons>
                        <CommonButtons :button-text="''" :type-b="'danger'" :icon="'trash'"></CommonButtons>
                    </div>

                </template>
            </DataTables2>
            <div class="w-full mx-auto flex-1 relative flex items-center justify-center inset-0 bg-slate-300">
               <Pagination/>
            </div>
            <template #footer>
                <div class="">

                </div>
            </template>
        </CardData>
    </div>
</template>
<script lang="ts" setup>
import IUser from '~/interface/IUser';
import UserService from '~/store/useUser';

const cService = new UserService();
const users = cService.getUsers();
const headerTable = ref([{ key: 'maidenName', label: 'Username',ordered: true }, { key: 'email', label: 'Email' }, { key: 'age', label: 'Rol' }, { key: 'action', label: 'Action' }])
const paginateUser = ref<IUser[]>([])
onMounted(async () => {
    await cService.fetchAll();
    // console.log(users.value.filter((user: any) => user.maidenName === 'Cole'))
})

function handleEditUserModal(user: any) {

}
function handleDeleteUserModal(user: any) {

}
function handleAddUserModal() {

}
</script>