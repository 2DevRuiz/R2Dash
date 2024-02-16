<template>
    <div class="container mx-auto p-2">
        <div class="grid grid-flow-row  gap-3">
            <div v-for="i in 10" class="w-full h-64 bg-gray-400 flex justify-center items-center">
            {{ i }}
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 ">
                <div>1</div>
                <div class="flex justify-end">2</div>
            </div>
    </div>
</template>