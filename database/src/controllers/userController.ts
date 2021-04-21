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

    return product;
};

export const getProductBySlug: (slug: string) => Promise<IProduct> = async (slug) => {
    const product = await Product.findOne({ slug });

    if (product == null) {
        throw new NotFound();
    }

    return product;
};
