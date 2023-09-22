<template>
    <div class="bg-white p-4 rounded-2xl felx flex-col gap-6">
        <h2 class="font-bold text-2xl">This is a modal window!</h2>
        <p>{{ text }}</p>
        <div class="w-full flex items-center justify-center">
            <!-- <div class="w-5 flex items-center justify-center bg-red-500 rounded-full text-white "> -->
                <button type="button" @click="store.closeModal" class="w-5 rounded-full bg-light-cyan p-0 text-white flex justify-center hover:bg-blue-500 hover:text-black">X</button>
                <!-- X -->
            <!-- </div> -->

        </div>
    </div>
</template>
<script setup lang="ts">
import useModalStore from "~/store/useModalstore";

const store = useModalStore();
defineProps<{ text: string }>();
</script>