<template>
    <div class="container mt-6">
        <Search />
        <VerticalScrollingList :title="'Categories'">
            <nuxt-link
                v-for="(category, index) in this.categories"
                :key="index"
                class="px-4 py-2 border shadow-sm bg-white rounded-xl inline-flex text-sm"
                :class="{ 'ml-3': index !== 0 }"
                :to="category">
                {{category}}
            </nuxt-link>
        </VerticalScrollingList>
        <BestSellers :products="this.products" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Search from "@/components/Search.vue";
import VerticalScrollingList from "~/components/widgets/VerticalScrollingList.vue";
import {IProduct} from "~/types/product";
import BestSellers from "~/components/BestSellers.vue";

export default Vue.extend({

    components: {
        BestSellers,
        VerticalScrollingList,
        Search,
    },

    async asyncData({store}) {
        await store.dispatch("fetchProducts", {limit: 6});
    },

    head() {
        const preloadImages = this.products.slice(0, 2).map((product: IProduct) => {
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

        categories(): any[] {
            const categories = this.products.map((product: IProduct)=> product.category);
            return [...new Set(categories)];
        },
    }
});
</script>


<style lang="scss" scoped>

</style>
