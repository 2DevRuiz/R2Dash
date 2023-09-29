<template>
    <Teleport to="body">
        <Transition name="fade" enter-active-class="transition-opacity duration-250 ease-out"
            leave-active-class="transition-opacity duration-250 ease-out" enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <!-- isOpen is reactive and taken from the store, define if it is rendered or not -->
            <div v-if="isOpen"
                class="fixed left-0 top-0 z-[500] w-screen h-screen bg-black bg-opacity-20 grid item place-items-center"
                @click.self="" aria-modal="true" role="dialog" tabindex="-1">
                <!-- <div v-if="isOpen" class="modal modal-open"> -->
                <div class="bg-gray-500 p-4 rounded-2xl felx flex-col gap-6 relative">
                    <!-- @click handles the event to close the modal calling the action directly in store -->
                    <label class="cursor-pointer rounded-full bg-light-cyan p-2 absolute right-2 top-2"
                        @click="modal.close()">✕</label>

                    <!-- dynamic components, using model to share values payload -->
                    <component :is="view" v-model="model"></component>

                    <div class="w-full border-t border-black mt-2 flex justify-center gap-4 p-4">
                        <!-- render all actions and pass the model payload as parameter -->
                        <!-- <button
                    :class="action.class">Save</button> -->
                        <button v-for="action in actions" :class="{ 'px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600': action.class }" @click="action.callback(model)">
                            {{ action.label }}
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
  
<script lang="ts" setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useModal } from "~/store/modal";

const modal = useModal();

// reactive container to save the payload returned by the mounted view
const model = reactive({});

// convert all state properties to reactive references to be used on view
const { isOpen, view, actions } = storeToRefs(modal);
// console.log(actions)
</script>