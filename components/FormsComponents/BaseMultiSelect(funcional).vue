<template>
    <div class="bg-white py-2 px-2 my-2 border border-stone-300 rounded box-border min-h-8 min-w-56 relative flex flex-wrap focus:outline-none"
        @click="handleClick" @blur="focused = false" tabindex="-1" ref="parentRef">
        <!-- my-multiselect -->
        <!-- {{ localValue }} -->
        <div v-for="(option, index) in formattedOptions" v-show="option.checked" :key="index"
            class="border border-green-300 rounded-full bg-white text-green-600 px-4 py-2 flex items-center justify-center mx-1 my-1">
            {{ option[displayproperty] }}
            <span class="ml-1 text-green-600 hover:text-red-500 hover:bg-red-200 rounded-full py-0.5 px-2"
                @click="preventClose($event); handleOptionClick(index)">&times;</span>
        </div>
        <!-- my-multiselect options -->
        <div class=" absolute top-9 right-0 left-0 flex bg-white flex-col text-black py-2 px-3 cursor-pointer
                items-start shadow-md shadow-neutral-200 min-h-14 max-h-48 overflow-y-auto" v-show="focused"
            :style="{ top: optionsTop }" @click="preventClose">
            <div v-for="(option, index) in formattedOptions" :key="index"
                :class="{ 'bg-blue-200 text-white': option.checked }" @click="handleOptionClick(index)">
                <!-- {{ index }} -->
                {{ option[displayproperty] }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { type PropType } from 'vue';
const focused = ref(false);
const optionsTop = ref("34px");
const parentRef: any = ref(null);
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    options: {
        type: Array as PropType<any>,
        default: () => []
    },
    modelValue: {
        type: Array,
        required: false,
        default: []
    },
    placeholder: {
        type: String,
        default: '-- Select --'
    },
    displayproperty: {
        type: String,
        default: 'label'
    },
    valueProperty: {
        type: String,
        default: 'value'
    }
})
onMounted(() => {
    fixedTop()
})
const localValue = ref([...props.modelValue])
function handleClick() {
    focused.value = !focused.value
}
const formattedOptions = computed(() => {
    let fo = props.options.map((option: any) => {
        let checked = props.modelValue.some(v => v === option[props.valueProperty])
        return { ...option, checked }
    })
    return fo
})
function fixedTop() {
    optionsTop.value = parentRef.value?.clientHeight + 2 + "px"

}
const preventClose = (e: any) => {
    e.stopPropagation();
}
const handleOptionClick = (i: any) => {
    let clickedOption = props.options[i][props.valueProperty]
    let newValue: any = [...props.modelValue]
    let existIndex = props.modelValue.findIndex(v => v === clickedOption)
    if (existIndex === -1) {
        newValue.push(clickedOption)
    }
    else {
        newValue.splice(existIndex, 1)
    }
    emit('update:modelValue', newValue)
    setTimeout(fixedTop, 100)
}
</script>