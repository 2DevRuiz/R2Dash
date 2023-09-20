<template>
      <form @submit.prevent="handleLogin">
    <label>
      Email
      <input v-model="form.email" type="email">
    </label>
    <label>
      Password
      <input v-model="form.password" type="password">
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
 


const auth = useAuthStore();
 
async function handleLogin() {
    if (auth.isLoggedIn) {
        return navigateTo("/home");
    }
  const {error} = await auth.login(form.value);
 
  if (!error.value) {
    return navigateTo("/home");
  }
  console.log(error);
    // await useApiFetch("/sanctum/csrf-cookie")

    // await useApiFetch("/login",{
    //     method:"POST",
    //     body:form.value,
    // })
    // const {data} = await useApiFetch("/api/user")
    // console.log(data.value)  
}
</script>