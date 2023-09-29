<template>
      <form @submit.prevent="handleLogin">
    <label>
      Email
      <input v-model="form2.email" type="email">
    </label>
    <label>
      Password
      <input v-model="form2.password" type="password">
    </label>
 
    <button class="bg-lime-50 p-2 rounded-md m-5">Login</button>
  </form>
</template>
<script lang="ts" setup>
import {useAuthStore} from "~/store/useAuthStore";
definePageMeta({
    layout:'login'
})
 
const form = ref({
  email: "developer@dev.com",
  password: "password"
});
 
const form2 = ref({
  email: "admin@softswitch.local",
  password: "Adm1n@2023!!"
});
 

const auth = useAuthStore();
 
async function handleLogin() {
    if (auth.isLoggedIn) {
        return navigateTo("/home");
    }
  const {error} = await auth.login(form2.value);
  if (!error.value) {
    return navigateTo("/home");
  }
  console.log(error.value);
}
</script>
