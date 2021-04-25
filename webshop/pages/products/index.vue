<template>
    <GridViewWidget :title="'All products'">
        <nuxt-link
            v-for="(product, index) in this.products"
            :key="index"
            class="flex w-full flex-col justify-between"
            :to="`${product.category.toLowerCase()}/${product.slug}`">
            <ProductCard :product="product" />
        </nuxt-link>
    </GridViewWidget>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import GridViewWidget from "~/components/widgets/GridViewWidget.vue";
import priceLocalString from "~/helpers/price-local-string";
import {IProduct} from "~/types/product";
import ProductCard from "~/components/ProductCard.vue";

export default Vue.extend({

    components: {
        ProductCard,
        GridViewWidget,
    },

    async asyncData({store}) {
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
