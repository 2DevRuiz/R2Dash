<template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <button type="button" class="bg-indigo-200 px-3 py-1 font-medium rounded-md hover:bg-indigo-300"
            @click="showDialog = !showDialog">
            Hello World
        </button>
    </div>
    <ConfirmationDialog :show="showDialog" @result="handleResult">
        <template #title="{ emitResult }">
            <div class="flex justify-between">
                <div class="text-xl font-semibold tracking-wide">
                    Cool confirmation2
                </div>
                <font-awesome-icon :icon="['fas', 'x']" class="w-6 cursor-pointer text-pink-600"
                    @click="emitResult(false)" />
            </div>
        </template>

        <template #body>
            <div class="py-4 text-sm">Are you super duper sure about THIS?</div>
        </template>
    </ConfirmationDialog>
</template>
<script setup lang="ts">

const showDialog = ref(false)

function handleResult(value: boolean) {
  showDialog.value = false
  // Do something with `value`
  console.log('value', value)
}
</script>
