<template>
    <div class="px-4 mt-6">
        <h2 v-if="title" class="text-2xl text-gray-700 font-black tracking-tight">{{ title }}</h2>
        <div class="grid grid-cols-2 auto-rows-auto gap-5 py-3">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "GridViewWidget",
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
