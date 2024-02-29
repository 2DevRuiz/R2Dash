<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="$emit('open')">Open</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['dialog-result', 'open']);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const visible = ref(false);

function open() {
  visible.value = true;
}

function cancel() {
  visible.value = false;
  emit('dialog-result', { action: 'cancel' });
}

function confirm() {
  visible.value = false;
  emit('dialog-result', { action: 'confirm' });
}
</script>