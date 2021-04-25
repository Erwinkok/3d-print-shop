<template>
    <div>
        <div class="flex justify-center px-4 py-12 bg-gray-50 rounded-b-3xl shadow-md">
            <img class="image" :src="this.product.images[0]"/>
        </div>

        <div class="mt-4 h-full p-6">
            <h1 class="text-3xl capitalize">{{product.name}}</h1>

            <p>{{priceLocalString(product.price)}}</p>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import priceLocalString from "~/helpers/price-local-string";

export default Vue.extend({

    async asyncData({store, params}) {
        await store.dispatch("fetchProductBySlug", { slug: params.slug });
    },

    head() {
        return {
            title: this.product.name,

            link: [{
                rel: "preload",
                as: "image",
                href: this.product.images[0]
            }]
        };
    },

    computed: {
        ...mapState({
            product: "currentProduct",
        }),
    },

    methods: {
        priceLocalString
    },

});
</script>

<style scoped>

.image {
    @apply transition-all w-4/5 ease-in-out;
}

</style>
