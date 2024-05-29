<template>
  <div class="relative  mx-6 min-h-8 min-w-56 sm:mx-auto " v-click-outside="closeDropdown">
    <!-- start: Label -->
    <label v-if="label !== ''" for="dropdown" class="block text-sm font-medium text-gray-700 capitalize pl-3"
      @click="showList = !showList">{{ label }}</label>
    <!-- end: Label -->
    <!-- start: Select -->
    <div ref="boxContainer" aria-haspopup="listbox">
      <button @click="showList = !showList"
        class="relative w-full rounded-lg border capitalize bg-white px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        :aria-expanded="showList" aria-controls="dropdown" aria-labelledby="dropdown-label"
        :class="error ? 'border-red-500 hover:border-red-500' : 'border-slate-300'">
        <span id="dropdown-label" :class="(selectedOptions !== '') ? 'text-black' : 'text-gray-400'">
          {{
            selectedOptions[displayproperty] || placeholder
          }}
        </span>
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
    </div>
    <!-- end: Select -->

    <!-- start: list items -->
    <div v-show="showList"
      class="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md "
      id="dropdown" role="listbox" aria-labelledby="dropdown-label" tabindex="-1">
      <input type="text" v-model="searchTerm" ref="searchInput" placeholder="Search..."
        class="w-full rounded-t-lg border-b bg-white px-3 py-2 focus:border-indigo-400 focus:outline-none "
        role="searchbox" />
      <div class="max-h-64 overflow-y-auto combo-box-scrollbar">
        <div v-for="genre in filteredGenres" :key="genre" @click="selectGenre(genre)"
          class="cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 "
          role="option" :aria-selected="(selectedOptions[valueProperty] === genre[valueProperty])" tabindex="0"
          @keypress.enter="selectGenre(genre)"
          :class="selectedOptions[valueProperty] === genre[valueProperty] ? 'bg-indigo-500 text-white hover:bg-indigo-400' : ''">
          {{ genre[displayproperty] }}
        </div>
      </div>
    </div>
    <!-- end: list items -->
    <!-- start: error message -->
    <div class="mt-1 px-3" v-if="error">
      <p class="text-xs text-gray-500 capitalize" :class="{ 'text-red-500': error }">
        {{ errorMessage }}
      </p>
    </div>
    <!-- end: error message -->
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { PropType } from 'vue';
//start: Props declaration
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Choose option'
  },
  options: {
    type: Array as PropType<any>,
    default: []
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<any>,
    default: ''
  },
  displayproperty: {
    type: String as PropType<any>,
    default: 'label'
  },
  valueProperty: {
    type: String as PropType<any>,
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
//start: Variable declaration
const emit = defineEmits(['update:modelValue', 'input'])
const selectedOptions = ref(props.modelValue);
console.log(selectedOptions.value)
const searchTerm = ref("");
const showList = ref(false);
const boxContainer: any = ref(null);
const searchInput: any = ref(null);

const filteredGenres = computed(() => {
  return props.options.filter((genre: any) =>
    genre[props.displayproperty].toLowerCase().startsWith(searchTerm.value.toLowerCase()),
  );
});
//end: Variable declaration
//start: functions
function selectGenre(genre: any) {
  selectedOptions.value = genre;
  searchTerm.value = "";
  showList.value = false;
  emit('update:modelValue', selectedOptions.value[props.valueProperty]);
}



function closeDropdown(event: any) {
  if (
    !boxContainer.value.contains(event.target) &&
    !searchInput.value.contains(event.target)
  ) {
    searchTerm.value = "";
    showList.value = false;
  }
}

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
