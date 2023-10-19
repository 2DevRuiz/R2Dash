<template>
    <div class="relative ">
        <input v-model="search" @input="onChange" type="text" @keydown.down="onArrowDown" @keydown.up="onArrowUp"
            @keydown.enter="onEnter" />
        <ul v-show="isOpen" class="p-0 m-0 border border-solid border-[#eeeeee] h-32 min-h-[1em] max-h-[6em] overflow-auto">
            <li v-if="isLoading" class="loading">
                Loading results...
            </li>
            <li v-else v-for="(result, i) in results" :key="i" @click="setResult(result)"
                class="list-none text-left py-1  px-[2px] cursor-pointer hover:bg-[#4AAE9B] text-white"
                :class="{ 'bg-[#4AAE9B] text-white': i === arrowCounter }">
                {{ result }}
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
const search = ref('');
const results = ref<any>([]);
const isOpen = ref(false);
const isLoading = ref(false);
const arrowCounter = ref(-1);
const props = defineProps({
    items: {
        type: Array,
        required: false,
        default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
})
const onChange = (e:any) => {
    filterResult();
    isOpen.value = true;
}
const filterResult = () => {
    results.value = props.items.filter((item: any) => item.toLowerCase().indexOf(search.value.toLowerCase()) > -1);
}
function setResult(result: any) {
    search.value = result;
    isOpen.value = false;
}
const handleClickOutside = (event: Event) => {
    if (!this?.$el .contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
function onArrowDown() {
    if (arrowCounter.value < results.value.length) {
        arrowCounter.value = arrowCounter.value + 1;
    }
}
function onArrowUp() {
    if (arrowCounter.value > 0) {
        arrowCounter.value = arrowCounter.value - 1;
    }
}
function onEnter() {
    search.value = results[arrowCounter.value];
    arrowCounter.value = -1;
    isOpen.value = false;
}
watch(props.items, (value: any, oldValue) => {
    if (props.isAsync) {
      results.value = value;
      isOpen.value = true;
      isLoading.value = false;
    }
  });
</script>
  