<template>
    <div class="w-full h-screen bg-slate-300">

        <div class="grid grid-cols-4 gap-4 p-4">
            <div class="border-2 border-teal-600">
                <SelectMultiple :data="data" v-model="selected"/>
            </div>
            <div class="border-2 border-teal-600 p-3">
                Selected {{ selected }}
            </div>
            <div class="border-2 border-teal-600">3</div>
            <div class="border-2 border-teal-600">4</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// const data = [{ name: 'Python' }, { name: 'Javascript' }, { name: 'Ruby' }, { name: 'JAVA' }, { name: 'ASP.Net' }, { name: 'C++' }, { name: 'SQL' }, { name: 'HTML' }];
const data = [ 'Python',  'Javascript',  'Ruby',  'JAVA',  'ASP.Net',  'C++',  'SQL',  'HTML'];
const selected = ref(null)
</script>