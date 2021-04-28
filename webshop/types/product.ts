export interface IProduct {
    _id: string;
    category: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    price: number;
    promotionPrice: number;
}
