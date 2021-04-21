import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    category: string;
    name: string;
    description: string;
    price: number;
    promotionPrice: number;
}

const productSchema: Schema = new Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    promotionPrice: {
        type: Number,
        required: false,
    },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
