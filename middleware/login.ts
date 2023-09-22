import {useAuthStore} from "~/store/useAuthStore";
 
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
 console.log(auth.isLoggedIn)
  if (!auth.isLoggedIn) {
    return navigateTo("/auth", {replace: true});
  }
})