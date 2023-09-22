<template>
    <Teleport to="body">

        <Transition name="fade" enter-active-class="transition-opacity duration-250 ease-out"
            leave-active-class="transition-opacity duration-250 ease-out" enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <div class="fixed left-0 top-0 z-[500] w-screen h-screen bg-black bg-opacity-20 grid item place-items-center"
                @click.self="store.closeModal" v-if="store.modalState?.component" aria-modal="true" role="dialog"
                tabindex="-1">
                <!--Modal Wrapper-->
                <component :is="store.modalState?.component" v-bind="store.modalState?.props" />
            </div>
        </Transition>

    </Teleport>
</template>
<script lang="ts" setup>
import useModalStore from '~/store/useModalstore'
const store = useModalStore()

</script>