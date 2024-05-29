<template>
    <label :for="id"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        :class="{ 'border-red-500 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500': props.error }">
        <!-- Icono al inicio -->
        <span
            class="bg-gray-200 absolute inset-y-0 left-0 flex justify-center items-center px-1 border-r-2 border-gray-300"
            v-if="icon !== ''">
            <!-- Agrega aquí el icono al inicio -->
            <i :class="icon" class="text-gray-400"></i>
        </span>
        <input v-model="mValue" @input="onInput" :id="id" :type="type" :placeholder="placeholder"
            :class="[(props.icon !== '') ? 'pl-5' : '']"
            class="peer h-8 w-full pr-5 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

        <!-- Icono al final -->
        <span class="absolute inset-y-0 right-0 flex justify-center items-center pr-3" v-if="error">
            <!-- Icono al final -->
            <i class="fa-regular fa-circle-info text-red-500"></i>
        </span>
        <span :class="[(icon !== '') ? 'start-8' : 'start-3']"
            class="absolute capitalize top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            {{ label }}
        </span>
    </label>
    <!-- Div para el texto de ayuda -->
    <div class="mt-1.5 px-3" v-if="error">
        <p class="text-xs text-gray-500 capitalize" :class="{ 'text-red-500': error }">
            {{ errorMessage }}
        </p>
    </div>
</template>


<script setup lang="ts">

import { defineProps, defineEmits, ref, watch } from 'vue';
import type { PropType } from 'vue';
import type { InputHTMLAttributes } from "vue";
type InputTypes = Extract<
    InputHTMLAttributes['type'],
    'text' | 'number' | 'email' | 'password' | 'tel' | 'url'
>;

const props = defineProps({
    id: {
        type: String
    },
    type: {
        type: String as PropType<InputTypes>,
        default: 'text'
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,   
        default: ''
    },
    modelValue: {
        type: String
    },
    error: {
        type: Boolean,
        default: false
    },
    errorMessage: {
        type: String
    },
    icon: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue']);

const mValue = ref(props.modelValue || '');

watch(
    () => props.modelValue,
    (newVal) => {
        mValue.value = newVal || '';
    }
);
const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
        emit('update:modelValue', target.value);
    }
};
</script>