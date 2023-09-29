<template>
  
  <XModal/>
    <div class="p-1 min-h-screen w-full bg-slate-400">
      <!-- <pre>{{auth.user}}</pre> -->
      <label for="">
        Name: <small> {{ auth.user?.name }}</small>
      </label>
      <label for="">
        Name: <small > {{ auth.user?.role }}</small>
      </label>
      
      <ul class="flex justify-center gap-4 underline py-2 items-center">
        <li>
          <NuxtLink to="/home">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">Register</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/auth">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/auth-only">List Users</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/guest-only">List Tenants</NuxtLink>
        </li>
        <li><button v-if="auth.isLoggedIn" @click="handleLogout" class="bg-light-cyan p-2 rounded-md  hover:bg-lime-400">Logout</button></li>
      </ul>
      <slot />
    </div>
  </template>
<script lang="ts" setup>
import {useAuthStore} from "~/store/useAuthStore";
 
const auth = useAuthStore();
 
async function handleLogout() {
  await auth.logout();
}
 
</script>