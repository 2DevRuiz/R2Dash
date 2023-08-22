<template>
    <div class="flex h-screen w-full justify-center items-center text-center bg-gray-900 bg-cover bg-center bg-no-repeat"
        style="background-image:url('https://source.unsplash.com/photo-Dkn8-zPIbwo')">
        <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div class="mb-8 flex flex-col items-center">
                <!-- <img src="../assets/images/logos/R2A_WB.png" width="350" alt="" srcset="" /> -->
                <Logos />
                <!-- <h1 class="mb-2 text-2xl">Ring2All</h1> -->
                <span class="text-gray-300">Enter Login Details</span>
            </div>
            <form class="mt-12" action="#" autocomplete="off">

                <div class="relative mb-6">
                    <input id="txt_username" name="txt_username" type="text"
                        class="peer p-2 h-10 mt-1 w-full rounded-md border-b-2 bg-[#BDBCBD] bg-opacity-50 border-gray-300 text-gray-50 placeholder-transparent focus:outline-none focus:border-[#00BBE1] "
                        placeholder="Username" />
                    <label for="txt_username"
                        class="absolute left-2 -top-4  text-[#00BBE1] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#00BBE1] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#00BBE1] peer-focus:text-sm">Username</label>
                </div>
                <div class="relative mb-6">
                    <input id="txt_password" name="txt_password" type="password"
                        class="peer p-2 h-10 mt-1 w-full rounded-md border-b-2 bg-[#BDBCBD] bg-opacity-50 border-gray-300 text-gray-50 placeholder-transparent focus:outline-none focus:border-[#00BBE1] "
                        placeholder="Password" />
                    <label for="txt_password"
                        class="absolute left-2 -top-4  text-[#00BBE1] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#00BBE1] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[#00BBE1] peer-focus:text-sm">Password</label>
                </div>
                <div class="relative">
                    <button type="button" class="rounded-3xl px-10 py-2 border-2 border-[#00BBE1] text-white shadow-xl backdrop-blur-md bg-[#00BBE1] hover:bg-gradient-to-l hover:from-[#FDB618] hover:to-[#00BBE1] hover:border-2 hover:border-r-[#FDB618] hover:border-t-[#FDB618] hover:border-x-[#00BBE1]">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
})
</script>