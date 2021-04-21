import { NotFound } from "../exceptions/not-found";
import { IProduct, Product } from "../models/product";

export const getProducts: () => Promise<IProduct[]> = async () => {
    return await Product.find({}).limit(20).exec();
};

export const getProductById: (productId: number) => Promise<IProduct> = async (productId) => {
    const product = await Product.findById(productId);

    if (product == null) {
        throw new NotFound();
    }
};
