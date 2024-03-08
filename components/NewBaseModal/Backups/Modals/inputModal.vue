<template>
    <BaseModal ref="PopBase" @close="_cancel">
        <div
            class="tw-w-full tw-max-w-lg tw-p-3 tw-relative tw-mx-auto tw-my-auto tw-rounded-xl tw-shadow-lg tw-bg-white">
            <div>
                <div class="tw-text-center p-3 tw-flex-auto tw-justify-center tw-leading-6">
                    <!-- icon  -->
                    <!-- <font-awesome-icon :icon="icon" class="text-6xl flex items-center text-purple-500 mx-auto" /> -->
                    <i v-if="icon !== ''" :class="icon"
                        class=" tw-text-6xl tw-flex tw-justify-center tw-items-center tw-text-green-500  tw-mx-auto " />
                    <!-- icon -->
                    <h2 class="tw-text-2xl tw-font-bold tw-py-4 tw-capitalize">{{ title }}</h2>
                    <!-- <p class="tw-text-lg tw-text-gray-500 tw-px-8 tw-whitespace-pre-line"> -->
                    <!-- <span v-html="message"></span> -->
                    <!-- {{ message }} -->

                    <!-- </p> -->
                    <div class="tw-flex tw-items-center tw-justify-center">
                        <div class="tw-relative">
                                <input type="text" class="tw-pl-10 tw-pr-4 tw-py-2 tw-border tw-rounded-lg " v-model="inputValue"
                                :placeholder="placeHolder" />
                            
                            <div
                                class="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center tw-pointer-events-none">
                                
                                <i
                                    class="fas fa-envelope tw-text-lg tw-flex tw-justify-center tw-items-center tw-text-gray-400 tw-mx-auto " />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="tw-p-3 tw-mt-1 tw-text-center tw-space-x-4 md:tw-block">
                    <button @click="_cancel"
                        class="tw-mb-2 md:tw-mb-0 tw-bg-white px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-border tw-text-gray-600 tw-rounded-md hover:tw-shadow-lg hover:tw-bg-gray-100">
                        {{ cancelButtonText }}
                    </button>
                    <button @click="_confirm"
                        class="tw-mb-2 md:tw-mb-0 tw-bg-primary-500 border tw-border-primary-500 tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-text-white tw-rounded-md hover:tw-shadow-lg hover:tw-bg-primary-600">
                        {{ okButtonText }}
                    </button>
                </div>
            </div>
        </div>
    </BaseModal>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseModal from '@/components/TailwindComponents/Modals/BaseModal.vue';

const PopBase = ref(null)
//start:functional Variable 
const title = ref('title')
const icon = ref('')
const okButtonText = ref('Ok')
const cancelButtonText = ref('Cancel')
const placeHolder = ref('')
let resolvePromise = undefined
const inputValue = ref('')
//end:functional Variable 


// Start:Function open modal dialog
const show = (opt = {}) => {

    // title.value = opt.title;
    if (opt.title) {
        // message.value = opt.message;
        title.value = opt.title;
    }
    if (opt.okButton) {

        okButtonText.value = opt.okButton;
    }
    if (opt.cancelButton) {
        cancelButtonText.value = opt.cancelButton;
    }
    if (opt.icon) {
        icon.value = opt.icon
        console.log(icon.value)
    }
    if (opt.autoClose) {
        autoClose.value = opt.autoClose
    }
    if (opt.placeholder) {
        placeHolder.value = opt.placeholder
    }
    PopBase.value.open();

    return new Promise((resolve) => {
        resolvePromise = resolve
        // rejectPromise = reject
    })
}
//End: Function open modal dialog
const _confirm = () => {
   
    console.log(inputValue.value)
    resolvePromise(true)
    PopBase.value.close()
}
const _cancel = (state) => {
    resolvePromise(false)
    PopBase.value.close()
}
const validateEmail = () =>{
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!inputValue.value || !regex.test(inputValue.value) || this.form.recipients.includes(inputValue.value)) {
        return false
    }
    return true
}
defineExpose({ show })
</script>