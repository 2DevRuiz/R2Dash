<script setup lang="ts">

defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'result', value: boolean): void
}>()

// We might want to delegate the process of emitting
// the result to somewhere else, so we define a function
// we can pass through scoped slots
function emitResult(value: boolean) {
  emit('result', value)
}
</script>

<template>
  <BaseModal :show="show">
    <!-- Default slot, when we want to override the whole component -->
    <slot :emit-result="emitResult">
      <div class="p-4">
        <!-- Title slot, we pass the `emitResult` in case
        we add a close button or something to it -->
        <slot name="title" :emit-result="emitResult">
          <div class="text-lg font-medium">Please confirm</div>
        </slot>

        <!-- Body slot to customize the content -->
        <slot name="body">
          <div class="py-2 text-sm">Are you sure?</div>
        </slot>

        <!-- Actions slot, to customize the dialog buttons -->
        <slot name="actions" :emit-result="emitResult">
          <div class="flex justify-end gap-2">
            <button
              class="bg-indigo-200 px-3 py-1 font-medium"
              @click="$emit('result', false)"
            >
              Cancel
            </button>

            <button
              class="bg-indigo-200 px-3 py-1 font-medium"
              @click="$emit('result', true)"
            >
              Ok
            </button>
          </div>
        </slot>
      </div>
    </slot>
  </BaseModal>
</template>