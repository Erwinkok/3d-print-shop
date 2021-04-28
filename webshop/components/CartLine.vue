<template>
    <div class="flex flex-row">
        <div class="flex flex-row p-2 items-center">
            <img :src="product.images[0]" class="w-2/5 p-2" />
            <div class="mx-3">
                <p class="capitalize">{{product.name}}</p>
                <p >{{priceLocalString(totalPrice)}}</p>
            </div>
        </div>
        <div class="flex flex-row items-center p-2">
            <span @click="incrementItemCount" class="flex justify-center items-center border rounded-full w-7 h-7 shadow-sm bg-green-400 cursor-pointer text-md font-bold">+</span>
            <span class="mx-2">{{this.itemCount}}</span>
            <span @click="incrementItemCount" class="flex justify-center items-center border rounded-full w-7 h-7 shadow-sm cursor-pointer text-lg font-bold">-</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";;
import priceLocalString from "~/helpers/price-local-string";
import {PropType} from "@nuxtjs/composition-api";
import {IProduct} from "~/types/product";

export default Vue.extend({

    data: () => ({
        itemCount: 1
    }),

    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true,
        },
    },

    computed: {
        totalPrice() {
            return this.product.price * this.itemCount;
        },
    },

    methods: {
        priceLocalString,

        incrementItemCount() {
            this.itemCount++;
        },

        decrementItemCount() {
            this.itemCount--;
        }
    },
});
</script>

<style scoped>

</style>
