<template>
  <!-- <div class="flex justify-center items-center h-screen"> -->
  <div class="relative inset-x-0 w-11/12 rounded-xl  py-2 ml-5 flex items-center justify-center">
    <div class="relative w-10 h-10 animate-spin rounded-full bg-gradient-to-r from-[#FDB618] via-[#BDBCBD] to-[#00BBE1] ">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500">
      </div>
    </div>
  </div>
</template>
 
<script setup>
const progress = ref(0);
const emit = defineEmits(['loaded'])

const incrementAmount = 25;

const incrementProgress = () => {
  progress.value = Math.min(100, progress.value + incrementAmount);

  if (progress.value === 100) {
    emit('loaded', false) // Emitir el evento cuando la barra llega al 100%
  }
};

const startLoading = () => {
  const intervalId = setInterval(incrementProgress, 1000);
  onUnmounted(() => clearInterval(intervalId));
};

onMounted(() => {
  startLoading();
});
</script>
  