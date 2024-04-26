<template>
    <div class="w-full h-screen bg-slate-400 flex py-14">
        <div class="w-full px-2 mt-3">
            <div class="bg-white p-2 rounded-lg drop-shadow-xl px-8">
                <officialDataTable :items="items" :fields="fields">
                
                </officialDataTable>
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