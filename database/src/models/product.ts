import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    category: string;
    name: string;
    description: string;
    slug: string;
    images: string[];
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
        unique: true,
    },
    images: {
        type: Array,
        required: false,
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
}, { timestamps: true });

export const Product = mongoose.model<IProduct>("Product", productSchema);
