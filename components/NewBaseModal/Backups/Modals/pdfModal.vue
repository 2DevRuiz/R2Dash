<template>
    <BaseModal ref="PopBase" @close="_cancel">

        <div
            class="tw-w-max tw-max-w-6xl tw-p-1 tw-relative tw-mx-auto tw-my-auto tw-rounded-xl tw-shadow-lg tw-bg-white">
            <div class="tw-text-center p-3 tw-flex-auto tw-justify-center tw-leading-6">
                <iframe  v-if="blobFile" class="tw-w-full tw-aspect-square hover:tw-aspect-square" :src="`${blobFile}#zoom=100`" height="800px" frameborder="0"></iframe>
            </div>
            <div class="tw-p-3 tw-mt-2 tw-text-center tw-space-x-4 md:tw-block">

                <button @click="_confirm"
                    class="tw-mb-2 md:tw-mb-0 tw-bg-primary-500 border tw-border-primary-600 tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-text-white tw-rounded-md hover:tw-shadow-lg hover:tw-bg-primary-700">
                    {{confbtnText}}
                </button>
            </div>
        </div>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/components/TailwindComponents/Modals/BaseModal.vue';

const PopBase = ref(null)
const blobFile = ref(undefined)
const confbtnText = ref('Ok')
const show = (blobFiles = undefined,btnText = '') => {
    if (blobFiles) {
        blobFile.value = blobFiles
    }
    if (btnText != '') {
        confbtnText.value = btnText
    }
    PopBase.value.open()
    
}
const _confirm = () => {
    PopBase.value.close()
}
const _cancel = (state) => {
    PopBase.value.close()
}
defineExpose({ show })
</script>