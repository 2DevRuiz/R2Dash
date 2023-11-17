<template>
    <div class="flex justify-center items-center h-screen w-full">
        <button @click="isOpen = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Show
            modal</button>

    </div>

    <Modal :open="isOpen" @close="isOpen = !isOpen">
        <template v-slot:header>
            <div class="text-gray-900 text-xl lg:text-xl font-semibold dark:text-white">
                Modal Title
            </div>
        </template>
        <template v-slot:body>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                voluptates illum corrupti doloremque consectetur aspernatur exercitationem
                rerum quis rem quaerat sit voluptas, amet doloribus repellat eum.
                Perferendis cupiditate necessitatibus odit?
            </p>
        </template>
        <template v-slot:footer>
            <button type="button" @click=""
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">Close</button>
            <button type="button" @click=""
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">Close</button>
        </template>
    </Modal>
</template>
  
<script lang="ts">
import { ref } from "vue";
import Modal from "@/components/BoostrapModal/Modal.vue";

export default {
    components: { Modal },
    setup() {
        const isOpen = ref(false);

        return { isOpen };
    },
};
</script>