<script lang="ts" setup>
import { ref, computed } from "vue";

// To show the confirm modal
const showConfirm = ref(false);
// Resolve promise function
let resolvePromise: (value: PromiseLike<boolean> | boolean) => void;

const modalType = ref<"confirm" | "alert">("confirm");

const alertConfirmMessage = ref<null | string>(null);
const trueBtnText = computed(() =>
  modalType.value === "confirm" ? "Yes" : "Okay"
);
const falseBtnText = ref("No");

function openModal(message: string, alertModal: boolean) {
  alertConfirmMessage.value = message;
  alertModal ? (modalType.value = "alert") : (modalType.value = "confirm");

  showConfirm.value = true;

  return new Promise((resolve) => {
    resolvePromise = resolve;
  });
}

function handleUserInput(value: boolean) {
  if (!resolvePromise) return;

  resolvePromise(value);

  showConfirm.value = false;
}
defineExpose({ openModal });
</script>

<template>
  <transition name="fade-up">
    <div v-if="showConfirm" class="alert-box">
      <div class="alert-box-header">{{ alertConfirmMessage }}</div>
      <div class="alert-box-buttons">

        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="handleUserInput(true)" type="button" >
          Ok
          
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="handleUserInput(false)" type="button" >
          cancel
        </button>
        <!-- <common-button
          :buttonText="trueBtnText"
          :primary="true"
          @click="handleUserInput(true)"
        >
          <check-icon />
        </common-button> -->
        <!-- <common-button
          v-if="modalType === 'confirm'"
          :buttonText="falseBtnText"
          @click="handleUserInput(false)"
        >
          <cross-icon />
        </common-button> -->
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>

<style  scoped>
.alert-box {
  width: 60rem;

  z-index: 10;

  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 4px;

  padding: 1rem 0;

  &-header {
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
    border-bottom: 1px solid var(--color-background-soft);
    margin-bottom: 1.2rem;
  }
  &-buttons {
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    & > * {
      &:first-child {
        margin-left: auto;
      }
      &:not(:last-child) {
        margin-right: 1.2rem;
      }
    }
  }
}
</style>
