import {IProduct} from "../models/product";
import {Request, Response} from "express";
import ProductService from "../services/product.service";
import {NotFound} from "../exceptions/not-found";
import {Error} from "mongoose";

export const index = async (req: Request, res: Response) => {
    console.log(req);
    const limit = req.query?.limit ? Number(req.query?.limit) : null;
    const products: IProduct[] = await ProductService.findAll(limit);
    return res.send(products);
};

export const detail  = async (req: Request, res: Response) => {

    try {
        const product: IProduct = await ProductService.findBySlug(req.params.slug);
        return res.send(product);
    } catch (error) {

        if (error instanceof NotFound) {
            return res.status(404).send();
        }

        return res.status(500).send();
    }
};

export const create = async(req: Request, res: Response) => {

    try {
        res.send(await ProductService.create(req.body));
    } catch (error) {

        if (error instanceof Error.ValidationError) {
            return res.status(400).send(error.errors);
        }

        console.log(error);
        return res.status(500).send();
    }
};
