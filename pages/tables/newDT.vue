<template>
  <div class="w-full h-screen bg-slate-300 flex justify-center items-center">
    <DataTables2 :items="items" :fields="fields">
      <template #cell(title)="{ value, item }">
        <p>A bold item title: <strong>{{ value }}</strong></p>
        <p>Item ID for some reason: {{ item.id }}</p>
      </template>

      <template #cell(action)="{ value, item }">
        <CommonButtons :button-text="''" :icon="'pencil'"></CommonButtons>
      </template>
    </DataTables2>
  </div>
</template>
<script lang="ts" setup>
const items = ref([
  { id: 1, title: 'First entry', description: 'Lorem ipsum safdasddfsf' },
  { id: 1, title: 'Second entry', description: 'Sit dolar dasdsa' },
])
const fields = ref([
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
  { key: 'action', label: 'Action' }
])
</script>