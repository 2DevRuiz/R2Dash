<template>
    <div
        class="w-full border border-solid border-[#d9dfe7] bg-white rounded text-sm min-h-[2.8125rem] box-border px-3 py-0 mb-3">
        <div v-for="(tag, index) in tags" :key="tag"
            class="h-6 text-white float-left text-sm mr-3 bg-light-cyan rounded-2xl mt-3 leading-6 py-0 px-2">
            {{ tag }}
            <span
                class="cursor-pointer opacity-75 w-4 inline-block items-center text-center ml-2 border-l-2 border-slate-300 "
                @click="removeTag(index)">X</span>
        </div>
        <input type="text" @keydown.enter="addTag" @keydown.,="addTag" @keydown.delete="removeLastTag"
            placeholder="Enter a Tag" class="flex-grow m-1 border-none outline-none text-base leading-10">
    </div>
</template>
<script lang="ts" setup>
import { useToastStore } from '~/store/useToast';
const { addToast: add } = useToastStore();
/**
 * define Variables
 */
const tags = ref<string[]>([]);
const emit = defineEmits(['update:tags'])
const isvalid = ref(true)
/**
 * defien arrows Functions 
 */

const addTag = (event: any) => {
    event.preventDefault();
    let val = event.target.value.trim();
    if (val.length > 0) {
        if (tags.value.length >= 1) {
            for (let i = 0; i < tags.value.length; i++) {
                if (tags.value[i] === val) {
                    add({
                        title: 'Error!!',
                        content:'El elemento ya existe',
                        type:'danger'
                        // duration:1000
                    })
                    return false
                }
            }
        }
        tags.value.push(val);
        event.target.value = "";
        emit('update:tags', tags.value)
        // console.log(tags.value);
    }
}
const removeTag = (index: any) => {
    tags.value.splice(index, 1)
}
const removeLastTag = (event: any) => {
    if (event.target.value.length === 0) {
        removeTag(tags.value.length - 1);
    }
}
</script>