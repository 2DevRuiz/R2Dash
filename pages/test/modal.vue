<template>
    <div class="bg-green-300 w-full h-screen flex justify-center items-center">

        <div
            class="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8 bg-white">
            <img class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                
                alt="Profile Picture" />
            <div class="w-full text-left">
                <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                    <h3 class="font-medium">Diana Anderson</h3>
                    <time class="text-xs" datetime="2022-11-13T20:00Z">July 18, 2022 at 10:36 AM</time>
                </div>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="mt-5 flex items-center justify-between text-gray-600">
                    <button
                        class="cursor-pointer border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg"
                        @click="openModal()"
                        >
                        Open Details
                    </button>
                    <a title="Likes" href="#" class="group flex cursor-pointer items-center justify-around">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        12
                    </a>
                </div>
        </div>
    </div>
</div>
<MultipleModal :showModal="show" @close="show = false">

</MultipleModal>
</template>

<script lang="ts" setup>
const message = "New Modal";
const show = ref(false);
function openModal() {
    console.log(message  + " " + show.value);
    show.value = true;
}


</script>