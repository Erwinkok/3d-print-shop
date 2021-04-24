<template>
    <GridViewWidget :title="'All products'">
        <nuxt-link
            v-for="(product, index) in this.products"
            :key="index"
            class="flex w-full flex-col justify-between"
            :to="`${product.category.toLowerCase()}/${product.slug}`">
            <div class="bg-gray-50 p-4 flex justify-center items-center h-full rounded relative">
                <img :src="product.images[0]" loading="lazy" class="h-4/5 w-auto" height="600" width="600" />
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
    </GridViewWidget>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import GridViewWidget from "~/components/widgets/GridViewWidget.vue";
import priceLocalString from "~/helpers/price-local-string";
import {IProduct} from "~/types/product";

export default Vue.extend({

    components: {
        GridViewWidget,
    },

    async fetch({store}) {
        await store.dispatch("fetchProducts", {});
    },

    head() {
        const preloadImages = this.products.slice(0, 6).map((product: IProduct) => {
            return {
                rel: "preload",
                as: "image",
                href: product.images[0]
            };
        });

        return {
            title: "All products",
            link: preloadImages
        }
    },

    computed: {
        ...mapState(["products"]),
    },

    methods: {
        priceLocalString
    }

});
</script>

<style scoped>

</style>
