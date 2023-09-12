<template>
  <div class="bg-sky-200 h-screen w-full flex justify-center items-center">
    <div
      class="relative bg-opacity-0 animate-fullBorder rounded-xl bg-white bg-[length:300%_400%] p-0.5 bg-gradient-to-r from-[#00BBE1] via-green-500 to-[#FDB618] mt-10 overflow-hidden">

      <div class="rounded-xl bg-gray-600 bg-opacity-100 px-16 py-10 shadow-lg  max-sm:px-8 ">
        <div class="mb-8 flex flex-col items-center">
          <h1 class="text-center text-white font-semibold">Enter Verification Code</h1>
        </div>
        <div class="w-[18.75rem] mx-auto bg-white rounded-xl p-5 border">
          <div class=" w-full flex justify-around" @input="handleOtpInput">
            <template v-for="(field, index) in fields" :key="field">
              <input v-model="data[field - 1]" :aria-="index" ref="firstInputEl" type="text" maxlength="1"
                @keydown="blockSpace" class="border rounded w-10 h-10 text-center" @paste=" handlePaste($event)" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
const fields = ref(5)
const data = ref<String[]>([]);
const firstInputEl = ref(null);
const blockSpace = (e: KeyboardEvent) => {
  if (e.key === ' ') {
    e.preventDefault(); // Prevenir la acción de la tecla espacio
  }
};
const handleOtpInput = (e: any) => {
  if (e.data && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (e.data == null && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
}

const handlePaste = (e: any) => {
  const pasteData: string = e.clipboardData.getData('text');
  console.log(e.clipboardData.getData('text'))
  let nextEl = firstInputEl.value[0];
  for (let i = 0; i < pasteData.length; i++) {
    if (nextEl) {

      console.log("---------------------------------")
      console.log("PasteData -> " + pasteData[i])
      console.log("i -> " + i)
      console.log("Si entro en el if")
      data.value[i] = pasteData[i];
      console.log(nextEl)
      nextEl = nextEl.nextElementSibling;
      console.log(nextEl)
      console.log("---------------------------------")
    }
    

    // console.log("<\---------------------------------/>")
    // console.log("PasteData -> " + pasteData[i])
    // console.log("i -> " + i)
    // console.log("Fuera del if Else")
    // console.log("<\---------------------------------/>")
  }
};
watch(
  () => data,
  (newVal:any) => {
    console.log(newVal.value)
    if (
      newVal.value != '' &&
      newVal.value.length === fields.value &&
      !newVal.value.includes('')
    ) {
      console.log(Number(newVal.value.join('')))
      // emit('update:modelValue', Number(newVal.value.join('')));
    } else {
      // emit('update:modelValue', null);
      console.log("empty")
    }
  },
  { deep: true }
);
</script>