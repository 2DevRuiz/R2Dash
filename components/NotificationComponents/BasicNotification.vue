<template>
    <TransitionGroup 
    name="fade"
    tag="div"
    enter-from-class="translate-x-full opacity-0"
    enter-active-class="duration-500"
    leave-active-class="duration-500"
    leave-to-class="translate-x-full opacity-0"
    class="fixed z-50 top-4 right-4 space-y-4  w-full max-w-xs">
        <ToastItemComponent v-for="(item, index) in items " :key="item.key" :title="item.title" :duration="item.duration" :type="item.type" :content="item.content" @remove="remove(index)" />
    </TransitionGroup>
</template>

<script lang="ts" setup>
// import toast from '@/store/toast'
import { storeToRefs } from 'pinia';
import {useToastStore} from '~/store/useToast';
const { remove:removeToast } = useToastStore();
const { items } = storeToRefs(useToastStore());
// const items = ref([
//     { message: 'Toast Notification 1' },
//     { message: 'Toast Notification 2' },
//     { message: 'Toast Notification 3' },
//     { message: 'Toast Notification 4' },
// ])
function remove(index: number) {
    removeToast(index)
}
</script>