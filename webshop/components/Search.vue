<template>
    <div class="relative px-4">
        <svg
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
        <input
            class="search-input"
            type="text"
            placeholder="Search product" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
    name: "Header",
});
</script>

<style lang="scss" scoped>
.search-icon {
    @apply absolute w-6 text-gray-400 ml-5;
    top: 50%;
    transform: translateY(-50%);
}

.search-input {
    @apply w-full bg-gray-50 rounded-3xl px-4 py-2 align-middle;
    @apply text-gray-600 focus:shadow-md outline-none transition-all;
    padding-left: 3.5rem;

    &::placeholder {
        @apply text-gray-300
    }
}
</style>
