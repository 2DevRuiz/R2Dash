<script lang="ts" setup>
import {useAuthStore} from "~/store/useAuthStore";
definePageMeta({
    layout:'login'
})

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
});

const auth = useAuthStore();

async function handleRegister() {
  const {error} = await auth.register(form.value);
  if (!error.value) {
    navigateTo("/home");
  }
  else{
    console.log(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleRegister">
    <label class="m-5 p-3">
      Name
      <input v-model="form.name" type="text" class="my-5">
    </label>
    <label class="m-5 p-3">
      Email
      <input v-model="form.email" type="email" class="my-5">
    </label>
    <label class="m-5 p-3">
      Password
      <input v-model="form.password" type="password" class="my-5">
    </label>
    <label class="m-5 p-3">
      Password confirmation
      <input v-model="form.password_confirmation" type="password" class="my-5">
    </label>

    <button class="bg-lime-50 p-2 rounded-md m-5">Register</button>
  </form>
</template>

<style scoped></style>