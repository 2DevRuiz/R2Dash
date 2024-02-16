a<!-- 
    CommonButton with tailwind 
     @props

     *btnText  = "parameter for the text that the button will have, it is not required because it can be an icon only."


     *btnColor = "parameter for button color, this can take the recurring bootstrap values such as
                "primary, secondary, success, danger, warning, info", but you can also customize the button by sending the hover with a color for example ' <CommonButton :btnColor="'hover:tw-bg-[#ff00ff]'"></CommonButton>'
                it must customize the border and the border hover"

     *btnIcon  = "parameter for button icon "

     *btnLoading = "" -> pending


     *btnDisabled = "" ->pending

     *btnBorder = "parameter for the border of the button, this is the same as the background color of the button
                 but if the background color is different from the 6 established in boostrap, and a parameter is not passed for it, it will take a default value such as border-gray -950"

     *btnHoverBorder = "parameter for the button's hover effect, it expects any of the already defined values but can expect custom values,
                         if it is not passed as a parameter and the background color is custom, it will take the default value of "hover:border-gray- 950"" 

 -->




<template>
    <!-- <div class="tw-m-1"> -->
    <!-- <button
            class="tw-bg-white tw-text-gray-800 tw-text-sm tw-font-semibold tw-rounded tw-border-b-2 tw-border-green-500 hover:tw-border-green-600 hover:tw-bg-green-500 hover:tw-text-white tw-shadow-md tw-py-2 tw-px-3 tw-inline-flex tw-items-center tw-group btn"> -->
    <button
        class="tw-bg-white tw-text-gray-800 tw-text-sm  tw-font-semibold tw-rounded tw-border-b-2  hover:tw-text-white tw-shadow-md tw-py-2 tw-px-3 tw-inline-flex tw-items-center tw-group btn"
        :class="[FnBorderColor, FnHoverBorderColor, FnColor]">
        <i class="fa-thin fa-envelopes-bulk group-hover-[.btn]:tw-text-white fa-lg tw-py-2"></i>
        <span class="tw-ml-2 group-hover-[.btn]:tw-text-white" v-show="btnText.trim() !== ''">{{ btnText }}</span>
    </button>
    <!-- </div> -->
</template>
<script setup>
import { computed } from 'vue';

const { btnText, btnColor, btnIcon, btnLoading, btnDisabled, btnBorder, btnHoverBorder } = defineProps({
    btnText: {
        type: String,
        default: ''
    },
    btnColor: {
        type: String,
        default: 'info',
        required: true,

    },
    btnIcon: {
        type: Boolean,
        required: false,
        default: false
    },
    btnLoading: {
        type: Boolean,
        default: false
    },
    btnDisabled: {
        type: Boolean,
        default: false
    },
    btnBorder: {
        type: String,
        default: '',
        require: false
    },
    btnHoverBorder: {
        type: String,
        default: '',
        require: false
    }
});

const FnColor = computed(() => {

    switch (btnColor) {
        case 'primary':
            return 'hover:tw-bg-primary-500';
        case 'secondary':
            return 'hover:tw-bg-[#6c757d]';
        case 'info':
            return 'hover:tw-bg-[#0dcaf0]';
        case 'success':
            return 'hover:tw-bg-[#25c279]';
        case 'danger':
            return 'hover:tw-bg-[#ec474f]';
        case 'warning':
            return 'hover:tw-bg-[#e29400]';
        default:
            return btnColor;
    }
});
const FnBorderColor = computed(() => {
    const background = (["primary", "secondary", "info", "success", "danger", "warning"].includes(btnColor)) ? btnColor : btnBorder;

    switch (background) {
        case 'primary':
            return 'tw-border-primary-500';
        case 'secondary':
            return 'tw-border-[#6c757d]';
        case 'info':
            return 'tw-border-[#0dcaf0]';
        case 'success':
            return 'tw-border-[#25c279]';
        case 'danger':
            return 'tw-border-[#ec474f]';
        case 'warning':
            return 'tw-border-[#2A91FF]';
        default:
            if (btnBorder === '') {
                return 'tw-border-gray-950'
            }
            return btnBorder;
    }
});
const FnHoverBorderColor = computed(() => {
    const background = (["primary", "secondary", "info", "success", "danger", "warning"].includes(btnColor)) ? btnColor : btnHoverBorder;
    switch (background) {
        case 'primary':
            return 'hover:tw-border-primary-600';
        case 'secondary':
            return 'tw-border-[#565c64]';
        case 'info':
            return 'tw-border-[#048db6]';
        case 'success':
            return 'tw-border-[#0f6d45]';
        case 'danger':
            return 'tw-border-[#b61f26]';
        case 'warning':
            return 'tw-border-[#96500a]';
        default:
            if (btnHoverBorder === '') {
                return 'tw-border-gray-950'
            }
            return btnColor;
    }
});
</script>