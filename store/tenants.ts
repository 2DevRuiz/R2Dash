
import { defineStore } from 'pinia';

interface UseTenant {
  name: string;
  description: string;
  domain: string;
  Tdefault:boolean;
  token:string
}

export const useTenant = defineStore('tenant', {
  state: () => ({
    loading: false,
    errors: false,
    status:false,
    userInfo:{},
    user:localStorage.getItem('username') || {},
    userAvatar:localStorage.getItem('userAvatar') || '',
  }),
  actions: {
    async getTenants({ name, domain,description,Tdefault,token }: UseTenant) {
      // useFetch from nuxt 3
      const { data:tenants, status,error,pending}: any = await useFetch('http://softswitch.main:8000/api/v1/tenants', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Accept':'application/json','Authorization': 'Bearer '+token},
        // body: {
        //   // name,
        //   // domain,
        //   // description,
        //   // Tdefault,
        // },
      });

      console.log(tenants.value.data[0])
      // console.log(status.value)
      // console.log(error.value)
      // console.log(pending.value)
      // console.log(data.value)
      // console.log(data.value)
      console.log(token)


      console.log("----------------------------")
      console.log(name)
      console.log(domain)
      console.log(description)
      console.log()
      console.log()
      // this.loading = pending.value;
      // // console.log(status.value)
      // if (!data || (error && error.value !== null)) {
      //   this.errors = error.value;
      //   // this.authenticated = false;
      //   this.status = false
      // }
      // else{
      //   const token = useCookie('token'); // useCookie new hook in nuxt 3
      //   token.value = data?.value?.token; // set token to cookie
      //   localStorage.setItem('userAvatar', data.value.image);
      //   localStorage.setItem('username', data.value.username);
      //   // this.authenticated = true; // set authenticated  state value to true
      //   this.loading = false;
      //   this.userInfo = {
      //     username:data.value.username,
      //     avatar:data.value.image
      //   }
      //   console.log(data.value)
      // }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      // this.authenticated = false; // set authenticated  state value to false
      this.loading = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      this.loading = false;
      this.user = {};
    },
  },
});