<template>
    <div class="p-20 min-h-screen w-full bg-slate-400">
      <button v-if="auth.isLoggedIn" @click="handleLogout" class="bg-light-cyan p-2 rounded-md my-2 hover:bg-lime-400">Logout</button>
   
      <pre>{{ auth.user }}</pre>
   
      <ul class="flex justify-center gap-4 underline">
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
          <NuxtLink to="/auth-only">Auth only</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/guest-only">Guest only</NuxtLink>
        </li>
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