<template>
    <Modal :open="showModal" @close="close">
        <template v-slot:modal-title="{ close }">
            <h5>Seleccione los agentes</h5>
        </template>
        <template v-slot:modal-body>
            <div class="flex items-center flex-grow">
                <div class="container mx-auto">
                    <div class="flex flex-row">
                        <div class="w-full md:w-1/2 border-right-divider">
                            <div class="flex flex-row">
                                <div class="w-full">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
</template>
<script lang="ts" setup>
import Modal from "@/components/BoostrapModal/Modal.vue";
const { showModal } = defineProps({
    showModal: {
        type: Boolean,
        default: false,
        required: true
    }
})
const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}
console.log(showModal)
</script>