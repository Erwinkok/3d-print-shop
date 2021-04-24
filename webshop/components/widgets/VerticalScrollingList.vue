<template>
    <div class="px-4 mt-6">
        <h2 v-if="title" class="text-2xl text-gray-700 font-black tracking-tight">{{ title }}</h2>
        <div class="overflow-y-visible overflow-x-auto flex py-3 flex-nowrap flex-row">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "VerticalScrollingList",
    props: {
        title: {
            type: String,
            required: false,
        },
    }
});
</script>

<style scoped>

</style>
