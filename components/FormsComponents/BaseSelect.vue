
<template>
    <div
      class="flex items-center justify-center bg-white pb-36 pt-16 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
    >
      <div class="relative mx-6 h-96 w-96 sm:mx-auto">
        <div ref="boxContainer" aria-haspopup="listbox">
          <button
            @click="showList = !showList"
            class="relative w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:focus:ring-indigo-700"
            aria-expanded="showList"
            aria-controls="genre-dropdown"
            aria-labelledby="dropdown-label"
          >
            <span id="dropdown-label">{{
              selectedGenre || "Select A Genre"
            }}</span>
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <ChevronDownIcon
                class="size-6 transition-transform duration-500"
                :class="showList ? 'rotate-180' : 'rotate-0 '"
              />
            </span>
          </button>
        </div>
  
        <div
          v-show="showList"
          class="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md dark:border-slate-600 dark:bg-slate-900"
          id="genre-dropdown"
          role="listbox"
          aria-labelledby="dropdown-label"
          tabindex="-1"
        >
          <input
            type="text"
            v-model="searchTerm"
            ref="searchInput"
            placeholder="Search Genre"
            class="w-full rounded-t-lg border-b bg-white px-3 py-2 focus:border-indigo-400 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:focus:border-indigo-700"
            role="searchbox"
          />
          <div class="h-96 overflow-y-auto combo-box-scrollbar">
            <div
              v-for="genre in filteredGenres"
              :key="genre"
              @click="selectGenre(genre)"
              class="cursor-pointer px-3 py-2 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
              role="option"
              :aria-selected="selectedGenre === genre"
              tabindex="0"
              @keypress.enter="selectGenre(genre)"
            >
              {{ genre }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ChevronDownIcon } from "@heroicons/vue/24/outline";
  import { ref, computed, onMounted, onUnmounted } from "vue";
  
  const movieGenres = ref([
    "Action",
    "Adventure",
    "Animation",
    "Anime",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "History",
    "Horror",
    "Independent",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short Film",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western",
  ]);
  
  const selectedGenre = ref("");
  const searchTerm = ref("");
  const showList = ref(false);
  const boxContainer = ref(null);
  const searchInput = ref(null);
  
  function selectGenre(genre) {
    selectedGenre.value = genre;
    searchTerm.value = "";
    showList.value = false;
  }
  
  const filteredGenres = computed(() => {
    return movieGenres.value.filter((genre) =>
      genre.toLowerCase().startsWith(searchTerm.value.toLowerCase()),
    );
  });
  
  function closeDropdown(event) {
    if (
      !boxContainer.value.contains(event.target) &&
      !searchInput.value.contains(event.target)
    ) {
      searchTerm.value = "";
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
  