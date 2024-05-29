<template>
    <div class="w-full">
      <label class="text-gray-600 text-sm capitalize ml-3" v-if="label !== ''">
        {{ label }}
      </label>
      <div class="relative inline-flex w-full">
        <span class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none flex items-center" v-if="!error">
          <i class="fa-light fa-chevron-down text-xs"></i>
        </span>
        <span class="absolute inset-y-0 right-0 flex justify-center items-center pr-3" v-if="error">
          <!-- Icono al final -->
          <i class="fa-regular fa-circle-info text-red-500"></i>
        </span>
        <select
          class="text-sm border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full min-w-full"
          :class="error ? 'border-red-500 hover:border-red-500' : ''">
          <option disabled selected hidden class="text-xs text-gray-700">{{ placeholder }}</option>
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="mt-1.5 px-3" v-if="error">
        <p class="text-xs text-gray-500 capitalize" :class="{ 'text-red-500': error }">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  
  </template>
  
  <script lang="ts" setup>
  import {  ref, watch } from 'vue';
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array as any,
      default: () => []
    },
    label: {
      type: String,
      default: 'label'
    },
    placeholder: {
      type: String,
      default: '-- Select --'
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String
    },
  })
  // export default {
  //     props: {
  //         modelValue: {
  //             type: [String, Number],
  //             default: ''
  //         },
  //         options: {
  //             type: Array,
  //             default: () => []
  //         },
  //         placeholder: {
  //             type: String,
  //             default: '-- Select --'
  //         }
  //     }
  // }
  </script>