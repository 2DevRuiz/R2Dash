
import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
  email:string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    errors: false,
    status:false,
    userInfo:{},
    user:localStorage.getItem('username') || {},
    userAvatar:localStorage.getItem('userAvatar') || '',
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // test for token value
      const username = 'Administratore';
      const { data:auth, status,error,pending}: any = await useFetch('http://192.168.31.14:8000/api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json' },
        body: {
          email,
          password,

        },
      });
      const {data:tok,error:error_token} = await useFetch('http://192.168.31.14:8000/api/v1/token', {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json' },
        body: {
          username:username,
          email:email,
          password:password,
        },
      });
      this.loading = pending.value;
      console.log(username)
      console.log(error_token.value)
      // console.log(tok.value.data.token)
      if (!auth || (error && error.value !== null)) {
        this.errors = error.value;
        this.authenticated = false;
        this.status = false
      }
      else{
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value =tok.value.data.token; // set token to cookie
        localStorage.setItem('userAvatar', auth.value.image);
        localStorage.setItem('username', auth.value.username);
        this.authenticated = true; // set authenticated  state value to true
        this.loading = false;
        this.userInfo = {
          username:auth.value.username,
          avatar:auth.value.image
        }
        console.log(auth.value)
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      this.loading = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      this.loading = false;
      this.user = {};
    },
  },
});