<template>
    <div class="w-full min-h-screen  bg-gradient-to-t from-purple-400 to-blue-400 flex justify-center items-center flex-col">
        <div class="w-1/2 border border-solid border-[#d9dfe7] bg-white rounded text-sm min-h-[2.8125rem] box-border px-3 py-0 mb-3">
            <div v-for="(tag,index) in tags" :key="tag" class="h-6 text-white float-left text-sm mr-3 bg-[#667eea] rounded-2xl mt-3 leading-6 py-0 px-2">
                {{ tag }}
                <span class="cursor-pointer opacity-75 inline-block ml-2" @click="removeTag(index)">x</span>
            </div>
            <input type="text" @keydown.enter="addTag"  @keydown.,="addTag" @keydown.delete="removeLastTag" placeholder="Enter a Tag" class="border-none outline-none text-base leading-10 bg-transparent">
        </div>
    </div>
</template> 
<script lang="ts" setup>
/**
 * define Variables
 */
const tags=ref<string[]>([]);
/**
 * defien arrows Functions 
 */

const addTag = (event:any) => {
    event.preventDefault();
    let val = event.target.value.trim();
    if(val.length > 0){
        if(tags.value.length >= 1){
            for (let i = 0; i < tags.value.length; i++) {
                if (tags.value[i] === val) {
                    return false
                }
                
            }
        }
        tags.value.push(val);
        event.target.value = "";
        console.log(tags.value);
    }
}
const removeTag = (index:any) =>{
    tags.value.splice(index,1)
}
const removeLastTag = (event:any) => {
    if (event.target.value.length === 0) {
        removeTag(tags.value.length - 1);
    }
}
</script>