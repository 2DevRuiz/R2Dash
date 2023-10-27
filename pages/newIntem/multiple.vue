<template>
    <div class="w-full h-screen bg-light-cyan flex items-center justify-center">
        <div class="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
            <div class="w-full px-4">
                <div class="flex flex-col items-center relative">
                    <div class="w-full">
                        <div class="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                            <div class="flex flex-auto flex-wrap">
                                <div v-for="(item, index) in selected" :key="index"
                                    class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 border border-teal-300 ">
                                    <div class="text-xs font-normal leading-none max-w-full flex-initial">{{ item }}</div>
                                    <div class="flex flex-auto flex-row-reverse" @click="removeTag(index)">
                                        <div>
                                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg> -->
                                            <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <input placeholder="" v-model="filter" type="text" @focus="toogleVisibility"
                                        class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800" >
                                </div>
                            </div>
                            <div
                                class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 ">
                                <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none text-center flex justify-center items-center" 
                                    @click="toogleVisibility"
                                >
                                    <font-awesome-icon :icon="['fas', 'angle-down']"  :class="{ 'rotate-180': isOpen }"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- <div @click="toogleVisibility" class="fixed inset-0 h-full w-full z-10"></div> -->
                    <div v-show="isOpen"
                        class="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 multiScroll">
                        <div class="flex flex-col w-full">
                            <div v-for="(item, index) in filteredData" :key="index"
                                class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                                @click="addTag($event,item)"
                                >
                                <div
                                    class="flex w-full items-center p-2 pl-2 border-l-2 relative hover:border-teal-400 "
                                    :class="{ 'border-teal-600': selected.indexOf(item.name) !== -1 }"
                                    >
                                    <div class="w-full items-center flex">
                                        <div class="mx-2 leading-6  ">{{ item.name }} </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const isOpen = ref(false);
const selected = ref<String[]>([]);
const data = [{ name: 'Python' }, { name: 'Javascript' }, { name: 'Ruby' }, { name: 'JAVA' }, { name: 'ASP.Net' }, { name: 'C++' }, { name: 'SQL' }, { name: 'HTML' }]
const addTag = (event:any, item:any) => {
    // event.preventDefault();
    // let val = event.target.value.trim();
    // if(val.length > 0){
    //     if(selected.value.length >= 1){
    //         for (let i = 0; i < selected.value.length; i++) {
    //             if (selected.value[i] === val) {
    //                 return false
    //             }
                
    //         }
    //     }
    //     selected.value.push(val);
    //     event.target.value = "";
    //     console.log(selected.value);
    // }
    if (selected.value.indexOf(item.name) === -1) {
        selected.value.push(item.name);
    }
    console.log(item)
}
const filter = ref('');
const filteredData= computed(() => {
    if (filter.value === '') {
        return data;
    } else {
        if (!isOpen.value) {
            isOpen.value = true;
        }
        return data.filter(item => item.name.toLowerCase().includes(filter.value.toLowerCase()));
        
    }
});
const removeTag = (index:number) =>{
    selected.value.splice(index,1)
}
const removeLastTag = (event:any) => {
    if (event.target.value.length === 0) {
        removeTag(selected.value.length - 1);
    }
}
function toogleVisibility() {
    isOpen.value = !isOpen.value
}
</script>
<style>
.top-100 {
    top: 100%
}

.bottom-100 {
    bottom: 100%
}

.max-h-select {
    max-height: 300px;
}

/* width */
.multiScroll::-webkit-scrollbar {
    /* width: 8px; */
    @apply w-2;
    /* @apply hidden; */
}
 
/* Track */
.multiScroll::-webkit-scrollbar-track {
    /* background: #fff;
    border-radius: 10px; */
    @apply bg-white rounded-xl hidden;
}
 
/* Handle */
.multiScroll::-webkit-scrollbar-thumb {
    /* background: red;
    border-radius: 5px; */
    @apply bg-teal-500 rounded-xl;
}
 
/* Handle on hover */
.multiScroll::-webkit-scrollbar-thumb:hover {
    /* background: green; */
    @apply bg-teal-800;
}
</style>