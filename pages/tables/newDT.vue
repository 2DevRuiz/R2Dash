<template>
  <div class=" mx-4 md:mx-1 lg:mx-3 mt-4 "><!-- Container-->

    <!-- <div class="w-full px-2 mt-3">
      <div class="bg-white p-10 rounded-lg shadow-md">


      </div>
    </div> -->
    <!-- Table Detail Content -->
    <div class="w-full px-2 mt-3">
      <div class="bg-white p-2 rounded-lg drop-shadow-xl ">
        <DataTables2 :items="items" :fields="fields" :numberItems="false">
          <template #cell(title)="{ value, item }">
            <p>A bold item title: <strong>{{ value }}</strong></p>
            <p>Item ID for some reason: {{ item.id }}</p>
          </template>

          <template #cell(action)="{ value, item }">
            <CommonButtons :button-text="''" :icon="'pencil'"></CommonButtons>
          </template>
        </DataTables2>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const items = ref([
  { id: 1, title: 'First entry', description: 'Lorem ipsum safdasddfsf' },
  { id: 1, title: 'Second entry', description: 'Sit dolar dasdsa' },
])
const fields = ref([
  { key: 'title', label: 'Title', ordered: true },
  { key: 'description', label: 'Description', ordered: true },
  { key: 'action', label: 'Action', ordered: false }
])
</script>