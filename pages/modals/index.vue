<template>
    <button @click="isOpen = true">Show modal</button>

    <Modal :open="isOpen" @close="isOpen = !isOpen">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptates illum corrupti doloremque consectetur aspernatur exercitationem
            rerum quis rem quaerat sit voluptas, amet doloribus repellat eum.
            Perferendis cupiditate necessitatibus odit?
        </p>
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