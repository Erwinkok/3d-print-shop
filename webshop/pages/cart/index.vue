<template>
    <div>
        <h1 class="text-3xl font-black tracking-tight text-gray-600 m-4">Cart</h1>
        <div
            v-for="(product, index) in this.cartItems"
            :key="index"
            class="flex flex-row bg-gray-50 rounded-3xl m-4 items-center justify-between shadow-md"
        >
            <CartLine :product="product" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from "vuex";
import {IProduct} from "~/types/product"
import CartLine from "~/components/CartLine.vue";

export default Vue.extend({
    components: {CartLine},
    computed: {
        ...mapState(["cart", "products"]),

        cartItems() {
            return this.products.filter((product: IProduct) => this.cart.items.includes(product._id));
        }
    },

});
</script>

<style scoped>

</style>
