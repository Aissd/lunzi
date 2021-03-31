<template>
    <div class="app-container">
        <test-input
            class="border"
            style="font-size: 16px;"
            :disabled="testInput.isDisabled"
            :maxlength="testInput.maxLength"
            :type="testInput.type"
            :value="testInput.val"
            :autocomplete="testInput.isAutocomplete"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput">
        </test-input>
    </div>
</template>

<script>
import TestInput from './components/TestInput';
export default {
    components: {
        TestInput
    },
    data() {
        return {
            testInput: {
                val: '火火火火火火火火',
                type: 'text',
                isDisabled: false,
                maxLength: 20,
                isAutocomplete: false
            }
        };
    },
    methods: {
        onFocus() {
            console.log('onFocus');
        },
        onBlur() {
            console.log('onBlur');
        },
        onInput(val) {
            console.log('onInput', val);
        }
    },
};
</script>

<style lang="scss" scoped>
    .border {
        border: 1px solid #aaa;
    }
</style>