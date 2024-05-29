<!-- <template>
    <div class="flex h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col overflow-auto">
            <Header />

            <main class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-blue-100 ">
                <div class="h-screen mb-10 px-6 py-4" :class="[isOpen ? 'ml-20 md:ml-64' : '']">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template> -->


<template>
    <div class="flex h-screen bg-slate-300/50 font-roboto">
        <Sidebar />

        <div class="flex-1 flex flex-col overflow-hidden">
            <Header />

            <main class="flex-1 overflow-x-hidden overflow-y-auto " :class="isOpen ? 'ml-0 md:ml-64' : ''">
                <div class="container mx-auto px-1 py-1">
                    <slot />
                </div>
            </main>
            <!-- <Footer /> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Header from '@/components/Common/Header.vue';
import Sidebar from '@/components/Common/Sidebar.vue';
import { useSidebar } from '@/hooks/useSidebar';
const { isOpen } = useSidebar();
</script>