<template>
    <div
        class="flex h-screen w-full justify-center items-center text-center bg-gray-900 bg-cover bg-center bg-no-repeat bg-Login-image">
        <div
            class="relative bg-opacity-0 animate-fullBorder rounded-xl bg-white bg-[length:300%_400%] p-0.5 bg-gradient-to-r from-[#00BBE1] via-green-500 to-[#FDB618] mt-10 overflow-hidden">

            <!-- <div
                class="rounded-xl bg-gray-600 bg-opacity-50 px-16 py-10 shadow-lg backdrop-filter backdrop-blur-2xl md:backdrop-filter md:backdrop-blur-sm max-sm:px-8 "> -->
            <div class="rounded-xl bg-gray-600 bg-opacity-100 px-16 py-10 shadow-lg  max-sm:px-8 ">
                <div class="mb-8 flex flex-col items-center">
                    <!-- <img src="../assets/images/logos/R2A_WB.png" width="350" alt="" srcset="" /> -->
                    <div class="flex items-center justify-start pl-3 w-14 h-14 00 md:justify-center md:w-64 ">
                        <img class=" md:hidden w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden md:object-cover"
                            src="~/assets/images/logos/logo_icon/256x256.png" />
                        <img class=" h-16 mr-2 overflow-hidden md:object-cover md:block hidden"
                            src="~/assets/images/logos/R2A_WB.png" />
                        <!-- <span class="hidden md:block">Ring2All</span> -->
                    </div>
                    <!-- <h1 class="mb-2 text-2xl">Ring2All</h1> -->
                    <span class="text-gray-300">Enter Login Details</span>
                </div>
                <form class="mt-12" action="#" autocomplete="off">

                    <div class="relative mb-6">
                        <input id="txt_username" name="txt_username" type="text" v-model="user.email"
                            class="peer/username p-2 pe-10 h-10 mt-1 w-full rounded-md border-b-2 bg-[#BDBCBD] bg-opacity-50 border-gray-300 text-gray-50 placeholder-transparent focus:outline-none focus:border-[#00BBE1] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                            placeholder="" />
                        <label for="txt_username"
                            class="absolute left-2 -top-4  text-white text-sm transition-all peer-placeholder-shown/username:text-base peer-placeholder-shown/username:text-white peer-placeholder-shown/username:top-3 peer-focus/username:-top-4 peer-focus/username:text-[#00BBE1] peer-focus/username:text-sm">Username</label>
                        <span
                            class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/username:text-[#00BBE1]">
                            <font-awesome-icon :icon="['fas', 'user']" class="text-lg  " />
                        </span>
                    </div>
                    <div class="relative mb-6">
                        <input id="txt_password" name="txt_password" :type="pfield" v-model="user.password"
                            class="  peer/password p-2 h-10 mt-1 w-full rounded-md border-b-2 bg-[#BDBCBD] bg-opacity-50 border-gray-300 text-gray-50 placeholder-transparent focus:outline-none focus:border-[#00BBE1] "
                            placeholder="" required />
                        <label for="txt_password"
                            class="absolute left-2 -top-4  text-white text-sm transition-all peer-placeholder-shown/password:text-base peer-placeholder-shown/password:text-white peer-placeholder-shown/password:top-3 peer-focus/password:-top-4 peer-focus/password:text-[#00BBE1] peer-focus/password:text-sm">Password</label>
                        <span
                            class=" cursor-pointer absolute inset-y-0 end-0 grid w-10 place-content-center align-middle text-gray-300 peer-focus/password:text-[#00BBE1] "
                            @click="change">
                            <font-awesome-icon :icon="['fas', icon]" class="text-lg  hover:text-sky-600" />
                        </span>
                    </div>
                    <div class="relative">
                        <button type="button" @click="login()"
                            class="rounded-3xl px-10 py-2 border-2 border-[#00BBE1] text-white shadow-xl backdrop-blur-md bg-[#00BBE1] hover:bg-gradient-to-l hover:from-[#FDB618] hover:to-[#00BBE1] hover:border-2 hover:border-r-[#FDB618] hover:border-t-[#FDB618] hover:border-x-[#00BBE1]">
                            Login
                        </button>
                    </div>
                </form>
                <!-- <ProgressBar v-if="showProgresBar" /> -->
            </div>
            <div class="absolute inset-x-0 w-11/12 rounded-xl  mt-[-1.125rem] ml-5" v-if="showProgresBar">
                <ProgressBar v-if="showProgresBar" @loaded="showBarState" />
            </div>
        </div>
    </div>
    <ModalErrorIcon v-if="ErrorShow" @modalState="modalStateChange" :title="errorProps.title"
        :content="errorProps.content" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
definePageMeta({
    layout: 'auth'
});
const user = ref({
    email: '',
    password: '',
    username:''
});
const errorProps = ref({
    title: '',
    content: '',
    buttonCancelTitle: '',
    icon: ''
})
// const showError = ref(false);
const ErrorShow = ref(false);
const showProgresBar = ref(false);
let icon = ref('eye');
let pfield = ref("password");
const change = () => {
    pfield.value = pfield.value === "password" ? "text" : "password"
    icon.value = pfield.value === "password" ? 'eye' : 'eye-slash'
    //   colortext.value = pfield.value === "password" ? 'text-white' : 'text-sky-500'
};
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated, loading, errors } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

// const user = ref({
//   username: 'kminchelle', 
//   password: '0lelplR',
// });
// if (loading.value) {
//     console.log("loading.value")
// }
// console.log(errors)
// if(){

// }
const router = useRouter();
const modalStateChange = (state: boolean) => {
    ErrorShow.value = state
}
const showBarState = (state: boolean) => {
    // console.log(state)
    showProgresBar.value = state
}

const login = async () => {
    // if (user.value.username && user.value.password) {
    //     console.log("LLeno")
    // } else {
    //     console.log('Empty')
    // }
    await authenticateUser(user.value); // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    // if(errors && errors.value !== null){
    //     console.log(errors.value.data.message )
    // }

    // if (status.value) {
    //     console.log("loading.....")
    // }
    // else {
    if (!authenticated.value) {
        user.value.username = '';
        user.value.password = '';
        ErrorShow.value = !ErrorShow.value;
        errorProps.value.title = "Invalid credentials";
        errorProps.value.content = "Please check the credentials you have entered";

        console.log("Credenciales Invalidas")
    }
    else {
        showProgresBar.value = true
        watch(showProgresBar, () => {
            router.push('/');
        })
        // router.push('/');
    }
    // }

};
</script>