<template>
    <BaseModal ref="PopBase" @_close="_cancel">
        <div class=" p-3 relative mx-auto my-auto rounded-xl shadow-lg bg- ">
            <div>
                <div class="text-center p-3 flex-auto justify-center leading-6">
                    <!-- icon  -->
                    <i :class="icon, txtClass" class=" text-6xl flex justify-center items-center spin-twice mx-auto " />
                    <!-- icon -->
                    <h2 class="text-2xl font-bold py-4">{{ title }}</h2>
                    <p class="text-lg text-gray-700 capitalize px-8 whitespace-pre-line">
                        <span v-html="message"></span>
                    </p>
                </div>
                <!-- <div class="p-3 mt-2 text-center space-x-4 w-full flex justify-center  md:block bg-red-200"> -->
                    <div class="flex justify-center items-center gap-3 w-full">
                    <!-- <button @click="_cancel"
                        class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                        {{ cancelButtonText }}
                    </button>
                    <button @click="_confirm"
                        class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600">
                        {{ okButtonText }}
                    </button> -->
                    <BaseButton label="Confirm" :bg-color="ConfirmType" @click="_confirm" >
                        <template #content>
                            <div class="text-xs">
                                ({{ (timer / 1000) }})
                             </div>
                        </template>
                    </BaseButton>
                    <BaseButton label="Cancel" v-if="ShowCancel" bg-color="secondary" @click="_cancel"  />
                </div>
            </div>
        </div>
    </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseModal from '@/components/ModalsComponents/BaseModal.vue';
import BaseButton from '@/components/FormsComponents/BaseButton.vue'
const props = defineProps({
    width: {
        type: String,
        default: 'sm'
    }
})
const PopBase: any = ref(null)
//start:functional Variable 
const title = ref('title')
const message = ref('message')
const icon = ref('fa-thin fa-circle-info')
const okButtonText = ref('Ok')
const cancelButtonText = ref('Cancel')
const ConfirmType = ref('')
const ShowCancel = ref(true)
const timer = ref(8000)
let resolvePromise: any = undefined
//end:functional Variable 
// Start:Function open modal dialog
const show = (opt: any = {}) => {
    title.value = opt.title;
    message.value = opt.content;
    if (opt.okButtonText) {
        okButtonText.value = opt.okButton;
    }
    if (opt.cancelButton) {
        cancelButtonText.value = opt.cancelButton;
    }
    if (opt.icon) {
        icon.value = opt.icon
        // console.log(icon.value)
    }
    if (opt.type) {
        ConfirmType.value = opt.type
    }
    if (opt.hasOwnProperty('showCancel')) {
        ShowCancel.value = opt.showCancel
    }
    if(opt.hasOwnProperty('duration')){
        // timer.value = opt.duration
        console.log(timer.value)
        close(opt.duration)
    }
    PopBase.value?.open({
        width: props.width,
        type: ConfirmType.value
    })
    return new Promise((resolve) => {
        resolvePromise = resolve
        // rejectPromise = reject
    })
}
//End: Function open modal dialog
const _confirm = () => {
    resolvePromise(true)
    PopBase.value.close()
}
const _cancel = (state: any) => {
    console.log(state)
    resolvePromise(false)
    PopBase.value.close()
}

const txtClass = computed(() => {
    switch (ConfirmType.value) {
        case 'primary':
            return 'text-blue-300 ';
        case 'secondary':
            return 'text-gray-300 ';
        case 'info':
            return 'text-cyan-300 ';
        case 'success':
            return 'text-green-600 ';
        case 'danger':
            return 'text-red-300 ';
        case 'warning':
            return 'text-amber-200 ';
        default:
            return 'text-indigo-300 ';
    }
})

function close(total_time: number) {
    // setTimeout(function() {
    //     console.log("Temporizador finalizado.");
    //     _confirm() // Llamar a la función final
    // }, timer.value );
   timer.value =  total_time;

    // Mostrar el tiempo inicial
    console.log("Temporizador iniciado. Tiempo restante: " + timer.value + " segundos.");

    // Llamar a la función para actualizar el tiempo restante cada segundo
    var intervalID = setInterval(function() {
        // Reducir el tiempo restante en un segundo
        timer.value = timer.value -1000;

        // Mostrar el tiempo restante
        console.log("Tiempo restante: " + timer.value + " segundos.");

        // Verificar si el tiempo restante ha llegado a cero
        if (timer.value <= 0) {
            // Detener el temporizador
            clearInterval(intervalID);

            // Llamar a la función final
            console.log("Temporizador finalizado.");
            _confirm()
        }
    },  total_time);
}
defineExpose({ show })
</script>
<style scoped>
@keyframes spin-twice {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
        /* 360deg * 2 para dos rotaciones completas */
    }
}

.spin-twice {
    /* Aplicar la utilidad animate-spin de Tailwind */
    animation: spin-twice 1s linear forwards;
    /* Duración de la animación ajustada */
}
</style>