<template>
    <div class="flex items-center p-4 rounded-lg shadow " :class="bgClass"
        role="alert">
        <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  bg-transparent rounded-lg" :class="iconClass"  >
            <font-awesome-icon :icon="['far', 'circle-xmark']" size="xl"/>
            <span class="sr-only">Fire icon</span>
        </div>
        <div v-if="content ==''" class="ml-3 text-sm font-normal" :class="textClass">{{title}}</div>
        <div v-else class="ml-3 text-sm font-normal">
                <span class="mb-1 text-sm font-semibold" :class="textClass">{{ title }}</span>
                <div class="mb-2 text-sm font-normal" :class="textContentClass">{{content}}</div>
            </div>
        <!-- <button
         @click="emit('remove')"
         type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button> -->
        <div
      class="ml-auto inline-flex flex-shrink-0 -mx-1.5 -my-1.5 p-1.5"
    >
        <button @click="emit('remove')"
        type="button"
        class=" items-center justify-center h-8 w-8 rounded-lg focus:ring-2 focus:ring-gray-300 " :class="closeBtnClass"
        >
        <font-awesome-icon :icon="['fas', 'xmark']" size="xl"/>
        </button>
        </div>
    </div>
</template>
<script lang="ts" setup>

const emit = defineEmits(['remove']);
const { title, duration, type, icon } = defineProps({
    title: {
        type: String,
        default: 'Default Message',
        require: true
    },
    content: {
        type: String,
        default: ''
    },
    duration: {
        type: Number,
        default: 2000
    },
    type: {
        type: String,
        validator(value:string) {
            return ["info", "success", "danger", "warning"].includes(value);
        },
        default: 'info',
    },
    icon: {
        type: String,
        defaul: 'info',
    }

})
onMounted(() => {
    setTimeout(() => emit('remove'), duration);
});
const bgClass = computed(() => {
  switch (type) {
    case 'info':
      return 'bg-indigo-300';
    case 'success':
      return 'bg-green-300';
    case 'danger':
      return 'bg-red-300';
    case 'warning':
      return 'bg-amber-200';
    default:
      return 'bg-indigo-300';
  }
});
const iconClass = computed(() => {
  switch (type) {
    case 'info':
      return 'text-indigo-700';
    case 'success':
      return 'text-green-700';
    case 'danger':
      return 'text-red-700';
    case 'warning':
      return 'text-orange-400';
    default:
      return 'text-indigo-700';
  }
});
const textClass = computed(() => {
  switch (type) {
    case 'info':
      return 'text-indigo-900';
    case 'success':
      return 'text-green-900';
    case 'danger':
      return 'text-red-900';
    case 'warning':
      return 'text-orange-900';
    default:
      return 'text-indigo-900';
  }
});
const textContentClass = computed(() => {
  switch (type) {
    case 'info':
      return 'text-indigo-800';
    case 'success':
      return 'text-green-800';
    case 'danger':
      return 'text-red-800';
    case 'warning':
      return 'text-orange-800';
    default:
      return 'text-indigo-800';
  }
});
const closeBtnClass = computed(() => {
    switch (type) {
        case 'info':
            return 'text-indigo-900/70 hover:text-indigo-900 hover:bg-indigo-200 active:bg-indigo-300';
        case 'success':
            return  'text-green-900/70 hover:text-green-900 hover:bg-green-200 active:bg-green-300';
        case 'danger':
            return 'text-red-900/70 hover:text-red-900 hover:bg-red-200 active:bg-red-300';
        case 'warning':
            return 'text-orange-900/70 hover:text-orange-900 hover:bg-orange-200 active:bg-orange-300';
        default:
            return 'text-indigo-900';
    }
})
</script>