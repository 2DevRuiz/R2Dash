<template>
    <div class="">
        <!-- <div class="h-2 w-full bg-gray-200 rounded-full">
        <div :style="{ width: `${progress}%` }" class="h-full animate-fullBorder bg-[length:200%_400%] bg-gradient-to-r from-[#00BBE1] via-[#BDBCBD] to-[#FDB618] rounded-full"></div>
      </div> -->
        <!-- <div class="relative mb-5">
            <div class="rounded-full border border-red-500 p-1">
                <div class="flex h-6 items-center justify-center rounded-full bg-red-300 text-xs leading-none"
                     :style="{ width: `${progress}%`,height: `${progress}%` }">
                    <span class="p-1 text-white">{{progress}}%</span>
                </div>
            </div>
        </div> -->
        <!-- <div class="mb-5 h-4 overflow-hidden rounded-full bg-gray-200">
            <div class="h-4 rounded-full bg-gradient-to-r from-[#00BBE1] via-[#BDBCBD] to-[#FDB618]" :style="{ width: `${progress}%` }">
            </div>
        </div> -->
        <div>
            <span id="ProgressLabel" class="sr-only">Loading</span>

            <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="`${progress}`"
                class="block rounded-full bg-gray-200">
                <span
                    class="block h-3 transition-all ease-linear rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-[#00BBE1]  to-[#FDB618]"
                    :style="{ width: `${progress}%` }"></span>
            </span>
        </div>
    </div>
</template>
  
<script setup>
const progress = ref(0);
// const incrementAmount = 20; // La cantidad en que la barra de carga aumenta con cada iteración

// const incrementProgress = () => {
//     progress.value = Math.min(100, progress.value + incrementAmount);
// };
// const startLoading = () => {
//     const intervalId = setInterval(incrementProgress, 1000);
//     onUnmounted(() => clearInterval(intervalId));
// };

// onMounted(() => {
//     startLoading();
// });


const emit = defineEmits(['loaded'])

const incrementAmount = 20;

const incrementProgress = () => {
  progress.value = Math.min(100, progress.value + incrementAmount);

  if (progress.value === 100) {
    emit('loaded',false) // Emitir el evento cuando la barra llega al 100%
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
  
<style>
/* Agrega estilos de Tailwind CSS según sea necesario */
</style>
  