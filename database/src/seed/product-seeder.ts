import fs from "fs";
import path from "path";
import {IProduct, Product} from "../models/product";
import ProductService from "../services/product.service";

const runSeeder = async () => {
    if (process.env.DB_SEED !== "true") {
        return;
    }

    console.log("Seeding products...")

    await Product.deleteMany({}).exec();

    const products: IProduct[] = await fetchProductList();

    for (const product of products) {
        await ProductService.create(product);
    }

    console.log("Seed completed!");
};

const fetchProductList = async () => {
    const rawProducts = await fs.promises.readFile(path.resolve("src/seed/products.json"));
    return JSON.parse(rawProducts.toString());
};

export default {
    runSeeder,
};
