<template>
    <BaseModal ref="PopBase" @close="_cancel">
        <div
            class="tw-w-full tw-max-w-lg tw-p-3 tw-relative tw-mx-auto tw-my-auto tw-rounded-xl tw-shadow-lg tw-bg-white">
            <div>
                <div class="tw-text-center p-3 tw-flex-auto tw-justify-center tw-leading-6">
                    <!-- icon  -->
                    <i :class="icon"
                        class=" tw-text-6xl tw-flex tw-justify-center tw-items-center tw-text-danger-500  tw-mx-auto " />
                    <!-- icon -->
                    <h2 class="tw-text-2xl tw-font-bold tw-py-4">{{ title }}</h2>
                    <p class="tw-text-lg tw-text-gray-500 tw-px-8 tw-whitespace-pre-line">
                        <span v-html="message"></span>
                    </p>
                </div>
                <div class="tw-p-3 tw-mt-2 tw-text-center tw-space-x-4 md:tw-block">
                    <button @click="_cancel"
                        class="tw-mb-2 md:tw-mb-0 tw-bg-white px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-border tw-text-gray-600 tw-rounded-md hover:tw-shadow-lg hover:tw-bg-gray-100">
                        {{ cancelButtonText }}
                    </button>
                    <button @click="_confirm"
                        class="tw-mb-2 md:tw-mb-0 tw-bg-red-500 border tw-border-red-500 tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-text-white tw-rounded-md hover:tw-shadow-lg hover:tw-bg-red-600">
                        {{ okButtonText }}
                    </button>
                </div>
            </div>
        </div>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/components/TailwindComponents/Modals/BaseModal.vue';

const PopBase = ref(null)
//start:functional Variable 
const title = ref('title')
const message = ref('message')
const icon = ref('')
const okButtonText = ref('Ok')
const cancelButtonText = ref('Cancel')
let resolvePromise = undefined
//end:functional Variable 
// Start:Function open modal dialog
const show = (opt = {}) => {
    title.value = opt.title;
    message.value = opt.message;
    okButtonText.value = opt.okButton;
    if (opt.cancelButton) {
        cancelButtonText.value = opt.cancelButton;
    }
    if (opt.icon) {
        icon.value = opt.icon
        console.log(icon.value)
    }
    PopBase.value.open()
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
const _cancel = (state) => {
    console.log(state)
    resolvePromise(false)
    PopBase.value.close()
}
defineExpose({ show })
</script>