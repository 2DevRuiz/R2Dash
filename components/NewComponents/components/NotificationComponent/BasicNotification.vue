<template>
    <TransitionGroup 
    name="fade"
    tag="div"
    enter-from-class="-translate-y-full opacity-0"
    enter-active-class="duration-500"
    leave-active-class="duration-500"
    leave-to-class="translate-y-full opacity-0"
    class="fixed z-50 top-4 right-4 space-y-4  w-full ">
        <ToastItemComponent v-for="(item, index) in items " :key="item.key" :title="item.title" :duration="item.duration" :type="item.type" :content="item.content" @remove="remove(index)" />
    </TransitionGroup>
    <!-- <TransitionGroup name="fade" tag="div" enter-from-class="-translate-y-full opacity-0"
        enter-active-class="duration-500" leave-active-class="duration-500" leave-to-class="translate-y-full opacity-0"
        class="fixed z-50 top-4 right-4 space-y-4  w-full max-w-xs">

        <ToastItemComponent v-for="(item, index) in items " :key="item.key" :title="item.title"
            :duration="item.duration" :type="item.type" :content="item.content" @remove="remove(index)" />

    </TransitionGroup> -->


</template>
<script lang="ts" setup>
import ToastItemComponent from './ToastItemComponent.vue';
import { storeToRefs } from 'pinia';
import { useToastStore } from '@/stores/useToatStore';
const { remove: removeToast } = useToastStore();
const { items } = storeToRefs(useToastStore());

console.log(items)

function remove(index: number) {
    removeToast(index)
}
</script>