<template>
   <BaseModal ref="PopBase" @_close="_close">
      <div
         class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  outline-none focus:outline-none">
         <!--header-->
         <div class="flex items-center justify-between px-3 py-1.5 border-b border-solid border-slate-200 rounded-t ">
            <span class="text-xl font-medium  text-black ">
               {{ title }}
            </span>
            <button @click="_close"
               class="rounded-full ml-auto bg-transparent border-0 text-gray-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
               <span class="bg-transparent text-gray-900 text-2xl block outline-none focus:outline-none">
                  ×
               </span>
            </button>
         </div>
         <!-- header -->
         <!--body-->
         <div class="relative p-6 flex-auto">
            <!-- dynamic components, using model to share values payload -->
            <div>
               <component :is="view" v-model="model" :viewProps="viewProps"></component>
            </div>

         </div>
         <!--footer-->
         <div class="flex py-2 px-4 border-t border-solid border-slate-200 rounded-b">
            <!-- <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                Close
                                </button>
                                <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                                Save Changes
                                </button> -->
            <slot name="actions" :_cancel="_cancel" :_confirm="_confirm">
               <button
                  class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  @click="">
                  button
               </button>
            </slot>
         </div>
      </div>
   </BaseModal>
</template>
<script lang="ts" setup>
import { ref, reactive, markRaw } from 'vue';
import { storeToRefs } from 'pinia';
import BaseModal from '@/components/ModalsComponents/BaseModal.vue';
//variables 
const PopBase: any = ref(null);
// reactive container to save the payload returned by the mounted view
const view = ref(null);
const title = ref('title')
const icon = ref('')
const okButtonText = ref('Ok')
const cancelButtonText = ref('Cancel')
const model = ref({});
const viewProps = reactive({});

let resolvePromise: any = undefined
const show = (opt: any = {}) => {
   title.value = opt.title;

   okButtonText.value = opt.okButton;
   if (opt.cancelButton) {
      cancelButtonText.value = opt.cancelButton;
   }
   //  if (opt.icon) {
   //      icon.value = opt.icon
   //      console.log(icon.value)
   //  }
   if (opt.view) {
      view.value = markRaw(opt.view);
   }
   PopBase.value?.open()

   return new Promise((resolve) => {
        resolvePromise = resolve
        // rejectPromise = reject
    })

}
const _close = () => {
   PopBase.value?.close()
}
const _confirm = () => {
   resolvePromise(model.value)
   PopBase.value.close()
}

const _cancel = (state: any) => {
   console.log(state)
   resolvePromise(false)
   PopBase.value.close()
}
defineExpose({ show })
</script>