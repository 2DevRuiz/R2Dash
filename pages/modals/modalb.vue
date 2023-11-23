<template>
    <!-- Button trigger modal -->
    <button type="button" @click="isOpen = true"
        class="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600"
        data-toggle="modal" data-target="#exampleModalTwo">
        Launch modal two
    </button>

    <!-- Modal -->
    <div :class="{ show: isOpen }" class="modal hidden fixed top-0 left-0 w-full h-full outline-none fade"
        id="exampleModalTwo" tabindex="-1" role="dialog">

        <div class="modal-dialog relative w-auto pointer-events-none max-w-lg my-8 mx-auto px-4 sm:px-0" role="document">

            <div class="relative flex flex-col w-full pointer-events-auto bg-white border border-gray-300 rounded-lg">
                <!-- header -->
                <div class="flex items-start justify-between p-4 border-b border-gray-300 rounded-t">
                    <h5 class="mb-0 text-lg leading-normal">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- header -->
                <!-- body -->
                <div class="relative flex p-4">
                    ...
                </div>
                <!-- body -->
                <!-- footer -->
                <div class="flex items-center justify-end p-4 border-t border-gray-300">
                    <button type="button"
                        class="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-gray-600 mr-2"
                        data-dismiss="modal">Close</button>
                    <button type="button"
                        class="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600">Save
                        changes</button>
                </div>
                <!-- footer -->
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const isOpen = ref(false);
</script>
<style scoped>
.modal {
    z-index: 1072;
    @apply hidden fixed top-0 left-0 w-full h-full outline-none
}

.modal.show {
    @apply block
}

.modal-backdrop {
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    @apply fixed bg-black top-0 left-0
}

.modal-backdrop.fade {
    @apply opacity-0
}

.modal-backdrop.show {
    @apply opacity-50
}

.modal.fade .modal-dialog {
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    -webkit-transform: translate(0, -50px);
    transform: translate(0, -50px);
}

.modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
}
</style>