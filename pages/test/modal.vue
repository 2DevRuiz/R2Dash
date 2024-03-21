<template>
    <div class="bg-green-300 w-full h-screen flex justify-center items-center">

        <div
            class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8 bg-white">
            <img class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt="Profile Picture" />
            <div class="w-full text-left">
                <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                    <h3 class="font-medium">Diana Anderson</h3>
                    <time class="text-xs" datetime="2022-11-13T20:00Z">July 18, 2022 at 10:36 AM</time>
                </div>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="mt-5 flex items-center justify-between text-gray-600">
                    <button
                        class="cursor-pointer border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg"
                        @click="openModal()">
                        Open Details
                    </button>
                    <a title="Likes" href="#" class="group flex cursor-pointer items-center justify-around">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        12
                    </a>
                </div>
                <!-- <div class=""> -->
                <!-- <div class="group my-3 relative  border-b-2" @click="toogleModalMultiple('queues', true)">
                    
                    <span>{{form.queues.length }} queues selected</span>
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
                </div>
                </div> -->
                <!-- amazon div -->
                <div class="group my-3 p-1.5  relative border-b-2 border-gray-400 flex justify-between bg-gray-100">
                    <input type="checkbox">

                    <span class="bg-green-700" @click="toogleModalMultiple('queues', true)">{{ form.queues.length }}
                        queues selected</span>


                    <!-- <i class="fa fa-chevron-right"></i> -->
                    <font-awesome-icon :icon="['fas', 'bars-staggered']"
                        class="text-base fill-current text-gray-500 dark:text-gray-200" />
                    <span
                        class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
                </div>
                <!-- amazon div -->
                <!-- separator -->
                <div class="my-3 border-y-2 flex justify-center border-gray-100">
                    Separator
                </div>
                <!-- chat GPT  -->
                <div class="group my-3 relative border-b-2 flex items-center justify-center ">
                    <!-- checkbox Container -->
                    <!-- <div class="flex items-center text-center justify-center border-x border-gray-400"> -->
                    <div class="self-stretch px-1 border-x border-gray-200 flex mb-0.5">
                        <!-- <label for="" class="relative flex items-center cursor-pointer appearance-none pl-2"> -->
                        <!-- <label for="" class="relative m-0 self-center">
                            <input type="checkbox"
                                class="relative h-5 w-5 outline-none cursor-pointer bg-green-200 border-none m-0 p-0 rounded box-shadow-sm transition-box-shadow duration-300 checked:bg-green-500 ">
                        </label> -->
                        <label class="relative flex cursor-pointer items-center rounded-full p-2" for="checkbox-1"
                            data-ripple-dark="true">
                            <input type="checkbox"
                                class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-green-500 checked:bg-green-500 "
                                id="checkbox-1" checked />
                            <div
                                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                    fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </label>
                    </div>

                    <!-- <span class="bg-green-700">{{ form.queues.length }} queues selected</span> -->
                    <span class="flex-grow  text-center cursor-pointer" @click="toogleModalMultiple('queues', true)">{{
                            form.queues.length }} queues selected</span> <!-- Este span ocupa el espacio restante -->
                    <!-- icon container-->
                    <div class="border-x border-gray-200 justify-self-center self-stretch items-center px-2.5 content-center flex mb-0.5">
                        <span class="pl-2 mr-1 cursor-pointer" @click="toogleModalMultiple('queues', true)">
                            <font-awesome-icon :icon="['fas', 'bars-staggered']"
                                class="text-base fill-current text-gray-500 dark:text-gray-200" />
                            <!-- Reemplaza "icono" con el nombre de la clase de tu icono -->
                        </span>
                    </div>

                    <span
                        class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
                </div>
                <!-- <div class="mt-5 bg-orange-300 w-full cursor-pointer" @click="toogleModalMultiple('queues', true)">
                    <span>
                        {{ form.queues.length }} queues selected
                    </span>
                </div>
                <div class="mt-5 bg-sky-300 w-full flex justify-between">
                    <label for="" class="p-2 w-full flex"> Queues Selected</label>
                    <span class="mx-3 bg-indigo-300 w-full" v-for="(item, index) in form.queues" :key="index">
                        {{ item.name }}
                    </span>
                </div>
                <div class="mt-5 bg-orange-300 w-full cursor-pointer" @click="toogleModalMultiple('agents', true)">
                    <span>
                        {{ form.agents.length }} agents selected
                    </span>
                </div>
                <div class="mt-5 bg-sky-300 w-full flex justify-between">
                    <label for="" class="p-2 w-full flex"> Queues Selected</label>
                    <span class="mx-3 bg-indigo-300 w-full" v-for="(item, index) in form.agents" :key="index">
                        {{ item.name }}
                    </span>
                </div> -->
            </div>
        </div>
    </div>
    <keep-alive>
        <MultipleModal :source="modalSource" :showModal="openMultiModal" @close="v => openMultiModal = v"
            v-model="form[modalSource]" :key="modalSource">
        </MultipleModal>
    </keep-alive>




    <ModalDialog :show="showModal" @close="showModal = false"></ModalDialog>
</template>

<script lang="ts" setup>
const message = "New Modal";
const show = ref(false);
const showModal = ref(false);
const openMultiModal = ref(false);
const modalSource: any = ref('queues');
const form: any = {
    queues: [],
    agents: []
}

function openModal() {
    // show.value = true;
    showModal.value = true
    console.log(form.queues.length)
}
function toogleModalMultiple(modal_Source: any, OpenMultiModal: any) {
    console.log(modal_Source, OpenMultiModal)
    modalSource.value = modal_Source;
    console.log("modalSource", modalSource.value, "openValue", OpenMultiModal)
    openMultiModal.value = OpenMultiModal;
    console.log(openMultiModal.value)
}
function ShowTR(state: any) {
    console.log("state", state, "form", form[modalSource.value], "modalSource", modalSource.value)
    openMultiModal.value = state
}
</script>