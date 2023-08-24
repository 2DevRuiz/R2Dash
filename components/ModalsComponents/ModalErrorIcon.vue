<template>
<div class="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 flex justify-center items-center transition-all ease-in duration-3000"  @click.self="handleClose()" :show="isOpen">
  <div class="bg-white rounded-lg">
    <div class="w-96 border-t-8 border-red-500 rounded-lg flex">
      <div class="w-1/3 pt-6 flex justify-center">
        <font-awesome-icon :icon="['fas', icon]" class="text-3xl w-8 bg-red-500 text-white p-2 rounded-full text-center justify-center items-center" />
      </div>
      <div class="w-full pt-9 pr-4">
        <h3 class="font-bold text-red-700 uppercase">{{title}}</h3>
        <p class="py-4 text-base text-gray-600 whitespace-pre-line"> {{ content }}</p>
      </div>
    </div>

    <div class="p-4 flex space-x-4 justify-center items-center">
      <!-- <a href="#" class="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm" @click="handleClose()">{{buttonCancelTitle}}</a> -->
      <button type="button" class="w-1/2 px-4 py-3 text-center text-red-100 bg-red-600 rounded-lg hover:bg-red-700 hover:text-white font-bold text-sm " @click="handleClose()">{{buttonCancelTitle}}</button>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
const isOpen = ref(true)
const emit = defineEmits(['modalState'])
const {title,content,buttonCancelTitle,icon} =defineProps({
  title:{
    type:String,
    default:'Error !!!'
  },
  content:{
    type:String,
    default:'Ha Ocurrido un Error \n\rFavor comuniquese con el administrador'
  },
  buttonCancelTitle:{
    type:String,
    default:'Close'
  },
  icon:{
    type:String,
    default:'triangle-exclamation'
  }
})

const handleClose = () =>{
    isOpen.value = false
    emit('modalState',isOpen.value)
}
</script>