<!-- <template>
    <PopBase ref="npbase">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="flex justify-center items-center gap-2">
            <button class="bg-red-400 p-2 rounded-lg" @click="_cancel">{{ cancelButton }}</button>
            <span class="bg-green-400 p-2 rounded-lg" @click="_confirm">{{ okButton }}</span>
        </div>
    </PopBase>
</template>
<script  setup>
const npbase = ref(null)
// Parameters that change depending on the type of dialogue
const title = ref(undefined);
const message = ref(undefined); // Main text content
const okButton = ref(undefined); // Text for confirm button; leave it empty because we don't know what we're using it for
const cancelButton = ref('Go Back'); // text for cancel button

// Private variables
const resolvePromise = ref(undefined);
const rejectPromise = ref(undefined);
// function show 
function show(opts = {}) {
    // title.value = opts.title || '';
    // message.value = opts.message || '';
    // okButton.value = opts.okButton || 'OK';
    // cancelButton.value = opts.cancelButton || '';
    // npbase.value.open();
    // return new Promise((resolve, reject) => {
    //     resolvePromise.value = resolve;
    //     rejectPromise.value = reject;
    // });
    console.log("mis nuevos tenis")
};
const _confirm = () => {
    npbase.value.close();
    resolvePromise.value(true);
}
const _cancel = () => {
    npbase.value.close();
    resolvePromise.value(false);
}
</script> -->
<template>
    <PopupModal ref="popup">
      <h2 style="margin-top: 0">{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="btns">
        <button class="cancel-btn" @click="cancel">{{ cancelButton }}</button>
        <span class="ok-btn" @click="confirm">{{ okButton }}</span>
      </div>
    </PopupModal>
  </template>
  
  <script setup>
  import PopupModal from '@/components/PopupModal.vue'
  import { ref, provide, inject } from 'vue'
  
  // Parameters that change depending on the type of dialogue
  const title = ref(undefined)
  const message = ref(undefined) // Main text content
  const okButton = ref(undefined) // Text for confirm button; leave it empty because we don't know what we're using it for
  const cancelButton = ref('Go Back') // text for cancel button
  
  // Private variables
  const resolvePromise = inject('resolvePromise')
  const rejectPromise = inject('rejectPromise')
  
  const confirm = () => {
    // Once we set our config, we tell the popup modal to close
    popup.value.close()
    resolvePromise(true)
  }
  
  const cancel = () => {
    popup.value.close()
    rejectPromise(false)
  }
  
  provide('resolvePromise', resolvePromise)
  provide('rejectPromise', rejectPromise)
  </script>
  
  <style scoped>
  .btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .ok-btn {
    color: red;
    text-decoration: underline;
    line-height: 2.5rem;
    cursor: pointer;
  }
  
  .cancel-btn {
    padding: 0.5em 1em;
    background-color: #d5eae7;
    color: #35907f;
    border: 2px solid #0ec5a4;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
  </style>