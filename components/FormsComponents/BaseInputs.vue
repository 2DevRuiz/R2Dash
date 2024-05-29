<template>
    <div class="input-wrapper">
        <label :for="id" class="label-wrapper">
            {{ label }}
        </label>
        <div class="input-wrapper__field" :class="{
            'input-wrapper__field--error': error,
        }">
            <slot name="prepend" />
            <i v-if="prependIcon && !$slots.prepend" :class="prependIcon" class="input-wrapper__prepend-icon"></i>
            <!-- <font-awesome-icon v-if="prependIcon && !$slots.prepend" :icon="prependIcon"
                class="input-wrapper__prepend-icon" /> -->
            <input :id="id" v-model="modelValue" :type="type" :name="name" class="input-wrapper__input"
                :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="$emit('blur', $event)"
                @focus="$emit('focus', $event)" @input="$emit('input', $event)" />
            <i v-if="showClearable" icon="fa-solid fa-xmark" class="input-wrapper__clear" @click="clearInput" ></i>
            <!-- <font-awesome-icon v-if="showClearable" icon="fa-xmark" class="input-wrapper__clear" @click="clearInput" /> -->
            <slot name="append" />
            <i v-if="appendIcon && !$slots.append" :class="appendIcon" class="input-wrapper__append-icon"></i>
            <!-- <font-awesome-icon v-if="appendIcon && !$slots.append" :icon="appendIcon"
                class="input-wrapper__append-icon" /> -->
        </div>
        <!-- <span v-if="errorMessages" class="input-wrapper__error-message">
            {{ errorMessage }}</span> -->
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { InputHTMLAttributes } from "vue";
// import { errorMessages } from "vue/compiler-sfc";
type InputTypes = Extract<
    InputHTMLAttributes["type"],
    "text" | "number" | "email" | "password" | "tel" | "url"
>;
interface InputProps {
    label?: string;
    type?: InputTypes;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    errorMessage?: string;
    error?: boolean;
    prependIcon?: string;
    appendIcon?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
    label: "",
    type: "text",
    placeholder: "",
    errorMessage: "",
    prependIcon: "",
    appendIcon: "",
});
defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "input", event: Event): void;
    (e: "blur", event: FocusEvent): void;
    (e: "focus", event: FocusEvent): void;
}>();

const modelValue = defineModel<string | number>();

const id = self.crypto.randomUUID();
const name = self.crypto.randomUUID();

const showClearable = computed(
    () => props.clearable && modelValue.value && !props.disabled,
);
function clearInput() {
    if (!props.clearable) return;
    modelValue.value = undefined;
}
</script>

