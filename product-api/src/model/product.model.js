import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    slug: String,
    url: String,
}, { timestamp: true });

const Product = mongoose.model("Product", productSchema);

export default Product;