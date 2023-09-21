<script lang="ts" setup>
import {useAuthStore} from "~/store/useAuthStore";
definePageMeta({
    layout:'login'
})
const auth = useAuthStore();
async function handlelogout(){
  await auth.logout();
}

</script>

<template>
  <div>
    <button class="bg-lime-500 p-2 rounded-md m-5" type="button" @click="handlelogout">Logout</button>
    Page: home
  </div>
</template>
