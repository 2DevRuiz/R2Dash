<!-- <template>
   <div class="mx-auto max-w-screen-xl bg-white">
  <h1 class="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">Order Management</h1>
  <div class="bg-white py-2 px-3">
    <nav class="flex flex-wrap gap-4">
      <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"> Account </a>

      <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"> Settings </a>

      <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-purple-600 py-2 px-3 text-sm font-semibold text-purple-600 transition-all duration-200 ease-in-out"> Orders </a>

      <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"> Sales </a>

      <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"> Suppliers </a>
    </nav>
  </div>
</div>
<div class="w-screen bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-2 py-10">
    <div class="mt-4 w-full">
      <div class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
        <form class="relative flex w-full max-w-2xl items-center">
          <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input type="name" name="search" class="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
        </form>

        <button type="button" class="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <svg class="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
      </div>
    </div>

    <div class="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
      <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
        <thead class="hidden border-b lg:table-header-group">
          <tr class="">
            <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
              Order Date
              <svg xmlns="http://www.w3.org/2000/svg" class="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Order ID</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Description</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Shop</td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Customer</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Dimensions</td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Weight</td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
              Price
              <svg xmlns="http://www.w3.org/2000/svg" class="float-right mt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Status</td>
          </tr>
        </thead>

        <tbody class="bg-white lg:border-gray-300">
          <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              07 February, 2022
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Jane Doeson
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Desktop Computer
                </div>
                <div class="">24 x 10 x 5 cm</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              <img class="h-8 w-8 overflow-hidden rounded-full border p-1" src="data:image/png;base64,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" alt="" />
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              $59.00
              <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
              <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">Action Required</span>
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              07 February, 2022
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Jane Doeson
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Desktop Computer
                </div>
                <div class="">24 x 10 x 5 cm</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              <img class="h-8 w-8 overflow-hidden rounded-full border p-1" src="data:image/png;base64,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" alt="" />
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              $59.00
              <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-center text-xs text-blue-800 lg:hidden">Pending</span>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
              <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-blue-800">Pending</span>
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              07 February, 2022
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Jane Doeson
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Desktop Computer
                </div>
                <div class="">24 x 10 x 5 cm</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              <img class="h-8 w-8 overflow-hidden rounded-full border p-1" src="data:image/png;base64,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" alt="" />
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              $59.00
              <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
              <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">Action Required</span>
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              07 February, 2022
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Jane Doeson
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Desktop Computer
                </div>
                <div class="">24 x 10 x 5 cm</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              <img class="h-8 w-8 overflow-hidden rounded-full border p-1" src="data:image/png;base64,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" alt="" />
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              $59.00
              <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-center text-xs text-blue-800 lg:hidden">Pending</span>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
              <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-blue-800">Pending</span>
            </td>
          </tr>
          <tr class="">
            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              07 February, 2022
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Jane Doeson
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Desktop Computer
                </div>
                <div class="">24 x 10 x 5 cm</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              <img class="h-8 w-8 overflow-hidden rounded-full border p-1" src="data:image/png;base64,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" alt="" />
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
            <td class="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
              $59.00
              <span class="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-green-100 px-2 py-0.5 text-center text-xs text-green-800 lg:hidden">Delivered</span>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
              <span class="ml-2 mr-3 whitespace-nowrap rounded-full bg-green-100 px-2 py-0.5 text-green-800">Delivered</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template> -->
<template>
    <!-- component -->
<section class="container px-4 mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-lg font-medium text-gray-800 dark:text-white">Customers</h2>

                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span>
            </div>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
        </div>

        <div class="flex items-center mt-4 gap-x-3">
            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3098_154395)">
                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3098_154395">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <span>Import</span>
            </button>

            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add vendor</span>
            </button>
        </div>
    </div>

    <div class="mt-6 md:flex md:items-center md:justify-between">
        <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                View all
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Monitored
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Unmonitored
            </button>
        </div>

        <div class="relative flex items-center mt-4 md:mt-0">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
    </div>

    <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button class="flex items-center gap-x-3 focus:outline-none">
                                        <span>Company</span>

                                        <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                        </svg>
                                    </button>
                                </th>

                                <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Status
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    About
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Users</th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">License use</th>

                                <th scope="col" class="relative py-3.5 px-4">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        Customer
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 class="text-gray-700 dark:text-gray-200">Content curating app</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Brings all your news into one place</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div class="bg-blue-500 w-2/3 h-1.5"></div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">Circooles</h2>
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">getcirooles.com</p>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                        Churned
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 class="text-gray-700 dark:text-gray-200">Design software</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Super lightweight design app</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div class="bg-blue-500 w-2/5 h-1.5"></div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">Sisyphus</h2>
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">sisyphus.com</p>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        Customer
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 class="text-gray-700 dark:text-gray-200">Automation and workflow</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Time tracking, invoicing and expenses</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div class="bg-blue-500 w-11/12 h-1.5"></div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">Hourglass</h2>
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">hourglass.app</p>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                        Churned
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 class="text-gray-700 dark:text-gray-200">Productivity app</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Time management and productivity</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div class="bg-blue-500 w-1/3 h-1.5"></div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 class="font-medium text-gray-800 dark:text-white ">Quotient</h2>
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">quotient.co</p>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        Customer
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 class="text-gray-700 dark:text-gray-200">Sales CRM</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Web-based sales doc management</p>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="">
                                        <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="">
                                        <p class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                        <div class="bg-blue-500 w-1/6 h-1.5"></div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div class="text-sm text-gray-500 dark:text-gray-400">
            Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
        </div>

        <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </a>

            <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
</section>
</template>
<script lang="ts" setup>
</script>