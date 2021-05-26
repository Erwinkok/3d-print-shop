import * as productController from "../controller/product.controller.js";
import Product from "../model/product.model.js";

const products = [
    {
        name: "Product 1",
        slug: "product-1",
        url: "/product/product-1",
    },
    {
        name: "Product 2",
        slug: "product-2",
        url: "/product/product-2",
    },
    {
        name: "Product 3",
        slug: "product-3",
        url: "/product/product-3",
    },
    {
        name: "Product 4",
        slug: "product-4",
        url: "/product/product-4",
    },
    {
        name: "Product 5",
        slug: "product-5",
        url: "/product/product-5",
    },
    {
        name: "Product 6",
        slug: "product-6",
        url: "/product/product-6",
    },
    {
        name: "Product 7",
        slug: "product-7",
        url: "/product/product-7",
    },
    {
        name: "Product 8",
        slug: "product-8",
        url: "/product/product-8",
    },
    {
        name: "Product 9",
        slug: "product-9",
        url: "/product/product-9",
    },
    {
        name: "Product 10",
        slug: "product-10",
        url: "/product/product-10",
    }
];

const seed = async () => {
    await Product.deleteMany({});

    products.forEach(productController.createProduct);
};

export default seed;