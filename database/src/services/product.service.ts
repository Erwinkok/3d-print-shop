import { NotFound } from "../exceptions/not-found";
import { IProduct, Product } from "../models/product";

const findAll: (limit: number|null) => Promise<IProduct[]> = async (limit) => {
    console.log(limit);
    if (limit == null) {
        return Product.find({});
    }

    return Product.find({}).limit(limit);
};

const findById: (productId: number) => Promise<IProduct> = async (productId) => {
    const product = await Product.findById(productId);

    if (product == null) {
        throw new NotFound();
    }

    return product;
};

const findBySlug: (slug: string) => Promise<IProduct> = async (slug) => {
    const product = await Product.findOne({ slug });

    if (product == null) {
        throw new NotFound();
    }

    return product;
};

const create: (product: IProduct) => Promise<IProduct> = async (product) => {
    await Product.validate(product);
    return await Product.create(product);

}

export default {
    findAll,
    findById,
    findBySlug,
    create
}