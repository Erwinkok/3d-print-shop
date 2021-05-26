import Product from "../model/product.model.js";
import NotFound from "../exception/notfound.js";

export const findAll = async () => {
    return await Product.find({});
};

export const findProductById = async id => {
    const page = await Product.findById(id, null, { status: PageStatus.Published });

    if (page == null) {
        throw new NotFound();
    }

    return page;
};

export const findProductByName = async name => {
    const product = await Product.findOne({ slug: name });

    if (product == null) {
        throw new NotFound();
    }

    return product;
};

export const createProduct = async product => {
    const newPage = new Product(product);

    return await newPage.save();
};