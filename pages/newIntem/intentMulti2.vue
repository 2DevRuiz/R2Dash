<template>
    <div class="relative">
      <button
        class="flex items-center justify-between w-full p-2 text-gray-700 border border-gray-300 rounded"
        @click="toggleDropdown"
      >
        <span>{{ selectedOptions.length ? getSelectedItemsText() : 'Select options' }}</span>
        <svg
          class="w-4 h-4 shrink-0 fill-current"
          :class="{ 'rotate-180': isOpen }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3.586l-4.95 4.95a1 1 0 1 0 1.414 1.414L10 6.414l3.536 3.536a1 1 0 1 0 1.414-1.414L10 3.586z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <transition name="dropdown">
        <div v-if="isOpen" class="absolute w-full mt-1 border border-gray-300 rounded bg-white shadow">
          <input
            type="text"
            class="w-full p-2 border-b border-gray-300 focus:outline-none"
            v-model="filterText"
            placeholder="Filter options"
          />
          <ul class="p-2">
            <li
              v-for="option in filteredOptions"
              :key="option"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="toggleOption(option)"
            >
              <input type="checkbox" :id="option" :value="option" v-model="selectedOptions" />
              <label :for="option">{{ option }}</label>
            </li>
          </ul>
        </div>
      </transition>
      <div
        v-if="selectedOptions.length"
        class="mt-2 border border-gray-300 rounded p-2 overflow-y-auto"
        :style="{ maxHeight: maxHeight + 'px' }"
      >
        <span v-for="(option, index) in selectedOptions" :key="option">
          {{ index < 2 ? option : null }}
          <span v-if="index === 1 && selectedOptions.length > 2">, ...</span>
          <span v-if="index === 2">, and {{ selectedOptions.length - 2 }} items</span>
          <span v-if="index < selectedOptions.length - 1">, </span>
        </span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const isOpen = ref(false);
  const selectedOptions = ref<string[]>([]);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];
  const maxHeight = ref(50); // Adjust the maximum height as needed
  const filterText = ref('');
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const toggleOption = (option: string) => {
    if (selectedOptions.value.includes(option)) {
      selectedOptions.value = selectedOptions.value.filter((selectedOption) => selectedOption !== option);
    } else {
      selectedOptions.value.push(option);
    }
  };
  
  const getSelectedItemsText = () => {
    const selectedCount = selectedOptions.value.length;
    if (selectedCount === 1) {
      return '1 selected item';
    } else {
      return `${selectedCount} selected items`;
    }
  };
  
  const filteredOptions  = computed(() => {
    return options.filter((option: string) =>
      option.toLowerCase().includes(filterText.value.toLowerCase())
    );
  });
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.rotate-180 {
  transform: rotate(180deg);
}

.hover\:bg-gray-100:hover {
  background-color: #f5f5f5;
}
</style>