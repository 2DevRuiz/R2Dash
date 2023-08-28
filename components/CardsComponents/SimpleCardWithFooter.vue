<template>
    <div  class="relative bg-[#00BBE1] dark:bg-gray-800 shadow-2xl rounded-md flex items-center justify-between p-3 border-b-2 border-blue-600 dark:border-gray-600 text-white font-medium group">
      
      <div class="text-left">  
          <p class="text-2xl">1,257</p>
          <p>Visitors</p>
      </div>
      <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-[1.1]">
          <!-- <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
          </svg> -->
          <font-awesome-icon :icon="['fas', 'users']"  class=" text-2xl stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"/>
      </div>
      <div class="inline-block absolute  bottom-[-10px] left-0 right-0 bg-slate-700 rounded-b-md  text-white hover:bg-sky-600 hover:text-white w-full h-5 justify-center  items-center text-center">
        <h3 class=" cursor-pointer">Read Article →</h3>
      </div>
      <!-- <div class="absolute bottom-0 left-0 right-0 inline-block bg-red-500 w-full h-10"></div> -->
  </div>

</template>