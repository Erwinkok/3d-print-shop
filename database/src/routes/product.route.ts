import express from "express";
import * as productController from "../controllers/product.controller";

const router = express.Router();

router.get("/", productController.index);
// router.get("/:id", productController.detail);
router.get("/:slug", productController.detail);
router.post("/",  productController.create);

export default router;