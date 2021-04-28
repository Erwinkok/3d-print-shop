<template>
    <VerticalScrollingList :title="'Best Sellers'">
        <nuxt-link
            v-for="(product, index) in this.products"
            :key="index"
            class="bestseller-card"
            :class="{ 'ml-4': index !== 0 }"
            :to="`${product.category.toLowerCase()}/${product.slug}`">
            <ProductCard :product="product" />
        </nuxt-link>
    </VerticalScrollingList>
</template>

<script lang="ts">
import Vue from "vue";
import VerticalScrollingList from "~/components/widgets/VerticalScrollingList.vue";
import {IProduct} from "~/types/product";
import {PropType} from "@nuxtjs/composition-api";
import ProductCard from "~/components/ProductCard.vue";

export default Vue.extend({
    name: "BestSellers",

    components: {
        ProductCard,
        VerticalScrollingList,
    },

    props: {
        products: {
            type: Array as PropType<IProduct[]>,
            required: true
        }
    },

});
</script>

<style scoped>
.bestseller-card {
    @apply flex w-auto h-auto flex-col justify-between flex-grow-0 flex-shrink-0;
    max-width: 200px;
}
</style>
