<!-- <template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <button type="button" class="bg-indigo-200 px-3 py-1 font-medium rounded-md hover:bg-indigo-300">
            Hello World
        </button>
    </div>
</template>
<script lang="ts" setup>
// console.log('Hello World')
</script> -->
<!-- <script setup lang="ts">
import { ref } from 'vue'

// import BaseModal from '@/components/modals/BaseModal.vue'

const showModal = ref(false)
</script>

<template>
  <button
    type="button"
    class="bg-indigo-200 px-3 py-1 font-medium"
    @click="showModal = true"
  >
    Show modal
  </button>

  <BaseModal :show="showModal">
    <div class="p-4">
      <div class="text-lg">Hello Modal World!</div>

      <div class="py-2 text-sm">Click to close:</div>

      <button
        type="button"
        class="bg-indigo-200 px-3 py-1 font-medium"
        @click="showModal = false"
      >
        Hide modal
      </button>
    </div>
  </BaseModal>
</template> -->
<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

function handleResult(value: boolean) {
  showDialog.value = false
  // Do something with `value`
  console.log('value', value)
}
</script>

<template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <button type="button" class="bg-indigo-200 px-3 py-1 font-medium rounded-md hover:bg-indigo-300"
            @click="showDialog = !showDialog">
            Hello World
        </button>
    </div>
    <!-- Dialog 1 -->
  <!-- <ConfirmationDialog :show="showDialog" @result="handleResult" /> -->
  <!-- Dialog 2 -->
  <!-- <ConfirmationDialog :show="showDialog" @result="handleResult">
    <template #title="{ emitResult }">
      <div class="flex justify-between">
        <div class="text-xl font-semibold tracking-wide">
          Cool confirmation
        </div>
        <font-awesome-icon :icon="['fas', 'x']"
         class="w-6 cursor-pointer text-pink-600"
          @click="emitResult(false)"
        />
      </div>
    </template>

    <template #body>
      <div class="py-4 text-sm">Are you super duper sure about THIS?</div>
    </template>
  </ConfirmationDialog> -->
  <!-- Dialog 3 -->
  <!-- <ConfirmationDialog :show="showDialog" @result="handleResult">
    <template #actions="{ emitResult }">
      <div class="flex justify-end gap-3">
        <button
          class="border border-red-400 bg-gray-200 px-3 font-semibold uppercase"
          @click="emitResult(false)"
        >
          No way!
        </button>

        <button
          class="border border-cyan-400 bg-gray-200 px-3 font-semibold uppercase"
          @click="emitResult(true)"
        >
          Yes, please
        </button>
      </div>
    </template>
  </ConfirmationDialog> -->
  <!-- Dialog 4 -->
  <ConfirmationDialog
    v-slot="{ emitResult }"
    :show="showDialog"
    @result="handleResult">
    <div class="bg-black p-3 text-lg font-bold text-white rounded-t-lg">
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
        A very custom title
    </div>

    <div class="p-4">
      <div class="text-sm">
        Do you REALLY agree to the terms of the agreement presented in here?
      </div>

      <!-- <div class="flex justify-between pt-5 w-full bg-red-600">
        <button
          class="bg-pink-600 px-4 py-2 text-sm font-bold text-white"
          @click="emitResult(false)"
        >
          NOPE NOPE NOPE
        </button>

        <button
          class="bg-sky-600 px-4 py-2 text-sm font-bold text-white"
          @click="emitResult(true)"
        >
          YEP
        </button>
      </div> -->
      <div class="flex justify-between pt-5 w-full">
            <div>
                <button class="bg-pink-600 px-4 py-2 text-sm font-bold text-white" @click="emitResult(false)">
                NOPE NOPE NOPE
                </button>
            </div>

            <div>
                <button class="bg-sky-600 px-4 py-2 text-sm font-bold text-white" @click="emitResult(true)">
                YEP
                </button>
            </div>
        </div>
    </div>
  </ConfirmationDialog>
</template>