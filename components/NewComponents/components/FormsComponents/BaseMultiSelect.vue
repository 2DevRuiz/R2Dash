<template>
    <div class="relative mx-6 min-h-8 min-w-56 sm:mx-auto" aria-haspopup="listbox" role="combobox"
        :aria-expanded="showList">
        <!-- start: Label -->
        <label v-if="label !== ''" for="tags-dropdown" class="block text-sm font-medium text-gray-700 capitalize pl-3"
            @click="showList = !showList">{{ label }}</label>
        <!-- end: Label -->
        <div ref="comboboxContainer" v-click-outside="closeDropdown" >
            <!-- start: combo box button -->
            <button @click="toggleDropdown"
                class="relative flex w-full items-center justify-center rounded-lg border  bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                aria-controls="tags-dropdown" aria-labelledby="tags-label"
                :class="error ? 'border-red-500 hover:border-red-500' : 'border-slate-300'">
                <div class="flex items-center gap-2">
                    <template v-if="selectedOptions.length > 0">
                        <span v-for="tag in selectedOptions.slice(0, 2)" :key="tag"
                            class="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium ">
                            {{ tag[displayproperty] }}
                        </span>
                        <span v-if="selectedOptions.length > 2">
                            +{{ selectedOptions.length - 2 }}
                        </span>
                    </template>
                    <p class="text-base text-gray-400 capitalize" v-else>{{ placeholder }}</p>
                </div>
                <span class="absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
                    <i class="fa-light fa-chevron-down text-lg transition-transform duration-500"
                        :class="showList ? 'rotate-180' : 'rotate-0 '"></i>
                </span>
                <!-- start: error icon -->
                <span class="absolute inset-y-0 right-0 flex justify-center items-center mr-8" v-if="error">
                    <!-- Icono al final -->
                    <i class="fa-regular fa-circle-info text-red-500"></i>
                </span>
                <!-- end: error icon -->
            </button>
            <!-- end: combo box button -->
            <!-- start: combo box list -->
            <div v-if="showList"
                class="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md "
                id="tags-dropdown">
                <!-- start:Search Input -->
                <input type="text" v-model="searchTerm" placeholder="Search..."
                    class="w-full rounded-t-lg border-b bg-white px-3 py-2 focus:border-indigo-400 focus:outline-none " />
                <!-- end:Search Input -->
                <!-- start: list items -->
                <div class="combo-box-scrollbar max-h-64 overflow-y-auto">
                    <div v-for="tag in filteredTags" :key="tag" @click="selectTag(tag)" @keypress.space="selectTag(tag)"
                        class="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none "
                        role="option" :aria-selected="isSelected(tag)" tabindex="0">
                        <input type="checkbox" :id="tag" :checked="isSelected(tag)" 
                            class="size-5 cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
                            :aria-checked="isSelected(tag)" />
                        <label :for="tag" class="pointer-events-none">{{ tag[displayproperty] }}</label>
                    </div>
                </div>
                <!-- end: list items -->

            </div>
            <!-- end: combo box list -->
        </div>
    </div>
    <!-- start: error message -->
    <div class="mt-1 px-3" v-if="error">
        <p class="text-xs text-gray-500 capitalize" :class="{ 'text-red-500': error }">
            {{ errorMessage }}
        </p>
    </div>
    <!-- end: error message -->
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { type PropType } from 'vue';
// start: emit
const emit = defineEmits(['update:modelValue'])
//start: Props declaration
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Choose option'
    },
    options: {
        type: Array as PropType<any>,
        default: () => []
    },
    modelValue: {
        type: Array,
        required: false,
        default: []
    },
    displayproperty: {
        type: String,
        default: 'label'
    },
    valueProperty: {
        type: String,
        default: 'value'
    },
    label: {
        type: String,
        default: ''
    },
    error: {
        type: Boolean,
        default: false
    },
    errorMessage: {
        type: String
    }
})


// start: variables declaration
const selectedOptions :any= ref([]);
const selectedTags: any = ref([...props.modelValue.map((item: any) => item[props.valueProperty])]);
// const selectedOptions: any = ref([]);
// const selectedTags: any = ref([...props.modelValue]);
const searchTerm = ref("");
const showList = ref(false);
// const comboboxContainer :any= ref(null);
const comboboxContainer = ref<HTMLElement | null>(null);;

const filteredTags = computed(() => {
    const term = searchTerm.value.toLowerCase();
    return props.options.filter((tag: any) => tag[props.displayproperty].toLowerCase().includes(term));
});

// start: functions 
function toggleDropdown() {
    showList.value = !showList.value;
}
/**
 * 
 * funciona pero retorna un objeto
 */
// function selectTag(tag: any) {
//     if (isSelected(tag)) {
//         selectedTags.value = selectedTags.value.filter((t: any) => t[props.valueProperty] !== tag[props.valueProperty]);
//     } else {
//         selectedTags.value.push(tag);
//         emit('update:modelValue', selectedTags.value)
//     }
// }
// function isSelected(tag: any) {
//     return selectedTags.value.some((item: any) => item[props.valueProperty] === tag[props.valueProperty]);
//     //   return selectedTags.value.includes(tag);
// }
function selectTag(tag: any) {
    const tagValue = tag[props.valueProperty];
    if (isSelected(tag)) {
        selectedTags.value = selectedTags.value.filter((value: any) => value !== tagValue);
        selectedOptions.value = selectedOptions.value.filter((item: any) => item[props.valueProperty] !== tagValue);
    } else {
        selectedTags.value.push(tagValue);
        selectedOptions.value.push(tag);
    }
    emit('update:modelValue', selectedTags.value);
}

function isSelected(tag: any) {
    return selectedTags.value.includes(tag[props.valueProperty]);
}


function closeDropdown(event: any) {
    if (!comboboxContainer.value?.contains(event.target)) {
        showList.value = false;
    }
    // if (comboboxContainer.value && !comboboxContainer.value.contains(event.target)) {
    //     showList.value = false;
    //   }

}
// Añadir el evento click al montar el componente
// onMounted(() => {
//     window.addEventListener("click", closeDropdown);
// });

// // Eliminar el evento click al desmontar el componente
// onUnmounted(() => {
//     window.removeEventListener("click", closeDropdown);
// });
</script>
<style scoped>
.combo-box-scrollbar::-webkit-scrollbar {
    width: 10px;
}

.combo-box-scrollbar::-webkit-scrollbar-track {
    background: #c7d2fe;
}

.combo-box-scrollbar::-webkit-scrollbar-thumb {
    background: #818cf8;
}

.combo-box-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #6366f1;
}
</style>