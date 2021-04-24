import {GetterTree, ActionTree, MutationTree} from "vuex";
import {IProduct} from "~/types/product";

const initialState = {
    currentProduct: <IProduct>{},
    products: <IProduct[]>[]
};

export const state = () => (initialState);

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {

    SET_PRODUCTS: (state, products: IProduct[]) => {
        state.products = products;
    },

    SET_CURRENT_PRODUCT: (state, product: IProduct) => {
        state.currentProduct = product;
    },
};

// @ts-ignore
export const actions: ActionTree<RootState, RootState> = {

    async fetchProducts ({commit}, {limit}: {limit: number|null}) {
        const limitQuery: string = limit ? `?limit=${limit}` : "";
        const products: IProduct[] = await this.$axios.$get<IProduct[]>("/product" + limitQuery);
        commit("SET_PRODUCTS", products);
    },

    async fetchProductBySlug({commit}, {slug}: {slug: string}) {
        const product: IProduct = await this.$axios.$get<IProduct>("/product/" + slug);
        commit("SET_CURRENT_PRODUCT", product);
    },
};
