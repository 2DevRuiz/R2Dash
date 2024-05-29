<template>
    <div
      class="flex items-center justify-center bg-white pb-36 pt-16 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      <div
        class="relative mx-6 h-96 w-96 sm:mx-auto"
        aria-haspopup="listbox"
        role="combobox"
        :aria-expanded="showList"
      >
        <div ref="comboboxContainer">
          <button
            @click="toggleDropdown"
            class="relative flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:focus:ring-indigo-700"
            aria-controls="tags-dropdown"
            aria-labelledby="tags-label"
          >
            <div class="flex items-center gap-2">
              <template v-if="selectedTags.length > 0">
                <span
                  v-for="tag in selectedTags.slice(0, 2)"
                  :key="tag"
                  class="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium dark:bg-indigo-700"
                >
                  {{ tag }}
                </span>
                <span v-if="selectedTags.length > 2">
                  +{{ selectedTags.length - 2 }}
                </span>
              </template>
              <p v-else>Choose Your Interests</p>
            </div>
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
            <i class="fa-light fa-chevron-down size-6 transition-transform duration-500"
                :class="showList ? 'rotate-180' : 'rotate-0 '"></i>
              <!-- <ChevronDownIcon
                class="size-6 transition-transform duration-500"
                :class="showList ? 'rotate-180' : 'rotate-0 '"
              /> -->
            </span>
          </button>
  
          <div
            v-show="showList"
            class="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md dark:border-slate-600 dark:bg-slate-900"
            id="tags-dropdown"
          >
            <input
              type="text"
              v-model="searchTerm"
              placeholder="Search Interest"
              class="w-full rounded-t-lg border-b bg-white px-3 py-2 focus:border-indigo-400 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:focus:border-indigo-700"
            />
            <div class="combo-box-scrollbar max-h-96 overflow-y-auto">
              <div
                v-for="tag in filteredTags"
                :key="tag"
                @click="selectTag(tag)"
                @keypress.space="selectTag(tag)"
                class="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none dark:hover:bg-indigo-700"
                role="option"
                :aria-selected="isSelected(tag)"
                tabindex="0"
              >
                <input
                  type="checkbox"
                  :id="tag"
                  :checked="isSelected(tag)"
                  class="size-5 cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700"
                  aria-checked="isSelected(tag)"
                />
                <label :for="tag" class="pointer-events-none">{{ tag }}</label>
              </div>
            </div>
            <div
              class="border-t border-slate-300 px-3 py-2 text-right dark:border-slate-600"
            >
              <button
                @click="showList = false"
                class="rounded-md bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-indigo-700 dark:focus:ring-indigo-500"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
//   import { ChevronDownIcon } from "@heroicons/vue/24/outline";
  
  const blogTags = ref([
    "Technology",
    "Lifestyle",
    "Design",
    "Photography",
    "Travel",
    "Food",
    "Web Development",
    "Inspiration",
  ]);
  
  const selectedTags = ref([]);
  const searchTerm = ref("");
  const showList = ref(false);
  const comboboxContainer = ref(null);
  
  function toggleDropdown() {
    showList.value = !showList.value;
  }
  
  function selectTag(tag) {
    if (isSelected(tag)) {
      selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    } else {
      selectedTags.value.push(tag);
    }
  }
  
  function isSelected(tag) {
    return selectedTags.value.includes(tag);
  }
  
  const filteredTags = computed(() => {
    const term = searchTerm.value.toLowerCase();
    return blogTags.value.filter((tag) => tag.toLowerCase().includes(term));
  });
  
  function closeDropdown(event) {
    if (!comboboxContainer.value.contains(event.target)) {
      showList.value = false;
    }
  }
  
  onMounted(() => {
    window.addEventListener("click", closeDropdown);
  });
  
  onUnmounted(() => {
    window.removeEventListener("click", closeDropdown);
  });
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