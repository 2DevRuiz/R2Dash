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
            <DataTables :items="users"/>
        </CardData>
    </div>
</template>
<script lang="ts" setup>
import IUser from '~/interface/IUser';
import UserService from '~/store/useUser';

const cService = new UserService();
const users = cService.getUsers();
const paginateUser = ref<IUser[]>([])
onMounted(async() => {
    await cService.fetchAll();
    console.log(users.value.filter((user:any) => user.maidenName === 'Cole'))
})

function handleEditUserModal(user:any) {
    
}
function handleDeleteUserModal(user:any) {
    
}
function handleAddUserModal() {
    
}
</script>