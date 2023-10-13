<template>
     <!--<transition
     enter-class=" translate-y-0 opacity-0" 
     enter-active-class="transform translate-y-100 opacity-100"
     leave-class=" transform translate-y-0 opacity-100"
     leave-active-class="transform translate-y-28 opacity-0"> -->
     <transition  
        enter-active-class="transition-transform duration-300 ease-in-out"
        enter-from-class="transform opacity-0 translate-y-28"
        enter-to-class="opacity-100"
        leave-active-class="transition-color duration-300"
        leave-from-class="opacity-100 "
        leave-to-class=" opacity-0 translate-y-28"
    >
        <div v-if="showConfirm"
            class=" w-[60rem] z-10 bg-gray-900 border border-gray-700 border-opacity-50 rounded-md py-4 px-0">
            <div class="text-2xl py-3 px-6 border-b border-b-gray-800 mb-5">{{ alertConfirmMessage }}</div>
            <div class="flex items-center py-0 px-6 space-x-[1.2rem]">
                <common-button :buttonText="trueBtnText" :primary="true" @click="handleUserInput(true)">
                    <font-awesome-icon :icon="['fas', 'check']" />
                </common-button>
                <common-button v-if="modalType === 'confirm'" :buttonText="falseBtnText" @click="handleUserInput(false)">
                    <font-awesome-icon :icon="['fas', 'x']" />
                </common-button>
            </div>
        </div>
    </transition>
</template>
<script lang="ts" setup>
const showConfirm = ref(false);
let resolvePromise: (value: PromiseLike<boolean> | boolean) => void;
const modalType = ref<"confirm" | "alert">("confirm");
const alertConfirmMessage = ref<null | string>(null);
const trueBtnText = computed(() =>
    modalType.value === "confirm" ? "Yes" : "Okay"
);
const falseBtnText = ref("No");
function openModal(message: string, alertModal: boolean) {
    alertConfirmMessage.value = message;
    alertModal ? (modalType.value = "alert") : (modalType.value = "confirm");

    showConfirm.value = true;

    return new Promise((resolve) => {
        resolvePromise = resolve;
    });
}

function handleUserInput(value: boolean) {
    if (!resolvePromise) return;
    
    resolvePromise(value);

    showConfirm.value = false;
}
defineExpose({ openModal });
</script>