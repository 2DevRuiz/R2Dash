<!-- <template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
      <button class="bg-indigo-200 px-3 py-1 font-medium rounded-md hover:bg-indigo-300" @click="openDialog">Open Dialog</button>
      <CustomDialog ref="customDialog" title="Confirmation" message="Are you sure?" @confirm="handleConfirm" @cancel="handleCancel" />
    </div>
  </template>
  

<script setup>

import CustomDialog from '@/components/NewBaseModal/CustomDialog.vue';
const customDialog = ref(null);

const openDialog = () => {
  if (customDialog.value) {
    customDialog.value.open();
  }
};

// Wait for the CustomDialog component to be mounted
onMounted(() => {
  customDialog.value.open = openDialog;
});
</script> -->
<template>
    <div>
        <h1>Delete Page</h1>
        <!-- <button class="delete-btn" @click="doDelete">Delete Page</button> -->
        <button class="delete-btn" @click="openAlertConfirm(true)">Delete Page</button>
        <!-- <button class="delete-btn" @click="doUpdate">Update Page</button> -->
        <PopConfirmation ref="confirmDialogue"></PopConfirmation>
        <AlertConfirmModal ref="alertConfirm" />
    </div>
</template>

<!-- <script>
// import ConfirmDialogue from '../components/ConfirmDialogue.vue'
import PopConfirmation from '~/components/NewBaseModal/PopConfirmation.vue'
export default {
    components: { ConfirmDialogue },
    methods: {
        async doDelete() {
            const ok = await this.$refs.confirmDialogue.show({
                title: 'Delete Page',
                message: 'Are you sure you want to delete this page? It cannot be undone.',
                okButton: 'Delete Forever',
            })
            // If you throw an error, the method will terminate here unless you surround it wil try/catch
            if (ok) {
                alert('You have successfully delete this page.')
            } else {
                alert('You chose not to delete this page. Doing nothing now.')
            }
        },
        async doUpdate() {
            const update = await this.$refs.confirmDialogue.show({
                title: 'Update Page',
                message: 'Are you sure you want to Update this page? It cannot be undone.',
                okButton: 'Delete Forever',
            })

            if (update) {
                alert('You have successfully update this page.')
            } else {
                alert('You chose not to update this page. Doing nothing now.')
            }
        }
    },
}
</script> -->
<!-- <script lang="ts" setup>
import PopConfirmation from '@/components/NewBaseModal/PopConfirmation.vue';

const confirmDialogue = ref(null);
const alertConfirm = ref<InstanceType<typeof PopConfirmation> | null>(null);
const doDelete = async () => {
    // console.log(confirmDialogue.value.show())
    // const ok = await confirmDialogue.value.show({
    //     title: 'Delete Page',
    //     message: 'Are you sure you want to delete this page? It cannot be undone.',
    //     okButton: 'Delete Forever',
    // });

    // if (ok) {
    //     alert('You have successfully deleted this page.');
    // } else {
    //     alert('You chose not to delete this page. Doing nothing now.');
    // }
    // const ok = await confirmDialogue.value.show({
    //     title: 'Delete Page',
    //     message: 'Are you sure you want to delete this page? It cannot be undone.',
    //     okButton: 'Delete Forever',
    // });
    const userInput = await alertConfirm.value?.show(
        {
            title: 'Delete Page',
            message: 'Are you sure you want to delete this page? It cannot be undone.',
            okButton: 'Delete Forever',
        }
    );
    console.log('User clicked:', userInput);
};
</script> -->
<script lang="ts" setup>
import AlertConfirmModal from "@/components/NewBaseModal/AlertConfirmModal.vue";

import { ref } from "vue";

const alertConfirm = ref<InstanceType<typeof AlertConfirmModal> | null>(null);
const loading = ref(false);
const disabled = ref(false);
async function openAlertConfirm(alertModal = false) {
    //   loading.value = true;
    //   disabled.value = true;
    console.log(alertConfirm)
    const alertMessage =
        "Hi!, You created a custom async alert modal. This was amazing.";

    const confirmMessage = "It was quite interesting and elegant right?";

    const userInput = await alertConfirm.value?.openModal(
        alertModal ? alertMessage : confirmMessage,
        alertModal
    );

    console.log("This was the user input", userInput);
    loading.value = false;
    disabled.value = false;
}
</script>
<style scoped>
.delete-btn {
    padding: 0.5em 1em;
    background-color: #eccfc9;
    color: #c5391a;
    border: 2px solid #ea3f1b;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>