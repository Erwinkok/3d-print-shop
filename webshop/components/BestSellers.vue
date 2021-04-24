<template>
    <VerticalScrollingList :title="'Best Sellers'">
        <nuxt-link
            v-for="(product, index) in this.products"
            :key="index"
            class="bestseller-card"
            :class="{ 'ml-4': index !== 0 }"
            :to="`${product.category.toLowerCase()}/${product.slug}`">
            <div class="bg-gray-50 p-4 flex justify-center items-center h-full rounded relative">
                <img :src="product.images[0]" class="h-4/5 w-auto" height="600" width="600" />
                <div class="absolute -top-2 -right-2 shadow-xl rounded-full border border-green-400 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-gray-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                        <path d="M15 6h6m-3 -3v6" />
                    </svg>
                </div>
            </div>
            <div class="mt-2">
                <span class="block font-bold text-gray-700 text-md tracking-wide capitalize">
                    {{ product.name }}
                </span>
                <span class="block text-sm font-bold text-gray-600">
                    {{ priceLocalString(product.price) }}
                </span>
            </div>
        </nuxt-link>
    </VerticalScrollingList>
</template>

<script lang="ts">
import Vue from "vue";
import VerticalScrollingList from "~/components/widgets/VerticalScrollingList.vue";
import {IProduct} from "~/types/product";
import {PropType} from "@nuxtjs/composition-api";

export default Vue.extend({
    name: "BestSellers",

    components: {
        VerticalScrollingList,
    },

    props: {
        products: {
            type: Array as PropType<IProduct[]>,
            required: true
        }
    },

    methods: {
        priceLocalString(price: number): string {
            return price.toLocaleString("nl-NL", {
                currency: "EUR",
                style: "currency",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        },
    }

});
</script>

<style scoped>
.bestseller-card {
    @apply flex w-auto flex-col justify-between flex-grow-0 flex-shrink-0;
    max-width: 200px;
}
</style>
