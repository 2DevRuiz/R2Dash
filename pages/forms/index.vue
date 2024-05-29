<template>
    <div class="w-full h-screen bg-slate-300 flex justify-center items-center">
        <BaseInputs v-model="form.name" type="text" label="status" errorMessage="Campo requerido" />
    </div>
</template>
<script lang="ts" setup>
const form = ref({
  name: "",
})
</script>