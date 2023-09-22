import {defineStore} from "pinia";
import {useApiFetch} from "~/composables/useApiFetch";

type User = {
  id: number;
  name: string;
  email: string;
  roles:Array<{
    name:string;
  }>;
}

type Credentials = {
  email: string;
  password: string;
}

type RegistrationInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role:string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = computed(() => !!user.value)

  async function logout() {
    await useApiFetch("/api/logout", {method: "POST"});
    user.value = null;
    const token = useCookie('XSRF-TOKEN')
    token.value = null
    navigateTo("/auth");
  }
 
  async function fetchUser() {
    const {data, error} = await useApiFetch("/api/v1/AutUser");
    console.log(data);
    user.value = data.value as User;
  }

  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/api/login", {
      method: "POST",
      body: credentials,
    });
    await fetchUser();//recordar descomentar

    return login;
  }

  async function register(info: RegistrationInfo) {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/api/v1/users", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return register;
  }

  return {user, login, isLoggedIn, fetchUser, logout, register}
})