<template>
    <!-- <div class="tw-m-2 tw-max-w-screen-md"> -->
    <div class="tw-rounded-xl tw-border tw-border-gray-200 tw-bg-white tw-p-3 tw-shadow-xl">
        <div
            class="tw-mt-8 tw-px-4 tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
            <!-- <div class="tw-flex tw-flex-col">
                    <label for="name" class="tw-text-stone-600 tw-text-sm tw-font-medium">Name</label>
                    <input type="text" id="name" placeholder="raspberry juice"
                        class="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-200 tw-px-2 tw-py-2 tw-shadow-sm tw-outline-none focus:tw-border-blue-500 focus:tw-ring focus:tw-ring-blue-200 focus:tw-ring-opacity-50" />
                </div>

                <div class="tw-flex tw-flex-col">
                    <label for="manufacturer" class="tw-text-stone-600 tw-text-sm tw-font-medium">Manufacturer</label>
                    <input type="manufacturer" id="manufacturer" placeholder="cadbery"
                        class="tw-mt-2 tw-block tw-tw-w-full tw-rounded-md tw-border tw-border-gray-200 tw-px-2 tw-py-2 tw-shadow-sm tw-outline-none focus:tw-border-blue-500 focus:tw-ring focus:tw-ring-blue-200 focus:tw-ring-opacity-50" />
                </div>

                <div class="tw-flex tw-flex-col">
                    <label for="date" class="tw-text-stone-600 tw-text-sm tw-font-medium">Date of Entry</label>
                    <input type="date" id="date"
                        class="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-200 tw-px-2 tw-py-2 tw-shadow-sm tw-outline-none focus:tw-border-blue-500 focus:tw-ring focus:tw-ring-blue-200 focus:tw-ring-opacity-50" />
                </div> -->

            <div class="tw-flex tw-flex-col">
                <label for="status" class="tw-text-stone-600 tw-text-sm tw-font-medium tw-capitalize">{{
                    $t('user_manager.user') }}</label>

                <select id="status"
                    class="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-200 tw-px-2 tw-py-2 tw-shadow-sm tw-outline-none focus:tw-border-blue-500 focus:tw-ring focus:tw-ring-blue-200 focus:tw-ring-opacity-50">
                    <option>Dispached Out</option>
                    <option>In Warehouse</option>
                    <option>Being Brought In</option>
                </select>
            </div>
            <div class="tw-flex tw-flex-col">
                <label for="status" class="tw-text-stone-600 tw-text-sm tw-font-medium">Status</label>

                <select id="status"
                    class="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-200 tw-px-2 tw-py-2 tw-shadow-sm tw-outline-none focus:tw-border-blue-500 focus:tw-ring focus:tw-ring-blue-200 focus:tw-ring-opacity-50">
                    <option>Dispached Out</option>
                    <option>In Warehouse</option>
                    <option>Being Brought In</option>
                </select>
            </div>
        </div>

        <div class="tw-mt-6 tw-grid tw-w-full tw-grid-cols-2 tw-justify-end tw-space-x-4 md:tw-flex">
            <!-- <button
                    class="active:tw-scale-95 tw-rounded-lg tw-bg-gray-400  tw-px-8 tw-py-2 tw-font-medium tw-text-gray-200 tw-outline-none focus:tw-ring hover:tw-opacity-90">Reset</button> -->
            <!-- <button
                class="active:tw-scale-95 tw-rounded-lg tw-bg-primary-600 tw-px-8 tw-py-2 tw-font-medium tw-text-white tw-outline-none focus:tw-ring hover:tw-opacity-90">
                Search</button> -->
            <button
                class="active:tw-scale-95 tw-rounded-lg tw-bg-primary-500 tw-px-8 tw-py-2 tw-font-medium tw-text-gray-200 tw-outline-none focus:tw-ring hover:tw-opacity-90 tw-inline-flex tw-items-center tw-capitalize">
                <!-- <svg class="tw-w-4 tw-h-4 tw-mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg> -->

                <i class="fa-solid fa-magnifying-glass tw-text-base tw-mr-2"></i>
                <!-- <span>{{ $t('misc.search') }}</span> -->
                <span>Search</span>
            </button>
        </div>
    </div>
    <!-- </div> -->
</template>
<script lang="ts" setup>
</script>