<template>
    <!-- <form action="" class="w-full max-w-md">
        <div class="relative flex items-center text-white focus-within:text-gray-600">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-5 h-5 absolute ml-3 pointer-events-none text-gray-500"  />
          <input type="text" name="search" placeholder="Search..." autocomplete="off" aria-label="Search..."
            class="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2">
        </div>
      </form> -->
    <div class="bg-white rounded-2xl  flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
        <button class="outline-none focus:outline-none">
            <!-- <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> -->
            <!-- <font-awesome-icon :icon="['fab', 'searchengin']" /> -->
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"  class="w-5 text-gray-600 h-5 cursor-pointer"/>
            <!-- <font-awesome-icon :icon="['fas', 'magnifying-glass']"  class="w-5 text-gray-600 h-5 cursor-pointer"/> -->
        </button>
        <input type="search" name="" id="" placeholder="Search"
            class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
    </div>
</template>