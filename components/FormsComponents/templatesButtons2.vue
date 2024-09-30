<template>
    <div class="container mx-auto py-8 px-4">
  <!-- Row -->
  <div class="flex flex-wrap -mx-4 justify-center">
    <!-- Left Side -->
    <div class="px-4">
      <!-- Solid Buttons -->
      <div class="mb-10">
        <h2 class="text-sm font-light text-gray-700">Solid Buttons</h2>
        <hr class="my-2" />
        <div class="mb-3 flex flex-wrap">
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
              Default
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Info
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-green-500 hover:bg-green-600 focus:outline-none">
              Success
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-yellow-500 hover:bg-yellow-600 focus:outline-none">
              Warning
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-red-500 hover:bg-red-600 focus:outline-none">
              Danger
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-gray-800 hover:bg-gray-900 focus:outline-none">
              Dark
            </button>
          </div>
        </div>

        <div class="mb-3 flex flex-wrap">
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
              Default
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Info
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-green-500 hover:bg-green-600 focus:outline-none">
              Success
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-yellow-500 hover:bg-yellow-600 focus:outline-none">
              Warning
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-red-500 hover:bg-red-600 focus:outline-none">
              Danger
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 text-gray-100 bg-gray-800 hover:bg-gray-900 focus:outline-none">
              Dark
            </button>
          </div>
        </div>

        <div class="mb-3">
          <button class="rounded-full h-10 w-10 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            <i class="fas fa-cog fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none">
            <i class="fas fa-info fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 text-gray-100 bg-green-500 hover:bg-green-600 focus:outline-none">
            <i class="fas fa-check fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 text-gray-100 bg-yellow-500 :bg-yellow-600 focus:outline-none">
            <i class="fas fa-exclamation-triangle fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 text-gray-100 bg-red-500 hover:bg-red-600 focus:outline-none">
            <i class="fas fa-times fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 text-gray-100 bg-gray-800 hover:bg-gray-900 focus:outline-none">
            <i class="fas fa-bell fa-fw"></i>
          </button>
        </div>
      </div>

      <!-- Outline Buttons -->
      <div class="mb-10">
        <h2 class="text-sm font-light text-gray-700">Outline Buttons</h2>
        <hr class="my-2" />
        <div class="mb-3 flex flex-wrap">
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
              Default
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:outline-none">
              Info
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-100 focus:outline-none">
              Success
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100 focus:outline-none">
              Warning
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100 focus:outline-none">
              Danger
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:outline-none">
              Dark
            </button>
          </div>
        </div>
        <div class="mb-3 flex flex-wrap">
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
              Default
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:outline-none">
              Info
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-100 focus:outline-none">
              Success
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100 focus:outline-none">
              Warning
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100 focus:outline-none">
              Danger
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-full py-2 px-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:outline-none">
              Dark
            </button>
          </div>
        </div>
        <div class="mb-3">
          <button class="rounded-full h-10 w-10 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-cog fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-info fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-check fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-exclamation-triangle fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-times fa-fw"></i>
          </button>
          <button class="rounded-full h-10 w-10 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100 focus:outline-none">
            <i class="fas fa-bell fa-fw"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="px-4">
      <!-- Button Group -->
      <div class="mb-10">
        <h2 class="text-sm font-light text-gray-700">Buttons With Icon</h2>
        <hr class="my-2" />
        <div class="mb-3 flex flex-wrap">
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
              <i class="fas fa-reply fa-fw"></i> Reply
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-green-500 hover:bg-green-600 focus:outline-none">
              <i class="fas fa-download fa-fw"></i> Download
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-gray-900 hover:bg-gray-800 focus:outline-none">
              Next Page <i class="fas fa-chevron-right fa-fw"></i>
            </button>
          </div>
          <div class="mb-2 mr-2">
            <button class="rounded-md py-2 px-4 text-gray-100 bg-blue-800 focus:outline-none">
              <i class="fab fa-facebook-square fa-fw"></i> Facebook 3.5k
            </button>
          </div>
        </div>
      </div>

      <div class="mb-10 flex flex-col">
        <h2 class="text-sm font-light text-gray-700">Button Group</h2>
        <hr class="my-2" />
        <div class="mb-3 inline-flex">
          <button class="rounded-l-full py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            Left
          </button>
          <button class="py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            Mid 1
          </button>
          <button class="py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            Mid 2
          </button>
          <button class="py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            Mid 3
          </button>
          <button class="rounded-r-full py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
            Right
          </button>
        </div>
        <div class="mb-3 inline-flex">
          <button class="rounded-l-full py-2 px-4 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            Left
          </button>
          <button class="py-2 px-4 border-2 border-l-0 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            Mid 1
          </button>
          <button class="py-2 px-4 border-2 border-l-0 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            Mid 2
          </button>
          <button class="py-2 px-4 border-2 border-l-0 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            Mid 3
          </button>
          <button class="rounded-r-full py-2 px-4 border-2 border-l-0 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
            Right
          </button>
        </div>
      </div>

      <!-- Light Buttons -->
      <h2 class="text-sm font-light text-gray-700">Light Buttons</h2>
      <hr class="my-2" />
      <div class="bg-gray-500 p-4 mb-10">
        <button class="rounded-md py-2 px-4 text-gray-900 bg-gray-100 hover:bg-gray-300 focus:outline-none">
          Light
        </button>
        <button class="rounded-md py-2 px-4 border-2 border-gray-100 text-gray-100 hover:bg-gray-200 hover:text-gray-900 focus:outline-none">
          Light
        </button>
        <button class="rounded-full py-2 px-4 text-gray-900 bg-gray-100 hover:bg-gray-300 focus:outline-none">
          Light
        </button>
        <button class="rounded-full py-2 px-4 border-2 border-gray-100 text-gray-100 hover:bg-gray-200 hover:text-gray-900 focus:outline-none">
          Light
        </button>
        <button class="rounded-full h-10 w-10 text-gray-900 bg-white hover:bg-gray-300 focus:outline-none">
          <i class="fas fa-check fa-fw"></i>
        </button>
        <button class="rounded-full h-10 w-10 border-2 border-gray-100 text-gray-100 hover:bg-gray-200 hover:text-gray-900 focus:outline-none">
          <i class="fas fa-exclamation-triangle fa-fw"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- floating button -->
  <div class="fixed right-0 bottom-0 m-4">
    <button class="rounded-full h-12 w-12 bg-green-600 focus:outline-none">
      <i class="fab fa-whatsapp text-white fa-lg"></i>
    </button>
  </div>
</div>
</template>