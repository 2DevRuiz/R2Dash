<template>
    <div class="w-full h-screen bg-emerald-200 flex justify-center items-center space-x-2">
        <button
            class="bg-gray-300 hover:bg-gray-600 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
            @click="ToogleModalMulple">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
        </button>
        <button
            class="bg-gray-300 hover:bg-gray-600 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
            @click="ToogleModalMultiple">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>close</span>
        </button>
    </div>
    <MultipleModal :source="'queue'" :showModal="showMultiple" @close="v => showMultiple = v" :key="'queue'">
    </MultipleModal>
</template>
<script setup>
const showMultiple = ref(false)
const ToogleModalMulple = () => {
    showMultiple.value = true;
    // console.log(showMultiple.value)
    // console.log("message")
}
const ToogleModalMultiple = () => {
    showMultiple.value = false;
    // console.log(showMultiple.value)
    // console.log("message")
}
</script>