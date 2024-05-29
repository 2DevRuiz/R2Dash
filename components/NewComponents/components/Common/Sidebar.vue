<template>
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="
        fixed
        inset-0
        
        transition-opacity
        bg-black
        opacity-50
        lg:hidden
      "
    ></div>
    <!-- End Backdrop -->
    <div
    class="w-64 bg-gray-800 h-full fixed inset-y-0 left-0 top-0 overflow-y-auto transition duration-300 transform  mt-14 lg:translate-x-0 md:inset-0 "
    :class="isOpen ? 'translate-x-0 ease-out block' : '-translate-x-full ease-in hidden'">
        <!-- Contenido del Sidebar aquí -->
        <nav class="py-4">
            <ul>
                <li><a href="#" class="block text-white px-4 py-2">Opción 1</a></li>
                <li><a href="#" class="block text-white px-4 py-2">Opción 2</a></li>
                <li><a href="#" class="block text-white px-4 py-2">Opción 3</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "@/hooks/useSidebar";

const { isOpen } = useSidebar();
console.log(isOpen.value)
const activeClass = ref(
    "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
    "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);
</script>