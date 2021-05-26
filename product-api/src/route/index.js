import express from "express";
import * as productController from "../controller/product.controller.js";
import BadRequest from "../exception/badrequest.js";
import NotFound from "../exception/notfound.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await productController.findAll();

        return res.send(products);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

router.get("/:name", async (req, res) => {
    try {
        const product = await productController.findProductByName(req.params.name);

        return res.send(product);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

router.post("/new", async (req, res) => {
    try {
        const page = await productController.createProduct(req.body);

        return res.send(page);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

export default router;