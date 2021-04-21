import fs from "fs";
import path from "path";
import { IProduct, Product } from "../models/product";

export const runSeeder = async () => {
    if (process.env.DB_SEED !== "true") {
        return;
    }

    await Product.deleteMany({}).exec();

    const products: IProduct[] = await fetchProductList();

    for (const product of products) {
        await Product.create(product);
    }
};

const fetchProductList = async () => {
    const rawProducts = await fs.promises.readFile(path.resolve("src/seed/products.json"));
    return JSON.parse(rawProducts.toString());
};
