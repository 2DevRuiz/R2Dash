<template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <div class="flex justify-center items-center w-full my-0 gap-2">
            <CommonButton button-text="Open Alert" :primary="true" @click="openAlertConfirm()" />
            <!-- <CommonButton button-text="Open Confirm" :primary="true" @click="openAlertConfirm(false)" /> -->
            <!-- <ButtonsCommon :button-text="'primary'" :loading="false" :disabled="false" :type-b="'primary'" :icon="'user'">
            </ButtonsCommon>
            <ButtonsCommon :button-text="'secondary'" :loading="false" :disabled="false" :type-b="'secondary'" :icon="''">
            </ButtonsCommon>
            <ButtonsCommon :button-text="'info'" :loading="false" :disabled="false" :type-b="'info'">
            </ButtonsCommon>
            <ButtonsCommon :button-text="'success'" :loading="false" :disabled="false" :type-b="'success'">
            </ButtonsCommon>
            <ButtonsCommon :button-text="'danger'" :loading="false" :disabled="false" :type-b="'danger'">
            </ButtonsCommon>
            <ButtonsCommon :button-text="'warning'" :loading="false" :disabled="false" :type-b="'warning'">
            </ButtonsCommon> -->
            <!-- <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">

                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor" />
                    </svg>
                    Green to blue
                </span>
            </button> -->
            <!--  -->
        </div>
        <!-- <div class="w-full flex-1 relative flex items-center justify-center inset-0">
            <ConfirmDialogs ref="alertConfirm" />
        </div> -->
    </div>
    <!-- <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <div class="flex justify-between items-center w-[720px] my-0 mx-auto">
            <CommonButton button-text="Open Alert" :primary="true" @click="openAlertConfirm(true)" />
            <CommonButton button-text="Open Confirm" :primary="true" @click="openAlertConfirm(false)" />
        </div>
        <div class="w-full flex-1 relative flex items-center justify-center inset-0">
            <ConfirmDialogs ref="alertConfirm" />
        </div>
    </div> -->
</template>
<script lang="ts" setup>
import ConfirmDialogs from '~/components/ModalsComponents/ConfirmDialogs.vue';
// definePageMeta({
//     layout: 'auth',
// })
const alertConfirm = ref<InstanceType<typeof ConfirmDialogs> | null>(null);

async function openAlertConfirm(alertModal = false) {
    const alertMessage =
        "Hi!, You created a custom async alert modal. This was amazing.";

    const confirmMessage = "It was quite interesting and elegant right?";

    const userInput = await alertConfirm.value?.openModal(
        alertModal ? alertMessage : confirmMessage,
        alertModal
    );

    console.log("This was the user input", userInput);
}
</script>