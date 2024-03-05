<template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <button class="bg-indigo-200 px-3 py-1 font-medium rounded-md hover:bg-indigo-300" @click="Openconfirm">Hello
            World</button>
    </div>



    <PopConfirmation ref="customDialog"></PopConfirmation>
</template>
<script lang="ts" setup>
const customDialog: any = ref(null);
// const Open = () => {
//     customDialog.value?.show();
// }
const Openconfirm = async () => {
    const userSelet = await customDialog.value?.show({
            title: 'Delete Page?',
            icon:['fas', 'trash'],
            message: 'Are you sure you want to delete this page? <br> <strong>It cannot be undone.</strong>',
            okButton: 'Delete Forever',
        });
    console.log('THE USER SELECTED YES', userSelet)
}
</script>