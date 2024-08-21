<template>
    <div>
        <label for="voice">{{ label }}</label>
        <select
            id="voice"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border mt-1 mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option v-for="option in options" :key="option">
                {{ option.optionName }}
            </option>
        </select>
    </div>
</template>

<script setup>
const { label, options, modelValue } = defineProps([
    "label",
    "options",
    "modelValue",
]);
defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
